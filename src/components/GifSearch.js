import React, {Component} from 'react'

export default class GifSearch extends Component{
  constructor(){
    super()
    this.state = {
      searchInput: ''
    }
  }

  render(){
    return(
      <div>
        <h4>Enter a search term</h4>
        <form onSubmit={(e)=>{
          e.preventDefault()
          this.props.submitHandler(this.state.searchInput)}} >
          <input type="text" value={this.state.searchInput} onChange={(e)=> this.setState({searchInput: e.target.value})} />
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}
