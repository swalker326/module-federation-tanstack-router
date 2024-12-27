import { createRoute, Outlet } from "@tanstack/react-router";
import { route as rootRoute } from "../__root";

const Component = () => {
  return (
    <div className="p-2">
      <h3>Micro Frontend</h3>
      <Outlet />
    </div>
  );
};

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/micro-frontend",
  component: Component
});
