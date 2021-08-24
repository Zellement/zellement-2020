import React from "react"

const IconSnipcart = ({ className }) => {
  return (
    <a
      aria-label="Visit Snipcart.com"
      className={
        "self-center w-8 h-8 ml-2 transform hover:-translate-y-1 hover:scale-105 " +
        className
      }
      target="_blank"
      rel="noopener noreferrer"
      href="https://snipcart.com/"
    >
      <svg
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        dataName="logosandtypes com"
        viewBox="0 0 150 150"
      >
        <defs />
        <g dataName="Layer 2">
          <path fill="none" d="M0 0h150v150H0z" dataName="Layer 3" />
        </g>
        <path
          fill="#f4e871"
          d="M126.71 36.44L82.07 10.55a16.08 16.08 0 00-14.28 0L23.15 36.44c-3.58 2.68-6.7 8-6.7 12.5v51.34a15.09 15.09 0 007.14 12l44.64 25.89a16.1 16.1 0 0014.29 0l44.64-25.89a15.12 15.12 0 007.14-12V48.94a18.67 18.67 0 00-7.59-12.5z"
        />
        <path
          fill="#2c2e31"
          d="M96.8 43.59h-.45c-11.15 0-17.85-2.68-17.85-11.16H74c0 8.92-6.7 11.16-17.86 11.16h-.89C41 43.59 37 48.5 37 56.98v10.26l73.21 21.43v4.47c0 6.25-4.46 8-13.39 8h-.89c-21.43 0-19.64 8-20.09 11.16h-.45c-.44-3.12 1.34-11.16-20.08-11.16h-.45c-8.93 0-13.39-2.23-13.39-8v-8H37v7.59c0 8.48 4.47 13.39 18.31 13.39 11.16 0 17.85 2.68 17.85 11.16h4.47c0-8.93 7.14-11.16 17.85-11.16h.89c14.29 0 18.31-4.91 18.31-13.39V83.8l-72.79-21v-6.27c0-6.25 4.47-8 13.4-8h.44c21.43 0 19.64-8 20.09-11.16h.45c.44 3.12-1.34 11.16 20.08 11.16h.45c8.93 0 13.39 2.23 13.39 8v8h4.47l.44-7.59c0-8.44-4.46-13.35-18.3-13.35z"
        />
      </svg>
    </a>
  )
}

export default IconSnipcart
