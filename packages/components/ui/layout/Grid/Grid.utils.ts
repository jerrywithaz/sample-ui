import { ResponsiveSize } from "../../../devsupport/responsive";

export function createColFlexStyle(size: number | undefined, enabled: boolean) {
    if (enabled && size !== undefined) {
        return  `flex: 0 0 ${(size/24) * 100}%;`;
    }
    return "";
}