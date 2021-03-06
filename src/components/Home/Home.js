import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MyCarousel from "../Carousel/MyCarousel";
// import MyNavbar from '../Navbar/navBar'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "7tzazd",
      sampleData: {
        id: 7,
        post:
          "I know a fair amount of procedural PHP and I decided I might at least learn the basics of object oriented php as well, if nothing else just to compare and see what it's like."
      }
    };
  }

  testEndpoint() {
    console.log(this.state.fakeData);
    axios.get("/api/test").then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <MyCarousel />
      </div>
    );
  }
}

export default Home;
