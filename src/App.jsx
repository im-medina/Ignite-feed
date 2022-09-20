import { Header } from './components/header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

/* Essas informações podem ser trazidas pelo back */
const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'https://github.com/im-medina.png',
      name: 'Dante Medina',
      role: 'Front-End Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-19 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post=>{ //map funciona como um forEach, mas com retorno.
          return(
            <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
      </div>
    </div>
  )
}


