import React from "react"

const IconWordPress = ( {className} ) => {
  return (
    <a
      aria-label="Visit Timber docs"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      target="_blank"
      rel="noopener noreferrer"
      href="https://timber.github.io/docs/"
    >
      <svg
        viewBox="0 0 24.6 30"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-current text-empress-600"
      >
        <g fill="#1dd186">
          <polygon class="st0" points="24.6,26.4 23.1,24.4 14.1,24.4 14.1,22.2 21.4,22.2 19.9,20.2 14.1,20.2 14.1,18.1 21.7,18.1 
	20.3,16.1 14.1,16.1 14.1,13.9 18.8,13.9 17.3,11.9 14.1,11.9 14.1,9.8 18.5,9.8 17.1,7.8 14.1,7.8 14.1,5.6 15.6,5.6 14.2,3.6 
	14.1,3.6 14.1,0 7.5,9.2 11.2,9.2 3.8,19.6 7.6,19.6 0,30 14.1,30 14.1,26.4 "/>
        </g>
      </svg>
    </a>
  )
}

export default IconWordPress
