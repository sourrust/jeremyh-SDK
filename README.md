# The One SDK

A TypeScript/JavaScript SDK implementation of ["The One API"](https://the-one-api.dev/).

### Install

```bash
npm install @sourrust/the-one-sdk

# or

yarn add @sourrust/the-one-sdk
```

### Getting Started

```typescript
import TheOneSDK from '@sourrust/the-one-sdk';

const sdk = new TheOneSDK('your-api-key');

const movies = await sdk.getMovies();
```

### Testing

```bash
npm test

# or

yarn test
```
