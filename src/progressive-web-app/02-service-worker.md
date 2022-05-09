---
title: 02. Service Worker
author: Ludwig Chieng
category: Progressive Web App
tags: [web, mobile, progressive web app, service worker]
licence: (c)

layout: sheet
---

# Service Worker

[[toc]]

Le service worker tourne sur un *thread* différent que celui qui interprète le HTML et exécute le code JS. Il est donc exécuté en tâche de fond. De cette manière, il peut gérer toutes les pages HTML dans son *scope*, continue d'être actif après la fermeture des pages, etc.

Événements traitables par le service worker:
- **Push notifications**
- **Interaction de l'utilisateur avec une notification** (lorsque l'utilisateur clique sur sa notification, par exemple)
- **Synchronisation en arrière plan** (lorsque la connexion est rétablie, par exemple)
- **Changement d'état du service worker**

Il possède des fonctionnalités importantes qui nécessite l'utilisation de **HTTPS** pour garantir la sécurité et l'intégrité de son exécution.

Autres événements :
- `beforeinstallprompt` est lancé au moment où Chrome affiche une bannière proposant l'installation sur l'écran d'accueil du téléphone.


## Cycle de vie (Lifecycle)

```
index.html
 |
 ↓
main.js
 |
 ↓
sw.js
 |
 ↓
installation  →  event: install
 |
 ↓
activation    →  event: activate
 |
 ↓
idle
|  ↑
|  | event
↓  |
terminated (sleeping state / it is waiting for events)
```

Le service worker est seulement installé la première fois. S'il est différent du précédent parce qu'il a été mis à jour, il remplace l'ancien.


## Stratégies de mise en cache

**Network only** → pour de la donnée temps réel

**Cache only** → assets générales de l'application qui ne sont mises à jour que lorsque l'application change de version

**Network first** → données de backup si panne de réseau

**Cache first** → économie d'utilisation du réseau

**Stale-while-revalidate** → affichage des données provenant du cache pendant le temps de chargement. Une fois que le temps de chargement est fini, les données mises à jour sont affichées et remplacent celles du cache


## Fetch

Événement lancé à chaque requête HTTP réalisée par le navigateur.

Exemple avec cache dynamique :

```js
// sw.js
self.addEventListener('fetch', evt => {
  // Redirect to the cache except for requests to 'firestore.googleapis.com'
  if (evt.request.url.indexOf('firestore.googleapis.com') === -1) {
    evt.respondWith(

      caches.match(evt.request).then(cacheRes => {
        return (
          cacheRes // ressource was found in cache and is returned
          ||
          // fetch ressource and cache it dynamically
          fetch(evt.request)
            .then(fetchRes => {
              return caches.open('my-dyn-cache-v1').then(cache => {
                cache.put(evt.request.url, fetchRes.clone());
                return fetchRes;
              });
            })
            .catch(function (err) {
              return caches.open('my-static-cache-v1')
                .then(function (cache) {
                  // return offline.html fallback page only if the client requested an html page
                  if (evt.request.headers.get('accept').includes('text/html')) {
                    return cache.match('/offline.html');
                  }
                });
            });
        );
      })

    );
  }
});
```

Le **cache statique** sert généralement pour les assets générales de l'application (fichiers css, js, images de la charte graphique, etc.).

Le **cache dynamique** sert pour les assets qui sont récurrents pour un utilisateur donné mais qui sont différents pour chaque utilisateur (photos de profil des amis, images des produits achetés, etc.).


## Versionner les caches

**Principe** : Suffixer les caches avec « v1.x.x ». La version change à chaque fois que les assets sont modifiés. À chaque renouvellement de service worker, on efface tous les caches avec des versions différentes

```js
// sw.js
const STATIC_CACHE = 'site-static-v1.5';
const DYN_CACHE = 'site-dynamic-v1.1';
const assets = [ ... ];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== STATIC_CACHE && key !== DYN_CACHE)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  if (/* condition for using the caches */) {
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(DYN_CACHE).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            return fetchRes;
          })
        });
      })
    );
  }
});
```


## Limiter le nombre d'éléments dans le cache

```js
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// Call limitCacheSize() before a cache.put( )
```
