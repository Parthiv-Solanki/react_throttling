import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import { useThrottle } from "./hook/useThrottle";

function App() {
  const [value, setValue] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // mouse move on the window :: Throttling
    const handleMouseMove = throttle(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

    // resize the window :: Throttling

    // const handleResize = throttle(() => {
    //   setValue((prevValue) => prevValue + 1);
    // }, 1000);
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  // react throttling with custom hook
  // const throttleSearchValue = useThrottle(searchValue, 1000);

  return (
    <div className="App">
      <header className="App-header">
        {/* <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <div>{throttleSearchValue}</div> */}
        <div>{value}</div>
      </header>
    </div>
  );
}

export default App;
