import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'
import { Avatar, Button } from '@material-ui/core'
import VeriedUserIcon from '@material-ui/icons/VerifiedUser'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <div className='header'>
          <h2>Trends for you</h2>
          <SettingsIcon className='setting' />
        </div>
        <div className='body'>
          <div className='trend'>
            <p>#BugsBunnyChallenge</p>
            <p>...</p>
          </div>
        </div>
        <div className='body'>
          <div className='trend'>
            <p>Seuz Canal</p>
            <p>...</p>
          </div>
        </div>
        <div className='body'>
          <div className='trend'>
            <p>Ebuka</p>
            <p>...</p>
          </div>
        </div>
        <div className='body'>
          <div className='trend'>
            <p>Nationwide</p>
            <p>...</p>
          </div>
        </div>
        <div className='body'>
          <div className='trend'>
            <p>#PayHouseOfficers</p>
            <p>...</p>
          </div>
        </div>
        <div className='more'>
          <p>Show more</p>
        </div>
      </div>

      <div className='follow'>
        <div className='header'>
          <h2>Who To Follow</h2>
        </div>
        <div className='people'>
          <div className='about'>
            <div className='pix'>
              <Avatar src='https://pbs.twimg.com/profile_images/958018296087040000/Y7mnhw8n_400x400.jpg' />
            </div>
            <div className='name'>
              <p className='display'>
                PFL MMA <VeriedUserIcon className='post__badge' />
              </p>
              <p className='user'>@ProFightLeague</p>
            </div>
          </div>
          <div className='button'>
            <Button className='follow__button'>Follow</Button>
          </div>
        </div>

        <div className='people'>
          <div className='about'>
            <div className='pix'>
              <Avatar src='https://pbs.twimg.com/profile_images/1329434147627134978/giLcbo8K_400x400.jpg' />
            </div>
            <div className='name'>
              <p className='display'>
                Declan Rice <VeriedUserIcon className='post__badge' />
              </p>
              <p className='user'>@_DeclanRice</p>
            </div>
          </div>
          <div className='button'>
            <Button className='follow__button'>Follow</Button>
          </div>
        </div>

        <div className='people'>
          <div className='about'>
            <div className='pix'>
              <Avatar src='https://pbs.twimg.com/profile_images/1367574212630749188/gcm_yjy6_400x400.jpg' />
            </div>
            <div className='name'>
              <p className='display'>
                Daily Devotional <VeriedUserIcon className='post__badge' />
              </p>
              <p className='user'>@streetchurchh</p>
            </div>
          </div>
          <div className='button'>
            <Button className='follow__button'>Follow</Button>
          </div>
        </div>

        <div className='more'>
          <p>Show more</p>
        </div>
      </div>

      <div className='footer'>
        <p>
          <a href='#'>Terms of Service</a>
        </p>
        <p>
          <a href='#'>Privacy Policy</a>
        </p>
        <p>
          <a href='#'>Cookie Policy</a>
        </p>
        <p>
          <a href='#'>Ads info</a>
        </p>
        <p>
          <a href='#'>More ...</a>
        </p>
        <p>
          <a href='#'>&copy; 2021 Twitterr, Inc</a>
        </p>
      </div>
    </div>
  )
}

export default Widgets
