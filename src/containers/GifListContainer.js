import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  fetchGifs = (gifType) => {
    fetch (`http://api.giphy.com/v1/gifs/search?q=${gifType}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(json =>
      this.setState(
        {gifs: json.data.slice(0,3)}
      )
    )
  }

  componentDidMount() {
    this.fetchGifs("cactus")
  }

  searchGif = (event) => {
    event.preventDefault()
    event.persist()
    console.log(event.target.querySelector('input').value)
    this.fetchGifs(event.target.querySelector('input').value)
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch onSubmit={this.searchGif}/>
      </div>
    )
  }


}
