import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom'
import MovieCascade from './MovieCascade'
import {getObject,postObject,putObject} from './service/getObjectPromise';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moviesList: [],
      myMoviesList : [],
      searchText: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFavClick = this.handleFavClick.bind(this)
    this.removeMovie = this.removeMovie.bind(this)
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  removeMovie(movie) {
    let index = this.state.myMoviesList.indexOf(movie)
      this.setState({
          myMoviesList: this.state.myMoviesList.filter((_, i) => i !== index)
      })
  }

  handleFavClick(movie) {
    if(!this.state.myMoviesList.includes(movie)) {
      this.setState({
        myMoviesList: [...this.state.myMoviesList,movie]
      })
    } else {
      alert("movie already added")
    }
    // let movies = Array.from(new Set(this.state.selectedMovies).add(movie))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.getMovies(this.state.searchText)
  }

  getMovies(movieName) {
    getObject(`https://api.themoviedb.org/3/search/movie?api_key=6e593ce22e604912a960c76e214d2809&language=en-US&query=${movieName}&page=1&include_adult=false`)
    .then(result => {
      this.setState({
        moviesList : result.data.results,
      })
    })
  }

  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Movie Name" onChange={this.handleChange} value={this.state.searchText}/>
          {" "}
          <input type="submit" className="btn btn-primary"/>
        </form>
        
        <Router>
          <ul>
            <li><Link className="btn btn-success" exact to="/">Home</Link></li>
            <li><Link className="btn btn-primary" to="/favorite">Favorite Movies</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
                <MovieCascade favorite={false} handleFavClick={this.handleFavClick} movies={this.state.moviesList}/>
            </Route>
            <Route path="/favorite">
                {/* <FavoriteMovieCascade movies={this.state.myMoviesList} handleRemove={this.removeMovie}/> */}
                <MovieCascade favorite={true} handleFavClick={this.removeMovie} movies={this.state.myMoviesList}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
