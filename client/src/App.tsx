import React from "react";
import "./bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className={"py-3"}>
        <Container>
          <h1>React App</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
