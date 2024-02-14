import './App.css';
import styled from 'styled-components';
import { Header} from '../src/layout/header/Header';
import { Main } from '../src/layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
        </div>
    );
}

export default App;