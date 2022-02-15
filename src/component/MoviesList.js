import React, { Component } from "react";
import { Link } from "react-router-dom";

const MoviesList = (props) => {
    const { movies, deleteMovie } = props

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)} ..`
    }
    return (
        <div className="row">
            {
                movies.map((movies, i) => (
                    <div className="col-md-4 mb-3" key={i} tabIndex={movies.id}>
                        <div className="card">
                            <img src={`https://www.themoviedb.org/t/p/w185_and_h278_multi_faces/${movies.poster_path}`} className="card-img-top" alt={movies.title} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "pre" }}>{movies.title}</h5>
                                <p className="card-text">{truncateOverview(movies.overview, 80)}</p>
                                <div className="align-items-center d-flex justify-content-between w-100">
                                    <button type="button" className="btn btn-danger bg-white text-danger" onClick={(event) => props.deleteMovie(movies)}>Delete</button>
                                    <Link to={`edit/${movies.id}`} type="button" className="btn btn-primary bg-white text-primary">Edit</Link>
                                    <span className="bg-danger float-right font-weight-bold p-2 rounded-lg text-white" >{movies.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default MoviesList;