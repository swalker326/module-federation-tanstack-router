import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
import { config } from "./module-federation.config.ts";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(config)],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()]
    }
  }
});
