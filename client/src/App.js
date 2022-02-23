//dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";

//components
// import Home from "./components/Home";
import Header from "./components/Header";
import Lessons from "./components/Lessons";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Submitted from "./components/Submitted";
import Performances from "./components/Performances";
import Publications from "./components/Publications";
import Topic from "./components/Topic";

let url = "https://whitneykelley.herokuapp.com/api";

export default function App() {
  // handling width here to avoid memory leak issues
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const poke = () => {
      axios
        .get(url)
        .then((res) => console.log("From the API:", res.data, new Date()))
        .catch((err) => console.error("Man down! ", err));
    };
    poke();
    //poke every 15m
    setInterval(poke, 900000);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => setWidth(window.innerWidth);
  }, []);

  //contact form submission
  function handleSubmit(e) {
    e.preventDefault();
    const firstName = e.target.querySelector("#fName").value;
    const lastName = e.target.querySelector("#lName").value;
    const email = e.target.querySelector("#email").value;
    const message = e.target.querySelector("#message").value;
    const body = {
      firstName,
      lastName,
      email,
      message,
    };

    url = url + "/users";
    axios.post(url, body).catch((err) => console.error("Man down! ", err));
  }

  //handle want lessons checkbox

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/about" />} />
          <Route path="about" element={<About width={width} />} />
          <Route path="lessons" element={<Lessons width={width} />}>
            <Route path=":topic" element={<Topic />} />
          </Route>
          <Route path="performances" element={<Performances />} />
          <Route path="publications" element={<Publications />} />
          <Route
            path="contact"
            element={<Contact submit={(e) => handleSubmit(e)} />}
          />
          <Route path="submitted" element={<Submitted />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
