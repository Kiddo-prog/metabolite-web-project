import Head from "next/head";
import { useEffect } from "react";

import JsonData from "../data/data.json";
import Navigation from "../components/Navigation/Navigation";
import Course from "../components/HomePage/Course/_courses";
import Banner from "../components/Banner/Banner";
import Quotes from "../components/HomePage/Quote/_quotes";
import Blogs from "../components/HomePage/Events/_event";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import Scroll from "../components/ScrollToTop/Scroll";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.Container} id="outer-container">
      <div className={styles.innerContainer}>
        <Head>
          <title>Metabolites - Department of Biochemistry</title>
          <meta name="description" content="Metabolites of class '24" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <SideBarMenu /> */}
        <div>
          <main id="page-wrap">
            <SideBarMenu />
            <Navigation />
            <Scroll />
            <Banner />
            <Course data={JsonData.Topics} />
            <Quotes data={JsonData.PunchLines} />
            <Blogs data={JsonData.Events} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
