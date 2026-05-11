# Flock DS

Design system for Snoonu's Merchant Portal — React components, design tokens, and patterns built on Vite + TypeScript.

**Storybook:** https://tcmms.github.io/Flock/

---

## Install

`@tcmms/flock-ds` is published to **GitHub Packages**, which requires authentication even for read access. You need a Personal Access Token (PAT) with the `read:packages` scope.

### 1. Generate a token

Open [github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm](https://github.com/settings/tokens/new?scopes=read:packages&description=flock-ds+npm), scroll down, click **Generate token**, and copy the `ghp_...` string.

### 2. Configure `~/.npmrc`

Add your token to the global npm config so every project can resolve `@tcmms` packages:

```sh
echo "@tcmms:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=ghp_YOUR_TOKEN_HERE" >> ~/.npmrc
```

Replace `ghp_YOUR_TOKEN_HERE` with the token from step 1.

### 3. Install the package

```sh
npm install @tcmms/flock-ds
```

### Troubleshooting

- **`401 Unauthorized`** — token is missing, expired, or doesn't have `read:packages`. Regenerate it.
- **`E404 Not Found`** — `@tcmms` registry isn't set in `~/.npmrc`. Re-run the first command in step 2.

For a step-by-step walkthrough, see the **Get Started** tab in [Storybook](https://tcmms.github.io/Flock/).

---

## Usage

```tsx
import { Button, InputField, FlockProvider } from '@tcmms/flock-ds'
import '@tcmms/flock-ds/tokens'

export function App() {
  return (
    <FlockProvider>
      <Button variant="primary">Save</Button>
    </FlockProvider>
  )
}
```

The `tokens` import registers Flock's CSS custom properties (`--flock-color-*`, `--flock-spacing-*`, etc.). Import it once at your app root.

---

## Local development

```sh
npm install
npm run storybook       # dev server on :6006
npm run build:lib       # build the npm package locally
npm run lint
```

Releases publish automatically on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). To cut a new version: bump `package.json`, commit, and push.
