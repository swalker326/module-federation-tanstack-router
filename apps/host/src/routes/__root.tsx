import type { QueryClient } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  createRootRouteWithContext
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const Component = () => {
  return (
    <>
      <div style={{ display: "flex", gap: 5 }}>
        <Link
          to="/"
          activeProps={{
            className: "font-bold"
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          preload="intent"
          to="/MicroFrontend"
          activeProps={{ className: "font-bold" }}
          activeOptions={{ exact: true }}
        >
          RemoteApp
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};

export const route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Component
});
