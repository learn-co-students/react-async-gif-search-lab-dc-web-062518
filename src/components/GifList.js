import React, {Component} from 'react'
export default class GifList extends Component{

  render(){
    // var GifPlayer = require('react-gif-player')
    // var Gif = require('react-gif');
    return(
      <div>
        {console.log(this.props.gifs[0].images.fixed_height_still)}
        // <GifPlayer src={require(this.props.gifs[0].images.fixed_height_still)} />
        // <GifPlayer src={require(this.props.gifs[1].images.fixed_height_still)} />
        // <GifPlayer src={require(this.props.gifs[2].images.fixed_height_still)} />

      </div>
    )
  }
}
