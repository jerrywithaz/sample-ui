import "styled-components";
import { Theme } from "@zerry-ui/components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
