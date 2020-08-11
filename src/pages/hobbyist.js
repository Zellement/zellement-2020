import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FaRegMeh } from "react-icons/fa"

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

const Page = (props) => {
  return (
    <>
      <SEO title="Hobbyist || Dan Farrow" />
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
            &raquo; Hobbyist
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Hobbyist.</h1>
          <p className="py-3 text-lg">
            I tend to keep myself busy outside of my core interests, and below
            you'll find some of the other things that interest me.
          </p>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">Gaming</h2>

          <p className="max-w-xl py-3">
            I grew up playing some old school games on both PC and the old
            Commodore 64, from <em>Emlyn Hughes Soccer</em>,{" "}
            <em>Spy vs. Spy</em> and <em>Prince of Persia</em>.
          </p>

          <div className="relative">
            <Img
              className="max-w-sm shadow-lg w-100"
              fluid={props.data.emlynHughes.childImageSharp.fluid}
            />
            <Img
              className="max-w-sm ml-auto -mt-10 shadow-lg w-100 md:-mt-24"
              fluid={props.data.spyVsSpy.childImageSharp.fluid}
            />

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:bottom-0 lg:right-0 lg:max-w-sm lg:text-xl xl:text-2xl lg:mb-4">
              Graphics are still breathtaking.
            </p>

            <Img
              className="max-w-sm shadow-lg w-100 sm:-mt-10 md:-mt-24"
              fluid={props.data.princeOfPersia.childImageSharp.fluid}
            />
          </div>

          <p className="max-w-xl py-3 my-4">
            My first console was the Nintendo (NES) - I played a lot of Trogg -
            and went through owning an original PlayStation, PS2, Xbox 360, PS3
            and now the PS4.
          </p>

          <div className="relative">
            <Img
              className="max-w-md shadow-lg w-100"
              fluid={props.data.ffx.childImageSharp.fluid}
            />
            <Img
              className="max-w-md ml-auto shadow-lg w-100 lg:-mt-12"
              fluid={props.data.me2.childImageSharp.fluid}
            />

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:right-0 lg:max-w-xs lg:text-xl xl:text-2xl lg:mb-4">
              Final Fantasy X, Mass Effect, the Batman: Arkham series and The
              Last of Us.
            </p>

            <Img
              className="max-w-md shadow-lg w-100 lg:-mt-12"
              fluid={props.data.arkhamCity.childImageSharp.fluid}
            />
            <Img
              className="max-w-md ml-auto shadow-lg w-100 lg:-mt-12"
              fluid={props.data.lastOfUs.childImageSharp.fluid}
            />
          </div>

          <h2 className="mt-8 mb-4 text-3xl text-grey-light">
            Nottingham Forest
          </h2>

          <p className="max-w-xl py-3 my-4">
            I moved to Nottingham circa 2007, adopted the city as my home and
            have since embraced Nottingham Forest. I had my first season card for the
            2018/19 season, and continue to renew it each season.
          </p>

          <div className="relative">
            <Img
              className="max-w-sm mx-auto shadow-lg w-100 sm:ml-0"
              fluid={props.data.nffcThree.childImageSharp.fluid}
            />

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:top-0 lg:right-0 lg:max-w-xs lg:text-xl xl:max-w-sm xl:text-2xl lg:mt-4">
              During a sponsored rough sleeping night at the City Ground, I was
              lucky enough to snap this photo at 3am.
            </p>

            <Img
              className="max-w-md ml-auto shadow-lg w-100 md:max-w-sm lg:-mt-56 lg:max-w-sm"
              fluid={props.data.nffcTwo.childImageSharp.fluid}
            />
            <Img
              className="max-w-md -mt-10 shadow-lg w-100 md:-mt-12 md:max-w-sm lg:-mt-32 lg:max-w-sm"
              fluid={props.data.nffcOne.childImageSharp.fluid}
            />
          </div>

          <h2 className="mt-8 mb-4 text-3xl text-grey-light">Tattoos</h2>

          <p className="max-w-xl py-3 my-4">
            Just after my 18th birthday I got my first tattoo - a timeless
            tribal piece which has totally not gone out of fashion. I got the
            outline, but never filled it in; this allowed for an inverted style
            tattoo, which eventually grew. In late 2018 I had the tattoo
            refreshed.
          </p>

          <p className="max-w-xl my-4">
            My full sleeve was designed and completed just before my wedding in
            March 2018 - it's the <em>four horsemen</em>, partly inspired from
            the Bible, partly from a Metallica song of the same name and partly
            from one of my favourite books,{" "}
            <em>Good Omens by Terry Pratchett &amp; Neil Gaiman</em>.
          </p>

          <div className="relative">
            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:bottom-0 lg:right-0 lg:max-w-xs lg:text-xl xl:text-2xl lg:mb-4">
              For all my tattoos I now visit one artist,{" "}
              <OutboundLink
                className="hover:text-white text-empress-300"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/kevrichardsontattoo/"
              >
                Kev Richardson
              </OutboundLink>
              , based in Nottingham.
            </p>

            <Img
              className="max-w-md shadow-lg w-100"
              fluid={props.data.tattoosOne.childImageSharp.fluid}
            />
          </div>

          <h2 className="mt-8 mb-4 text-3xl text-grey-light">
            Weight Training
          </h2>

          <p className="max-w-xl py-3 my-4">
            Since about 2013, I've been weight training up to 5 days a week. By
            no stretch do I consider myself a gym fanatic, however I do enjoy
            going to be able to switch off from the working day and begin the
            wind down of the evening.
          </p>

          <div className="relative">

            <p className="z-30 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:bottom-0 lg:right-0 lg:max-w-xs lg:text-xl xl:text-2xl lg:mb-4">
              My personal best for deadlift is 180kg, and for bench press is
              just over 100kg.
            </p>

            <Img
              className="max-w-md mx-auto shadow-lg w-100 sm:ml-0 md:max-w-sm"
              fluid={props.data.weightTrainingOne.childImageSharp.fluid}
            />

            <Img
              className="max-w-md ml-auto shadow-lg w-100 sm:-mt-10 md:max-w-sm lg:-mt-56 lg:max-w-md"
              fluid={props.data.weightTrainingTwo.childImageSharp.fluid}
            />
          </div>

          {/*<h2 className="mt-4 mb-4 text-3xl text-grey-light">Cycling</h2>*/}

          <h2 className="mt-8 mb-4 text-3xl text-grey-light">Batman</h2>

          <p className="max-w-xl py-3 my-4">
            My first memory which has instilled a love for Batman in me is
            getting up on Saturday mornings and parking myself in front of
            Channel 4, waiting for one of the the best animated series of all
            time,{" "}
            <OutboundLink
              className="text-orange-500 underline hover:text-orange-800"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.imdb.com/title/tt0103359/"
            >
              Batman: The Animated Series
            </OutboundLink>
            , to come on.
          </p>

          <Img
            className="max-w-3xl shadow-lg w-100"
            fluid={props.data.batmanOne.childImageSharp.fluid}
          />

          <p className="max-w-xl py-3 my-4">
            I absolutely love the film{" "}
            <em>Batman vs. Superman: Dawn of Justice (Ultimate Edition)</em>,
            much to the dismay and disbelief of most people I talk to. This
            fight scene alone is something else.
          </p>

          <iframe
            title="Batman live action fight scene"
            width="100%"
            height="400px"
            className="max-w-xl mx-auto w-100 md:ml-0"
            src="https://www.youtube.com/embed/JKSottBl7ow?start=59"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <p className="max-w-xl py-3 my-4">
            I'm a massive supporter of the{" "}
            <a
              className="text-orange-500 underline hover:text-orange-800"
              target="_blank"
              href="https://www.snydercut.com/"
              rel="noopener noreferrer"
            >
              #ReleaseTheSnyderCut
            </a>{" "}
            movement.
          </p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Page

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    tattoosOne: file(relativePath: { eq: "hobbyist/tattoos/tattoos-01.jpg" }) {
      ...fluidImage
    }
    princeOfPersia: file(
      relativePath: { eq: "hobbyist/games/prince-of-persia.png" }
    ) {
      ...fluidImage
    }
    emlynHughes: file(relativePath: { eq: "hobbyist/games/emlyn-hughes.jpg" }) {
      ...fluidImage
    }
    spyVsSpy: file(relativePath: { eq: "hobbyist/games/spy-v-spy.jpg" }) {
      ...fluidImage
    }
    me2: file(relativePath: { eq: "hobbyist/games/me2.jpg" }) {
      ...fluidImage
    }
    arkhamCity: file(relativePath: { eq: "hobbyist/games/arkham-city.jpg" }) {
      ...fluidImage
    }
    ffx: file(relativePath: { eq: "hobbyist/games/ffx.jpg" }) {
      ...fluidImage
    }
    lastOfUs: file(relativePath: { eq: "hobbyist/games/last-of-us.jpg" }) {
      ...fluidImage
    }
    psvr: file(relativePath: { eq: "hobbyist/games/psvr.jpg" }) {
      ...fluidImage
    }
    nffcOne: file(relativePath: { eq: "hobbyist/nffc/nffc-01.jpg" }) {
      ...fluidImage
    }
    nffcTwo: file(relativePath: { eq: "hobbyist/nffc/nffc-02.jpg" }) {
      ...fluidImage
    }
    nffcThree: file(relativePath: { eq: "hobbyist/nffc/nffc-03.jpg" }) {
      ...fluidImage
    }
    weightTrainingOne: file(
      relativePath: { eq: "hobbyist/weight-training/weight-training-01.jpg" }
    ) {
      ...fluidImage
    }
    weightTrainingTwo: file(
      relativePath: { eq: "hobbyist/weight-training/weight-training-02.jpg" }
    ) {
      ...fluidImage
    }
    batmanOne: file(relativePath: { eq: "hobbyist/batman/batman-01.jpg" }) {
      ...fluidImage
    }
  }
`
