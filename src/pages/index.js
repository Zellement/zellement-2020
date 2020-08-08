import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Image from "gatsby-image"
import { Link } from "gatsby"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = (props) => {
  return (
    <>
      <SEO title="WordPress Developer & Front-end Developer Nottingham" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative md:h-screen md:overflow-y-auto bg-empress-300 custom-scroll"
      >
        <div className="absolute bottom-0 left-0 z-40 w-24 mb-32 -ml-6 transform rotate-10 polaroid shadow-lg">
          <Image
            fluid={props.data.meFive.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          />
        </div>
        <div className="absolute bottom-0 right-0 z-40 w-24 mb-40 -mr-2 transform -rotate-10 polaroid shadow-lg">
          <Image
            fluid={props.data.meSazOne.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          />
        </div>
        <div className="absolute bottom-0 right-0 z-40 w-24 mb-10 -mr-2 transform rotate-5 polaroid shadow-lg">
          <Image
            fluid={props.data.meTwo.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          />
        </div>
        <div className="relative flex flex-col overflow-x-hidden lg:flex-row">
          <motion.div
            className="relative w-full max-h-screen mx-auto h-80vh lg:w-3/4 lg:h-screen"
            variants={item}
            transition="easeInOut"
          >
            <Image
              className="object-cover w-full h-full"
              fluid={props.data.meFour.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            />
          </motion.div>
          <motion.div
            className="z-10 flex w-11/12 max-w-md p-8 mx-auto mb-4 -mt-32 shadow-lg bg-empress-200 bg-gradient-br-empress-100 md:-mt-48 lg:w-1/2 lg:my-8 lg:-ml-24 lg:my-auto lg:p-16"
            variants={item}
            transition="easeInOut"
          >
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
                  An average{" "}
                  <Link
                    className="text-empress-500 hover:text-orange-500"
                    to="/artist"
                  >
                    artist
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
          </motion.div>
        </div>
      </motion.section>
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
    meSazOne: file(relativePath: { eq: "me-saz-01.jpg" }) {
      ...fluidImageHome
    }
  }
`
