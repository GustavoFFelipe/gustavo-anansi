import {Sidebar} from '../src/components/Sidebar';
import { Main } from '../src/components/Main';
import { Projects } from '../src/components/Projects'
import { About } from '../src/components/About';
import { Skill } from '../src/components/Skill';
import { Form } from '../src/components/Form';

import '../src/global.scss';
import '../src/App.scss'

export function Home(){
    <>
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
}