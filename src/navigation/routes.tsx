import { RouteObject, useRoutes } from "react-router-dom";

type RenderRoutesProps = {
  routes: RouteObject[];
};

export const RenderRoutes = ({ routes }: RenderRoutesProps) => {
  let renderedRoutes = useRoutes(routes);
  return renderedRoutes;
};
