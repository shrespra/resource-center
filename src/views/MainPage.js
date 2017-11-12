import map from 'lodash/map'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { GenericCard } from './../components/GenericCard'
import mainPageData from '../data/mainPageData'
import { logPageView } from '../utils/analytics'

class MainPage extends Component {
  state = { topCoord: null }

  componentDidMount () {
    this.setState({
      topCoord: this.refs.pageContainer.offsetTop
    })
    logPageView()
  }

  render () {
    return (
      <div
        ref='pageContainer'
        className='container'
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <Helmet>
          <title>MainPage | CS476</title>
        </Helmet>
        <div
          className='row flow-text'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <div className='col s12'>
            <h2 style={{ flex: '1 100%' }}>Servers</h2>
          </div>

          {map(
            mainPageData,
            ({ hoverable, link, cardTitle, description, contactInfo }, key) => {
              return (
                <div key={key} className='col s12 m6 flex-div'>
                  <GenericCard
                    link={link}
                    cardTitle={cardTitle}
                    className={hoverable ? 'hoverable' : ''}
                  >
                    {description}
                    {contactInfo !== undefined ? (
                      <div style={{ marginBottom: '0' }}>
                        <br />
                        {map(contactInfo, ({ link, linkText }, key) => {
                          return (
                            <p
                              style={{
                                margin: '0 10px'
                              }}
                              key={key}
                            >
                              <Link to={link}>{linkText}</Link>
                            </p>
                          )
                        })}
                      </div>
                    ) : null}
                  </GenericCard>
                </div>
              )
            }
          )}
        </div>
      </div>
    )
  }
}

export default MainPage
