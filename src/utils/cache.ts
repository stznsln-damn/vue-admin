import { StorageLike } from "@vueuse/core";

class Cache implements StorageLike {
  private storage: Storage;
  private prefix: string;
  private expire: number;

  /**
   * @param storage 内存
   * @param prefix 前缀
   * @param expire 过期时间，传0永不过期 单位分钟
   */
  constructor(storage: Storage, prefix = "", expire = 0) {
    this.storage = storage;
    this.prefix = prefix;
    this.expire = expire;
  }

  getItem<T extends any>(key: string): T | null {
    const item = this.storage.getItem(this.prefix + key);
    if (item) {
      const val = JSON.parse(item);
      if (
        this.expire === 0 ||
        Date.now() - val.time < this.expire * 60 * 1000
      ) {
        return val.value;
      } else {
        this.removeItem(key);
      }
    }
    return null;
  }

  setItem<T extends any>(key: string, value?: T) {
    if (value) {
      const val = {
        time: Date.now(),
        value,
      };

      this.storage.setItem(this.prefix + key, JSON.stringify(val));
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(this.prefix + key);
  }

  clear() {
    this.storage.clear();
  }
}

export const localCache = new Cache(localStorage);
export const sessionCache = new Cache(sessionStorage);
