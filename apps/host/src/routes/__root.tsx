import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
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
          to="/micro-frontend"
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
