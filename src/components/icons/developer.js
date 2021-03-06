import React from "react"
import { Link } from "gatsby"

const IconDeveloper = ( {className} ) => {
  return (
    <Link
      aria-label="Visit the Designer page"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      activeClassName="active"
      to="/developer"
    >
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-current text-empress-600"
      >
        <path
          fill="#635d57"
          className="heroicon-ui"
          d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 6.7 8.7L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
        />
      </svg>
    </Link>
  )
}

export default IconDeveloper
