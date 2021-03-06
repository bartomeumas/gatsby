import * as React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"

import SideBar from "./SideBar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
