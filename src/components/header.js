import React from "react"
import PropTypes from "prop-types"
import Nav from "../components/nav"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header className="relative md:p-0 md:w-1/4 md:h-screen md:fixed md:top-0 md:left-0">
      <div className="flex pb-4 pr-1 md:mb-8">
        <Logo />
      </div>
      <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
