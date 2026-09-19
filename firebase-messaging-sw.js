importScripts("https://www.gstatic.com/firebasejs/12.9.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.9.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCVIeE-CDyaNDTU9DuvxKMRPY4wH-6Rp-o",,
  authDomain: "iqihlo-es-teh.firebaseapp.com",
  projectId: "iqihlo-es-teh",
  storageBucket: "iqihlo-es-teh.firebasestorage.app",
  messagingSenderId: "382120711455",
  appId: "1:382120711455:web:5281431a89a3cf2de08c2a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};

  self.registration.showNotification(
    notification.title || "IQIHLO ES TEH",
    {
      body: notification.body || "Ada pemberitahuan baru.",
      icon: "/favicon.ico",
      data: payload.data || {}
    }
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) return client.focus();
      }

      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});
