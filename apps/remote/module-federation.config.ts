import { dependencies } from "./package.json";

export const config = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"]
    },
    "@tanstack/react-router": {
      singleton: true,
      requiredVersion: dependencies["@tanstack/react-router"]
    },
    "@tanstack/react-query": {
      singleton: true,
      requiredVersion: dependencies["@tanstack/react-query"]
    }
  }
};
