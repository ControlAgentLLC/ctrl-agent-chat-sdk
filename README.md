# CtrlAgent Chat SDK

Enterprise-grade React SDK for integrating chat widgets into web applications. Built with TypeScript, Vite, and modern best practices. This guide is written for experienced frontend engineers and architects joining the project.

---

## Table of Contents
- [CtrlAgent Chat SDK](#ctrlagent-chat-sdk)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Architecture](#architecture)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Install Dependencies](#install-dependencies)
    - [Local Development](#local-development)
  - [Development Workflow](#development-workflow)
  - [Build \& Publish](#build--publish)
    - [Build SDK for Browser](#build-sdk-for-browser)
    - [Build NPM Package](#build-npm-package)
    - [Publish to NPM or GitHub Packages](#publish-to-npm-or-github-packages)
- [Using This Package from GitHub Packages](#using-this-package-from-github-packages)
  - [1. Add a .npmrc file](#1-add-a-npmrc-file)
  - [2. Install the package](#2-install-the-package)
  - [3. Import and use](#3-import-and-use)
  - [Code Structure](#code-structure)
  - [SDK Usage](#sdk-usage)
    - [As a Browser Script](#as-a-browser-script)
    - [As an NPM Package](#as-an-npm-package)
      - [Client API Methods](#client-api-methods)
  - [Testing \& Linting](#testing--linting)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Troubleshooting](#troubleshooting)
  - [License](#license)

---

## Project Overview

This SDK enables seamless integration of ControlAgent's chat widget into any React-based web application. It is designed for extensibility, maintainability, and ease of use in enterprise environments.

- **Tech Stack:** React 19, TypeScript 5, Vite 7, TailwindCSS 4
- **Distribution:** ESM & CJS bundles, TypeScript types, NPM-ready
- **Features:**
  - Embeddable chat widget
  - Floating button UI
  - Client API for widget control (show/hide, unread count, etc.)
  - Theming support
  - Event-driven communication

---

## Architecture

- **Monorepo-like structure:** All SDK code, widget UI, and integration scripts are organized under `src/`.
- **Build System:** Vite for fast dev/build, Rollup for library output, TypeScript for type safety.
- **Entry Points:**
  - `src/modules/script/index.ts` – Browser script for direct embedding
  - `src/modules/npm/index.ts` – NPM package entry for React projects
- **Core Components:**
  - `core/components/chat-widget/` – Main chat widget UI
  - `core/components/floating-button/` – Floating action button
  - `core/services/sdk/` – SDK logic and API
  - `core/services/widget/` – Widget rendering and communication
  - `core/types/` – Shared TypeScript types

---

## Getting Started

### Prerequisites
- Node.js >= 18.x
- NPM >= 9.x (or Yarn/Pnpm)
- MacOS, Linux, or Windows

### Install Dependencies
```bash
npm install
```

### Local Development
```bash
npm run dev
```
- Starts Vite dev server on port `5273` (see `vite.config.ts`).
- Open [http://localhost:5273](http://localhost:5273) to view the demo widget.

---

## Development Workflow

- **Source code:** All TypeScript/React code is in `src/`.
- **Hot Module Reloading:** Enabled via Vite for rapid UI iteration.
- **Styling:** TailwindCSS is used for all widget styles. See `index.css` and component CSS modules.
- **Linting:**
  - Run `npm run lint` for code quality checks (see `eslint.config.js`).
  - Type-aware linting is recommended for production (see below).
- **Type Checking:**
  - TypeScript strict mode is enabled. Use `tsc --noEmit` for type checks.

---

## Build & Publish

### Build SDK for Browser
```bash
npm run build
```
- Outputs browser script to `dist/sdk/`.

### Build NPM Package
```bash
npm run build:npm
```
- Outputs ESM/CJS bundles and types to `dist/npm/`.


### Publish to NPM or GitHub Packages
```bash
npm run publish:npm
```
- Publishes package to NPM or GitHub Packages (see below for GitHub Packages usage).

---

# Using This Package from GitHub Packages

To use `@ControlAgentLLC/chat-sdk` from GitHub Packages in another project:

## 1. Add a .npmrc file

Create a `.npmrc` file in your project root with:
```
@ControlAgentLLC:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```
Replace `YOUR_GITHUB_TOKEN` with a GitHub personal access token that has `read:packages` permission.

## 2. Install the package

```bash
npm install @ControlAgentLLC/chat-sdk
```

## 3. Import and use

```js
import { /* exported members */ } from '@ControlAgentLLC/chat-sdk';
```

---

---

## Code Structure

```
ctrl-agent-chat-sdk/
├── src/
│   ├── core/
│   │   ├── components/
│   │   │   ├── chat-widget/
│   │   │   └── floating-button/
│   │   ├── services/
│   │   │   ├── sdk/
│   │   │   └── widget/
│   │   └── types/
│   ├── modules/
│   │   ├── npm/
│   │   └── script/
│   ├── index.css
│   └── css.d.ts
├── public/
├── dist/
├── package.json
├── vite.config.ts
├── vite.npm.config.ts
├── tsconfig*.json
└── ...
```

---

## SDK Usage

### As a Browser Script
Embed the SDK script in your HTML:
```html
<script src="/dist/sdk/script/sdk-script.js"></script>
```

### As an NPM Package
Install via NPM:
```bash
npm install ctrl-agent-chat-sdk
```
Import and use in your React app:
```tsx
import { CtrlChatSDK } from 'ctrl-agent-chat-sdk';

const sdk = new CtrlChatSDK({
  clientId: 'YOUR_CLIENT_ID',
  token: 'YOUR_TOKEN',
  theme: { primaryColor: '#007bff' },
});

sdk.on('unreadMessage', (count) => {
  // handle unread count
});
```

#### Client API Methods
- `show()`, `hide()`, `isOpen()`, `unreadMessage()`, `destroy()`, etc.
- See `src/core/services/sdk/index.ts` for full API reference.

---

## Testing & Linting

- **Lint:** `npm run lint` (ESLint, TypeScript-aware)
- **Type Check:** `tsc --noEmit`
- **Unit Tests:** (Add your test runner, e.g., Jest, Vitest)

---

## Contribution Guidelines

- Follow the existing code style (Prettier, ESLint).
- Write clear, type-safe code and descriptive comments.
- Document public APIs and major architectural decisions.
- Open PRs against `feature/*` branches; use conventional commit messages.
- For major changes, update this README and relevant docs.

---

## Troubleshooting

- **Build errors:** Ensure Node/NPM versions match prerequisites.
- **Type errors:** Run `tsc --noEmit` and fix reported issues.
- **Widget not rendering:** Check browser console for errors and verify clientId/token.
- **NPM publish issues:** Check `.npmignore` and package.json `files` field.

---

## License

MIT © CtrlAgent Ai
