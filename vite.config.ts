import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    exclude: [...configDefaults.exclude],
    environment: "jsdom",
    clearMocks: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
