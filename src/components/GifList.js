import React from 'react';

const GifList = (props) => {
  return (
    <img src={props.gif.images.original.url}/>
  )
}


export default GifList;
