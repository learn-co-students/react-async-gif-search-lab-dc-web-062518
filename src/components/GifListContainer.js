import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      gifs: [],
    }
  }

  componentDidMount() {
    this.fetchGifs("nothing")
  }

  fetchGifs(searchTerm) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm.split(" ").join("_")}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(r => r.json())
      .then(json => this.setState({gifs: json.data.slice(0,3)}))
  }


  submitSearchTerm = (event) => {
    event.preventDefault()
    event.persist()
    console.log(event.target.querySelector('input').value)
    this.fetchGifs(event.target.querySelector('input').value)
  }

  render() {
    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch submitSearchTerm={this.submitSearchTerm} />
      </div>
    )
  }
}
