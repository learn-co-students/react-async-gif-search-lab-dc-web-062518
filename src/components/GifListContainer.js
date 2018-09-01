import React, {Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component{
  constructor(){
    super()
    this.state={
      gifs: undefined
    }
  }

  submitHandler = (input)=>{
    let url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(r=> r.json())
    .then(gifs =>{
    let arr = []
      for (var i = 0; i < 3 ; i++) {
        arr.push(gifs.data[i])
      }
      this.setState({
        gifs: arr
      })
    })
  }

  render(){
    return(
      <div>
        <GifSearch submitHandler= {this.submitHandler} />

        {this.state.gifs !== undefined ? <GifList gifs = {this.state.gifs} /> : null}
      </div>
    )
  }
}
