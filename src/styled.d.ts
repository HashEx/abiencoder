import 'styled-components';

interface ITheme {
  bgColor: string,
  bgDarkColor: string,
  bgLightColor: string,
  textColor: string,
  textColor2: string,
  textColor3: string,
  borderColor: string,
  activeTabColor: string,
  selectColor: string,
  selectBorderColor: string,
  selectFocusedColor: string,
  selectMenuColor: string,
  indicatorColor: string,
  editorColor: string,
  editorLineColor: string,
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}