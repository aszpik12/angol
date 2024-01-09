import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Gepel from "./pages/Gepel";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";
import Rendez from "./pages/Rendez";
import Valaszto from "./pages/Valaszto";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Valaszto />} />
          <Route path="gepel" element={<Gepel />} />
          <Route path="rendez" element={<Rendez />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
