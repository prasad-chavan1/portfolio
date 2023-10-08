import { motion } from "framer-motion";
import Skills from "../components/Skills";
import Head from "next/head";

const About = () => {
  return (
    <div className="h-screen lg:pl-20 lg:pr-32">
      <Head>
        <title>About | Prasad Chavan</title>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
              <div className=" md:px-8 ">
                  <motion.div className="md:w-96"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 0.4,
                        },
                      },
                    }}
                  >
                    <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                      Hello, I&#39;m <span className="text-blue-500">Prasad</span>
                    </h1>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: 1,
                        },
                      },
                    }}
                  >
                    <h2 className="font-bold text-3xl text-left mb-5">
                      I&#39;m a
                      <span className="text-blue-500"> FullStack Developer</span> with a
                      passion for
                      <span className="text-blue-500"> Cloud Computing</span>.
                    </h2>
                  </motion.div>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1.6,
                    },
                  },
                }}
              >
                <p className="text-left font-normal mb-5 flex-wrap">
                  I pursuing graduation from SSBT, COET, JALGAON (425001). Most of
                  my experience is in full stack web development and problem
                  solving. Check out some of my work
                  <a
                    href="https://github.com/prasad-chavan1"
                    className="underline text-blue-500"
                  >
              
                    here
                  </a>
                </p>
                <p className="text-left font-normal mb-5 flex-wrap"></p>
                <p className="text-left font-normal mb-5 flex-wrap">
                  In my free time, I love to learn new technologies and keep
                  up-to-date with full stack developement. Outside of programming, I
                  love to read novels and watch animes. I learnt alot things from
                  anime. My one of the most favourite character is Itachi Uchiha.
                </p>
              </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
