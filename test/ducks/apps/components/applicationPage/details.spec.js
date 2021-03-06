'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { tMock } from '../../../../jestLib/I18n'
import { Details } from 'ducks/apps/components/ApplicationPage/Details'

import mockApp from '../../_mockPhotosRegistryVersion'
import mockKonnector from '../../_mockPKonnectorTrinlaneRegistryVersion'

const appManifest = mockApp.manifest
const konnectorManifest = mockKonnector.manifest

const getAppProps = () => {
  return {
    t: tMock,
    description: appManifest.locales.en.long_description,
    changes: appManifest.locales.en.changes,
    app: {
      categories: appManifest.categories,
      langs: appManifest.langs,
      version: '0.1.0-dev123',
      developer: appManifest.developer
    },
    mobileApps: [
      { type: 'ios', url: '' },
      { type: 'android', url: 'https://mock.app' }
    ]
  }
}

const getKonnectorProps = () => {
  return {
    t: tMock,
    description: konnectorManifest.locales.en.long_description,
    changes: konnectorManifest.locales.en.changes,
    app: {
      categories: konnectorManifest.categories,
      langs: konnectorManifest.langs,
      developer: konnectorManifest.developer
    }
  }
}

describe('ApplicationPage details component', () => {
  it('should be rendered correctly with provided app', () => {
    const component = shallow(<Details {...getAppProps()} />).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should be rendered correctly with provided konnector', () => {
    const component = shallow(<Details {...getKonnectorProps()} />).getElement()
    expect(component).toMatchSnapshot()
  })

  it('should be rendered correctly provided app with no description, no platforms, no langs and no changes no version', () => {
    const appProps = Object.assign({}, getAppProps())
    appProps.description = ''
    appProps.changes = ''
    appProps.langs = []
    appProps.mobileApps = []
    appProps.developer = {}
    appProps.version = ''
    const component = shallow(<Details {...appProps} />).getElement()
    expect(component).toMatchSnapshot()
  })
})
