import React from "react"
import { Link } from "gatsby"
import Social from "../components/social"

const Nav = class extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""
    return (
      <>
        <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
          <div
            className={`navigation-wrapper navigation-wrapper--${menuActive}`}
          >
            <ul className="md:flex md:w-full md:flex-col md:justify-start md:items-stretch md:text-right">
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/developer/"
                >
                  Developer
                </Link>
              </li>
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/designer/"
                >
                  Designer
                </Link>
              </li>
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/manager/"
                >
                  Manager
                </Link>
              </li>
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/musician/"
                >
                  Musician
                </Link>
              </li>
              <li>
                <Link
                  className="navigation-wrapper__link"
                  onClick={this.toggleMenu}
                  activeClassName="is-active"
                  to="/hobbyist/"
                >
                  Hobbyist
                </Link>
              </li>
            </ul>
            <Social />
          </div>
          <div
            aria-label="Navigation menu button"
            tabIndex={0}
            role="button"
            className={`${burgerActive} navigation-button`}
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
          >
            <div className={`navigation-button__inside ${burgerActive}`}>
              <span className="left-0 navigation-button__lines navigation-button__line-1"></span>
              <span className="left-0 mt-2 navigation-button__lines navigation-button__line-2"></span>
              <span className="left-0 mt-4 navigation-button__lines navigation-button__line-3"></span>
              <span className="right-0 navigation-button__lines navigation-button__line-4"></span>
              <span className="right-0 mt-2 navigation-button__lines navigation-button__line-5"></span>
              <span className="right-0 mt-4 navigation-button__lines navigation-button__line-6"></span>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Nav
