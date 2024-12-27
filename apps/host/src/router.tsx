import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { route as indexRoute } from "./routes";
import { route as rootRoute } from "./routes/__root";
import { route as microfrontendRoute } from "./routes/micro-frontend";
import { route as dyanmicRemote } from "./routes/micro-frontend/mirco-frontend";

const routeTree = rootRoute.addChildren([
  indexRoute,
  microfrontendRoute.addChildren([dyanmicRemote])
]);

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
