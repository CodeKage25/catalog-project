import type { NextPage } from "next";
import FilteredData from "../components/FilteredData";
import FilterSection from "../components/UI/FilterSection";
import Feature from "../components/Feature";
import { EmblaOptionsType } from 'embla-carousel-react'

const OPTIONS: EmblaOptionsType = {
  inViewThreshold: 0,
  dragFree: true,
  containScroll: 'keepSnaps',
  loop: true,
  axis: 'y',
  
}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Home: NextPage = () => {
  return (
    <>
      {/* <FilteredData /> */}
      {/* <Sort /> */}
      {/* <FilterSection /> */}
      <Feature slides={SLIDES} options={OPTIONS} />
    </>
  )
}


export default Home;