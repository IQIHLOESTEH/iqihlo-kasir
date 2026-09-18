# iqihlo-kasir
IQIHLO ES TEH


## Firebase IQIHLO ES TEH V1.3
This build is connected to Firebase project `iqihlo-es-teh`.
- Firebase Authentication: Owner login uses `iqihloesteh@gmail.com`.
- Cloud Firestore: app data is synchronized under `app_data`.
- Existing localStorage remains as an offline/local cache.
- Printer selection stays local to the Android device.

### Required Firestore rules
For the first connection test, use authenticated access:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{email} {
      allow read, write: if request.auth != null;
    }
    match /app_data/{docId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

The Firebase web configuration is intentionally included in the web app. Do not put a Firebase Admin SDK private key or service-account JSON in the website.
