import React, { ComponentType } from "react";
import { ThemeProvider } from "styled-components";
import {
  render,
  type RenderOptions,
  type RenderResult,
} from "@testing-library/react";

import { batmanTheme } from "src/components/ui/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={batmanTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => {
  return render(ui, { wrapper: Providers as ComponentType, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
