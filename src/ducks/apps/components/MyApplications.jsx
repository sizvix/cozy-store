import React, { Component } from 'react'

import { translate } from 'cozy-ui/react/I18n'
import Spinner from 'cozy-ui/react/Spinner'

import ApplicationRouting from './ApplicationRouting'
import Sections from './Sections'

import getFilteredAppsFromSearch from 'lib/getFilteredAppsFromSearch'

export class MyApplications extends Component {
  constructor (props) {
    super(props)
    props.fetchInstalledApps()

    this.onAppClick = this.onAppClick.bind(this)
  }

  onAppClick (appSlug) {
    this.props.history.push(`/myapps/${appSlug}`)
  }

  render () {
    const { t, location, installedApps, isFetching, fetchError, actionError } = this.props
    const filteredApps = getFilteredAppsFromSearch(
      installedApps, location && location.search
    )
    return (
      <div className='sto-myapps'>
        {this.props.match.isExact ? (
          <div>
            <h2 className='sto-myapps-title'>{t('myapps.title')}</h2>
            <div className='sto-myapps-sections'>
              {!isFetching &&
                <Sections
                  apps={filteredApps}
                  error={fetchError}
                  onAppClick={this.onAppClick}
                />
              }
            </div>
          </div>
        ) : null}

        <ApplicationRouting
          installedApps={filteredApps}
          isFetching={isFetching}
          actionError={actionError}
          installApp={this.props.installApp}
          uninstallApp={this.props.uninstallApp}
          parent='myapps'
        />

        {isFetching && (
          <Spinner size='xxlarge' loadingType='appsFetching' middle='true' />
        )}
      </div>
    )
  }
}

export default translate()(MyApplications)
