import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Booking from "./components/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dine" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
