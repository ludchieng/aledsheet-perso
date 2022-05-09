---
title: 03. Synchronisation en arrière plan
author: Ludwig Chieng
basedOn: le MOOC de Maximilian Schwarzmüller
category: Progressive Web App
tags: [web, mobile, progressive web app, service worker]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Synchronisation en arrière plan

[[toc]]

Principe : Lorsqu'il n'y a pas de connexion internet, enregistrer la requête échouée à une liste de tâche à faire. Cette liste sera exécutée dès que la connexion sera rétablie.

En attendant que le rétablissement de la connexion, il faut aussi sauvegarder les actions CRUD de l'utilisateur en local, en général, dans le store `IndexedDB`.


## Enregistrer la requête à une liste de tâches

```js
// main.js
// Create a new post (id, title, content)
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready
    .then(function(sw) {
      var post = {
        id: new Date().toISOString(),
        title: titleInput.value,
        content: contentInput.value
      };
      writeData('sync-posts', post) // write to IndexedDB
        .then(function() {
          // Register task to do when connection is restablished
          return sw.sync.register('sync-new-posts');
        })
        .then(function() {
          // Trigger UI feedback (e.g. Show toast message)
        })
        .catch(function(err) {
          console.log(err);
        });
    });
} else {
  // Browser does not support SyncManager
  sendData(); // post request to api
}
```

`sync-posts` est le nom de la *IndexedDB database*.
`sync-new-posts` est le *tag* de la tâche du *SyncManager*.


## Traiter la liste des tâches au rétablissement de la connexion

```js
// sw.js
self.addEventListener('sync', function(event) {
  // Perform background syncing
  if (event.tag === 'sync-new-posts') {
    event.waitUntil(
      readAllData('sync-posts') // Read new posts from IndexedDB
        .then(function(posts) {

          for (var p of posts) {
            fetch(/* API URL */, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                id: p.id,
                title: p.title,
                content: p.content,
              })
            })
              .then(function(res) {
                if (res.ok) {
                // Delete successfully added post from IndexedDB
                  res.json()
                    .then(function(resData) {
                      deleteItemFromData('sync-posts', resData.id);
                    });
                }
              })
              .catch(function(err) {
                console.error(err);
              });
          }

        })
    );
  }
});
```
