
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import MainProvider from "./context/MainProvider";


function App() {


  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />    
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
