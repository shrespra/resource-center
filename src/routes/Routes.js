import '../styles/App.css'
import '../styles/materialize-grid.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

/* Material-UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from '../components/fusTheme'

import SideNav from '../components/SideNav'

/* Import Views */

import Home from '../views/Login'
import NotFound from '../views/notFound'
import MainPage from '../views/MainPage'
import ScrollIntoView from '../components/ScrollIntoView'


injectTapEventPlugin()

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollIntoView>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <SideNav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/mainPage' component={MainPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </ScrollIntoView>
    </BrowserRouter>
  )
}

export default Routes
