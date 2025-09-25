
import React, { type JSX } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';
import projectsData from '../data/projects.json';

/**
 * Portfolio component - lists all the projects in a responsive grid.
 *
 * @returns {JSX.Element}
 */
export default function Portfolio(): JSX.Element {
    const projects: Project[] = projectsData;
    return (
        <Container className="my-5">
            <h2 className='mb-4 text-center'>Featured Projects</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
                {projects.filter(p => p.isFeatured).map((project) => (
                    <Col key={project.title}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
            <h2 className="mb-4 text-center">My Projects</h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {projects.map((project) => (
                    <Col key={project.title}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
