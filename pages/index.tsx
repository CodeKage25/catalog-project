import FilteredData from "../components/FilteredData"
import Card from "../components/UI/Card";
import type { NextPage } from "next";
import Sort from "./sort";
import FilterSection from "../components/UI/FilterSection";

const Home: NextPage = () => {
  return (
    <>
      {/* <FilteredData /> */}
      {/* <Sort /> */}
      <FilterSection />
    </>
  )
}


export default Home;