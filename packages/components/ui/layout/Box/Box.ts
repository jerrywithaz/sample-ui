import styled from "styled-components/native";
import createStyleProp from "../../../utils/createStyleProp";
import { BoxProps } from "./Box.types";

const Box = styled.View<BoxProps>`
  ${({
    flex,
    alignItems,
    justifyContent,
    horizontal,
    vertical,
    flexDirection,
    paddingVertical,
    paddingHorizontal,
    marginLeft,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginVertical,
    flexWrap,
    wrap,
    overflow,
    height,
    maxHeight,
    width,
    display,
    marginRight,
    position,
    alignSelf,
    backgroundColor,
    borderRadius,
    padding,
    margin,
    flexGrow,
    flexShrink,
    flexBasis,
    fullWidth,
    minHeight,
    minWidth,
    maxWidth,
    wrapText,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    left,
    right,
    top,
    bottom
  }) => `
        ${createStyleProp("padding-top", paddingVertical ?? paddingTop)}
        ${createStyleProp("padding-bottom", paddingVertical ?? paddingBottom)}
        ${createStyleProp("padding-left", paddingHorizontal ?? paddingLeft)}
        ${createStyleProp("padding-right", paddingHorizontal ?? paddingRight)}
        ${createStyleProp("margin-top", marginVertical)}
        ${createStyleProp("margin-bottom", marginVertical)}
        ${createStyleProp("margin-left", marginHorizontal)}
        ${createStyleProp("margin-right", marginHorizontal)}
        ${createStyleProp("display", display)}
        ${createStyleProp("flex", fullWidth ? 1 : flex, "")}
        ${createStyleProp("flex-grow", flexGrow, "")}
        ${createStyleProp("flex-shrink", flexShrink, "")}
        ${createStyleProp("flex-basis", fullWidth ? "100%" : flexBasis ?? "auto", "")}
        ${createStyleProp("flex-direction", horizontal ? `row` : vertical ? `column`: flexDirection)}
        ${createStyleProp("justify-content", justifyContent)}
        ${createStyleProp("align-items", alignItems)}
        ${createStyleProp("margin", margin)}
        ${createStyleProp("padding", padding)}
        ${createStyleProp("margin-left", marginLeft)}
        ${createStyleProp("margin-top", marginTop)}
        ${createStyleProp("margin-bottom", marginBottom)}
        ${createStyleProp("margin-right", marginRight)}
        ${createStyleProp("flex-wrap", wrap ? 'wrap' : flexWrap)}
        ${createStyleProp("overflow", overflow)}
        ${createStyleProp("height", height)}
        ${createStyleProp("width", width)}
        ${createStyleProp("max-width", wrapText ? "100%" : maxWidth)}
        ${createStyleProp("max-height", maxHeight)}
        ${createStyleProp("min-height", minHeight ?? "auto")}
        ${createStyleProp("min-width", minWidth)}
        ${createStyleProp("position", position)}
        ${createStyleProp("align-self", alignSelf)}
        ${createStyleProp("background-color", backgroundColor, "")}
        ${createStyleProp("border-radius", borderRadius)}
        ${createStyleProp("left", left)}
        ${createStyleProp("right", right)}
        ${createStyleProp("top", top)}
        ${createStyleProp("bottom", bottom)}
    `}
`;

export const FlexBox = styled(Box)<BoxProps>`
  display: flex;
`;

export default Box;
