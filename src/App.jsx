import { Header } from './components/header'
import {Post} from './Post'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Medina" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad enim excepturi est amet doloribus accusantium fugiat iusto reprehenderit eaque architecto nemo, facilis distinctio quisquam debitis numquam eos quae unde tenetur?"
      />
      <Post 
        author="Muzzy"
        content="Eu amo a Roberta"
      />
      
    </div>
  )
}


