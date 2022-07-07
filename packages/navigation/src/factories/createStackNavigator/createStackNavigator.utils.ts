import React from "react";
import { ScreenProps } from "./createStackNavigator.types";
import { ParamListBase } from "../../types";

export function getInitialRoutePath<ParamList extends ParamListBase>(children: React.ReactNode, initialRouteName?: Extract<keyof ParamList, string>) {
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