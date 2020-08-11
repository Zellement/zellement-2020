import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
      <SEO title="Musician || Dan Farrow" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-8 bg-empress-200 bg-gradient-r-empress-100 lg:p-16"
      >
        <motion.div variants={item} transition="easeInOut" className="max-w-lg">
          <p className="text-xs tracking-widest uppercase">
            <Link className="hover:text-orange-500" to="/">
              Dan Farrow
            </Link>{" "}
            &raquo; Musician
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Musician.</h1>
          <p className="max-w-3xl py-3 text-lg">
            I'm hugely into a select few genres of music, but mostly a massive
            metalhead. From old school metal bands like{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.slayer.net"
            >
              Slayer
            </OutboundLink>{" "}
            and{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.metallica.com"
            >
              Metallica
            </OutboundLink>
            , all the way through to heavier bands such as{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lamb-of-god.com/"
            >
              Lamb of God
            </OutboundLink>
            ,{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://behemoth.pl/"
            >
              Behemoth
            </OutboundLink>{" "}
            and{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.sylosis-band.com/"
            >
              Sylosis
            </OutboundLink>
            .
          </p>

          <p className="max-w-3xl pb-3 text-md">
            In addition to metal, I've found myself listening to a lot of
            "modern classical", much of which consists of film and TV music. I
            can't get enough of my{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/playlist/42p1sRbO9jR4wFq8LDnAXh/"
            >
              self-proclaimed classical playlist
            </OutboundLink>{" "}
            on Spotify, a lot of which comes in the form on Hans Zimmer.
          </p>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">Guitarist</h2>

          <p className="max-w-lg mb-4 text-lg">
            Since 2011, I have been the guitarist for a Nottingham based metal
            band called{" "}
            <OutboundLink
              className="text-orange-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.ropewalkband.com"
            >
              Ropewalk
            </OutboundLink>
            .
          </p>

          <p className="max-w-lg mb-8">
            I'm a self-taught guitarist since picking up a brand new{" "}
            <em>Jay Turser</em> 6 string in my late teens (my first electric
            instrument was actually a 5 string bass). I learned tab to start
            off, and still only know about 3 chords. Our singer left in 2016,
            and since then I've taken on the vocals role too.
          </p>

          <div className="relative">
            <Img
              className="shadow-lg max-w-sm mr-auto w-100"
              fluid={props.data.ropewalkOne.childImageSharp.fluid}
            />

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:top-0 lg:right-0 lg:max-w-sm lg:text-xl xl:text-2xl lg:mt-4">
              I've since "upgraded" my Jay Turser to an ESP Ltd EC-1000
              (standard) and ESP Ltd Explorer (drop C).
            </p>

            <Img
              className="shadow-lg max-w-sm mb-4 ml-auto w-100 lg:-mt-10 xl:-mt-56"
              fluid={props.data.ropewalkTwo.childImageSharp.fluid}
            />
          </div>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">Violinist</h2>

          <p className="max-w-lg mb-4">
            I've been slightly obsessed with string-led orchestral music for a
            few years now, and I kept telling myself and anyone else who would
            listen that I was going to learn violin.
          </p>

          <p className="max-w-lg mb-8">
            So in early 2019, I bought my first violin and started the long road
            of self-teaching myself how to play it, so that I can emulate some
            of the amazing layered music I hear in film and TV.
          </p>

          <div className="relative">
            <Img
              className="shadow-lg max-w-sm mx-auto w-100"
              fluid={props.data.violinOne.childImageSharp.fluid}
            />

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:top-0 lg:right-0 lg:max-w-sm lg:text-xl xl:text-2xl lg:mt-4">
              I'm following online video tutorials to improve at violin.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage2 on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    ropewalkOne: file(
      relativePath: { eq: "hobbyist/ropewalk/ropewalk-01.jpg" }
    ) {
      ...fluidImage2
    }
    ropewalkTwo: file(
      relativePath: { eq: "hobbyist/ropewalk/ropewalk-02.jpg" }
    ) {
      ...fluidImage2
    }
    violinOne: file(relativePath: { eq: "hobbyist/violin/violin-01.jpg" }) {
      ...fluidImage2
    }
  }
`
