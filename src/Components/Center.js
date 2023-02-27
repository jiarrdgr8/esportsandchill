import React from 'react'

function Center() {
  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/-U7dH7eCBDw" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
      <iframe src="https://player.twitch.tv/?channel=epulzegaming&parent=localhost:3000" 
        frameborder="0" 
        allowfullscreen="true" 
        scrolling="no" 
        height="378" 
        width="620">
      </iframe>

    </div>
  )
}

export default Center