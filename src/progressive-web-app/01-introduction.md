---
title: 01. Introduction aux PWA
author: Ludwig Chieng
category: Progressive Web App
tags: [web, mobile, progressive web app]
licence: (c)

layout: sheet
---

# Introduction aux PWA

[[toc]]


Une PWA repose sur les mêmes fondations qu'une application web classique.

Principes d'une PWA : 
* Proposer une UX qui s'apparente à celle des applications natives téléphone ou desktop (ex. : push notifications, icône sur l'écran d'accueil, accès aux fonctionnalités natives...)
* Être relativement **rapide** au lancement et à l'éxécution
* Donner accès à des **fonctionnalités hors-ligne**
* Avoir un design responsive (utilisation sur desktop et mobile)
* Être servi avec HTTPS (sécurité du service worker)

Pourquoi faire une PWA ?
* Installation possible et confortable pour l'utilisateur
* Une app native a une *code base* différente pour chaque plateforme
* Une app native a peu de chance d'être installée est utilisée par un utilisateur
* Sur mobile, le temps passé sur les app web classiques n'est que de 15%, le reste est sur les app natives
* Une app web classique est limitée pour accéder aux fonctionnalités natives


## Fonctionnalités des PWA

***Background Sync*** : Récupération et/ou envoi de données quand la connexion internet est rétablie.
***Web push notifications*** : Semblable au messages de notification sur mobile
***Application manifest*** : Déclaration des propriétés de l'application. Permet un ajout sur l'écran d'accueil du téléphone.
**Fonctionalités natives**: Médias (caméra, micro, etc.), géolocalisation, etc.


## App manifest

C'est un fichier `manifest.json`. On l'importe dans le HTML comme ceci :

```html
<head>
  <link rel="manifest" href="/manifest.json">
</head>
```

Exemple :

```json
{
  "name": "My PWA App",
  "short_name": "PWApp",
  "icons": [
    {
      "src": "/src/images/icons/app-icon-256x256.png",
      "type": "image/png",
      "sizes": "256x256"
    }
  ],
  "start_url": "/index.html",
  "scope": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#fff",
  "theme_color": "#3f51b5",
  "description": "Description of the application.",
  "dir": "ltr",
  "lang": "en-US"
}
```

Pour les `icons`: plusieurs tailles sont à fournir, généralement : `48x48`, `96x96`, `144x144`, `192x192`, `256x256`, `384x384`, `512x512`.

Pour `display`: voir la [documentation Mozilla](https://developer.mozilla.org/en-US/docs/Web/Manifest/display).

Pour des raisons de compatibilité avec Safari et Internet Explorer, il est nécessaire de dupliquer les informations du `manifest.json` dans le fichier HTML :

```html
<head>
  <link rel="manifest" href="/manifest.json">
  
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="PWAGram">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">
  <link rel="apple-touch-icon" href="/src/images/icons/apple-icon-60x60.png" sizes="60x60">

  <meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144x144.png">
  <meta name="msapplication-TileColor" content="#fff">
  <meta name="theme-color" content="#3f51b5">
</head>
```

Pour les `apple-touch-icon`: plusieurs tailles sont à fournir, généralement : `57x57`, `60x60`, `72x72`, `76x76`, `114x114`, `120x120`, `144x144`, `152x152`, `180x180`.


## Service worker

Il permet l'implémentation des **fonctionnalités hors-ligne**.

Il intercepte les requêtes clients et effectue un traitement associé. Par exemple : pour accéder à une ressource, le service worker peut **rediriger vers le cache** pour éviter l’utilisation du réseau.


### Register service worker

```js
// main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('Service worker registered'))
    .catch(err => console.error('Cannot register service worker', err));
}
```

L'option **scope** définit la plage d'URL contrôlée par le *service worker*.
Voir plus sur la [documentation Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register).

Étapes d'initialisation d'un service worker :
`installing → waiting → active`


### Initialisation du service worker

```js
// sw.js
// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
  evt.waitUntil(
    // Statically cache assets
    caches.open('my-static-cache-v1').then((cache) => {
      cache.addAll([
        '/',
        '/index.html',
        '/offline.html',
        '/main.js',
        '/styles.css',
        '/img/logo.png',
        '/img/banner.png',
      ]);
    })
  );
});
```

Entre les états `installing` et `active`, le *service worker* est à l'état `waiting`. Son initialisation est finie mais il attend encore pour que les éventuels autres *service workers* se désactivent.

```js
// sw.js
// activate event
self.addEventListener('activate', evt => {
  console.log('service worker activated');
  evt.waitUntil(
    // Remove old caches from potential other sw
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== 'my-static-cache-v1' && key !== 'my-dyn-cache-v1')
        .map(key => caches.delete(key))
      );
    })
  );
});
```


### Configuration du service worker pour l'événement 'fetch'

Exemple simpliste :

```js
// sw.js
self.addEventListener('fetch', function(evt) {
  // Redirect all requests to the cache
  evt.respondWith(
    caches.match(evt.request)
      .then(function(res) {
        return res;
      })
  );
});
```
