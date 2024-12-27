import { createRoute } from "@tanstack/react-router";
import { route as microfrontendIndex } from "./index";
import React, { useState, useEffect } from "react";


// const fetchMicroFrontend = async ({ path }: { path: string }) => {
//   console.log("path", path);
//   const remote = React.lazy(
//     () => import("http://localhost:3001/remoteEntry.js")
//   );
//   console.log("remote", remote);
//   return remote.default;
// };

const Component = () => {
  const [Component, setComponent] = useState<React.ReactNode>(null);
  const { path } = route.useParams();

  useEffect(() => {
    const fetchComponent = async () => {
      const comp = await React.lazy(
        //@ts-expect-error - idk what this is
        async () => await import("http://localhost:3001/remoteEntry.js")
      );
      console.log("comp", comp);
      // setComponent(comp.App);
    };
    fetchComponent();
    // fetchMicroFrontend({ path }).then((MicroFrontend) => {
    //   console.log("Hello");
    //   setComponent(MicroFrontend);
    // });
  }, []);
  return (
    <div>
      <h1>Dynamic Micro Frontend</h1>
      
    </div>
  );
};
export const route = createRoute({
  getParentRoute: () => microfrontendIndex,
  path: "$path",
  // loader: async ({ params }) => {
  //   const component = await fetchMicroFrontend({ path: params.path });
  //   console.log("component", component);
  //   //we have access to the params here, and could fetch the component here, just have no idea how to pass it to the component
  //   return { component };
  // },
  component: () => <Component />
  // errorComponent: () => <div>Error Loading Micro-Frontend</div>
});
