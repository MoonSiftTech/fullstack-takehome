import { CSSProperties } from "react";
import { CSSObject, RuleSet } from "styled-components";

export type BreakpointAlias = "sm" | "md" | "lg" | "xl";

export type Breakpoints = Array<number> & Record<BreakpointAlias, number>;

export type Colors = Record<
  string,
  Record<string, string | undefined> | undefined
>;

export type TypographyProperties = Pick<
  CSSProperties,
  | "fontFamily"
  | "fontStyle"
  | "fontWeight"
  | "fontSize"
  | "lineHeight"
  | "textTransform"
>;

export type TypographyGroups = Record<
  string,
  Record<string, TypographyProperties | undefined> | undefined
>;

export interface Theme {
  name: string;
  breakpoints: Breakpoints;
  colors: Colors;
  typography: TypographyGroups;
  shadows: Array<string>;
  transition: string;
  shapes: {
    [key: string]: CSSObject | undefined;
  };
  borders: {
    [k1: string]: { [k2: string]: string | undefined } | undefined;
  };
  fns: {
    getColor(color?: string, alphaChannel?: number | string): string;
    getTransition(properties: Array<string>): string;
    getBorder(border: string): string;
    getSpacing(...spaces: Array<number>): string;
    highlight(amount: number | string, color: string): string;
    getTypographyStyles(typography: string): RuleSet;
    getShapeStyles(shapeName: string): RuleSet;
    getMediaQuery(widths: {
      minWidth?: BreakpointAlias | number;
      maxWidth?: BreakpointAlias | number;
    }): string;
  };
}
