import { createRoute } from "@tanstack/react-router";
import { route as rootRoute } from "./__root";
import MicroFrontend from "remote/App";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/MicroFrontend",
  component: RouteComponent
});

function RouteComponent() {
  return <MicroFrontend />;
}
