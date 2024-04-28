import { defineConfig } from "unocss";
import {
  presetAttributify,
  presetUno,
  presetTypography,
  transformerAttributifyJsx,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTypography()],
  transformers: [transformerAttributifyJsx(), transformerDirectives()],
});
