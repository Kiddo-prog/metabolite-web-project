import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import TeacherBanner from "../components/Banner/TeacherBanner/TeacherBanner";
import Footer from "../components/Footer/Footer";
import JsonData from "../data/data.json";
import TeacherPage from "../components/TeacherPage/Teacher";

export default function Teachers() {
  const data = JsonData;
  return (
    <div>
      <Head>
        <title>Teachers - Department of Biochemistry</title>
      </Head>
      <Navigation />
      <TeacherBanner />
      <TeacherPage data={JsonData.Teachers} />
      <Footer />
    </div>
  );
}
