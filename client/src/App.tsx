import React from "react";
import "./bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <>
      <Header />
      <main className={"py-3"}>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
