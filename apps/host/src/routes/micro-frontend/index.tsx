import { Outlet, Route } from "@tanstack/react-router";
import { route as rootRoute } from "../__root";

const Component = () => {
  return (
    <div className="p-2">
      <h3>Micro Frontend</h3>
      <Outlet />
    </div>
  );
};

export const route = new Route({
  getParentRoute: () => rootRoute,
  path: "/micro-frontend",
  component: Component
});
