import React, { useEffect } from "react";
import { BrowserRouter, useLocation, MemoryRouter, HashRouter } from "react-router-dom";
import { NavigationContainerProps } from "./Provider.types";

const DocumentTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return null;
};

export const NavigationContainer: React.FC<
  React.PropsWithChildren<NavigationContainerProps>
> = ({ children, memoryRouter, basename, hashRouter }) => {
    
  const Router = memoryRouter ? MemoryRouter : hashRouter ? HashRouter : BrowserRouter;

  return (
    <Router basename={basename}>
      <DocumentTitle />
      {children}
    </Router>
  );
};
