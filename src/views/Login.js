import map from 'lodash/map'
import React, { Component } from 'react'
import { GenericCard } from '../components/GenericCard'
import { Helmet } from 'react-helmet'
import genericCardData from '../data/genericCardData'
import '../styles/login.css'
import { logPageView } from '../utils/analytics'
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import iconStyles from '../styles/index.css';

class Login extends Component {
  state = { topCoord: null }

  componentDidMount () {
    this.setState({
      topCoord: this.refs.homepageContainer.offsetTop
    })
    logPageView()
  }

  render () {
    return (




      <div
        ref='homepageContainer'
        className='container'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >

        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Helmet>
            <title>Home | CS 476 Project</title>
          </Helmet>
          <div className='col s12'>
            <h2 style={{ flex: '1 100%' }}>Hello!!!</h2>
          </div>

          <div>
          <Avatar
          icon={<HardwareVideogameAsset />}
          size={300}

          />
          </div>

          <div>
          <RaisedButton

          label="Login With Discord"
          width={'300px'}
          primary={true}
          style={iconStyles}

          />


          </div>






          {map(
            genericCardData,
            ({ hoverable, link, title, description }, key) => {
              return (
                <div
                  key={key}
                  className='col s12 m4 flex-div home-card-container'
                >
                <div>
                  <GenericCard
                   cardTitle={title}
                    link={link}
                    className={hoverable ? 'hoverable' : ''}

                  >
                    {description}
                  </GenericCard>
                  </div>
                </div>
              )
            }
          )}
        </div>



      </div>
    )
  }
}

export default Login
