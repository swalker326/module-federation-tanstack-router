import { dependencies } from "./package.json";

export const config = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3001/remoteEntry.js"
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
