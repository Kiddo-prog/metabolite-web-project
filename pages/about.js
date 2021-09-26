import React from "react";
import Details from "../components/AboutDetails/Details";
import Navigation from "../components/Navigation/Navigation";
import JsonData from "../data/data.json";

function About() {
  return (
    <div>
      <Navigation />
      <Details data={JsonData.About} />
    </div>
  );
}

export default About;
