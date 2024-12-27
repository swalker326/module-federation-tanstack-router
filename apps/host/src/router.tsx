import { createRouter } from "@tanstack/react-router";
import { route as rootRoute } from "./routes/__root";
import { route as microfrontendRoute } from "./routes/micro-frontend";
import { QueryClient } from "@tanstack/react-query";

const routeTree = rootRoute.addChildren([microfrontendRoute]);
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
