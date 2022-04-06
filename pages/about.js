import React, { useEffect } from "react";
import Head from "next/head";

import Details from "../components/AboutDetails/Details/Details";
import Navigation from "../components/Navigation/Navigation";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import Categories from "../components/AboutDetails/CourseCategories/Categories";
import Scroll from "../components/ScrollToTop/Scroll";
import Footer from "../components/Footer/Footer";

import JsonData from "../data/data.json";
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
      <Scroll />
      <Footer />
    </div>
  );
}

export default About;
