import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'

import { translate } from 'cozy-ui/react/I18n'

import ChannelRoute from './ChannelRoute'
import PermissionsRoute from './PermissionsRoute'
import ConfigureRoute from './ConfigureRoute'
import InstallRoute from './InstallRoute'
import UninstallRoute from './UninstallRoute'
import ApplicationPage from '../ApplicationPage'

export class ApplicationRouting extends Component {
  mainPage = React.createRef()

  getAppFromMatchOrSlug = (match, slug) => {
    const appsArray = this.props.apps || this.props.installedApps || []
    const appSlug = slug || (match && match.params && match.params.appSlug)
    if (!appsArray.length || !appSlug) return null
    const app = appsArray.find(app => app.slug === appSlug)
    return app
  }

  redirectTo = target => {
    this.props.history.replace(target)
    return null
  }

  render() {
    const {
      fetchLatestApp,
      isFetching,
      isAppFetching,
      isInstalling,
      isUninstalling,
      parent,
      actionError,
      fetchError
    } = this.props
    return (
      <div className="sto-modal-page" ref={this.mainPage}>
        <Route
          path={`/${parent}/:appSlug`}
          render={({ match }) => {
            return (
              <ApplicationPage
                matchRoute={match}
                parent={parent}
                pauseFocusTrap={!match.isExact}
                isFetching={isFetching}
                getApp={this.getAppFromMatchOrSlug}
                redirectTo={this.redirectTo}
                mainPageRef={this.mainPage}
              />
            )
          }}
        />
        <ChannelRoute
          actionError={actionError}
          fetchError={fetchError}
          fetchLatestApp={fetchLatestApp}
          getApp={this.getAppFromMatchOrSlug}
          isAppFetching={isAppFetching}
          isFetching={isFetching}
          isInstalling={isInstalling}
          parent={parent}
          redirectTo={this.redirectTo}
        />
        <InstallRoute
          actionError={actionError}
          getApp={this.getAppFromMatchOrSlug}
          isFetching={isFetching}
          isInstalling={isInstalling}
          parent={parent}
          redirectTo={this.redirectTo}
        />
        <UninstallRoute
          actionError={actionError}
          getApp={this.getAppFromMatchOrSlug}
          isFetching={isFetching}
          isUninstalling={isUninstalling}
          parent={parent}
          redirectTo={this.redirectTo}
        />
        <PermissionsRoute
          getApp={this.getAppFromMatchOrSlug}
          isFetching={isFetching}
          parent={parent}
          redirectTo={this.redirectTo}
        />
        <ConfigureRoute
          getApp={this.getAppFromMatchOrSlug}
          isFetching={isFetching}
          parent={parent}
          redirectTo={this.redirectTo}
        />
      </div>
    )
  }
}

export default withRouter(translate()(ApplicationRouting))
