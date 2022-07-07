import { TextProps } from "../../global/Text";

export interface LinkProps {
    /** The url path to the Screen */
    to: string;
    /** The name of the Screen */
    name: string;
    onPress?: () => void;
    fontSize?: TextProps['fontSize']
}