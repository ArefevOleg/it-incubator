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
import { PageTitle } from './components/pageTitle/PageTitle';
import { SkillsAboutPage } from './pages/projects/SkillsAboutPage';
import { MyFunFacts } from './pages/about/MyFunFacts';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { CompletApps } from './components/CompletApps';


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
        {/* <ProjectsPage> */}
        {/* <Header />
          <PageTitle name="projects" description="List of my projects" /> */}
        {/* <CompletApps />
          <Media /> */}
        {/* <SmallProjects /> */}
        {/* <Footer /> */}
        {/* </ProjectsPage> */}
        {/* <AboutPage>
          <Header />
          <PageTitle name="about-me" description="Who am i?" />
          <AboutMe isShowTitle={false} button={false}/>
          <Media />
          <SkillsAboutPage />
          <MyFunFacts />
          <Footer />
        </AboutPage>
        <ContactsPage /> */}
        <GridContainer>
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
          <GridItem>4</GridItem>
          <GridItem>5</GridItem>
          <GridItem>6</GridItem>
          <GridItem>7</GridItem>
          <GridItem>8</GridItem>
        </GridContainer>
      </div>
    );
}

const GridContainer = styled.div`
height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 265px);
  grid-template-rows: repeat(3, 200px);
  gap: 16px;

  grid-template-areas: 
  "one two three four"
  "five five six eigth"
  "five five seven eigth"
`;


const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  &:first-child {
    grid-area: one;
  }

  &:nth-child(2) {
    grid-area: two;
  }

  &:nth-child(2) {
    grid-area: fhree;
  }

  &:nth-child(2) {
    grid-area: four;
  }
  
  &:nth-child(2) {
    grid-area: five;
  }

  &:nth-child(2) {
    grid-area: six;
  }

  &:nth-child(2) {
    grid-area: seven;
  }

  &:last-child {
    grid-area: eigth;
  }
`;














const HomePage = styled.div`

`


const AboutPage = styled.div`

`

const ProjectsPage = styled.div`

`








export default App;





  // const Section = ({children}: { children: ReactNode}) => {
  //   return (
  //     <div>

  //       {children}
  //     </div>
  //   );
  // }

  // const ParentComponent = () => {
  //   return (
  //     <div>
  //       <Section>
  //         <PageTitle name="projects" description="List of my projects" />
  //         <Media />
  //       </Section>
  //     </div>
  //   );
  // }