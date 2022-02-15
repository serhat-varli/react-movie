import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

class Search extends Component {
    state = {
        searchQuery: "",
    }

    hendelFormSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { searchMovie } = this.props
        return (
            <div className="row ">
                <div className="col-10">
                    <form className="form-inline d-flex w-100 mt-3 mb-3" onSubmit={this.hendelFormSubmit}>
                        <div className="form-group mr-3 w-100">
                            <input type="text" className="form-control pb-4 pt-4 w-100" onChange={searchMovie}  placeholder="Search Enter Key" />
                        </div>
                    </form>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <Link to="add" className="btn btn-danger mt-0 pt-3 pb-3 w-100" style={{float:"right", display:"block"}}>Add Movie</Link>
                </div>
            </div>
        );
    }
}

export default Search;