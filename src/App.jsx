import { useState } from "react";
import RouterApp from "./lesson/b1_Router/RouterApp";

function App() {
  const [router, setRouter] = useState(false);

  const onShowLesson1 = () => {
    setRouter(true);
  };

  return (
    <div>
      <button onClick={onShowLesson1}>Show Lesson 1</button>
      {router && <RouterApp />}
    </div>
  );
}

export default App;
