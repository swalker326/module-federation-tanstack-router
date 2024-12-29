import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  preload: true,
  path: "/MicroFrontend",
  component: lazyRouteComponent(() => import("remote/App"))
});
