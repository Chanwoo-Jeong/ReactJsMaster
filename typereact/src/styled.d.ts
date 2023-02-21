import "styled-components";

declare module "styled-components" {
  export interface UsingTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}