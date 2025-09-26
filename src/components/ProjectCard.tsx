import React, { type JSX } from 'react';
import { Card, Button, Badge, CardLink } from 'react-bootstrap';
import type { Project } from '../types';

/**
* ProjectCard
* Small presentational component for a project entry.
*
* @param {{project: Project}} props
* @returns {JSX.Element}
*/
export default function ProjectCard({ project }: { project: Project }): JSX.Element {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
                <Card.Title><CardLink href={project.url}>{project.title}</CardLink></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.organisation || "Personal Project"}</Card.Subtitle>
                <Card.Text className="text-muted small">{project.description}</Card.Text>


                <div className="mt-auto">
                    <div className="mb-3">
                        {project.tags.map((tag) => (
                        <Badge bg="secondary" className="me-1" key={tag}>
                            {tag}
                        </Badge>
                        ))}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}