function createCache(storage: Storage) {}

export const localCache = createCache(localStorage);
export const sessionCache = createCache(sessionStorage);
