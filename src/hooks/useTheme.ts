import { useCallback, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  const updateTheme = useCallback((newTheme: "dark" | "light") => {
    setTheme(newTheme === "dark" ? darkTheme : lightTheme);
  }, []);
  return [theme, updateTheme];
};

export default useTheme;
