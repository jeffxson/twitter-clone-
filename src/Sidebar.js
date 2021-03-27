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

      {/* Button -> Tweet*/}
      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>

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
