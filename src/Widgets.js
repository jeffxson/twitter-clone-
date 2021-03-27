import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'

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
      </div>
    </div>
  )
}

export default Widgets
