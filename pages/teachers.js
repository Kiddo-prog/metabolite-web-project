import React from "react";
import Head from "next/head";

import Navigation from "../components/Navigation/Navigation";
import Scroll from "../components/ScrollToTop/Scroll";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import TeacherBanner from "../components/Banner/TeacherBanner/TeacherBanner";
import TeacherPage from "../components/TeacherPage/Teacher";
import Footer from "../components/Footer/Footer";

import JsonData from "../data/data.json";
export default function Teachers() {
  return (
    <div>
      <Head>
        <title>Teachers - Department of Biochemistry</title>
      </Head>
      <SideBarMenu />
      <Navigation />
      <TeacherBanner />
      <TeacherPage data={JsonData.Teachers} />
      <Scroll />
      <Footer />
    </div>
  );
}

//
