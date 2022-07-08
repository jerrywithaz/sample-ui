export function createColFlexStyle(size: number | undefined, enabled: boolean) {
    if (enabled && size !== undefined) {
        const percentage = (size/24) * 100;

        return  `flex: 0 0 ${percentage}%;`;
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