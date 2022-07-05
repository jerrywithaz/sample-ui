import { ParamListBase } from "../../factories/createStackNavigator";

export type NavigateArgs<ParamList extends ParamListBase, RouteName extends keyof ParamList = keyof ParamList> = undefined extends ParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]] : [screen: RouteName, params: ParamList[RouteName]];

export type NavigateFunction<ParamList extends ParamListBase, RouteName extends keyof ParamList = keyof ParamList> = (...args: NavigateArgs<ParamList, RouteName>) => void;

export interface NavigationProviderContext<ParamList extends ParamListBase = ParamListBase> {
    goBack: () => void;
    canGoBack: () => boolean;
    navigate: NavigateFunction<ParamList>;
    // getState: <State extends unknown>() => State;
}