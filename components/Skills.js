import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
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
            <div className='w-full pb-32'>
                <div className='mx-auto flex flex-col justify-center'>
                    <p className='underline font-bold text-blue-500 pb-4'>Skills</p>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div>
                            <ul>
                                <span className='text-blue-500'>Backend</span>
                                <div className='text-2xl'>
                                    <li>Django</li>
                                    <li>Python</li>
                                    <li>Node.js</li>
                                    <li>DB Sqlite</li>
                                    <li>MySQL</li>
                                    <li>Bootstrape</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Frontend</span>
                                <div className='text-2xl'>
                                    <li>React</li>
                                    <li>Bulma CSS</li>
                                    <li>HTML/CSS</li>
                                    <li>Tailwind CSS</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Data Science</span>
                                <div className='text-2xl'>
                                    <li>Tensorflow</li>
                                    <li>Pandas</li>
                                    <li>NumPy</li>
                                    <li>Matplotlib</li>
                                </div>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <span className='text-blue-500'>Other</span>
                                <div className='text-2xl'>
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>Git/GitHub</li>
                                    <li>AWS</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
