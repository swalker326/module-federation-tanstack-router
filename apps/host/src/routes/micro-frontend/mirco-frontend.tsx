import { Route } from "@tanstack/react-router";
import { route as microfrontendIndex } from "./index";
import { useEffect, useState } from "react";

const fetchMicroFrontend = async ({ path }: { path: string }) => {
  console.log("path", path);
  // @ts-expect-error we are using a dynamic import, we build the url from appConfig
  const remote = await import("http://localhost:3001/assets/remoteEntry.js");
  const comp = await remote.get(`./${path}`);
  return comp().default;
};

const Component = () => {
  const [Component, setComponent] = useState<React.ReactNode>(null);
  const { path } = route.useParams();

  useEffect(() => {
    fetchMicroFrontend({ path }).then((MicroFrontend) =>
      setComponent(MicroFrontend)
    );
  }, [path]);
  return (
    <div>
      <h1>Dynamic Micro Frontend</h1>
      {Component}
    </div>
  );
};
export const route = new Route({
  getParentRoute: () => microfrontendIndex,
  path: "$path",
  load: async ({ params }) => {
    const component = await fetchMicroFrontend({ path: params.path });
    //we have access to the params here, and could fetch the component here, just have no idea how to pass it to the component
    return { component };
  },
  component: () => <Component />
  // errorComponent: () => <div>Error Loading Micro-Frontend</div>
});
