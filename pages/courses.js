import React, {useEffect} from "react";
import Head from "next/head";

import Navigation from "../components/Navigation/Navigation";
import CourseBanner from "../components/Banner/CourseBanner/CourseBanner";
import CoursePage from "../components/CoursePage/CoursePage";
import Footer from "../components/Footer/Footer";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import data from "../data/data.json";

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Courses() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Head>
        <title>Courses - Department of Biochemistry</title>
      </Head>
      <SideBarMenu />
      <Navigation />
      <CourseBanner />
      <CoursePage course={data.Comp_Courses} elective={data.Elect_Courses} />
      <Footer />
    </div>
  );
}
