import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
      <GifSearch fetchGifs={this.fetchGifs}/>
      <GifList gifsState={this.state.gifs}/>
      </div>
    )
  }

  // submitHandler = (value) => {
  //   console.log('value', value);
  //   this.setState({
  //     searchQuery: value
  //   })
  // }

  fetchGifs = (searchQuery) => {
    console.log('query', searchQuery);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(gifs => {
      this.setState({
        gifs: gifs.data.map( gif => ({ url: gif.images.original.url }) )
      })
      // console.log(gifs.data)
      // debugger
    })
  }

  componentDidMount(){
    this.fetchGifs()
  }


}

export default GifListContainer
