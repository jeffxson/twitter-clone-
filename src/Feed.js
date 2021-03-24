import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <TweetBox />

        <Post displayName='Mcbobby' username='madumcbobby' verified={false} text='man u needs to win this match' avatar='https://pbs.twimg.com/profile_images/1274124666454622208/i6qkr8VR_400x400.jpg' image='https://media.tenor.com/images/8a8ee78c396ee3b8e5f57a93dd839049/tenor.gif' />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed
