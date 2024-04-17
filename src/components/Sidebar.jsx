import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react' 

export function Sidebar(){
    return(
        <aside className= {styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            
            <div className= {styles.profile}>
                <img className={styles.avatar} src='https://github.com/thalissoncastrog.png'></img>
                <strong>Thalisson Castro</strong>
                <span>Computer Engineer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}