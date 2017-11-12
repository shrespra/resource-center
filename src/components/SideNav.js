
import map from 'lodash/map'
import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './sideBarItem'
import { List } from 'material-ui/List'
import links from '../data/linksData'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  state = { open: false }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
        <AppBar

          className='app-bar'
          iconElementRight={
            <h1 className='hide-on-small-only'>CS 476</h1>
          }
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
          style={{ backgroundColor: '#fff', color: '#21412a' }}
        />
      
      </div>
    )
  }
}

export default SideNav
