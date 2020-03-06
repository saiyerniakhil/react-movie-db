import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        let url = `http://image.tmdb.org/t/p/w185//${this.props.details["poster_path"]}`
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={url} className="card-img-top" alt={this.props.details["original_title"]}/>
                <div className="card-body">
                <h5 className="card-title">{this.props.details["original_title"]}</h5>
                <p className="card-text">{this.props.details["overview"]}</p>
                   { this.props.favorite? <button className="btn btn-danger" onClick={() => this.props.handleFavClick(this.props.details)}> Remove from favorites</button>
                    :<button className="btn btn-success" onClick={() => this.props.handleFavClick(this.props.details)}>Add to favorites</button>}
                </div>
            </div>
        )
    }
}

export default MovieCard
