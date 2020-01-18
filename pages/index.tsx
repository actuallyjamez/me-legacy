import React from 'react'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Screen from '../components/Screen'
import {FaGithub, FaSoundcloud, FaTwitter} from 'react-icons/fa'

const Home = () => {
  const variants = {
    parent: {
      initial: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    },
    emote: {
      initial: {
        opacity: 0,
        y: 15,
        scale: 0.98
      },
      visible: {
        opacity: 1,
        y: 0,
        x: [0, 0, 0, 0, -1, 1, -1, 1, -1, 1, 0],
        rotate: [0, 0, 0, 0, -10, 10, -10, 10, -10, 10, 0],

        scale: [1, 1.3, 1],
        transition: {
          duration: .8,
          ease: 'easeInOut',
          type: 'spring'
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
          ease: 'easeOut',
          type: 'spring'
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
          ease: 'easeOut',
          type: 'spring'
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
            ease: 'easeOut',
            type: 'spring'
          }
        }
      }
    }
  }

  return (
    <div>
      <Head>
        <title>James Morris</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="Description" content="Hey, I'm James. I make things."/>
      </Head>
      <Screen>
        <motion.div variants={variants.parent} initial="initial" animate="visible"
                    className="h-full flex flex-col items-center justify-center text-center">
          <div>
            <motion.h1 variants={variants.emote} className="font-bold text-5xl md:text-6xl">👋</motion.h1>
            <motion.h1 variants={variants.title} className="font-bold text-5xl md:text-6xl">Hey, I'm James.</motion.h1>
            <motion.h1 variants={variants.child} className="font-semibold text-2xl md:text-3xl">I make things
              sometimes.
            </motion.h1>
          </div>
          <motion.div className="flex justify-around mt-6" variants={variants.socials.parent}>
            <motion.div variants={variants.socials.child}>
              <a href="https://github.com/actuallyjamez" rel="noopener noreferrer" target="_blank" aria-label="Github">
                <FaGithub className="text-4xl mx-6 cursor-pointer hover:text-green-600"/>
              </a>
            </motion.div>
            <motion.div variants={variants.socials.child}>
              <a href="https://twitter.com/actuallyjamez" rel="noopener noreferrer" target="_blank" aria-label="Twitter">
                <FaTwitter className="text-4xl mx-6 cursor-pointer hover:text-blue-600"/>
              </a>
            </motion.div>
            <motion.div variants={variants.socials.child}>
              <a href="https://soundcloud.com/actuallyjamez" rel="noopener noreferrer" target="_blank" aria-label="SoundCloud">
                <FaSoundcloud className="text-4xl mx-6 cursor-pointer hover:text-orange-600"/>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </Screen>
    </div>
  )
}

// Home.getInitialProps = () => ({})

export default Home
