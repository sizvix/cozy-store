import React from 'react'
import { Route } from 'react-router-dom'

import ApplicationPage from '../ApplicationPage'
import OneAppLoading from 'ducks/components/OneAppLoading'

export const AppRoute = ({ parent, getApp, isFetching, redirectTo }) =>{ console.log(parent, getApp, isFetching, redirectTo); return (
  <Route
    path={`/${parent}/:appSlug`}
    render={(props) => {
      if(isFetching) return <OneAppLoading />
      const app = getApp(props.match)
      if (!app) return redirectTo(`/${parent}`)
      return <ApplicationPage app={app} parent={parent} />
    }}
  />
) }

export default AppRoute
