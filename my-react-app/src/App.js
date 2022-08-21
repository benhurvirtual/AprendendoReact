import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { Menu } from './componets/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
