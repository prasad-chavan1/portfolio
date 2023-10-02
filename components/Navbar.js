import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const handleMobileNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <nav className='fixed z-20 bg-white w-full'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full '>
                        <div className='flex items-center sm:mx-10 md:mx-10 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0 '>
                                <h1 className=' font-bold text-xl cursor-pointer'>
                                    <Link href='/'>
                                        <a className='text-2xl pl-8 sm:pl-0'>
                                            Prasad<span className='text-blue-500'>Chavan</span>
                                        </a>
                                    </Link>
                                </h1>
                            </div>
                            <div className='hidden md:block'>
                                <div className='flex items-baseline space-x-10'>
                                    <h1
                                        className={
                                        router.pathname == '/'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='about' href='/'>
                                            <a>Home</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/about'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='about' href='/about'>
                                            <a>About</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/projects'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='projects' href='/projects'>
                                            <a>Projects</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/blog'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='blog' href='/blog'>
                                            <a>Blog</a>
                                        </Link>
                                    </h1>
                                </div>
                            </div>

                            <div className= 'flex justify-center items-center flex-shrink-0 md:block'>
                                <div className='flex space-x-4'>
                                    <div>
                                        <a href='https://github.com/prasad-chavan1' target='_blank' rel='noopener noreferrer'>
                                            <BsGithub className='hidden md:block' size='2rem' />
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.linkedin.com/in/prasad-chavan2003/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <BsLinkedin className='hidden md:block' size='2rem' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleMobileNav} className='mr-14 md:hidden'>
                            <AiOutlineMenu size='2rem' />
                        </div>
                    </div>
                </div>

                <div className='md:hidden'>
                    <div
                        className={
                        isOpen ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                    }
                    >
                        <div
                            className={
                            isOpen
                                ? 'fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-culturedWhite p-10 ease-in duration-300'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
                        }
                        >
                            <div>
                                <div className='flex w-full items-center justify-between'>
                                    <div
                                        onClick={handleMobileNav}
                                        className='rounded shadow-lg shadow-gray-400 p-3 cursor-pointer'
                                    >
                                        <AiOutlineClose />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col space-y-4 pt-4'>
                                    <h1
                                        className={
                                        router.pathname == '/'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='about' href='/'>
                                            <a onClick={handleMobileNav}>Home</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/about'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='about' href='/about'>
                                            <a onClick={handleMobileNav}>About</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/projects'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='projects' href='/projects'>
                                            <a onClick={handleMobileNav}>Projects</a>
                                        </Link>
                                    </h1>
                                    <h1
                                        className={
                                        router.pathname == '/blog'
                                            ? 'text-blue-500'
                                            : 'cursor-pointer hover:text-blue-500'
                                    }
                                    >
                                        <Link id='blog' href='/blog'>
                                            <a onClick={handleMobileNav}>Blog</a>
                                        </Link>
                                    </h1>
                                </div>
                                <div className='space-x-4 pt-20'>
                                    <div className='flex space-x-4'>
                                        <div className='rounded shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                            <a href='https://github.com/prasad-chavan1' target='_blank' rel='noopener noreferrer'>
                                                <BsGithub size='2rem' />
                                            </a>
                                        </div>
                                        <div className='rounded shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                            <a
                                                href='https://www.linkedin.com/in/prasad-chavan2003/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <BsLinkedin size='2rem' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
