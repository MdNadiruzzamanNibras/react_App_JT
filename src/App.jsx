import { useEffect, useState } from "react";
import noImg from './images/No-Image-Placeholder.svg.png'
import { Link } from "react-router-dom";




function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(res => res.json())
      .then(data => setShows(data));
  }, []);
console.log(shows);
  return (
    <div className="container mt-5">
      <div  className="row">
      {shows.map(show => (
        
          <div key={show.show.id} className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
               
                src={show?.show?.image ? show.show.image.original : noImg}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
               <div className="d-flex justify-content-evenly"> <h5 className="card-title">{show.show.name}</h5>
                <Link ><button className="btn btn-success">Details</button></Link>
              </div>
                
              </div>
            </div>
          </div>
        
      ))}
      </div>
      </div>
  );
}

export default App;
