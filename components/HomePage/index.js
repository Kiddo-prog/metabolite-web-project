import JsonData from "../../data/data.json";
import Quotes from "./Quote/_quotes";
import Course from "./Course/_courses";
import Blogs from "./Events/_event";

export default function HomePage() {
  return (
    <>
      <Course data={JsonData.Topics} />
      <Quotes data={JsonData.PunchLines} />
      <Blogs data={JsonData.Events} />
    </>
  );
}
