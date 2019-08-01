import React from "react";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="row m-3">
                <form className="form-inline my-2 my-lg-0" onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(document.getElementsByName("search")[0].value);
    }
}