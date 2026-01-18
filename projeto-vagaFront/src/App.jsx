import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Catalogo from "./pages/Catalogo/Catalogo";
import Agenda from "./pages/Agenda/Agenda";
import WhatsappButton from "./components/Whatsapp/Whatsapp";
import PromoPopUp from "./components/PromoPopUp/PromoPopUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/agende-sua-visita" element={<Agenda />} />
      </Routes>
      <PromoPopUp />
      <WhatsappButton />
      <Footer />
    </>
  );
}

export default App;
