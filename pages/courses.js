import React, { useEffect } from "react";
import Head from "next/head";

import Navigation from "../components/Navigation/Navigation";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import CourseBanner from "../components/Banner/CourseBanner/CourseBanner";
import CoursePage from "../components/CoursePage/CoursePage";
import Scroll from "../components/ScrollToTop/Scroll";
import Footer from "../components/Footer/Footer";

import data from "../data/data.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Courses() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>Courses - Department of Biochemistry</title>
      </Head>
      <SideBarMenu />
      <Navigation />
      <CourseBanner />
      <CoursePage course={data.Comp_Courses} elective={data.Elect_Courses} />
      <Scroll />
      <Footer />
    </div>
  );
}

export default Courses;
