import { motion } from "framer-motion";
import Image from "next/image";
const Skills = () => {
  return (
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
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full pb-32">
        <div className="mx-auto flex flex-col justify-center">
          <p className=" font-bold text-blue-900 pb-8 text-center">Skills</p>

          <div className="w-full ">
            <div className="mb-2 bg-blue-50 p-8 rounded-2xl">
              <ul className="flex justify-start items-center flex-row gap-8">
                <span className="text-blue-500">Backend</span>

                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/django.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="Django"
                  />
                  Django
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/python.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="python"
                  />
                  Python
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/node.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="Node"
                  />
                  Node Js
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/sqlite.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="sqlite"
                  />
                  DB sqlite
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/mysql.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="mysql"
                  />
                  Mysql
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/bootstrap.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="Bootstrap"
                  />
                  Bootstrap
                </li>
              </ul>
            </div>

            <div className="mb-2 bg-blue-50 p-8 rounded-2xl">
              <ul className="flex justify-start items-center flex-row gap-8">
                <span className="text-blue-500">Frontend</span>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/react.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="react"
                  />
                  React
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/react.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="react"
                  />
                  Bluma CSS
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/css.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="css"
                  />
                  CSS
                </li>
                <li className=" text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/tailwind.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="css"
                  />
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="mb-2 bg-blue-50 p-8 rounded-2xl">
              <ul className="flex justify-start items-center flex-row gap-8">
                <span className="text-blue-500">Data Science</span>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/tensor.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="tensor"
                  />
                  Tensorflow
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/numpy.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="numpy"
                  />
                  Numpy
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/pandas.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="pandas"
                  />
                  Pandas
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/matplotlib.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="Matplotlib"
                  />
                  Matplotlib
                </li>
              </ul>
            </div>

            <div className=" bg-blue-50 p-8 rounded-2xl">
              <ul className="flex justify-start items-center flex-row gap-8">
                <span className="text-blue-500">Other</span>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/c.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="c"
                  />
                  C
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/cp.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="c"
                  />
                  C++
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/git.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="git"
                  />
                  git/GitHUB
                </li>
                <li className="text-xl font-bold flex justify-center items-center flex-col">
                  <Image
                    src="/icons/aws.svg"
                    width={40}
                    height={40}
                    objectFit="contain"
                    alt="aws"
                  />
                  AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
