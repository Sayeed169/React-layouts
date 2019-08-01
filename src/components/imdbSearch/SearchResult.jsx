import React from "react";

export default class SearchResult extends React.Component {
    render() {
        let param = this.props;
        return (
            <div className="row m-2" id={param.value.imdbID}>
                <img className="col-3 img img-fluid" src={param.value.Poster} alt="" />
                <div className="col">
                    <small>{param.value.Title} ({param.value.Year})</small>
                    <br />
                    <small>{param.value.Type}</small>
                </div>
                <a href="#" onClick={() => {this.props.onClick(param.value.imdbID)}} className="btn btn-primary form-control col-1">></a>
            </div>
        );
    }
}