import React from "react"

const DatoCMS = ( {className} ) => {
  return (
    <a
      aria-label="Visit DatoCMS.com"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.datocms.com/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 94.652 95.261"
        className="w-8 h-8 fill-current text-empress-600"
      >
        <defs>
          <linearGradient
            id="a"
            y1="47.631"
            x2="94.652"
            y2="47.631"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff593d" />
            <stop offset="1" stopColor="#ff7751" />
          </linearGradient>
        </defs>
        <path
          d="M47.326 0H0v95.261h47.326c23.67 0 47.326-21.326 47.326-47.624S71 0 47.326 0zm0 69.274a21.644 21.644 0 1121.65-21.637 21.635 21.635 0 01-21.65 21.637z"
          fill="url(#a)"
        />
      </svg>
    </a>
  )
}

export default DatoCMS
