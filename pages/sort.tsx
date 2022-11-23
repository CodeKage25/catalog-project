import { matchSorter } from "match-sorter";
import { useEffect, useState } from "react";
import { cardData } from "../helpers/data";

export default function Sort () {
  function sorter(filterParam:any) {
    return matchSorter(cardData, filterParam, {keys: ['price']})
  }
  const [data, setData] = useState()
  useEffect(() => {
    const result = sorter(350)
    // @ts-ignore
    setData(result)
    console.log(data)
  }, [])
  console.log(data)
  return (
    <>
      
      {
        // @ts-ignore
      data?.map((data, id) => {
        <div key={id}>
        {data.price}
      </div>
      })
    }
    <div>sort</div>
    </>
  ) 
}
