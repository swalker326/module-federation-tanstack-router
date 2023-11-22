import ReactDOM from "react-dom/client";
import { RouterProvider, Router } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { route as remoteRoute } from "./routes/remote";
// import { route as testDynamicRoute } from "./routes/test-dynamic";
import { route as rootRoute } from "./routes/__root";
import { route as indexRoute } from "./routes";
import { route as microfrontendIndex } from "./routes/micro-frontend/index";
import { route as microfrontend } from "./routes/micro-frontend/mirco-frontend";

const routeTree = rootRoute.addChildren([
  indexRoute,
  microfrontendIndex.addChildren([microfrontend])
]);

const queryClient = new QueryClient();

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient
  }
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
