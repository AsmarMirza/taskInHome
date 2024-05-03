import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import "./App.css";
import MainProvider from "./context/MainProvider";
import MainLayout from "./layout/MainLayout";
import BasketPage from "./pages/BasketPage";
import FormPage from "./pages/form";
import HomePage from "./pages/HomePage";
import WishListProvider from "./context/wishListProvider";

function App() {
  return (
    <>
      <HelmetProvider>
        <MainProvider>
          <WishListProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/form" element={<FormPage />} />
                  <Route path="/basket" element={<BasketPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </WishListProvider>
        </MainProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
