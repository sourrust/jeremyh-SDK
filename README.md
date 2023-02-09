# The One SDK

A TypeScript/JavaScript SDK implementation of ["The One API"](https://the-one-api.dev/).

### Getting Started

```typescript
import TheOneSDK from 'jeremy-h-sdk';

const sdk = new TheOneSDK('your-api-key');

const movies = await sdk.getMovies();
```
