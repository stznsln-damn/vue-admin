import { RemovableRef, UseStorageAsyncOptions } from "@vueuse/core";
import { localCache } from "~/utils/cache";

export function useStorageLocal<T>(
  key: string,
  initialValue: T,
  options?: UseStorageAsyncOptions<T>
): RemovableRef<T> {
  return useStorageAsync(key, initialValue, localCache, options);
}
