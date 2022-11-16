import { Header } from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Main } from './components/Main';
import { Projects } from './components/Projects'
import { About } from './components/About';
import { Skill } from './components/Skill';
import { Form } from './components/Form';
import { Footer } from './components/Footer'

{/*import { MenuMobile } from './components/MenuMobile';*/}




import './global.scss';
import './App.scss'

function App() {

  return (

    <>
      {/*<MenuMobile />*/} 
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
      <Footer />
      
    </>
  )
}

export default App
