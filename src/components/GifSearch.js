import React from 'react'

export default class GifSearch extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submitSearchTerm}>
        <input type="text"/>
        <input type="submit"/>
      </form>
    )
  }
}
