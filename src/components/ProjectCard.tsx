import React, { type JSX } from 'react';
import { Card, Badge, Carousel } from 'react-bootstrap';
import type { Project } from '../types';

/**
* ProjectCard
* Small presentational component for a project entry.
*
* @param {{project: Project}} props
* @returns {JSX.Element}
*/
export default function ProjectCard({ project }: { project: Project }): JSX.Element {
  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <Card className="h-100 shadow-sm project-card">
      {/* Top media area (image carousel or placeholder). The media wrapper is position:relative so the ribbon can attach to it. */}
      <div className="project-card-media">
        {project.indev ? (
          <span className="ribbon" aria-hidden="true">WIP</span>
        ) : null}

        {hasImages ? (
          <Carousel
            indicators={project.images!.length > 1}
            controls={project.images!.length > 1}
            interval={4000}
            className="project-card-carousel"
            aria-label={`${project.title} images`}
          >
            {project.images!.map((src, i) => (
              <Carousel.Item key={i}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="project-card-placeholder">
            <div>
              <strong>No preview</strong>
              <div style={{ fontSize: '0.85rem', marginTop: 6 }}>{project.tags?.slice(0, 3).join(' • ')}</div>
            </div>
          </div>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" style={{ fontSize: '1.125rem', marginBottom: 4 }}>
          {project.url ? (
            <Card.Link href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</Card.Link>
          ) : (
            <span>{project.title}</span>
          )}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
          {project.organisation ?? 'Personal Project'}
        </Card.Subtitle>

        <Card.Text className="text-muted small line-clamp-3" aria-label={`Description: ${project.title}`}>
          {project.description}
        </Card.Text>

        <div className="project-card-footer">
          <div className="mb-2" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {project.tags?.map((tag) => (
              <Badge bg="primary" key={tag} className="me-1">{tag}</Badge>
            ))}

          </div>
        </div>
      </Card.Body>
    </Card>
  );
}