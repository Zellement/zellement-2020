import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { Link } from "gatsby"

import ImageShowHide from "../components/image-show-hide.js"
import Project from "../components/project.js"

import IconDeveloper from "../components/icons/developer.js"
import IconPhotoshop from "../components/icons/photoshop.js"
import IconFigma from "../components/icons/figma.js"
import IconAdobeXD from "../components/icons/adobe-xd.js"

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

const DesignerPage = (props) => {
  return (
    <>
      <SEO
        description="Dan Farrow, freelance web designer in Nottingham creating bespoke, responsive websites for small businesses."
        title="Freelance Web Designer Nottingham"
      />
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
            &raquo; Designer
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Designer.</h1>
          <p className="py-3 text-lg">
            I've been designing websites since the late nineties, when web
            designer and webmaster were the catch all roles. I have lived
            through iterations of fixed width, responsive, mobile-first,
            gradients, no gradients, drop shadows, no drop shadows, gradients
            again...
          </p>
          <p className="pb-3 text-md">
            It's safe to say I've seen a lot of change in the industry as
            regards design. Although I no longer class myself as a designer, I
            still dabble occasionally, particularly for freelance.
          </p>
          <h2 className="mt-4 mb-4 text-3xl text-grey-light">
            Web Design Work
          </h2>
        </motion.div>

        {/* 
  --------------------------------------------------------
Effico
  --------------------------------------------------------
*/}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Effico Ltd"
            devURL="https://www.effico.ltd/"
            devDisplayURL="www.effico.ltd"
            date="May 2020"
            devDescription="With no current website, Effico Ltd needed a digital online presence. A website was made that was designed to attract both domestic and commercial customers, all designed with conversion and SEO in mind."
          >
            <IconDeveloper />
            <IconFigma />
          </Project>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:max-w-md xl:max-w-xl"
            fluid={props.data.efficoOne.childImageSharp.fluid}
          />

          <Img
            className="pb-8 mx-auto shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-56"
            fluid={props.data.efficoTwo.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Sheringham Flooring
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Flooring"
            devURL="https://www.sheringhamflooring.com/"
            devDisplayURL="www.sheringhamflooring.com"
            date="April 2020"
            devDescription="An old WordPress theme that wasn't really maintained and had no real character was replaced with a fresh, new design that helped showcase the extent of work the company can carry out. Designed to convert visitors into enquiries and be SEO friendly, Sheringham Flooring is looking to become the main contender in the region for flooring."
          >
            <IconDeveloper />
            <IconFigma />
          </Project>

          <div className="relative max-w-md mt-8 absolute-image-wrapper">
            <Img
              className="top-0 left-0 z-0 shadow-lg absolute-image"
              fluid={props.data.sherFloorBefore.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-0 p-3 text-orange-100 bg-orange-600">
              Original
            </p>

            <ImageShowHide>
              <Img
                className="top-0 left-0 z-10 absolute-image"
                fluid={props.data.sherFloorAfter.childImageSharp.fluid}
              />

              <p className="absolute right-0 z-10 p-3 text-orange-100 bg-orange-500">
                New
              </p>
            </ImageShowHide>
          </div>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-sm xl:max-w-md"
            fluid={props.data.sherFloorOne.childImageSharp.fluid}
          />

          <Img
            className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-sm xl:-mt-36"
            fluid={props.data.sherFloorTwo.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Formula One Gym
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Formula One Gym"
            devURL="https://www.formulaonegym.co.uk/"
            devDisplayURL="www.formulaonegym.co.uk"
            date="April 2020"
            devDescription="The original design wasn't awful by any stretch, but probably just a little tired and needed a bit of modernising. The gym market is highly competitive, so the owners were keen to get across to their potential clients their unique selling points and why to use this gym, as well as injecting some colour into the site."
          >
            <IconDeveloper />
            <IconFigma />
          </Project>

          <div className="relative max-w-md mt-8 absolute-image-wrapper">
            <Img
              className="top-0 left-0 z-0 shadow-lg absolute-image"
              fluid={props.data.f1Before.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-0 p-3 text-orange-100 bg-orange-600">
              Original
            </p>

            <ImageShowHide>
              <Img
                className="top-0 left-0 z-10 absolute-image"
                fluid={props.data.f1After.childImageSharp.fluid}
              />

              <p className="absolute right-0 z-10 p-3 text-orange-100 bg-orange-500">
                New
              </p>
            </ImageShowHide>
          </div>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-sm xl:max-w-md"
            fluid={props.data.f1One.childImageSharp.fluid}
          />

          <Img
            className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-36"
            fluid={props.data.f1Two.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Shantymen
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Shantymen"
            devURL="https://www.shantymen.com/"
            devDisplayURL="www.shantymen.com"
            date="April 2019"
            devDescription="This was a redesign of my own work, originally built circa 2015. The functionality and layout of the site was tired, so a fresh redesign and build was needed to keep the group's internet presence professional and modern. A tip of the hat to George Wood for the font assist."
          >
            <IconDeveloper />
            <IconAdobeXD />
          </Project>

          <div className="relative max-w-md mt-8 absolute-image-wrapper">
            <Img
              className="top-0 left-0 z-0 shadow-lg absolute-image"
              fluid={props.data.shantymenBefore.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-0 p-3 text-orange-100 bg-orange-600">
              Original
            </p>

            <ImageShowHide>
              <Img
                className="top-0 left-0 z-10 absolute-image"
                fluid={props.data.shantymenAfter.childImageSharp.fluid}
              />

              <p className="absolute right-0 z-10 p-3 text-orange-100 bg-orange-500">
                New
              </p>
            </ImageShowHide>
          </div>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-lg lg:max-w-md xl:max-w-md"
            fluid={props.data.shantymenOne.childImageSharp.fluid}
          />

          <Img
            className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md"
            fluid={props.data.shantymenTwo.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Arcadia
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Arcadia Physiotherapy"
            devURL="https://arcadia.com/"
            devDisplayURL="arcadia.com"
            date="March 2019"
            devDescription="Arcadia's design had become dated, sporting some odd behaviours and broken layouts over years of changes and updates. Arcadia wanted a fresh design to begin their 2019, but also something easy to use for their existing clientele."
          >
            <IconDeveloper />
            <IconPhotoshop />
          </Project>

          <div className="relative max-w-md mt-8 absolute-image-wrapper">
            <Img
              className="top-0 left-0 z-0 shadow-lg absolute-image"
              fluid={props.data.arcadiaBefore.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-0 p-3 text-orange-100 bg-orange-600">
              Original
            </p>

            <ImageShowHide>
              <Img
                className="top-0 left-0 z-10 absolute-image"
                fluid={props.data.arcadiaAfter.childImageSharp.fluid}
              />

              <p className="absolute right-0 z-10 p-3 text-orange-100 bg-orange-500">
                New
              </p>
            </ImageShowHide>
          </div>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:max-w-md xl:max-w-md"
            fluid={props.data.arcadiaOne.childImageSharp.fluid}
          />

          <Img
            className="mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-20"
            fluid={props.data.arcadiaTwo.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Body Art
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="The Body Art Academy"
            devURL="https://www.thebodyartacademy.com/"
            devDisplayURL="www.thebodyartacademy.com"
            date="September 2017"
            devDescription="The design for The Body Art Academy needed to be somewhat stylish to match the type of customers they wanted to attract, so a modern, clean look with juxtaposition images and text was designed to do just that. This was a brand new website, so was designed from scratch."
          >
            <IconDeveloper />
            <IconPhotoshop />
          </Project>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:max-w-md xl:max-w-xl"
            fluid={props.data.tbaaOne.childImageSharp.fluid}
          />

          <Img
            className="pb-8 mx-auto shadow-lg md:mr-0 md:ml-auto md:max-w-xl lg:-mt-24 lg:max-w-md xl:-mt-32"
            fluid={props.data.tbaaTwo.childImageSharp.fluid}
          />

          <Img
            className="pb-8 mx-auto shadow-lg md:mr-auto md:ml-0 md:max-w-xl lg:-mt-24 lg:max-w-sm xl:-mt-20"
            fluid={props.data.tbaaThree.childImageSharp.fluid}
          />
        </motion.div>

        {/* 
          --------------------------------------------------------
          Lifeboat
          --------------------------------------------------------
        */}

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-16 mb-12 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Lifeboat"
            devURL="https://www.sheringhamlifeboat.co.uk/"
            devDisplayURL="www.sheringhamlifeboat.co.uk"
            date="July 2015"
            devDescription="An old school, left aligned site was the predecessor, and even in 2014 it was looking very dated. Sheringham Lifeboat are lucky to be aligned with a professional photographer, so taking their photos and working up a new design was a simple enough process."
          >
            <IconDeveloper />
            <IconPhotoshop />
          </Project>

          <div className="relative max-w-md mt-8 absolute-image-wrapper">
            <Img
              className="top-0 left-0 z-0 shadow-lg absolute-image"
              fluid={props.data.sheringhamlifeboatBefore.childImageSharp.fluid}
            />

            <p className="absolute right-0 z-0 p-3 text-orange-100 bg-orange-600">
              Original
            </p>

            <ImageShowHide>
              <Img
                className="top-0 left-0 z-10 absolute-image"
                fluid={props.data.sheringhamlifeboatAfter.childImageSharp.fluid}
              />

              <p className="absolute right-0 z-10 p-3 text-orange-100 bg-orange-500">
                New
              </p>
            </ImageShowHide>
          </div>

          <Img
            className="mx-auto mt-4 shadow-lg md:mr-auto"
            fluid={props.data.sheringhamlifeboatOne.childImageSharp.fluid}
          />
        </motion.div>
      </motion.section>
    </>
  )
}

export default DesignerPage

export const fluidImage = graphql`
  fragment fluidImageDesigner on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    efficoOne: file(relativePath: { eq: "designs/effico/01.jpg" }) {
      ...fluidImageDesigner
    }
    efficoTwo: file(relativePath: { eq: "designs/effico/02.jpg" }) {
      ...fluidImageDesigner
    }
    sherFloorBefore: file(
      relativePath: { eq: "designs/sheringham-flooring/before.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sherFloorAfter: file(
      relativePath: { eq: "designs/sheringham-flooring/after.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sherFloorOne: file(
      relativePath: { eq: "designs/sheringham-flooring/01.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sherFloorTwo: file(
      relativePath: { eq: "designs/sheringham-flooring/02.jpg" }
    ) {
      ...fluidImageDesigner
    }
    f1Before: file(relativePath: { eq: "designs/f1/before.jpg" }) {
      ...fluidImageDesigner
    }
    f1After: file(relativePath: { eq: "designs/f1/after.jpg" }) {
      ...fluidImageDesigner
    }
    f1One: file(relativePath: { eq: "designs/f1/01.jpg" }) {
      ...fluidImageDesigner
    }
    f1Two: file(relativePath: { eq: "designs/f1/02.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenBefore: file(
      relativePath: { eq: "designs/shantymen/before.jpg" }
    ) {
      ...fluidImageDesigner
    }
    shantymenAfter: file(relativePath: { eq: "designs/shantymen/after.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenOne: file(relativePath: { eq: "designs/shantymen/01.jpg" }) {
      ...fluidImageDesigner
    }
    shantymenTwo: file(relativePath: { eq: "designs/shantymen/02.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaBefore: file(relativePath: { eq: "designs/arcadia/before.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaAfter: file(relativePath: { eq: "designs/arcadia/after.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaOne: file(relativePath: { eq: "designs/arcadia/01.jpg" }) {
      ...fluidImageDesigner
    }
    arcadiaTwo: file(relativePath: { eq: "designs/arcadia/02.jpg" }) {
      ...fluidImageDesigner
    }
    tbaaOne: file(relativePath: { eq: "designs/tbaa/01.jpg" }) {
      ...fluidImageDesigner
    }
    tbaaTwo: file(relativePath: { eq: "designs/tbaa/02.jpg" }) {
      ...fluidImageDesigner
    }
    tbaaThree: file(relativePath: { eq: "designs/tbaa/03.jpg" }) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatBefore: file(
      relativePath: { eq: "designs/sheringham-lifeboat/before.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatAfter: file(
      relativePath: { eq: "designs/sheringham-lifeboat/after.jpg" }
    ) {
      ...fluidImageDesigner
    }
    sheringhamlifeboatOne: file(
      relativePath: { eq: "designs/sheringham-lifeboat/01.jpg" }
    ) {
      ...fluidImageDesigner
    }
  }
`
