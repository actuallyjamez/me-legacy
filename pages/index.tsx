import React from 'react'
import {motion} from 'framer-motion'
import Head from 'next/head'
import * as cn from 'classnames'
import Screen from '../components/Screen'
import {FaGithub, FaSoundcloud, FaTwitter} from 'react-icons/fa'

const Home = ({color}) => {
  const variants = {
    parent: {
      initial: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    },
    title: {
      initial: {
        opacity: 0,
        y: 10,
        scale: 0.98
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          ease: 'easeOut'
        }
      }
    },
    child: {
      initial: {
        opacity: 0,
        y: 5,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          // duration: .6,
          ease: 'easeOut'
        }
      }
    },
    socials: {
      parent: {
        initial: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3

          }
        }
      },
      child: {
        initial: {
          opacity: 0,
          y: 3,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeOut'
          }
        }
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Screen>
        <motion.div variants={variants.parent} initial="initial" animate="visible"
                    className="h-full flex flex-col items-center justify-center text-center">
          <div>
            <motion.h1 variants={variants.title} className="font-bold text-5xl md:text-6xl">Hey, I'm <span
              className={cn('text-red-600', `text-${color}-600`)}>James.</span></motion.h1>
            <motion.h1 variants={variants.child} className="font-semibold text-2xl md:text-3xl">I make things
              sometimes.
            </motion.h1>
          </div>
          <motion.div className="flex justify-around mt-6" variants={variants.socials.parent}>
            <motion.div variants={variants.socials.child}>
              <a href="https://github.com/actuallyjamez">
                <FaGithub className="text-4xl mx-6 cursor-pointer hover:text-green-600"/>
              </a>
            </motion.div>
            <motion.div variants={variants.socials.child}>
              <a href="https://twitter.com/actuallyjamez">
                <FaTwitter className="text-4xl mx-6 cursor-pointer hover:text-blue-600"/>
              </a>
            </motion.div>
            <motion.div variants={variants.socials.child}>
              <a href="https://soundcloud.com/actuallyjamez">
                <FaSoundcloud className="text-4xl mx-6 cursor-pointer hover:text-orange-600"/>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Screen>
    </div>
  )
}

Home.getInitialProps = () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']
  const color = colors[Math.floor(Math.random() * colors.length)]
  return {color}
}

export default Home
