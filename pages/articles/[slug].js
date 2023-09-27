import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
      <main className="xl:max-w-4xl md:max-w-2xl md:px-0 sm:px-10 px-6 mx-auto text-center my-20">
        <h1 className="font-semibold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Automate the Backend stuffs with Strapi and Docker
        </h1>
      </main>
    </div>
  )
}
