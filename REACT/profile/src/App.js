import { useState } from "react";
import "./App.css";
import ButtonShow from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("Jan 4, 2023");

  function greet() {
    toast("Hello!");
  }
  return (
    <div className="App">
      {!show ? (
        <ButtonShow setShow={setShow} />
      ) : (
        <div>
          <Header />
          <hr />
          <ToastContainer />
          <Main date={date} setDate={setDate} greet={greet} />
          <hr />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
