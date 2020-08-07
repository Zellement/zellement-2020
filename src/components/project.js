import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

const DevelopmentWork = ({
  devTitle,
  devURL,
  devDisplayURL,
  devDescription,
  devClasses,
  date,
  children,
}) => {
  return (
    <div className={"xax-w-3xl " + devClasses}>
      <div className="flex flex-col items-stretch justify-between max-w-3xl lg:flex-row lg:flex-wrap w-100">
        <div>
          <h3 className="mt-2 mb-1 text-2xl">{devTitle}</h3>
          <p className="text-xs tracking-widest uppercase text-empress-500">
            <span className="">{date}</span> &bull;{" "}
            <OutboundLink
              className=" hover:text-orange-500 text-empress-500"
              target="_blank"
              rel="noopener noreferrer"
              href={devURL}
            >
              {devDisplayURL}{" "}
            </OutboundLink>
          </p>
        </div>

        <div className="align-right">
          <div className="flex pt-3 md:pt-8">{children}</div>
        </div>
      </div>

      <div className="pt-8 w-100">
        <p className="max-w-lg">{devDescription}</p>
      </div>
    </div>
  )
}

export default DevelopmentWork
