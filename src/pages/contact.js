import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import ContactForm from "../components/contact-form"

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

const ContactPage = (props) => {
  return (
    <>
      <SEO title="Contact || Dan Farrow" />
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
            &raquo; Contact
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Contact.</h1>

          <p className="max-w-3xl py-3 text-lg">
            Should you wish to get in touch, please complete the form below and
            I'll come back to you as soon as possible.
          </p>

          <ContactForm />
        </motion.div>
      </motion.section>
    </>
  )
}

export default ContactPage

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
