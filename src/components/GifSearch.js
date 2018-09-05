import React from 'react'

const GifSearch = props => {
    console.log(props)
    return(
      <form onSubmit={props.onSubmit}>
        <input type="text"/>
        <input type="submit"/>
      </form>
    )
}

export default GifSearch
