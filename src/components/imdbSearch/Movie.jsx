import React from "react";

export default function Movie(param) {
    console.log(param);
    let rating;
    if (param.value) {
        rating = param.value.Ratings.map((rating, id) =>
            <small key={id} className="col text-center">{rating.Value}</small>
        );
    }
    return (
        <div className="col">
            <div className="row m-3">
                <div className="col-4">
                    <img className="img img-fluid" src={param.value.Poster} alt="" />
                    <div className="row">
                        {/* <small className="col text-center">Movie Database</small> */}
                        <img className="col" style={{width:'30px', height:'20px'}} src="http://2.bp.blogspot.com/-vUvACWFtYCU/Tp7KvRxLieI/AAAAAAAAAPk/k22mNtLtQuI/s1600/imdb_logo.png" alt=""/>
                        {/* <small className="col text-center">Rotten Tomatoes</small> */}
                        <img className="col" style={{width:'20px', height:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/757px-Rotten_Tomatoes.svg.png" alt=""/>
                        {/* <small className="col text-center">Metacritic</small> */}
                        <img className="col" style={{width:'20px', height:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/1024px-Metacritic.svg.png" alt=""/>
                    </div>
                    <div className="row">{rating}</div>
                    <a href={param.value.Website} className="btn btn-primary form-control">Website</a>
                </div>
                <div className="col">
                    <h2 className="card-title">{param.value.Title} (<small className="col text-center">{param.value.Year}</small>)</h2>
                    <div className="row">
                        <div className="col-4">
                            <small className="">Released [</small>
                            <small className="">{param.value.Released}]</small>
                        </div>
                        <div className="col text-center">
                            <small className=""> Rated [</small>
                            <small className="">{param.value.Rated}]</small>
                        </div>
                        <div className="col text-right">
                            <small className=""> Runtime [</small>
                            <small className="">{param.value.Runtime}]</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <small className="">Genre: [</small>
                            <small className="">{param.value.Genre}]</small>
                        </div>
                    </div>
                    <div>
                        <div className="row d-flex align-items-end">
                            <div className="col">
                                <h5 className="">Plot</h5>
                            </div>
                            <div className="col">
                                <h5 className="text-right">{param.value.imdbRating}<small>/10</small></h5>
                                <p className="text-right"><small>{param.value.imdbVotes}</small></p>
                            </div>
                        </div>
                        <p className="text-justify">{param.value.Plot}</p>
                        <p className="text-justify">Languages [{param.value.Language}]</p>
                        <p className="text-justify">Director: {param.value.Director}</p>
                        <p className="text-justify">Writer: {param.value.Writer}</p>
                        <p className="text-justify">Actors: {param.value.Actors}</p>
                        <p className="text-justify">Awards: {param.value.Awards}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}