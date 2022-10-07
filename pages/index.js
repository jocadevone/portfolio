import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className="xl:max-w-5xl md:max-w-2xl md:px-0 sm:px-10 px-6 mx-auto text-center my-20">
        <h1 className="font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Jorge S. Carrion
        </h1>

        <p className="text-gray-400 font-medium text-3xl mt-7 max-w-2xl leading-relaxed text-center mx-auto">
          Soy un <span className="text-gray-100">desarrollador</span>, al que le gusta <span className="text-gray-100">diseñar</span>, <span className="text-gray-100">escribir</span> y <span className="text-gray-100">construir</span> proyectos de código abierto.
        </p>

        <div className="grid grid-cols-5 gap-4 mt-14 max-w-2xl mx-auto justify-items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" className="grayscale w-20" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" className="grayscale w-20" />
          <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" className="grayscale w-28" />
          <img src="django.png" className="grayscale w-20" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" className="grayscale w-32" />
        </div>
        <p className="text-center text-gray-300 mt-5">Algunas tecnologias preferidas...</p>
        <section className="max-w-2xl mx-auto mt-10">
          <p className="text-white text-bold text-2xl text-left mb-5">Articulos</p>
          <div className="text-left mb-4">
            <p className="text-gray-400">3 de septiembre de 2022</p>
            <a href="#" className="text-blue-500 text-2xl text-bold">Custom hook para validacion de campos con React</a>
            <p className="text-white text-sm">Learn how to get started with Strapi which is an Open Source Headless CMS using Docker.</p>
          </div>
          <div className="text-left mb-4">
            <p className="text-gray-400">3 de septiembre de 2022</p>
            <a href="#" className="text-blue-500 text-2xl text-bold">Custom hook para validacion de campos con React</a>
            <p className="text-white text-sm">Learn how to get started with Strapi which is an Open Source Headless CMS using Docker.</p>
          </div>
        </section>
        <section className="max-w-2xl mx-auto mt-10">
          <p className="text-white text-bold text-2xl text-left mb-5">Proyectos</p>
          <a href="#">
            <div className="text-left mb-4 px-7 py-3.5 bg-gray-900 border border-gray-700 rounded-sm">
              <p className="text-blue-500 text-2xl text-bold">PelisSearch</p>
              <p className="text-white text-sm">Aplicación que te permite buscar información acerc...</p>
            </div>
          </a>
          <a href="#">
            <div className="text-left mb-4 px-7 py-3.5 bg-gray-900 border border-gray-700 rounded-sm">
              <p className="text-blue-500 text-2xl text-bold">PelisSearch</p>
              <p className="text-white text-sm">Aplicación que te permite buscar información acerc...</p>
            </div>
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
