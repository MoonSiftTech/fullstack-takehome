// let typescript know about assertion types provided by this package
import "@testing-library/jest-dom/vitest";

import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// unmount components rendered by @testing-library/react between each test
afterEach(() => {
  cleanup();
});
