import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//components
import Home from "./Home";
import Header from "./Header";
import Lessons from "./Lessons";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Submitted from "./Submitted";
import Performances from "./Performances";
import Publications from "./Publications";

function App() {
  // const [user, setUser] = useState(null);
  // const [password, setPassword] = useState(null);
  const [fName, setFName] = useState(null);

  //make api url available
  const url = "http://localhost:8080";

  //wake up the api
  useEffect(() => {
    const poke = () => {
      axios.get(url).then((res) => console.log("From the API:", res.data));
    };
    poke();
    //poke every 15m
    setInterval(poke, 900000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFName(e.target.querySelector("#fName").value);
  };

  return (
    <div className="App">
      <Header fName={fName} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="performances" element={<Performances />} />
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact submit={handleSubmit} />} />
          <Route path="submitted" element={<Submitted />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
