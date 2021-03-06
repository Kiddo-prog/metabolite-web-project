import React from "react";
import Head from "next/head";

import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import Navigation from "../components/Navigation/Navigation";
import ContactBanner from "../components/Banner/ContactBanner/ContactBanner";
import ContactPage from "../components/ContactPage/ContactPage";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - Department of Biochemistry</title>
      </Head>
      <SideBarMenu />
      <Navigation />
      <ContactBanner />
      <ContactPage />
    </div>
  );
}
