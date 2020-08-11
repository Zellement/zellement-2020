import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { Link } from "gatsby"
import XmasGif from "../images/manager/xmas-gif.gif"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { GoHeart } from "react-icons/go"

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

const ManagerPage = (props) => {
  return (
    <>
      <SEO title="Experienced Manager || Dan Farrow" />
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
            </Link>
            &raquo; Manager
          </p>
          <h1 className="mb-8 text-5xl text-grey-light">Manager.</h1>
          <h2 className="mt-4 mb-4 text-3xl text-grey-light">History</h2>

          <p className="py-3 text-lg">
            My first official managerial role came in the shape of the{" "}
            <em>Head of Web Design</em> for{" "}
            <OutboundLink
              className="text-orange-500 underline hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.adtrak.co.uk"
            >
              {" "}
              Adtrak
            </OutboundLink>
            . Before this, I was part of the Web Design team, and was quickly
            recognised for my effective working practices, attention to detail
            and leadership qualities. Just 8 months in to my role with Adtrak, I
            was promoted to the head of department, and managed myself and 2
            other designers.
          </p>

          <div className="flex flex-col max-w-md my-10 sm:flex-row md:flex-col lg:flex-row">
            <p className="pb-3 text-md sm:pr-4 md:p-0 lg:pr-10">
              As Head of Web Design I helped the company grow from a small
              garage setup of about 10 employees into a fully fledged, 120+
              employee company in one of the largest city centre offices in
              Nottingham. The Web Design department under my remit grew from 3
              to 25, and I was the first in the company to introduce a new layer
              of management for the department in the shape of{" "}
              <em>Team Leaders</em> and an assistant.
            </p>

            <img
              alt="Christmas outing with some fellow Adtrak colleagues"
              src={XmasGif}
              className="self-center h-auto shadow-lg w-100 sm:max-w-xs md:max-w-full md:pt-6 lg:max-w-sm lg:p-0"
            />
          </div>

          <p className="pb-3 text-md">
            I'm very honoured to have worked alongside so many great people,
            with a rich variety of design, development and marketing
            backgrounds; web/UI/UX designers, front-end/back-end/full-stack
            developers, SEO strategists and technical SEO specialists, PPC
            consultants, creative copywriters and inspiring leaders.
          </p>

          <div className="relative max-w-md my-10">
            <Img
              alt="Myself and Adtrak colleagues at my own wedding"
              className="block max-w-lg shadow-lg"
              fluid={props.data.wedding.childImageSharp.fluid}
            />

            <p className="absolute top-0 left-0 z-50 inline p-4 border-l-2 border-orange-400 font-heading text-brown-dark md:right-auto xl:text-2xl xl:left-auto xl:right-0 xl:text-white xl:-mr-20 xl:mt-8 2xl:-mr-40">
              <GoHeart className="inline text-white" />
              <GoHeart className="inline text-white" />
              <GoHeart className="inline text-red-100" />
              <GoHeart className="inline text-red-200" />
              <GoHeart className="inline text-red-300" />
              <GoHeart className="inline text-red-400" />
              <GoHeart className="inline text-red-500" />
              <GoHeart className="inline text-red-600" />
              <GoHeart className="inline text-red-700" />
              <GoHeart className="inline text-red-800" />
              <GoHeart className="inline text-red-900" />
            </p>
          </div>

          <div className="flex flex-col mt-10 mb-16 lg:flex-row lg:pt-10">
            <div className="lg:w-1/3">
              <p className="pb-4 text-md">
                In 2016, Adtrak's growth opened up an opportunity for an
                additional support layer below the directors, and I was promoted
                into the role of a <em>Senior Manager</em>. In this role I was
                responsible for helping make key decisions on the direction of
                the company, and overseeing 3 different departments - Web
                Design, Web Development and Web Leasing. I managed to fulfil
                this role in addition to being Head of Web Design, until a
                massive company re-structure redefined my role into the{" "}
                <em>Assistant Customer Operations Director</em>.
              </p>

              <p className="pb-8">
                Following the global COVID-19 pandemic in 2020, Adtrak went
                through another difficult re-structure, and a mutual decision
                put my managerial career with the company on hold, allowing me
                to focus on front-end development.
              </p>
            </div>

            <div className="flex flex-col lg:w-2/3 text-empress-500">
              <h2 className="self-end mb-8 md:self-start md:w-3/4 md:ml-auto">
                Adtrak managerial career
              </h2>

              <div className="flex flex-row">
                <span className="w-1/4 pr-4 tracking-widest border-r-2 border-orange-400 border-solid text-empress-600 font-heading lg:text-right">
                  2008
                </span>
                <span className="w-3/4 pb-10 pl-4">
                  <span className="text-empress-800">
                    First managerial role
                  </span>
                  <span className="block text-sm">
                    Became Head of Web Design overseeing 2 additonal people.
                  </span>
                </span>
              </div>

              <div className="flex flex-row">
                <span className="w-1/4 pr-4 tracking-widest border-r-2 border-orange-400 border-solid text-empress-600 font-heading lg:text-right">
                  2012
                </span>
                <span className="w-3/4 pb-10 pl-4">
                  <span className="text-empress-800">
                    Introduction of managerial levels
                  </span>
                  <span className="block text-sm">
                    I helped introduce new levels of management within Web
                    Design as the department outgrew its existing structure
                  </span>
                </span>
              </div>

              <div className="flex flex-row">
                <span className="w-1/4 pr-4 tracking-widest border-r-2 border-orange-400 border-solid text-empress-600 font-heading lg:text-right">
                  2014
                </span>
                <span className="w-3/4 pb-10 pl-4">
                  <span className="text-empress-800">
                    Web Design reaches 25 employees
                  </span>
                  <span className="block text-sm">
                    Following substantial growth, the department hits 25
                    employees
                  </span>
                </span>
              </div>

              <div className="flex flex-row">
                <span className="w-1/4 pr-4 tracking-widest border-r-2 border-orange-400 border-solid text-empress-600 font-heading lg:text-right">
                  2015
                </span>
                <span className="w-3/4 pb-10 pl-4">
                  <span className="text-empress-800">
                    Promotion to Senior Manager
                  </span>
                  <span className="block text-sm">
                    I effectively became a Senior Manager whilst still running
                    the Web Design department
                  </span>
                </span>
              </div>

              <div className="flex flex-row">
                <span className="w-1/4 pr-4 tracking-widest border-r-2 border-orange-400 border-solid text-empress-600 font-heading lg:text-right">
                  2019
                </span>
                <span className="w-3/4 pb-2 pl-4">
                  <span className="text-empress-800">
                    Became Assistant Customer Operations Director
                  </span>
                  <span className="block text-sm">
                    Following a company re-structure, I took on this role,
                    jointly responsible for almost 90 people's output for
                    clients spread across 8 client teams
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="relative mb-10">
            <Img
              alt="Presentation for an Adtrak AGM"
              className="max-w-sm mr-auto shadow-lg w-100 xl:max-w-md"
              fluid={props.data.onstageOne.childImageSharp.fluid}
            />

            <p className="z-20 p-8 border-l-2 border-orange-400 shadow-lg text-empress-100 font-heading bg-empress-700 bg-gradient-l-empress-600 sm:absolute sm:top-0 sm:right-0 sm:max-w-xs sm:mt-8 md:text-xl md:top-0 lg:top-0 lg:max-w-sm xl:top-0 xl:text-2xl">
              Presentation and Q&amp;A for an Adtrak AGM
            </p>

            <Img
              alt="Q and A for an Adtrak AGM"
              className="max-w-sm mb-4 ml-auto shadow-lg w-100 m:-mt-24 lg:-mt-32 xl:-mt-40"
              fluid={props.data.onstageTwo.childImageSharp.fluid}
            />
          </div>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">
            People Management
          </h2>
          <p className="pb-3 text-lg">
            I have years of experience with the standard tasks associated to
            people management, including but not limited to;
          </p>

          <h3 className="mb-2 text-empress-800">Monthly 1-1s</h3>
          <p className="block mb-6">
            In monthly 1-1s with my direct reports, it has been important to
            have open conversations around how an individual is finding their
            role, and how they can look to improve. I've held 1-1s with a vast
            range of levels of employee, from juniors and seniors to department
            managers and Digital Marketing Managers, all of which required a
            degree of customisation to suit the situation and colleague.
          </p>

          <h3 className="mb-2 text-empress-800">
            Objective setting &amp; KPIs
          </h3>
          <p className="block mb-6">
            On both an individual and company basis, I have years of experience
            setting SMART objectives and KPIs that are achieveable and encourage
            development and progression.
          </p>

          <h3 className="mb-2 text-empress-800">
            PIPs, PDPs &amp; Disciplinaries
          </h3>
          <p className="block mb-6">
            I've had the unforunate experience of dealing with performance
            improvement plans in addition to formal disciplinary hearings.
          </p>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">
            Project Management
          </h2>

          <p className="pb-3 text-lg">
            Over the years I have been able to implement new projects,
            workstreams, processes and services into Adtrak in order to help it
            grow and succeed.
          </p>

          <Img
            alt="Doing a presentation"
            className="block w-full mx-auto shadow-lg lg:float-right lg:ml-8 lg:mb-4 lg:mt-8 lg:max-w-96"
            fluid={props.data.present.childImageSharp.fluid}
          />

          <p className="pb-3 text-md">
            As with all projects, organisation can be critical to the success of
            the project implementation, so I always strive to be as organised as
            possible. An attention to detail as well as creative solution
            finding are also strengths I can pull from in order to effectively
            deliver something new to the company.
          </p>

          <p className="pb-3 text-md">
            Some of my more recent projects delivered include;
          </p>

          <h3 className="mb-2 text-empress-800">Customer Journey Plan</h3>
          <p className="block mb-6">
            As part of Adtrak's huge re-structure, a workstream was created to
            devise a full <em>Customer Journey Plan</em>. This involved
            researching Adtrak's current client base by conducting phone call
            interviews and digital surveys, discovering the SME market place
            across the UK and doing competitive analysis. A successful plan was
            delivered to the Adtrak Directors late 2018 and has been heavily
            used in the re-structure of the company.
          </p>

          <h3 className="mb-2 text-empress-800">
            New products &amp; processes for Adtrak
          </h3>
          <p className="block mb-6">
            In recent years on seperate occasions I researched solutions for
            Adtrak to offer SSL/HTTPS hosting to its clients - increasing the
            profitability of our hosting product, devising guides and resources
            to streamline the work and ensure our client's websites follow
            encryption guidelines - and found and released a solution for Adtrak
            to deliver sitemaps. Both of these required training, guides &amp;
            discussions to ensure an effective release to a company of over 120
            people.
          </p>

          <h3 className="mb-2 text-empress-800">"Change for Growth"</h3>
          <p className="block mb-6">
            Adtrak's huge re-structure, dubbed <em>Change for Growth</em>, was a
            huge undertaking, and as part of the leadership team I had an
            integral role in helping direct and deliver the monumental change.
            This included a lot of coaching, supporting and helping people
            through the whole transiton.
          </p>

          <div className="relative my-10">
            <Img
              alt="A selfie with some of the Adtrak leadership"
              className="block max-w-md mx-auto shadow-lg lg:ml-0"
              fluid={props.data.leadership.childImageSharp.fluid}
            />

            <p className="z-50 block max-w-lg p-8 mx-auto border-l-2 border-orange-400 shadow-lg bg-empress-700 bg-gradient-l-empress-600 font-heading text-empress-100 lg:absolute lg:bottom-0 lg:right-0 lg:max-w-xs lg:text-xl xl:text-2xl lg:mb-4">
              A quick selfie with some of the Adtrak leadership, circa 2018
            </p>
          </div>

          <h2 className="mt-4 mb-4 text-3xl text-grey-light">Training</h2>

          <p className="pb-3 text-lg">
            Adtrak has supplied me with numerous tools, training and guides to
            really advance my managerial skills, which have come in use over the
            years.
          </p>

          <p className="pb-3 text-md">
            This formal and informal training has been the cornerstone to my
            progression as a manager and leader, and has revealed the following
            traits;
          </p>

          <h3>
            <OutboundLink
              name="Visit Myers Briggs"
              className="text-orange-500 underline hover:text-brown-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/home.htm?bhcp=1"
            >
              MBTI
            </OutboundLink>
          </h3>

          <p className="block mb-6">
            One of the first training sessions I received was identifying my own
            personality type, and learning that of others. My personality test
            revealed my natural inclination toward the following;
          </p>

          <ul>
            <li className="block mb-6">I - Introvert</li>
            <li className="block mb-6">S - Sensing</li>
            <li className="block mb-6">T - Thinking</li>
            <li className="block mb-6">J - Judgement</li>
          </ul>

          <p className="block mb-6">
            <em>
              "Quietly systematic. Factual. Organized. Logical. Detailed.
              Conscientious. Analytical. Responsible. Pragmatic. Critical.
              Conservative. Decisive. Stable. Concrete. Efficient."
            </em>
          </p>

          <h3>
            <OutboundLink
              name="Visit Tilt 365"
              className="text-orange-500 underline hover:text-brown-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tilt365.com/"
            >
              Tilt 365
            </OutboundLink>
          </h3>

          <p>
            Following another self-completed survey, my Tilt 365 profile
            returned myself to be <em>Master Mind</em>. Although I accept that
            my natural persuasion is to think in this way, I believe I am very
            competent at being able to <em>tilt</em> in to other personality
            persuasions, dependent on the situation.
          </p>

          <Img
            alt="My Tilt 365 profile returned master mind"
            className="self-center block w-32 h-40 max-w-lg my-4 shadow-lg"
            fluid={props.data.mastermind.childImageSharp.fluid}
          />

          <h3>
            <OutboundLink
              name="Visit Situational.com"
              className="text-orange-500 underline hover:text-brown-light"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.situational.com/the-cls-difference/situational-leadership-what-we-do/"
            >
              Situational Leadership
            </OutboundLink>
          </h3>

          <p>
            I've been trained on Situational Leadership, and how changing style
            depending on the situation can be very effective.
          </p>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ManagerPage

export const fluidImage = graphql`
  fragment fluidImageManager on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    onstageOne: file(relativePath: { eq: "manager/onstage-01.jpg" }) {
      ...fluidImageManager
    }
    onstageTwo: file(relativePath: { eq: "manager/onstage-02.jpg" }) {
      ...fluidImageManager
    }
    wedding: file(relativePath: { eq: "manager/wedding.jpg" }) {
      ...fluidImageManager
    }
    leadership: file(relativePath: { eq: "manager/leadership.jpg" }) {
      ...fluidImageManager
    }
    mastermind: file(relativePath: { eq: "manager/mastermind.jpg" }) {
      ...fluidImageManager
    }
    present: file(relativePath: { eq: "manager/present.jpg" }) {
      ...fluidImageManager
    }
  }
`
