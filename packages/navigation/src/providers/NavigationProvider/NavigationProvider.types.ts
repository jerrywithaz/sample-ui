import { ParamListBase } from "../../types";

export type NavigateArgs<ParamList extends ParamListBase, RouteName extends keyof ParamList = keyof ParamList> = undefined extends ParamList[RouteName] ? [screen: RouteName] | [screen: RouteName, params: ParamList[RouteName]] : [screen: RouteName, params: ParamList[RouteName]];

export type NavigateFunction<ParamList extends ParamListBase, RouteName extends keyof ParamList = keyof ParamList> = (...args: NavigateArgs<ParamList, RouteName>) => void;

export interface NavigationProviderContext<ParamList extends ParamListBase = ParamListBase, RouteName extends keyof ParamList = keyof ParamList> {
    goBack: () => void;
    canGoBack: () => boolean;
    navigate: NavigateFunction<ParamList, RouteName>;
    // getState: <State extends unknown>() => State;
}