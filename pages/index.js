import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Home.module.css";

const Home = ({ projects }) => {
  return (
    <div className={styles.container}>
      <main className="xl:max-w-5xl md:max-w-2xl md:px-0 sm:px-10 px-6 mx-auto text-center my-20">
        <h1 className="font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Jorge S. Carrion
        </h1>

        <p className="text-gray-400 font-medium text-3xl mt-7 max-w-2xl leading-relaxed text-center mx-auto">
          Soy un <span className="text-gray-100">desarrollador</span>, al que le
          gusta <span className="text-gray-100">diseñar</span>,{" "}
          <span className="text-gray-100">escribir</span> y{" "}
          <span className="text-gray-100">construir</span> proyectos
          innovadores.
        </p>

        <div className="grid grid-cols-5 gap-4 mt-14 max-w-2xl mx-auto justify-items-center">
          <img src="react.png" className="grayscale w-20" />
          <img src="vue.png" className="grayscale w-20" />
          <img src="nodejs.svg" className="grayscale w-28" />
          <img src="django.png" className="grayscale w-20" />
          <img src="php.png" className="grayscale w-32" />
        </div>
        <p className="text-center text-gray-300 mt-5">
          FullStack Developer | React.js | Vue.js | Node.js | Django | PHP
        </p>
        <section className="max-w-2xl mx-auto mt-10">
          <p className="text-white text-bold text-2xl text-left mb-5">
            Proyectos
          </p>
          {projects.slice(0).reverse().map((post, index) => (
            post.frontMatter.featured &&
            <Link href={'/projects/' + post.slug} passHref key={index}>
          <div className="text-left mb-4 px-7 py-3.5 bg-gray-900 border border-gray-700 rounded-sm cursor-pointer flex justify-start">
              <div className="">
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={125}
                  height={80}
                  objectFit="cover"
                />
              </div>
              <div className="ml-10">
                <p className="text-blue-500 text-2xl text-bold">{post.frontMatter.title}</p>
                <p className="text-white text-sm">
                {post.frontMatter.description}
                </p>
                <p className="card-text text-gray-400">
                <small className="text-muted">{post.frontMatter.date}</small>
                </p>
              </div>
          </div>
        </Link>
      ))}
        </section>
        {/**
         * <section className="max-w-2xl mx-auto mt-10">
          <p className="text-white text-bold text-2xl text-left mb-5">
            Articulos
          </p>
          <div className="text-left mb-4">
            <p className="text-gray-400">3 de septiembre de 2022</p>
            <a href="#" className="text-blue-500 text-2xl text-bold">
              Custom hook para validacion de campos con React
            </a>
            <p className="text-white text-sm">
              Learn how to get started with Strapi which is an Open Source
              Headless CMS using Docker.
            </p>
          </div>
          <div className="text-left mb-4">
            <p className="text-gray-400">3 de septiembre de 2022</p>
            <a href="#" className="text-blue-500 text-2xl text-bold">
              Custom hook para validacion de campos con React
            </a>
            <p className="text-white text-sm">
              Learn how to get started with Strapi which is an Open Source
              Headless CMS using Docker.
            </p>
          </div>
        </section>
         */}
      </main>

      <footer className={styles.footer}>
        <p className="text-gray-300">Diseñado con &#9829; por JocaDev.site</p>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('projects'))

  const projects = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      projects
    }
  }
}

export default Home