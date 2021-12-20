//dependencies
import { Routes, Route } from "react-router-dom";
import { Component } from "react";
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
import Ready from "./Ready";
import InPerson from "./InPerson";
import Online from "./Online";

let url = "https://whitneykelley.herokuapp.com/api";

class App extends Component {
  //handling wantLessons here for handleSubmit()
  state = {
    wantLessons: false,
    width: 0,
  };

  componentDidMount() {
    let width = window.innerWidth;
    this.setState({ width });
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      this.setState({ width });
    });
    const poke = () => {
      axios
        .get(url)
        .then((res) => console.log("From the API:", res.data, new Date()))
        .catch((err) => console.error("Man down! ", err));
    };
    poke();
    //poke every 15m
    setInterval(poke, 900000);
  }

  //contact form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.querySelector("#fName").value;
    const lastName = e.target.querySelector("#lName").value;
    const email = e.target.querySelector("#email").value;
    const message = e.target.querySelector("#message").value;
    const wantLessons = this.state.wantLessons;
    const body = {
      firstName,
      lastName,
      email,
      message,
      wantLessons,
    };

    url = url + "/users";
    axios
      .post(url, body)
      .then((res) => console.log(res))
      .catch((err) => console.error("Man down! ", err));
  };

  //handle want lessons checkbox
  handleChange = (e) => {
    e.target.checked
      ? this.setState({ wantLessons: true })
      : this.setState({ wantLessons: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home width={this.state.width} />}>
            <Route index element={<About />} />
            <Route
              path="lessons"
              element={<Lessons width={this.state.width} />}
            >
              <Route path="ready" element={<Ready />} />
              <Route path="in-person" element={<InPerson />} />
              <Route path="online" element={<Online />} />
            </Route>
            <Route path="performances" element={<Performances />} />
            <Route path="publications" element={<Publications />} />
            <Route
              path="contact"
              element={
                <Contact
                  submit={(e) => this.handleSubmit(e)}
                  change={(e) => this.handleChange(e)}
                />
              }
            />
            <Route path="submitted" element={<Submitted />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
