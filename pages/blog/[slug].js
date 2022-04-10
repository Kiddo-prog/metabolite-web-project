import React from "react";

function Details() {
  return <div>This is a slug page</div>;
}

export default Details;
// import React from "react";
// import { fetchApi } from "../../lib/api";
// import Layout from "../../components/Layout/Layout";
// import { useRouter } from "next/router";
// import Navigation from "../../components/Navigation/Navigation";
// import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";

// export default function Blog({ articles }) {
//   const router = useRouter();
//   if (router.isFallback) {
//     return "Loading...";
//   }
//   return (
//     <div>
//       <Layout>
//         <Navigation />
//         <SideBarMenu />
//         <div
//           style={{
//             margin: "0 1.5em",
//           }}
//         >
//           <h1
//             style={{
//               textAlign: "center",
//             }}
//           >
//             {articles.title}
//           </h1>
//           <p>{articles.content}</p>
//           <p>
//             Date Posted: <i>{articles.date_created}</i>
//           </p>
//         </div>
//       </Layout>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const articles = await fetchApi("blog");

//   const paths = articles.map((article) => ({
//     params: { slug: article.slug.toString() },
//   }));
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const articles = await fetchApi(`blog/?id=${params.slug}`);
//   return {
//     props: { articles: articles[0] },
//     revalidate: 1,
//   };
// }
