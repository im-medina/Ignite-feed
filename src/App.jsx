import { Header } from './components/header'
import {Post} from './Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
        author="Medina" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim excepturi est amet doloribus accusantium fugiat iusto reprehenderit eaque architecto nemo, facilis distinctio quisquam debitis numquam eos quae unde tenetur?"
      />
      <Post 
        author="Muzzy"
        content="Eu amo a Roberta"
      />
      </main>
      </div>
    </div>
  )
}


