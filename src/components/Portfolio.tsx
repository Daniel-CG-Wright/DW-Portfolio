
import { type JSX } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

/**
 * Portfolio component - lists all the projects in a responsive grid.
 *
 * @returns {JSX.Element}
 */
export default function Portfolio({ projects }: { projects?: Project[] } = {}): JSX.Element {
    // If caller didn't supply projects, they should import their JSON and pass it in.
    // Keeping this component re-usable and testable.
    const fallback: Project[] = projects ?? [];


    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Featured Projects</h2>
            <Row xs={1} m={3} xl={5} className="g-4 mb-5">
                {fallback.filter(p => p.isFeatured).map((project) => (
                <Col key={project.title}>
                    <ProjectCard project={project} />
                </Col>
                ))}
            </Row>


            <h2 className="mb-4 text-center">My Projects</h2>
            <Row xs={1} m={3} xl={5} className="g-4">
                {fallback.map((project) => (
                <Col key={project.title}>
                    <ProjectCard project={project} />
                </Col>
                ))}
            </Row>
        </Container>
    );
}