import React from "react";

import Event from "../components/Blog/event";
import { fetchApi } from "../lib/api";
import Navigation from "../components/Navigation/Navigation";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

export default function Blog({ articles }) {
  return (
    <div>
      <Event articles={articles}>
        <Navigation />
        <SideBarMenu />
      </Event>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await fetchApi("blog");
  return {
    props: { articles: articles },
    revalidate: 1,
  };
}
