import React from "react";
import { ParamListBase, ScreenProps } from "./createStackNavigator.types";

export function getInitialRoutePath<ParamList extends ParamListBase>(children: React.ReactNode, initialRouteName: string) {
    const initialRouteElement = React.Children.toArray(children).find((child) => {
        if (React.isValidElement<ScreenProps<ParamList>>(child)) {
          const { props } = child;
          const { name } = props;

          return name === initialRouteName;
        }

        return false;
    });

    if (React.isValidElement<ScreenProps<ParamList>>(initialRouteElement)) {
        return initialRouteElement.props.path;
    }
    
    return undefined;
}