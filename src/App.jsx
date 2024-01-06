import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Thalisson" 
        content="This is my middle name."
      />

      <Post 
        author="Adão" 
        content="This is my first name."
      />
    </div>
  )
}