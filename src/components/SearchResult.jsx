import React from "react";

export default function SearchResult(param) {
    return (
        <div className="card col-3">
            <img className="card-img" src={param.value.Poster} alt="" />
            <div className="card-body">
                <h5 className="card-title">{param.value.Title}</h5>
                <hr />
                <div className="row">
                    <small className="col text-center">Year</small>
                    <small className="col text-center">Type</small>
                </div>
                <div className="row">
                    <small className="col text-center">{param.value.Year}</small>
                    <small className="col text-center">{param.value.Type}</small>
                </div>
                <a href={"#"} className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}