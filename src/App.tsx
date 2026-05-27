import './App.css'
import { Button, Col, Container, Image, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import Portfolio from './components/Portfolio'
import projects from './data/projects.json';

function App() {

  return (
    <>
    <div>
        <section className="px-2" id="title-section">
          <div id="navbar-section">
            <Navbar id="navbar" expand="md">
              <Container>
                <NavbarBrand href="#">
                  <b>Daniel Wright</b>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="primary-nav" />
                <Navbar.Collapse id="primary-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#portfolio">My Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact Me</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div id='title-text'>
            <h1 className=''>
              Daniel Wright
            </h1>
            <p className="subtitle">
              Software Engineer &middot; Computer Science @ Warwick<br />
              <span className="subtitle-tagline">Building production software while studying; currently freelancing for Hireable Ltd.</span>
            </p>
            <div className="hero-ctas">
              <Button variant="light" size="lg" href="#portfolio">See my work &rarr;</Button>
              <Button variant="outline-light" size="lg" href="#contact">Get in touch</Button>
            </div>
          </div>
        </section>
        <section className="px-10 py-4 text-section">
          <h2 id="about">About Me</h2>
            <h3>Who am I?</h3>
              <p>
                Hi! I'm Daniel Wright, a third-year Computer Science student at the University of Warwick and working as a software engineer. I currently freelance for Hireable Ltd, and have delivered work for Kogo Limited and the University of Warwick's Interdisciplinary Research Directory.
                Long-term, I'm interested in moving toward <b>Software Project Management</b>; my uncle took a similar route with conventional engineering.
                <br/>
                I'm a British citizen born in Trinidad and Tobago, and am always looking for new opportunities to meet new people and solve problems with my skillset.
              </p>
            <h3>My Journey</h3>
              <p>
                I began my software journey by learning basic JavaScript when I was 7 years old, on Khan Academy, thanks to my future-focused parents.
                <br /> After being exposed to visual programming with Kodu and Scratch, I moved on to learn Python, starting in GCSE and practising it in many personal projects
                and throughout my A-level coursework, becoming the first language I gained proficiency in. Just before A-levels, I also tried some game development in Unity, with C#.
                I would later go on to restart that development in 2025. <br/>
                In the long summer after A-levels I started my first professional work, developing the
                AWS-based architecture for Springwood Enterprises' Perpetual Inventory and Order Management System. This included returning to JavaScript, using the Node environment to develop AWS Lambda functions, as well as handling data effectively
                with SQS and EventBridge. This also meant my first dealings with APIs and webhooks, as I had to use an API to send data to the Ragic data management system.
                <br/> In that same summer I also created the technical foundations for a first-person shooter in C++ with Unreal Engine 4, alongside a friend. I was also learning
                TypeScript and Next.js for two other hobby projects.
                <br/> From university onwards I have kept up that momentum, picking up Java (the language of Warwick CS coursework),
                Electron (building on my React knowledge), and C, alongside my existing skills - joining Kogo after my first year and completing a contract
                for Warwick's Interdisciplinary Research Directory. I now actively freelance for clients such as Hireable Ltd, and am experienced with efficient AI-assisted coding
                to maximise value-per-hour for clients without sacrificing quality.
              </p>
            <h3>Outside of work</h3>
              <p>
                In my spare time I like to do scale modelling, work on hobby projects, do target rifle and clay pigeon shooting, and go swimming.
              </p>
        </section>
        <section id="portfolio">
          <Portfolio projects={projects} />
        </section>
        <section id="contact-section">
          <h2 id="contact">
            Contact Me
          </h2>
          <Container className="contact-container">
            <Row className="text-center justify-content-center">
              <Col xs="auto">
                <a href="https://www.linkedin.com/in/danielcgwright/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
                  <Image src="/LI-In-Bug.png" className="contact-icon" alt="LinkedIn" />
                </a>
              </Col>
              <Col xs="auto">
                <a href="https://github.com/Daniel-CG-Wright" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
                  <Image src="/github-mark-white.svg" className='contact-icon' alt="GitHub" />
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="site-footer">
          <Container>
            <span>&copy; {new Date().getFullYear()} Daniel Wright</span>
            <span className="footer-divider">&middot;</span>
            <a href="https://github.com/Daniel-CG-Wright/DW-Portfolio" target="_blank" rel="noopener noreferrer">Source on GitHub</a>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default App
