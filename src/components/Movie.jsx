import React from "react";

export default function Movie(param) {
    // var value = JSON.parse(param);
    let rating;
    if (param.value) {
        rating = param.value.Ratings.map((rating, id) =>
            <small key={id} className="col text-center">{rating.Value}</small>
        );
    }
    return (
        <div className="card col-3">
            <img className="card-img" src={param.value.Poster} alt="" />
            <div className="card-body">
                <h5 className="card-title">{param.value.Title}</h5>
                <hr />
                <div className="row">
                    <small className="col text-center">Year</small>
                    <small className="col text-center">Rated</small>
                    <small className="col text-center">Runtime</small>
                </div>
                <div className="row">
                    <small className="col text-center">{param.value.Year}</small>
                    <small className="col text-center">{param.value.Rated}</small>
                    <small className="col text-center">{param.value.Runtime}</small>
                </div>
                <hr />
                <div className="row">
                    <small className="col text-center">Released</small>
                    <small className="col text-center">Genre</small>
                </div>
                <div className="row">
                    <small className="col text-center">{param.value.Released}</small>
                    <small className="col text-center">{param.value.Genre}</small>
                </div>
                <hr />
                <div className="row">
                    <small className="col text-center">Movie Database</small>
                    <small className="col text-center">Rotten Tomatoes</small>
                    <small className="col text-center">Metacritic</small>
                </div>
                <div className="row">{rating}</div>
                <hr />
                <a href={param.value.Website} className="btn btn-primary">Website</a>
            </div>
        </div>
    );
}