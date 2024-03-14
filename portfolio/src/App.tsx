import './App.css';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { MainSection } from './pages/home/main/Main';
import { QuoteSection } from './components/quote/Quote';
import { Projects } from "./pages/home/projects/Projects";
import { Media } from './components/media/Media';
import { Skills } from './pages/home/skills/Skills';
import { AboutMe } from './pages/home/aboutme/AboutMe';
import { Contacts } from './pages/home/contacts/Contacts';
import { Footer } from './components/footer/Footer';
import { SmallProjects } from './pages/projects/SmallProjects'
import { theme } from './styles/Theme';
import { PageTitle } from './components/pageTitle/PageTitle';



function App() {
    return (
      <div className="App">
        {/* <HomePage>
          <Header />
          <Media />
          <MainSection />
          <QuoteSection />
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
          <Footer />
        </HomePage> */}
        <ProjectsPage>
          <Header />
          <PageTitle />
          <Media />
          <SmallProjects />
        </ProjectsPage>
        <AboutPage></AboutPage>
        <ContactsPage></ContactsPage>
      </div>
    );
}

export default App;





const HomePage = styled.div`

  `

  const ProjectsPage = styled.div`

  `

  const AboutPage = styled.div`

  `

  const ContactsPage = styled.div`

  `