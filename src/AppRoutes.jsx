
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
// import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import {
  HOME_ROUTE,
  PRODUCT_ROUTE,
  CONTACT_ROUTE,
  ABOUT_ROUTE,
  NOTFOUND_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  PRODUCTS_ROUTE,
} from "./constants/routes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductList from "./products/List";
import ProductDetails from "./products/Details";

const AppRoutes = () => {
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME_ROUTE} element={<Home />} />
      {/* <Route path={PRODUCT_ROUTE} element={<Product />} /> */}
      <Route path={CONTACT_ROUTE} element={<Contact />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
   {/* for authentication route  */}
   <Route path={LOGIN_ROUTE} element={<Login />} />
    <Route path={REGISTER_ROUTE} element={<Register />} />
    {/* 
    <Route path={PRODUCTS_ROUTE} element={<ProductList />} />
    <Route path={'/products/:id'} element={<ProductDetails />} />
    another best method is given below 
    */}
    <Route path={PRODUCTS_ROUTE}  >
      <Route index element={<ProductList />} />
    <Route path={':id'} element={<ProductDetails />} />
    </Route>
    </>
  )
);
  return (<RouterProvider router={router} />);
};

export default AppRoutes;



//another way 
/* <BrowserRouter>
         <Routes>
           <Route path={HOME_ROUTE} element={<Home />} />
           <Route path={PRODUCT_ROUTE} element={<Product />} />
           <Route path={CONTACT_ROUTE} element={<Contact />} />
           <Route path={ABOUT_ROUTE} element={<About />} />
           <Route path={NOTFOUND_ROUTE} element={<NotFound />} />
         </Routes>
       </BrowserRouter>
  */