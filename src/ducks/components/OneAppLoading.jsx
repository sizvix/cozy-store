import React, { Component } from 'react'
import withBreakpoints from 'cozy-ui/react/helpers/withBreakpoints'

export const Placeholder = ({ width, height, autoMargin, style }) => {
  const widthStyle = Array.isArray(width)
    ? `${Math.random() * (width[1] - width[0]) + width[0]}rem`
    : width
  if (style == undefined) style = {}
  style = {
    ...style,
    width: widthStyle,
    height
  }
  if (autoMargin) style.margin = 'auto'
  return <span className="sto-sections-placeholder" style={style} />
}

export class AppsLoading extends Component {
  shouldComponentUpdate() {
    return false // always render this view only once
  }

  render() {
    return (
      <div className="sto-modal-page-app --loading">
        <div className="sto-app">
          <a className="sto-app-back" href="#/discover/discover">
            <Placeholder width="9rem" height="1.75rem" />
          </a>
          <div className="sto-app-header">
            <div className="sto-app-header-icon">
              <Placeholder width="8rem" height="7rem" />
            </div>
            <div className="sto-app-header-content">
              <h2 className="sto-app-header-title">
                <Placeholder width="12rem" height="1.5rem" />
              </h2>
              <p className="sto-app-header-description">
                <Placeholder width="30rem" height="1.25rem" />
              </p>
              <Placeholder
                width="8rem"
                height="2.5rem"
                style={{ display: 'inline-block' }}
              />
              <Placeholder
                width="8rem"
                height="2.5rem"
                style={{ display: 'inline-block' }}
              />
            </div>
          </div>
          <div className="sto-app-images">
            <div className="sto-app-big-images">
              <Placeholder width="10rem" height="8rem" />
              <Placeholder width="10rem" height="8rem" />
            </div>
            <div className="sto-app-small-images">
              <Placeholder width="5rem" height="4rem" />
              <Placeholder width="5rem" height="4rem" />
            </div>
          </div>
          <div className="sto-app-details">
            <div className="sto-app-descriptions">
              <div className="sto-app-description">
                <h3 className="u-title-h3">Description</h3>
                <div>
                  <p>
                    <Placeholder width={[8, 15]} height="1.25rem" />
                  </p>
                  <ul>
                    <li>
                      <Placeholder width={[15, 30]} height="1.25rem" />
                    </li>
                    <li>
                      <Placeholder width={[15, 30]} height="1.25rem" />
                    </li>
                    <li>
                      <Placeholder width={[15, 30]} height="1.25rem" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sto-app-additional-details">
              <h3 className="u-title-h3">Informations</h3>
              <div className="sto-app-info">
                <div className="sto-app-info-header">Categories</div>
                <div className="sto-app-info-content">
                  <Placeholder width={[6, 10]} height="1.25rem" />
                </div>
              </div>
              <div className="sto-app-info">
                <div className="sto-app-info-header">Version</div>
                <div className="sto-app-info-content">
                  <Placeholder width={[6, 10]} height="1.25rem" />
                </div>
              </div>
              <div className="sto-app-info">
                <div className="sto-app-info-header">Languages</div>
                <div className="sto-app-info-content">
                  <Placeholder width={[6, 10]} height="1.25rem" />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="sto-app-permissions-button c-btn--3Vk8q c-btn--subtle--225Zu"
                >
                  <span>
                    <span>Show permissions</span>
                  </span>
                </button>
              </div>
              <div>
                <h3 className="u-title-h3">Developer Details</h3>
                <div className="sto-app-developer-infos">
                  <span>
                    <Placeholder width={[8, 12]} height="1.25rem" />
                  </span>
                  <a href="#" className="sto-app-developer-link">
                    <Placeholder width={[8, 16]} height="1.25rem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withBreakpoints()(AppsLoading)
