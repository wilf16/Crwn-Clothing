import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
