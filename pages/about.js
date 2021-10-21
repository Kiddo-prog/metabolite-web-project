import React, { useEffect } from "react";
import Head from "next/head";

import Details from "../components/AboutDetails/Details/Details";
import Navigation from "../components/Navigation/Navigation";
import Categories from "../components/AboutDetails/CourseCategories/Categories";
import Footer from "../components/Footer/Footer";
import JsonData from "../data/data.json";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>About Us - Department of Biochemistry</title>
      </Head>
      <SideBarMenu />
      <Navigation />
      <Details data={JsonData.About} />
      <Categories data={JsonData.Categories} />
      <Footer />
    </div>
  );
}

export default About;
