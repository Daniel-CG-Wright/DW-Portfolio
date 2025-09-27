import './App.css'
import { Container, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import Portfolio from './components/Portfolio'
import projects from './data/projects.json';

function App() {

  return (
    <>
      <span id="navbar-section">
        <Navbar id="navbar">
          <Container>
            <NavbarBrand>
              <b>Daniel Wright</b>
            </NavbarBrand>
            <NavLink href="#about">
              About Me
            </NavLink>
            <NavLink href="#portfolio">
              My Portfolio
            </NavLink>
            <NavLink href="#contact">
              Contact Me
            </NavLink>
          </Container>
        </Navbar>
      </span>
      <div>
        <section className="px-2" id="title-section">
          <h1 className=''>
            Welcome to my Website
          </h1>
          <p className="subtitle">
            This is my portfolio website. Here I showcase the projects I've worked on, both professionally and personally.
          </p>
        </section>
        <section className="px-10 py-4 text-section">
          <h2 id="about">About Me</h2>
            <h3>Who am I?</h3>
              <p>
                Hi! I'm Daniel Wright, a student of Computer Science at the University of Warwick. I am currently looking at beginning my career in <b>Software Engineering</b>,
                and in the future I may consider moving to a role in <b>Software Project Management</b> - my uncle took a similar route with conventional engineering.
                <br/>
                I'm a British citizen born in Trinidad and Tobago', and am always looking for new opportunities to meet new people and solve problems with my skillset.
              </p>
            <h3>My Journey</h3>
              <p>
                I normally don't tell this story, because you probably have more interesting things to be doing. But if you're interested, read on...
              </p>
              <p>
                I began my software focus by learning basic JavaScript when I was 7 years old, on Khan Academy, thanks to my future-focused parents.
                <br /> After being exposed to visual programming with Kodu and Scratch, I moved on to learn Python, starting in GCSE and practising it in many personal projects
                and throughout my A-level coursework, becoming the first language I gained proficiency in. Just before A-levels, I also tried some game development in Unity, with C#.
                I would later go on to restart that development in 2025. <br/>
                In the long Summer after A-levels I started my first professional work, developing the
                AWS-based architecture for SELPIOMS. This included returning to JavaScript, using the Node environment to develop AWS Lambda functions, as well as handling data effectively
                with SQS and EventBridge. This also meant my first dealings with APIs and webhooks, as I had to use an API to send data to the Ragic data management system.
                <br/> In that same Summer I also created the technical foundations for a first-person shooter in C++ with Unreal Engine 4, alongside a friend. I was also learning
                TypeScript and Next.JS for two other hobby projects.
                <br/> From University to now I have kept up that momentum I gained, going on to effectively use Java (the language of Warwick CS Coursework),
                Electron (building on my React knowledge), and C, along with using my existing skills, getting a job with Kogo after my first year, and completing a contract
                for Warwick University's Interdisciplinary Research Directory.
              </p>
            <h3>Extra tidbits</h3>
              <p>
                In my spare time I like to do scale modelling, make my hobby projects, do target rifle and clay pigeon shooting, and go swimming.
              </p>
        </section>
        <section>
          <Portfolio projects={projects} />
        </section>
        <section>
          <h2>

          </h2>
        </section>
      </div>
    </>
  )
}

export default App
