import './App.css';
import Layout from './components/pages/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/home';
import Contact from "./components/pages/contact"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
          <Route  index element={<Home/>}/>
          <Route path="contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
