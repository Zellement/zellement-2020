import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
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

const FourOhFourPage = (props) => {
  return (
    <>
      <SEO title="Sorry!" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="min-h-screen p-8 bg-empress-200 bg-gradient-r-empress-100 lg:p-16"
      >
        <motion.div variants={item} transition="easeInOut" className="max-w-lg">
          <p className="text-xs tracking-widest uppercase">
            <Link className="hover:text-orange-500" to="/">
              Dan Farrow
            </Link>{" "}
            &raquo; 404
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">404.</h1>

          <p className="max-w-3xl py-3 text-lg">
            Sorry! You've reached a dead-end!
          </p>

        </motion.div>
      </motion.section>
    </>
  )
}

export default FourOhFourPage
