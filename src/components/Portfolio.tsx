
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
        <div>
            <h2 className="text-center border-bottom narrow-body pb-3">Featured Projects</h2>
            <Container className="py-5">
                <Row xs={1} md={3} className="g-4 mb-5 pt-4">
                    {fallback.filter(p => p.isFeatured).map((project) => (
                    <Col key={project.title}>
                        <ProjectCard project={project} />
                    </Col>
                    ))}
                </Row>
            </Container>

            <h2 className="border-bottom text-center narrow-body pb-3">My Projects</h2>
            <Container className="py-5">
                <Row xs={1} md={3} className="g-4 pt-4">
                    {fallback.filter(p => !p.isFeatured).map((project) => (
                    <Col key={project.title}>
                        <ProjectCard project={project} />
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}