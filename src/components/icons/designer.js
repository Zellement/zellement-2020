import React from "react"
import { Link } from "gatsby"

const IconDesigner = ( {className} ) => {
  return (
    <Link
      aria-label="Visit the Developer page"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      activeClassName="active"
      to="/designer"
    >
        <svg
          height="454.633"
          viewBox="0 0 512 454.633"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-current text-empress-600"
        >
          <path d="M202.271 243.812c-9.741 10.73-12.13 18.428-24.884 38.588 8.237 5.752 24.104 19.055 35.095 41.959 21.953-12.592 32.188-14.514 43.821-24.309C332.24 236.092 518.244 6.836 511.839.204c-6.766-7.05-242.704 170.268-309.568 243.608zM155.442 300.209c-32.998-5.832-65.547 15.028-87.288 67.147C46.382 419.471 7.532 440.337.001 439.061c40.553 14.67 164.202 52.194 194.939-90.655-13.037-34.26-39.498-48.197-39.498-48.197z" />
        </svg>
    </Link>
  )
}

export default IconDesigner
