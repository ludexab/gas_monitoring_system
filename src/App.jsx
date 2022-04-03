import { useState } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
