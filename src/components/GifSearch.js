import React, {Component} from 'react'

class GifSearch extends Component {

  state = {
    searchQuery: ''
  }

  render(){
    return(
      <form
        onSubmit={(event) =>{
          event.preventDefault()
          this.props.fetchGifs(this.state.searchQuery)
        }}>
        <input
          type='text'
          name='search'
          value={this.state.searchQuery}
          onChange={(event) => {
            this.setState({
              searchQuery: event.target.value
            })
          }} />
        <input
          type='submit'
          value='submit' />
      </form>
    )
  }
}

export default GifSearch
