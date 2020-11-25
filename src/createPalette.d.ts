import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    white: string;
    icon: string;
    bgColor: string;
  }
}
interface PaletteOptions {
  white: string;
  bgColor: string;
}