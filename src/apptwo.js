import { Suspense } from "react";
import "./App.css";
import SWR from "./components/swr/Swr";

function App2() {
  return (
    <div className="App2">
      <Suspense fallback={<h1>Please Wait, Data is Loading...</h1>}>
        <SWR />
      </Suspense>
    </div>
  );
}

export default App2;
