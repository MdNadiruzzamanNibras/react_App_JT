import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import noImg from './images/No-Image-Placeholder.svg.png'
import axios from 'axios';
const Detail = () => {
    const { id } = useParams()
    const [show, setShow] =useState({})
   
      useEffect(() => {
    async function fetchData() {
     
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      
    }

    fetchData();
      }, []);
    
    return (
        <div style={{marginTop:'20vh'}} className="d-flex justify-content-center">
            <div><img
               style={{height:'60vh'}}
                src={show?.image ? show.image.original : noImg}
                className="card-img-top"
                alt="..."
              /></div>
            <div>
                <div className="ms-4 mt-3">
                    <h1>{show.name ? show.name : "No data available"}</h1>
                    <h5>Genres: {show.genres ? show.genres : "No data available" }</h5>
                    <h5>Language: {show.language ? show.language: "No data available"}</h5>
                    <p style={{width:'20vw'}}>{show.summary
                    ? show.summary.replace(/<[^>]*>/g, "") 
                        : "No data available"}</p>
                    <Link to={'/'}><button className="btn btn-success">All Show</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;