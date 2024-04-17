import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Thalisson" 
          content="This is my middle name."
          />

          <Post 
            author="Adão" 
            content="This is my first name."
          />
        </main>
      </div>
    </div>
  )
}