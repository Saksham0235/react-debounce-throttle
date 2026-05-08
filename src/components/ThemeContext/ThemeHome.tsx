import { useContext } from "react";
import { ThemeContext, useTheme } from "./ThemeContext";

function ThemeHome() {

  const context=useContext(ThemeContext)
  const { theme, setTheme } =context

  return (
    <div style={{backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#1a325b" : "#fff", minHeight: "100vh", display: "flex",width:"100vh", alignItems: "center", justifyContent: "center",gap:"1rem"}}>
      <button className="border-zinc-700 rounded-[5px] border p-2 cursor-pointer" onClick={() => setTheme("light")}>
        Light
      </button>
      <button className="border-zinc-700 rounded-[5px] border p-2 cursor-pointer" onClick={() => setTheme("dark")}>
        Dark
      </button>
    </div>
  );
}

export default ThemeHome;