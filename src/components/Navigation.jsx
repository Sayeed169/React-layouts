import React from "react";

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item ml-5 active">
                            <a className="nav-link text-white text-uppercase" href="#">Home</a>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link text-white text-uppercase" href="#">Link</a>
                        </li>
                        <li className="nav-item ml-5 dropdown">
                            <a className="nav-link text-white text-uppercase dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item ml-5">
                            <a className="nav-link text-white text-uppercase disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(document.getElementsByName("search")[0].value);
    }
}