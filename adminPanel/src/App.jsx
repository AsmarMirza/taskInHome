import MainLayout from "./layout/main/mainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/main/home";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import AdminLayout from "./layout/admin/adminLayout";
import AddProducts from "./pages/Admin/addProducts";
import MainSite from "./pages/Admin/mainSite";
import EditProducts from "./pages/Admin/EditProducts";
import Detail from "./pages/main/Detail";
import MainProvider from "./context/MainProvider";
import Products from "./pages/Admin/Products";

function App() {
  return (
    <>
      <HelmetProvider>
        <MainProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/detail" element={<Detail />} />
              </Route>

              <Route path="/adminLayout" element={<AdminLayout />}>
                <Route path="/adminLayout/mainSite" element={<MainSite />} />
                <Route
                  path="/adminLayout/products"
                  element={<Products />}
                />
                <Route
                  path="/adminLayout/addProducts"
                  element={<AddProducts />}
                />
                <Route
                  path="/adminLayout/editProducts/:id"
                  element={<EditProducts />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </MainProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
