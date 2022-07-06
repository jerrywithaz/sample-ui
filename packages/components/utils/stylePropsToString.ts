import { StyleProp } from "react-native";

function stylePropsToString<T>(styleProps: StyleProp<T>) {
    if (!styleProps) return "";
    else if (Array.isArray(styleProps)) {

    }
    else {
        return Object.keys(styleProps).reduce((value, key) => {
            return ""
        }, "");
    }
}