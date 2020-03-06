import React, { Component } from 'react'
import MovieCard from './MovieCard'

export class MovieCascade extends Component {
    render() {

        let movies = this.props.movies.map(item => 
                <MovieCard favorite={this.props.favorite} key={item.id} handleFavClick={this.props.handleFavClick} details={item}/>
            )


        return (
            <div className="movie-cascade">
                {movies}
            </div>
        )
    }
}

export default MovieCascade
