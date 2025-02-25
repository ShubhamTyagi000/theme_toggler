import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./contexts/theme";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-col min-h-screen items-center">
        <div className="w-full max-w-sm mx-auto flex justify-center mb-4 mt-8">
          <ThemeButton />
        </div>
        <div className="mt-10 w-full sm:w-1/2">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
