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

function App() {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

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

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
