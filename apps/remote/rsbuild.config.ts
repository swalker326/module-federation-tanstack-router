import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { config } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(config)],
  server: {
    port: 3001
  }
});
