# Turborepo + Tailwind starter

This is a starter for Turborepo with Tailwind CSS.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `admin-app`: a [React(Vite).js](https://vite.dev/guide/) app
- `web`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- *** All three of them support tailwind ***
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd turborepo-w-others
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd turborepo-w-others
npm run dev
```

### To add More Framework 

- add it inside apps
- initilize tailwind as you normally do 
- change the tainwind.conf.js file a bit add the packages/ui in it 
```
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
```
- add @repo/ui as a dependencies in the package.json file
```
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
