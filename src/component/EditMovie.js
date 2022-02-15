import axios from "axios";
import React, { Component } from "react";

class EditMovie extends Component {
    state = {
        title: "",
        vote_average: "",
        overview: "",
        poster_path: "",
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        const { title, vote_average, overview, poster_path } = this.state;

        const id = 714968;

        const updatedMovie = {
            title,
            vote_average,
            overview,
            poster_path
        }

        this.props.editMoviess(id, updatedMovie);
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async componentDidMount() {
        const id = 714968;
        const response = await axios.get(`http://localhost:3001/movies/${id}`);
        const movie = response.data

        this.setState({
            title: movie.title,
            vote_average: movie.vote_average,
            overview: movie.overview,
            poster_path: movie.poster_path
        })
    }
    render() {
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onInputChange} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input type="text" className="form-control" name="vote_average" value={this.state.vote_average} onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input type="text" className="form-control" name="poster_path" value={this.state.poster_path} onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea className="form-control" name="overview" rows="5" onChange={this.onInputChange} defaultValue={this.state.overview} ></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
                </form>
            </div>
        )
    }

}

export default EditMovie;