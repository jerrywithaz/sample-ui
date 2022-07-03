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
    flexBasis
  }) => `
        ${createStyleProp("padding-top", paddingVertical)}
        ${createStyleProp("padding-bottom", paddingVertical)}
        ${createStyleProp("padding-left", paddingHorizontal)}
        ${createStyleProp("padding-right", paddingHorizontal)}
        ${createStyleProp("display", display)}
        ${createStyleProp("flex", flex, "")}
        ${createStyleProp("flex-grow", flexGrow, "")}
        ${createStyleProp("flex-shrink", flexShrink, "")}
        ${createStyleProp("flex-basis", flexBasis, "")}
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
        ${createStyleProp("max-height", maxHeight)}
        ${createStyleProp("position", position)}
        ${createStyleProp("align-self", alignSelf)}
        ${createStyleProp("background-color", backgroundColor, "")}
        ${createStyleProp("background-color", backgroundColor, "")}
        ${createStyleProp("border-radius", borderRadius)}
    `}
`;

export const FlexBox = styled(Box)<BoxProps>`
  display: flex;
`;

export default Box;
