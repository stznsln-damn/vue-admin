import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "@vue/runtime-core" {
  interface HTMLAttributes extends AttributifyAttributes {}
}
