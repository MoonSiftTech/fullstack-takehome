import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router";
import { Collection } from "src/components/Collection";
import { batmanTheme } from "src/components/ui/theme";
import "src/App.css";

function App() {
  return (
    <ThemeProvider theme={batmanTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
