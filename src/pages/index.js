import React from "react"
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
        className=""
      >
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="w-full max-w-md max-h-screen mx-auto lg:w-1/2 lg:h-screen"
            variants={item}
            transition="easeInOut"
          >
            <Image
              className="object-cover w-full h-full shadow-xl"
              fluid={props.data.meOne.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            />
          </motion.div>
          <motion.div
            className="z-10 flex w-11/12 p-8 mx-auto mb-4 -mt-32 shadow-lg bg-empress-200 bg-gradient-br-empress-100 lg:w-1/2 lg:my-8 lg:-ml-8"
            variants={item}
            transition="easeInOut"
          >
            <div className="m-auto">
              <h1 className="m-0 text-6xl leading-none text-grey-light right-2 top-6 lg:right-5">
                Hello.
              </h1>
              <h2 className="text-3xl leading-none text-grey-light right-2 top-11 lg:right-5">
                I'm Dan Farrow.
              </h2>

              <ul className=" top-20 right-2 lg:right-5">
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
    meOne: file(relativePath: { eq: "me-02.jpg" }) {
      ...fluidImageHome
    }
  }
`
