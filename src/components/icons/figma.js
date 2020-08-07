import React from "react"

const IconFigma = ( {className} ) => {
  return (
    <a
      aria-label="Visit www.figma.com"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.figma.com/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
        className="w-8 h-8 fill-current text-empress-600"
      >
        <defs />
        <path
          fill="#0acf83"
          d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
        />
        <path
          fill="#a259ff"
          d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
        />
        <path
          fill="#f24e1e"
          d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
        />
        <path
          fill="#ff7262"
          d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
        />
        <path
          fill="#1abcfe"
          d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
        />
      </svg>
    </a>
  )
}

export default IconFigma
