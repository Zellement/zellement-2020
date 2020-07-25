import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "../components/nav"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header className="relative md:p-0 md:w-1/4 md:h-screen">
    <div className="md:fixed md:top-0 md:left-0 md:w-1/4">
      <div className="flex md:mb-8">
        <Logo />
      </div>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
