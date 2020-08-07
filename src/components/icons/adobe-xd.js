import React from "react"

const IconAdobeXD = ( {className} ) => {
  return (
    <a
      aria-label="Visit www.adobe.com/uk/products/xd.html"
      className={"self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " + className}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.adobe.com/uk/products/xd.html/"
    >
      <svg
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 240 234"
        className="w-8 h-8 fill-current text-empress-600"
      >
        <path fillRule="evenodd" fill="#2E001E" d="M10 10h220v214H10z" />
        <path
          fill-rule="evenodd"
          fill="#FF2BC2"
          d="M0 0v234h240V0H0zm10 10h220v214H10V10z"
        />
        <path
          fill="#FF2BC2"
          d="M174.3 98.3c-1.5-.7-3.4-1-5.8-1-12.6 0-21 9.7-21 25.8 0 18.4 8.6 25.8 19.8 25.8 2.4 0 5-.3 6.9-1.1V98.3zm-44.8 25.6c0-23.3 15-41.5 39.6-41.5 2.1 0 3.2 0 5.2.2v-26c0-.6.5-1 1-1h16.1c.8 0 1 .3 1 .8v91.4c0 2.7 0 6.1.5 9.8 0 .7 0 .8-.6 1.1-8.4 4-17.2 5.8-25.6 5.8-21.7 0-37.2-13.4-37.2-40.6zm-34.1-16.2l28 54.3c.5.8.2 1.6-.6 1.6h-17.4c-1.1 0-1.6-.3-2.1-1.3-6.4-13.2-12.9-26.9-19.6-41.1h-.2c-6 13.4-12.6 28-19 41.2-.5.8-1 1.1-1.8 1.1H46.1c-1 0-1.1-.8-.6-1.4l27.4-52.7L46.4 57c-.6-.8 0-1.5.7-1.5h17.2c1 0 1.5.2 1.8 1.1C72.4 69.9 78.8 83 84.8 96.4h.2c5.8-13.2 12.2-26.5 18.3-39.6.5-.8.8-1.3 1.8-1.3h16.1c.8 0 1.1.6.6 1.5l-26.4 50.7z"
        />
      </svg>
    </a>
  )
}

export default IconAdobeXD
