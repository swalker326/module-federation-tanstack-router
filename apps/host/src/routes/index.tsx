import { createRoute } from "@tanstack/react-router";
import { route as rootRoute } from "./__root";
const Component = () => {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
};
export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Component
});
