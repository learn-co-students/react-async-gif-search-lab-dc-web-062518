import React from 'react'

const GifList = props => {

    return(
      <div>
       {props.gifs.map(gif =>
         <li><img src={gif.bitly_gif_url}/></li>
        )
       }
      </div>
    )
}

export default GifList
