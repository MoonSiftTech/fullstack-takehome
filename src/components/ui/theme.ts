import { css, RuleSet } from "styled-components";

import {
  Theme,
  BreakpointAlias,
  Breakpoints,
} from "src/components/ui/theme.types";

const MOBILE_WIDTH = 576;
const TABLET_WIDTH = 768;
const DEFAULT_WIDTH = 992;
const LARGE_DISPLAY_WIDTH = 1400;

const breakpoints: Breakpoints = Object.assign(
  [MOBILE_WIDTH, TABLET_WIDTH, DEFAULT_WIDTH, LARGE_DISPLAY_WIDTH],
  {
    sm: MOBILE_WIDTH,
    md: TABLET_WIDTH,
    lg: DEFAULT_WIDTH,
    xl: LARGE_DISPLAY_WIDTH,
  }
);

const createError = (name: string, message: string) => {
  const error = new Error(message);
  error.name = name;
  return error;
};

export const batmanTheme: Theme = {
  name: "batman",
  // Breakpoints
  breakpoints,
  // Colors
  colors: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    grey: {
      "1": "#303030",
      "2": "#707070",
      "3": "#888888",
      "4": "#CECFD1",
      "5": "#EFEFEF",
      "6": "#F5F5F5",
      "7": "#FBFBFB",
    },
    secondary: {
      main: "#FDCA47",
      light: "#FEDF91",
      lighter: "#FEEAB5",
    },
    background: {
      green: "#1D4B30",
      blue: "#140E3F",
      maroon: "#53103C",
      purple: "#8137CA",
    },
    foreground: {
      green: "#2A8539",
    },
    error: {
      main: "#AE1A26",
      light: "#EF5350",
      dark: "#C62828",
    },
    warning: {
      main: "#ED6C02",
      light: "#FF9800",
      dark: "#E65100",
    },
    info: {
      light: "#F5F5F5",
      dark: "#303030",
    },
    success: {
      main: "#2E7D32",
      light: "#4CAF50",
      dark: "#1B5E20",
    },
  },

  // Typography
  typography: {
    primary: {
      defaults: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontStyle: "normal",
      },
      b68: {
        fontWeight: 700,
        fontSize: "68px",
        lineHeight: "80px",
      },
      b42: {
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "50px",
      },
      b34: {
        fontWeight: 700,
        fontSize: "34px",
        lineHeight: "42px",
      },
      b26: {
        fontWeight: 700,
        fontSize: "26px",
        lineHeight: "38px",
      },
      b18: {
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "26px",
      },
      b16: {
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "23px",
      },
      b14: {
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "20px",
      },
      "b12-allcaps": {
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: "18px",
        textTransform: "uppercase",
      },
      m16: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      m14: {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
      },
      m12: {
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
      },
      r26: {
        fontWeight: 400,
        fontSize: "26px",
        lineHeight: "38px",
      },
      r20: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "30px",
      },
      r18: {
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "22px",
      },
      r16: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      r14: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
      },
      r12: {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "18px",
      },
      r10: {
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "16px",
      },
      l26: {
        fontWeight: 300,
        fontSize: "26px",
        lineHeight: "38px",
      },
      l20: {
        fontWeight: 300,
        fontSize: "20px",
        lineHeight: "30px",
      },
      l16: {
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "24px",
      },
      l14: {
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    branded: {
      defaults: {
        fontFamily: '"Josefin Sans", sans-serif',
      },
      b42: {
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "67px",
      },
      b34: {
        fontWeight: 700,
        fontSize: "34px",
        lineHeight: "54px",
      },
      b18: {
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: "29px",
      },
      b14: {
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: "22px",
      },
      l26: {
        fontWeight: 300,
        fontSize: "26px",
        lineHeight: "41px",
      },
    },
    editorial: {
      defaults: {
        fontFamily: '"Juana", serif',
      },
      sb34: {
        fontWeight: 600,
        fontSize: "34px",
        lineHeight: "46px",
      },
      r68: {
        fontWeight: 400,
        fontSize: "68px",
        lineHeight: "80px",
      },
      r46: {
        fontWeight: 400,
        fontSize: "46px",
        lineHeight: "60px",
      },
      r26: {
        fontWeight: 400,
        fontSize: "26px",
        lineHeight: "38px",
      },
      r22: {
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "32px",
      },
    },
  },

  // Box shadows
  shadows: [
    "none",
    "rgb(0 0 0 / 25%) 0px 1px 2px",
    "0px 3px 6px rgba(0, 0, 0, 0.25)",
  ],

  // Transition
  transition: "250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

  // Shapes are styles that shape the components (square, round, etc...)
  shapes: {
    main: {
      borderRadius: "2px",
    },
    soft: {
      borderRadius: "5px",
    },
    "super-soft": {
      borderRadius: "10px",
    },
    cta: {
      borderRadius: "30px",
    },
    round: {
      borderRadius: "50%",
    },
  },

  // Reused borders
  borders: {
    primary: {
      main: "1px solid #000000",
    },
    secondary: {
      main: "1px solid #cecfd1",
    },
    "cta-primary": {
      main: "1px solid #000000",
      active: "1px solid #303030",
    },
    "cta-secondary": {
      main: "1px solid #ffffff",
      hover: "1px solid #000000",
    },
  },

  // Util functions
  get fns() {
    const getColor = (color?: string): string => {
      if (!color) {
        return "";
      }

      const [name, variant] = color.split(".");
      const colorObject = this.colors[name];

      if (colorObject) {
        const fromPath = colorObject[variant ?? "main"];
        const actualColor = fromPath ?? color;

        return actualColor;
      }

      return name;
    };

    const getBorder = (border: string): string => {
      const [name, variant] = border.split(".");
      const borderObject = this.borders[name];

      if (borderObject) {
        const fromPath = borderObject[variant ?? "main"];

        if (fromPath) {
          return fromPath;
        }

        throw createError("ThemeError", "Border not found");
      }

      throw createError("ThemeError", "Border group not found");
    };

    const getTransition = (properties: Array<string>): string => {
      const transition = this.transition;
      return properties
        .map((property) => `${property} ${transition}`)
        .join(", ");
    };

    const getSpacing = (...spaces: Array<number>): string => {
      return spaces.map((s) => `${s}px`).join(" ");
    };

    const getTypographyStyles = (typography: string): RuleSet => {
      const [group, name] = typography.split(".");
      const groupObject = this.typography[group];

      if (!groupObject) {
        throw createError("ThemeError", "Typography group not found");
      }

      const defaults = groupObject.defaults;
      const typographyObject = groupObject[name];

      if (!defaults && !typographyObject) {
        throw createError("ThemeError", "Typography and defaults not found");
      }

      return css({
        ...defaults,
        ...typographyObject,
      });
    };

    const getShapeStyles = (shapeName: string): RuleSet => {
      const shapeObject = this.shapes[shapeName];

      if (shapeObject) {
        return css(shapeObject);
      }

      throw createError("ThemeError", "Shape not found");
    };

    const getMediaQuery = ({
      minWidth,
      maxWidth,
    }: {
      minWidth?: BreakpointAlias | number;
      maxWidth?: BreakpointAlias | number;
    }): string => {
      const queries: Array<string> = [];

      if (minWidth) {
        const isAlias = typeof minWidth === "string";
        const actualMinWidth = isAlias ? this.breakpoints[minWidth] : minWidth;
        queries.push(`(min-width: ${actualMinWidth}px)`);
      }

      if (maxWidth) {
        const isAlias = typeof maxWidth === "string";
        const actualMaxWidth = isAlias ? this.breakpoints[maxWidth] : maxWidth;
        queries.push(`(max-width: ${actualMaxWidth}px)`);
      }

      return `@media ${queries.join(" and ")}`;
    };

    return {
      getColor,
      getBorder,
      getTransition,
      getSpacing,
      getTypographyStyles,
      getShapeStyles,
      getMediaQuery,
    };
  },
};
