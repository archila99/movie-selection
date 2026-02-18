# Movie App

A React movie app with favorites, search, and mobile support.

## Setup (API key)

1. Get a free API key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your key to `.env`:
   ```
   VITE_TMDB_API_KEY=your_api_key_here
   ```

The `.env` file is gitignored and will not be pushed.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel (safe API key setup)

### 1. Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Important:** Your `.env` file is gitignored—your API key will **not** be pushed.

### 2. Import project on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project**.
3. Select your repository and click **Import**.

### 3. Configure Root Directory

Before deploying, click **Edit** next to "Root Directory":

- Set it to `frontend` (the app lives in this folder).
- Click **Continue**.

### 4. Add API key (Environment Variable)

1. Expand **Environment Variables**.
2. Add a new variable:
   - **Name:** `VITE_TMDB_API_KEY`
   - **Value:** paste your TMDB API key from [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
3. Leave all environments checked (Production, Preview, Development).
4. Click **Add** or **Save**.

### 5. Deploy

Click **Deploy**. Vercel will build and deploy your app.

Your API key stays in Vercel's secure environment—it is never stored in your repo.

---

### Optional: Add env var after deploy

If you already deployed without the key:

1. Go to your project on Vercel.
2. **Settings** → **Environment Variables**.
3. Add `VITE_TMDB_API_KEY` with your key.
4. **Redeploy** (Deployments → ⋮ on latest → Redeploy).

---

## Tech notes

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
