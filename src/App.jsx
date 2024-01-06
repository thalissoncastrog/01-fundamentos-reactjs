import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
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