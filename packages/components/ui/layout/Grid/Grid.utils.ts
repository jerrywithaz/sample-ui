export function createColFlexStyle(size: number | undefined, enabled: boolean) {
    if (enabled && size !== undefined) {
        return  `flex: 0 0 ${(size/24) * 100}%;`;
    }
    return "";
}

export function createColGutterStyle(gutter: number | undefined, enabled: boolean) {
    if (enabled && gutter !== undefined) {
        return  `padding-left: ${gutter}px;
        padding-right: ${gutter}px;
        `;
    }
    return "";
}