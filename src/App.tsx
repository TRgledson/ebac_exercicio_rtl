import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://imgs.search.brave.com/noEMMmDf_uUzGJ9WOYEJAspbwDsT-x2lYukfab8O8ro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWluaW11bmRpLmNv/bS5ici9jZG4vaW1h/Z2Vucy9wcm9kdXRv/cy9kZXQvbWluaWF0/dXJhLWNhcnJvLWJh/dG1vdmVsLWJhdG1h/bi1kYy0xMS01LWNt/LWhvdC13aGVlbHMt/ZGtsMjAtZGtsMjhf/YS5qcGc">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
