
import { Header } from './components/Header';
import {Sidebar} from './components/Sidebar';
import { Main } from './components/Main';

import './global.scss';
import './App.scss'

function App() {

  return (
    <>
      <Header />
      <main className="app-container">
        <Sidebar />
        <Main />
      </main>
    </>
  )
}

export default App
