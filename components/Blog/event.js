import React from "react";

function Event() {
  return <div>This is an Event Page</div>;
}

export default Event;
// import React from "react";
// import Card from "../Card/Card";
// import styles from "./Event.module.css";

// export default function Event({ articles, children }) {
//   return (
//     <div style={{ flex: 1 }}>
//       {children}
//       {articles.length < 1 ? (
//         <ErrorPage />
//       ) : (
//         <div className={styles.eventContainer}>
//           {articles.map((article) => (
//             <div key={article.id}>
//               <Card article={article} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export const ErrorPage = () => {
//   return <h1 style={{ textAlign: "center" }}>Oops! No Post for Now</h1>;
// };
