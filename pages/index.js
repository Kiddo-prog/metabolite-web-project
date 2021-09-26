import Head from "next/head";
import JsonData from "../data/data.json";
import Navigation from "../components/Navigation/Navigation";
import Course from "../components/HomePage/_courses";
import Banner from "../components/Banner/Banner";
import Quotes from "../components/HomePage/_quotes";
import Blogs from "../components/HomePage/_event";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metabolites - Department of Biochemistry</title>
        <meta name="description" content="Metabolites of class '24" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Banner />
      <Course data={JsonData.Topics} />
      <Quotes data={JsonData.PunchLines} />
      <Blogs data={JsonData.Events} />
      <Footer />
    </div>
  );
}
