
import { Header } from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Main } from './components/Main';
import { Projects } from './components/Projects'
import { About } from './components/About';
import { Skill } from './components/Skill';

import './global.scss';
import './App.scss'
import { Form } from './components/Form';

function App() {

  return (
    <>
      <Header />
      <article className="app-container">
        <Sidebar />
        <Main />
        <Projects />
        <div className="infoContainer">
        <About />
        <Skill />
        </div>
        <Form />
      </article>
      
    </>
  )
}

export default App
