import React, {Component} from 'react'
export default class GifList extends Component{

  render(){
    // var GifPlayer = require('react-gif-player')
    // var Gif = require('react-gif');
    // <GifPlayer src={require(this.props.gifs[0].images.fixed_height_still)} />
    // <GifPlayer src={require(this.props.gifs[1].images.fixed_height_still)} />
    // <GifPlayer src={require(this.props.gifs[2].images.fixed_height_still)} />
    return(
      <div>
        {console.log(this.props.gifs[0].images.fixed_height_still)}
        <h1>GIF1</h1>
        <h1>GIF2</h1>
        <h1>GIF3</h1>

      </div>
    )
  }
}
