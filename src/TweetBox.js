import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1348732006067265538/CYBQTWuM_400x400.jpg' />
          <input placeholder="What's happening?" type='text' />
        </div>
        <input
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
