import React, { useEffect } from "react";
import { BrowserRouter, useLocation, MemoryRouter } from "react-router-dom";
import { NavigationProviderProps } from "./Provider.types";

const DocumentTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return null;
};

export const NavigationProvider: React.FC<
  React.PropsWithChildren<NavigationProviderProps>
> = ({ children, memoryRouter }) => {
    
  const Router = memoryRouter ? MemoryRouter : BrowserRouter;

  return (
    <Router>
      <DocumentTitle />
      {children}
    </Router>
  );
};
