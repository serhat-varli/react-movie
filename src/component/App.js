import React, { Component } from "react"
import axios from "axios";
import Search from "./Search"
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import { Routes, Route } from "react-router-dom";

class App extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }

    //Delete
    deleteMovie = async (movie) => {
        const baseUrl = `http://localhost:3001/movies/${movie.id}`;
        await axios.delete(baseUrl)
        const newMovoeList = this.state.movies.filter(m => m.id !== movie.id)
        this.setState(state => ({
            movies: newMovoeList
        }))
    }

    //Search 
    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    //Add Movie
    addMovies = (movie) => {
        axios.post("http://localhost:3001/movies/", movie)
        this.setState(state => (
            {
                movies: state.movies.concat([movie])
            }
        ))
    }

    //Edit Movie
    EditMovies = (id, movie) => {
        axios.put(`http://localhost:3001/movies/${id}`, movie)
        this.setState(state => (
            {
                movies: state.movies.concat([movie])
            }
        ))
    }

    //Get Movie
    async componentDidMount() {
        const response = await axios.get("http://localhost:3001/movies")
        this.setState({ movies: response.data })
    }

    render() {
        let filterMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery) !== -1
            }
        ).sort((a, b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
        });
        return (
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <Routes>
                            <Route path="/" element={
                                <div className="row">
                                    <div className="col-12">
                                        <Search searchMovie={this.searchMovie} />
                                    </div>
                                    <div className="col-12">
                                        <MoviesList movies={filterMovies} deleteMovie={this.deleteMovie} />
                                    </div>
                                </div>
                            } />

                            <Route path="add" element={
                                <div className="row">
                                    <AddMovie addMoviess={(movie) => { this.addMovies(movie) }} />
                                </div>
                            } />

                            <Route path="edit/:id" element={
                                <div className="row">
                                    <EditMovie editMoviess={(id, movie) => { this.EditMovies(id, movie) }} />
                                </div>
                            } />
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;