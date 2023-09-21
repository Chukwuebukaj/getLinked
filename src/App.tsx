import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Header from "./layouts/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import Registration from "./pages/Registration/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#150E28",
          color: "#fff",
          border: "1px solid #D434FE",
        }}
      />
    </BrowserRouter>
  );
};
