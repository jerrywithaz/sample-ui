import React, { useEffect } from "react";
import { BrowserRouter, useLocation, MemoryRouter } from "react-router-dom";
import { NavigationContainerProps } from "./Provider.types";

const DocumentTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return null;
};

export const NavigationContainer: React.FC<
  React.PropsWithChildren<NavigationContainerProps>
> = ({ children, memoryRouter }) => {
    
  const Router = memoryRouter ? MemoryRouter : BrowserRouter;

  return (
    <Router>
      <DocumentTitle />
      {children}
    </Router>
  );
};
