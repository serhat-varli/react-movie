import React, { Component } from "react";
import serialize from "form-serialize";

class AddMovie extends Component {
    handleFormSubmit = (e) => {
        e.preventDefault()

        const newMovie = serialize(e.target, { hash: true });
        console.log(newMovie)

        if (newMovie.overview != "" && newMovie.poster_path != "" && newMovie.title != "" && newMovie.vote_average != "" && newMovie.overview != undefined && newMovie.poster_path != undefined && newMovie.title != undefined && newMovie.vote_average != undefined) {
            this.props.addMoviess(newMovie)
        }
        else {
            alert("Boş Alan Bırakmayınız!")
        }
    }
    render() {
        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" name="title" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input type="text" className="form-control" name="vote_average" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input type="text" className="form-control" name="poster_path" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea className="form-control" name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
                </form>
            </div>
        )
    }

}

export default AddMovie;