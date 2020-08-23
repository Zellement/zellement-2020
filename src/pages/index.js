import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { Link } from "gatsby"

const IndexPage = (props) => {
  return (
    <>
      <SEO title="Freelance WordPress Developer & Web Designer Nottingham" />
      <section className="relative min-h-screen overflow-x-hidden overflow-y-hidden bg-empress-300">
        <div className="absolute bottom-0 left-0 z-20 w-32 p-2 pb-4 mb-32 -ml-12 transform shadow-lg bg-yellow-polaroid xl:p-4 xl:pb-12 bg-radial-orange-300 rotate-10 md:left-auto md:right-0 md:-mr-4 md:mb-64 md:w-32 lg:m-0 lg:top-1/2 lg:-translate-y-96 lg:bottom-auto xl:w-48">
          <Image
            fluid={props.data.meEight.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            className="filter-sepia"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-20 w-32 p-2 pb-4 mb-40 -mr-10 transform shadow-lg bg-yellow-polaroid xl:p-4 xl:pb-12 bg-radial-orange-300 -rotate-10 md:mb-32 lg:m-0 lg:bottom-1/2 lg:translate-y-84 xl:w-40 xl:mb-48">
          <Image
            fluid={props.data.meSazOne.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            className="filter-sepia"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-20 w-40 p-2 pb-4 mb-2 -mr-16 transform shadow-lg bg-yellow-polaroid xl:p-4 xl:pb-12 bg-radial-orange-300 rotate-5 md:-mb-4 lg:m-0 lg:bottom-1/2 lg:translate-y-128 xl:translate-y-96 xl:w-48">
          <Image
            fluid={props.data.meTwo.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            className="filter-sepia"
          />
        </div>
        <div className="relative flex flex-col overflow-x-hidden lg:flex-row">
          <div className="relative w-full max-h-screen mx-auto h-80vh lg:w-3/4 lg:h-screen">
            <Image
              className="object-cover w-full h-full"
              fluid={props.data.meFour.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            />
          </div>
          <div className="z-10 flex w-11/12 max-w-md p-8 mx-auto mb-4 -mt-32 overflow-hidden shadow-lg bg-empress-200 bg-gradient-br-empress-100 md:-mt-48 lg:w-1/2 lg:my-8 lg:-ml-24 lg:my-auto lg:p-16">
            <div className="m-auto lg:m-0">
              <h1 className="m-0 text-6xl leading-none text-grey-light right-2 top-6 lg:right-5">
                Hello.
              </h1>
              <h2 className="text-3xl leading-none text-grey-light right-2 top-11 lg:right-5">
                I'm Dan Farrow.
              </h2>

              <ul className="">
                <li className="mb-1">
                  A{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/developer"
                  >
                    WordPress developer
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  A{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/developer"
                  >
                    front-end developer
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  An occasional{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/designer"
                  >
                    designer
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  An experienced{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/manager"
                  >
                    manager
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  A budding{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/musician"
                  >
                    musician
                  </Link>
                  .
                </li>
                <li className="mb-1">
                  And a simple{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/hobbyist"
                  >
                    hobbyist
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImageHome on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    meOne: file(relativePath: { eq: "me-01.jpg" }) {
      ...fluidImageHome
    }
    meTwo: file(relativePath: { eq: "me-02.jpg" }) {
      ...fluidImageHome
    }
    meThree: file(relativePath: { eq: "me-03.jpg" }) {
      ...fluidImageHome
    }
    meFour: file(relativePath: { eq: "me-04.jpg" }) {
      ...fluidImageHome
    }
    meFive: file(relativePath: { eq: "me-05.jpg" }) {
      ...fluidImageHome
    }
    meSix: file(relativePath: { eq: "me-06.jpg" }) {
      ...fluidImageHome
    }
    meSeven: file(relativePath: { eq: "me-07.jpg" }) {
      ...fluidImageHome
    }
    meEight: file(relativePath: { eq: "me-08.jpg" }) {
      ...fluidImageHome
    }
    meSazOne: file(relativePath: { eq: "me-saz-01.jpg" }) {
      ...fluidImageHome
    }
  }
`
