
import { lazy, Suspense } from 'react';
import {  Navigate, Routes, Route } from 'react-router-dom';

// context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CardContextProvider from "./contexts/CardContextProvider";
import Navbar from "./components/common/Navbar";

// components with lazy loading
const DetailsPage = lazy(() => import("./components/DetailsPage"));
const ShopCard = lazy(() => import("./components/ShopCard"));
const Store = lazy(() => import('./components/Store'));


const App = () => {
  return (

    <ProductContextProvider>
      <CardContextProvider>
        <Navbar />
        < Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/products" element={<Store />} />
            <Route path="/cards" element={<ShopCard />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </Suspense>
      </CardContextProvider>
    </ProductContextProvider>
  );
};

export default App;

