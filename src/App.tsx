import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-screen bg-slate-700">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-4">Hello World</h1>
        <Button onClick={() => setCount(count + 1)} variant="default">
          Count: {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
