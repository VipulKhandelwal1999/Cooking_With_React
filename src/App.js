import React, {useState} from "react";
import Counter from "./Counter.jsx";
import CounterHooks from "./CounterHooks.jsx";

//It has two parts Provider and Consumer
export const ThemeContext = React.createContext();

//Just wrap around the part with Theme where you wanna access props
//We have to use value only and here theme is state because if we want 
//to re render the component to change the context we want some state 
//as context doesn't re render the component. 
function App() {
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      Counter 1
      <Counter initialCount={0}/>
      <br />
      Counter Hooks
      <CounterHooks initialCount={0}/>
      <br />
      <button onClick={() => setTheme(prevTheme => {return prevTheme === "green" ? "blue" : "green"})}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
