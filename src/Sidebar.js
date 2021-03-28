import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/Notifications'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SidebarOption from './SidebarOption'
import { Button, Avatar } from '@material-ui/core'

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={SearchIcon} text='Explore' />
      <SidebarOption Icon={NotificationsNoneIcon} text='Notification' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarOption Icon={ListAltIcon} text='Lists' />
      <SidebarOption Icon={PermIdentityIcon} text='Profile' />
      <SidebarOption Icon={MoreHorizIcon} text='More' />

      <div className='button'>
        <div className='hide'>
          <svg
            viewBox='0 0 24 24'
            class='r-jwli3a r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue'
          >
            <g>
              <path d='M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z'></path>
            </g>
          </svg>
        </div>
        <div className='show'>
          <Button variant='outlined' className='sidebar__tweet' fullWidth>
            Tweet
          </Button>
        </div>
      </div>

      <div className='foot'>
        <div className='about'>
          <Avatar src='https://pbs.twimg.com/profile_images/1348732006067265538/CYBQTWuM_400x400.jpg' />
          <div>
            <p className='display'>Munachi</p>
            <p className='user'>@Munachiiso</p>
          </div>
        </div>
        <div className='dot'>
          <p>...</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
