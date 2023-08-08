import { useEffect, useState } from "react"


function App() {
     const [shows, setShows] =useState([])
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(res => res.json())
    .then( data=> setShows(data))
  }, [])
  console.log(shows);
  return (
    <div>
      <h1 >text</h1>

  </div>
  )
}

export default App
