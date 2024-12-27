import { Link, createRoute } from "@tanstack/react-router";
import { route as rootRoute } from "../__root";
import App from "remote/App";


const Component = () => {
  return (
    <div className="p-2">
      <h3>Micro Frontend</h3>
      <Link href="/micro-frontend/remote">Remote</Link>
      <h4>Remote Below</h4>
      <App />
    </div>
  );
};

export const route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/micro-frontend",
  component: Component
});
