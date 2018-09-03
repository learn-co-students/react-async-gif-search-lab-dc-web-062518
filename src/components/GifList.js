import React, {Component} from 'react'

class GifList extends Component {

  render(){
    return(
      <div>
        <h1>Gif List</h1>
        <ul>
          {/* {console.log(this.props)} */}
          {/* <li>MAP and RENDER EACH GIF using {this.props.gifsState.map...}</li> */}

          {this.props.gifsState.map(gif => <li key={gif.id}><img src={gif.url} alt={gif.id} /></li>)}
        </ul>
      </div>
    )
  }

}

export default GifList
