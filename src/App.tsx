import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Home/Index";
import ScrollToTop from "./ScrollToTop";
import './assets/fonts/fonts.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
