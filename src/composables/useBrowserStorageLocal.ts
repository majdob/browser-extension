import { useStorageAsync, StorageLikeAsync } from '@vueuse/core';
import { storage } from 'webextension-polyfill';

const browserStorageLocal: StorageLikeAsync = {
  removeItem(key: string) {
    return storage.local.remove(key);
  },

  setItem(key: string, value: string) {
    return storage.local.set({ [key]: value });
  },

  async getItem(key: string) {
    return (await storage.local.get(key))[key];
  },
};

const useBrowserStorageLocal = <T>(key: string, initialValue: T) => {
  return useStorageAsync(key, initialValue, browserStorageLocal);
};

export default useBrowserStorageLocal;
