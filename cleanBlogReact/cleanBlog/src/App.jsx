
import './App.css'
import MainLayout from './layout/mainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SamplePost from './pages/samplePost';
import Contact from './pages/contact';
import About from './pages/about';
import Home from './pages/home';
import NoPage from './pages/noPage';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="samplePost" element={<SamplePost />} />
          <Route path="contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
