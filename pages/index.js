import Head from "next/head";
import { useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import Scroll from "../components/ScrollToTop/Scroll";
import HomePage from "../components/HomePage/index";

import data from "../data/data.json";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Metabolites - Department of Biochemistry</title>
        <meta name="description" content="Metabolites of class '24" />
        {/* <link rel="icon" href="/logo.ico" /> */}
      </Head>
      <div className={styles.Container} id="outer-container">
        <div className={styles.innerContainer}>
          <div>
            <main id="page-wrap">
              <Navigation />
              <SideBarMenu />
              <Scroll />
              <Banner />
              <HomePage data={data} />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
