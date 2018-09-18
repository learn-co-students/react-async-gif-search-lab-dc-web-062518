import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
constructor(){
  super()
    this.state={
      allGifs: [],
      threeGifs: [] ///use .slice(0,3) to show three elements
    }
}

handleSubmit = (e) => {
  e.preventDefault();
  let term = e.target.querySelector("input").value;
  let url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(url)
      .then(res => res.json())
        .then(json =>
          this.setState({
            allGifs: json.data.slice(0,3)
          })
)}

render(){
  return (
    <div>
      <ul>
        {this.state.allGifs.map(gif =>
          <li> < GifList gif={gif} key={gif.id} /> </li>
        )}
      </ul>
      < GifSearch onSubmit={this.handleSubmit}/>
    </div>
  )
}

  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
        .then(json =>
          this.setState({
            allGifs: json.data.slice(0,3),
          })
  )}





}


export default GifListContainer;
