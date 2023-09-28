import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Navbar() {
    return(
        <>
        <div className="py-1 w-full bg-clip bg-gradient-to-r from-blue-500 to-teal-400"></div>
        <div className="xl:max-w-5xl md:max-w-2xl md:px-0 sm:px-10 px-6 mx-auto">
            <div className="flex justify-between py-5">
                <Link href="/"><p className="font-semibold text-3xl text-white hidden md:block cursor-pointer">JocaDev</p></Link>
                <p className="font-semibold text-3xl text-white block md:hidden">JD</p>
                <div className="flex items-center">
                    {/**
                     * <a href="#" className="text-white mr-5 hover:text-gray-400 hover:underline">Proyectos</a>
                    <a href="#" className="text-white mr-5 hover:text-gray-400 hover:underline">Articulos</a>
                    <a href="#" className="text-white mr-5 hover:text-gray-400 hover:underline">Acerca de</a>
                     */}
                    <a href="https://github.com/jocadevone" target="_BLANK" className="text-2xl text-white hover:text-gray-400 mr-5"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://medium.com/@jocadevone" target="_BLANK" className="text-2xl text-white hover:text-gray-400 mr-5"><FontAwesomeIcon icon={faMedium} /></a>
                    <a href="https://twitter.com/jocablock" target="_BLANK" className="text-2xl text-white hover:text-gray-400"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </div>
        </>
    );
}