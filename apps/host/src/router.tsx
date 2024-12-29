import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { route as indexRoute } from "./routes";
import { route as rootRoute } from "./routes/__root";
import { Route as Microfrontend } from "./routes/MicroFrontend";

const routeTree = rootRoute.addChildren([indexRoute, Microfrontend]);

export const queryClient = new QueryClient();

export const router = createRouter({
  context: {
    queryClient
  },
  routeTree,
  defaultPendingComponent: () => (
    <div className="p-2 text-2xl">
      <h1>Loading...</h1>
    </div>
  )
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
