import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import Nav from "../components/nav"
import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header className="relative md:p-0 md:w-1/3 md:h-screen md:bg-tapa-900">
    <div className="md:fixed md:top-0 md:left-0 md:w-1/3">
      <div className="flex">
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
