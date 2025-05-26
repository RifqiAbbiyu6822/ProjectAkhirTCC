# KameraApp Fullstack Deployment

## Setup

1. Pastikan kamu sudah install Node.js dan npm.  
2. Buat database dan atur `DATABASE_URL` di `backend/.env` sesuai konfigurasi kamu.  
3. JWT secret sudah di-generate otomatis di `.env` file.  

## Deploy ke Google Cloud Platform (GCP)

- Backend: Akan di-deploy ke Cloud Run via `cloudbuild.backend.yaml`  
- Frontend: Akan di-deploy ke App Engine via `cloudbuild.frontend.yaml`  

### Langkah deploy:

1. Push repository ini ke GitHub.  
2. Hubungkan repository GitHub ke Google Cloud Build triggers untuk otomatis deploy backend dan frontend.  
3. Pastikan environment variables di-set di GCP (seperti `JWT_SECRET` dan `DATABASE_URL` jika perlu override).  

## JWT Secret yang digunakan:  
```
6teFN3afiuSW2HqxUexcmg0wVcKGLs2I
```

Jika ingin generate ulang, ganti langsung di `backend/.env` dan redeploy.

