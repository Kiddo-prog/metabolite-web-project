import React from "react";
import Head from "next/head";

import Navigation from "../components/Navigation/Navigation";
import TeacherBanner from "../components/Banner/TeacherBanner/TeacherBanner";
import Footer from "../components/Footer/Footer";
import JsonData from "../data/data.json";
import TeacherPage from "../components/TeacherPage/Teacher";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

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
      <Footer />
    </div>
  );
}

//