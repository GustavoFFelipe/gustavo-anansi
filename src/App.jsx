
import { Header } from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Main } from './components/Main';
import { Projects } from './components/Projects'

import './global.scss';
import './App.scss'
import { About } from './components/About';

function App() {

  return (
    <>
      <Header />
      <article className="app-container">
        <Sidebar />
        <Main />
        <Projects />
        <About />
      </article>
      
    </>
  )
}

export default App
