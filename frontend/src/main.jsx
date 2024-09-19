import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProductPage from './components/ProductDetail.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx'
import AllRentalsPage from './pages/AllRentalsPage.jsx';
import AllSalesPage from './pages/AllSalesPage.jsx';
import MyItemsPage from './pages/MyItemsPage.jsx';
import MyRentalsPage from './pages/MyRentalsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail/>,
  },
  {
    path: "/allproducts",
    element: <AllProductsPage />
  },
  {
    path: "/allrentals",
    element: <AllRentalsPage />
  },
  {
    path: "/allsales",
    element: <AllSalesPage />
  },
  {
    path: "/items",
    element: <MyItemsPage />
  },
  {
    path: "/rentals",
    element: <MyRentalsPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
