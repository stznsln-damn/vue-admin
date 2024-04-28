import { resolve } from "node:path";

export const resolvePath = (path: string) => resolve(process.cwd(), path);
