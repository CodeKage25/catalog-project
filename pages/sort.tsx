import { matchSorter } from "match-sorter";
import { useEffect, useState } from "react";
import { cardData } from "../helpers/data";

export default function Sort () {
  const [data, setData] = useState(cardData)

  useEffect(() => {
    setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story", "PBL", "GSP"], "500 6 3 1"))
  }, [])
  console.log(data)

  function fuzzySearchMultipleWords(
  rows:any, // This is the data that we want to search
  keys:any, // this keys is an array of strings that determine what field to be searched through
  filterValue: string, // This is the value that we want to search might be a simple string or multiple strings
) {
  if (!filterValue || !filterValue.length) {
    return rows
  }

  const terms = filterValue.split(' ')
  if (!terms) {
    return rows
  }
  return terms.reduceRight(
    (results, term) => matchSorter(results, term, {keys}),
    rows,
  )
  }
  
  return (
    <>
      {
        // @ts-ignore
        data?.map((data, id) => (
          <div key={id}>
            {data.price}, {data.bedroom}
            <img src={data.image} alt={data.name} width="100%" />
          </div>
        ))
        
      }
    </>
  )
}
