import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
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

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="pl-3 text-lg border-l-2 border-black md:text-xl">An opinionated starter for Gatsby v2 with TailwindCSS, PostCSS and Framer Motion page transitions.</p>
        </motion.div>

      </motion.section>
    </>
  )
}

export default IndexPage