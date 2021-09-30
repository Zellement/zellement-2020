import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Project from "../components/project.js"

import IconDesigner from "../components/icons/designer.js"
import IconGatsbyJS from "../components/icons/gatsbyjs.js"
import IconSnipcart from "../components/icons/snipcart.js"
import IconGraphQL from "../components/icons/graphql.js"
import IconSass from "../components/icons/sass.js"
import IconNetlify from "../components/icons/netlify.js"
import IconNetlifyCMS from "../components/icons/netlifycms.js"
import IconTailwind from "../components/icons/tailwind.js"
import IconTimber from "../components/icons/timber.js"
import IconWordPress from "../components/icons/wordpress.js"
import IconPrismic from "../components/icons/prismic.js"
import IconDeployHQ from "../components/icons/deployhq.js"
import IconDatoCMS from "../components/icons/datocms.js"
import IconcPanel from "../components/icons/cpanel.js"

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

const DeveloperPage = () => {
  return (
    <>
      <SEO
        description="Dan Farrow, freelance WordPress developer, front-end & web developer in Nottingham creating bespoke, responsive websites for small businesses."
        title="Freelance WordPress Developer & Front-end Developer Nottingham"
      />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-8 bg-empress-200 bg-gradient-r-empress-100 lg:p-16"
      >
        <motion.div variants={item} transition="easeInOut">
          <p className="text-xs tracking-widest uppercase">
            <Link className="hover:text-orange-500" to="/">
              Dan Farrow
            </Link>{" "}
            &raquo; Developer
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Developer.</h1>
          <motion.div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 md:pr-8">
              <p className="py-3 text-lg">
                I have over {new Date().getFullYear() - 2007} years of
                experience working in a leading digital marketing and web design
                company based in Nottingham, UK, and I've been lucky to have the
                chance to work on a multitude of languages, platforms and
                frameworks.
              </p>
              <p className="pb-3 text-md">
                In recent years, I have worked predominantly as a WordPress
                developer, but I have recently been using newer technologies
                such as GatsbyJS to deliver headless CMS websites.
              </p>
            </div>
            <div className="p-4 text-right bg-gradient-r-empress-100 md:bg-none md:border-l md:border-empress-200 md:w-2/5 md:text-center">
              <p className="text-xs tracking-widest uppercase">
                Experience With
              </p>

              <div className="flex flex-row-reverse flex-wrap mt-4 md:flex-row md:justify-center">
                <IconGatsbyJS className="m-2" />
                <IconWordPress className="m-2" />

                <IconDatoCMS className="m-2" />
                <IconPrismic className="m-2" />
                <IconNetlifyCMS className="m-2" />
                <IconSnipcart />

                <IconGraphQL className="m-2" />

                <IconTailwind className="m-2" />
                <IconSass className="m-2" />
                <IconTimber className="m-2" />
                <IconDeployHQ className="m-2" />

                <IconNetlify className="m-2" />
                <IconcPanel className="m-2" />
              </div>
            </div>
          </motion.div>
          <h2 className="mt-4 mb-4 text-3xl text-grey-light">
            Development Work
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Zuckermaus Bakery"
            devURL="https://www.zuckermausbakery.com"
            devDisplayURL="www.zuckermausbakery.com"
            devDescription="An update from a theme based BigCartel website into a fully bespoke e-commerce solution, allowing full control for the client over their products and orders."
            date="August 2021"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconDatoCMS />
            <IconSnipcart />
            <IconGraphQL />
            <IconTailwind />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Birmingham Parents Support Group"
            devURL="https://www.birminghamparentssupport.com"
            devDisplayURL="www.birminghamparentssupport.com"
            devDescription="With a basic CMS (Netlify CMS) so that the client can edit and add stories as and when they want, this simple website is for a volunteering group that supports families and their LGBT+ loved ones."
            date="December 2020"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconNetlifyCMS />
            <IconGraphQL />
            <IconTailwind />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Effico Ltd"
            devURL="https://www.effico.ltd"
            devDisplayURL="www.effico.ltd"
            devDescription="Utilising the very accessible DatoCMS, with GatsbyJS and Tailwind, for a domestic & commercial electrical contractor."
            date="May 2020"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconDatoCMS />
            <IconGraphQL />
            <IconTailwind />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Flooring"
            devURL="https://www.sheringhamflooring.com"
            devDisplayURL="www.sheringhamflooring.com"
            devDescription="Built to be blazing fast using GatsbyJS, and with the accessible CMS from DatoCMS, this site was quickly put live to combat a previously hacked and untended WordPress build."
            date="April 2020"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconDatoCMS />
            <IconGraphQL />
            <IconTailwind />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Formula One Gym"
            devURL="https://www.formulaonegym.co.uk"
            devDisplayURL="www.formulaonegym.co.uk"
            devDescription="Built with Prismic CMS, Gatsby and Tailwind, this was for a small local gym looking to compete in a competitive marketplace."
            date="April 2020"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconPrismic />
            <IconGraphQL />
            <IconTailwind />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Shantymen"
            devURL="https://www.shantymen.com"
            devDisplayURL="www.shantymen.com"
            devDescription="Built using Gatsby and the accessible Netlify CMS, this small site was developed for a voluntary shanty group, dedicated to raising money for the RNLI."
            date="April 2019"
          >
            <IconDesigner />
            <IconGatsbyJS />
            <IconNetlifyCMS />
            <IconGraphQL />
            <IconSass />
            <IconNetlify />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Arcadia Physiotherapy"
            devURL="https://www.arcadia-therapy.com"
            devDisplayURL="www.arcadia-therapy.com"
            devDescription="Arcadia were running an old, slow WordPress build from a few years ago. In actively using and improving their site, more and more functionality was added to the site in the form of plugins, draining the site's speed. An upgrade was needed so I worked with Arcadia to deliver a custom built WordPress theme that is easy to update from the backend."
            date="March 2019"
          >
            <IconDesigner />
            <IconWordPress />
            <IconSass />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="The Body Art Academy"
            devURL="https://www.thebodyartacademy.com/"
            devDisplayURL="www.thebodyartacademy.com"
            devDescription="A Derby based piercing and tattoo training company that needed its own access, and a high-end looking website."
            date="September 2017"
          >
            <IconDesigner />
            <IconWordPress />
            <IconSass />
            <IconcPanel />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Burntwood Group"
            devURL="https://www.burntwoodgroup.com/"
            devDisplayURL="www.burntwoodgroup.com"
            devDescription="A website in order to help increase leads sent to a drainage company, this was built with WordPress so that the client could keep it up to date as their business needs changed."
            date="February 2017"
          >
            <IconDesigner />
            <IconWordPress />
            <IconSass />
            <IconcPanel />
          </Project>
        </motion.div>

        <motion.div
          variants={item}
          transition="easeInOut"
          className="max-w-lg pb-8 mb-4 border-b border-orange-600"
        >
          <Project
            devTitle="Sheringham Lifeboat"
            devURL="https://www.sheringhamlifeboat.co.uk/"
            devDisplayURL="www.sheringhamlifeboat.co.uk"
            devDescription="Built for the RNLI on the east coast, the Sheringham Lifeboat website was developed in WordPress and allows for those part of the crew to inform visitors of both current equipment and upcoming events."
            date="July 2015"
          >
            <IconDesigner />
            <IconWordPress />
            <IconSass />
            <IconcPanel />
          </Project>
        </motion.div>
      </motion.section>
    </>
  )
}

export default DeveloperPage

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
  }
`
