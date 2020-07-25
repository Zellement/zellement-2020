import React from "react"
import { Link } from "gatsby"

const Logo = () => (
    <Link
      to="/"
      className="inline-block mx-auto text-tapa-200 md:ml-auto md:mr-0"
      title="Go home"
    >
      <svg
        className="block w-8 h-8 mx-4 mt-4 fill-current text-tapa-400 hover:opacity-75"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 459.8 290.8"
        xmlSpace="preserve"
      >
        <path
          d="M1.3,0h458.5c-1.8,75.1-12.9,132.1-33.4,171c-20.5,38.9-50,66.8-88.4,83.8c-38.4,17-85.8,26.7-142.1,28.8
			c-56.3,2.2-121.6,3.3-195.9,3.3v-13.1c40.2-1.7,81.7-3.7,124.5-5.9c42.8-2.2,82.1-9.8,117.9-22.9c35.8-13.1,66.4-34.1,91.7-62.9
			c25.3-28.8,41-71.2,47.2-127.1H1.3V0z M335.4,290.8c6.1-7.9,15.5-16.8,28.2-26.9c12.7-10,26-15.1,40-15.1h56.3v41.9H335.4z"
        />
      </svg>
    </Link>
)

export default Logo
