function createStyleProp(name: string, value?: string | number, suffix: string = "px") {
    if (value === undefined) return ``;
    if (typeof value == 'number') {
        return `${name}: ${value}${suffix};`;
    } 
    return `${name}: ${value};`;
}

export default createStyleProp;