import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import VeriedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PublishIcon from '@material-ui/icons/Publish'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://pbs.twimg.com/profile_images/1348732006067265538/CYBQTWuM_400x400.jpg' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Mcbobby{' '}
              <span className='post__headerSpecial'>
                <VeriedUserIcon className='post__badge' /> @MaduMcbobby
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>
              Background-color: red; Thinking, maybe I should be using the
              border way from now on
            </p>
          </div>
        </div>
        <img
          src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
