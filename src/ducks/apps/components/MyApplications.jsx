/* global cozy */
import React, { Component } from 'react'

import { translate } from 'cozy-ui/react/I18n'
import withBreakpoints from 'cozy-ui/react/helpers/withBreakpoints'
import { Content } from 'cozy-ui/react/Layout'

import ApplicationRouting from './ApplicationRouting'
import Sections from './Sections'
import AppsLoading from 'ducks/components/AppsLoading'

import getFilteredAppsFromSearch from 'lib/getFilteredAppsFromSearch'
import OneAppLoading from 'ducks/components/OneAppLoading'

const { BarCenter } = cozy.bar

export class MyApplications extends Component {
  constructor(props) {
    super(props)
    this.onAppClick = this.onAppClick.bind(this)
    this.pushQuery = this.pushQuery.bind(this)
  }

  onAppClick(appSlug) {
    this.props.history.push(`/myapps/${appSlug}`)
  }

  pushQuery(query) {
    if (!query) return this.props.history.push('/myapps')
    this.props.history.push(`/myapps?${query}`)
  }

  render() {
    const {
      t,
      location,
      installedApps,
      isFetching,
      isAppFetching,
      fetchError,
      actionError,
      breakpoints = {}
    } = this.props
    const { isMobile } = breakpoints
    const query = !!location && location.search
    const filteredApps = getFilteredAppsFromSearch(installedApps, query)
    const title = <h2 className="sto-view-title">{t('myapps.title')}</h2>
    return (
      <Content className="sto-myapps">
        {isFetching && !RegExp('(.)*/myapps/(.)+').test(window.location) && <AppsLoading />}

        <div className="sto-list-container">
          {isMobile && <BarCenter>{title}</BarCenter>}
          <div className="sto-myapps-sections">
            {!isFetching && (
              <Sections
                apps={filteredApps}
                allApps={installedApps}
                error={fetchError}
                onAppClick={this.onAppClick}
                pushQuery={this.pushQuery}
                query={query}
              />
            )}
          </div>
        </div>

        <ApplicationRouting
          installedApps={filteredApps}
          isFetching={isFetching}
          isAppFetching={isAppFetching}
          actionError={actionError}
          uninstallApp={this.props.uninstallApp}
          fetchLatestApp={this.props.fetchLatestApp}
          parent="myapps"
        />
      </Content>
    )
  }
}

export default translate()(withBreakpoints()(MyApplications))
