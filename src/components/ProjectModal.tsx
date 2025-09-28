import type { JSX } from "react";
import type { Project } from "../types";
import { Carousel, Modal } from "react-bootstrap";

/**
 * Modal component for projects - allows for expanding project to view on main screen.
 */
export default function ProjectModal({ project, show, onHide }: { project: Project | null; show: boolean; onHide: () => void; }): JSX.Element
{
    const images = project?.images ?? [];
    console.log(project);
    return (
        <>
            {project && 
                <Modal show={show} onHide={onHide} centered>
                    {images.length > 0 && (
                        <Carousel
                            indicators={images.length > 1}
                            controls={images.length > 1}
                            interval={4000}
                            className="project-card-carousel"
                            aria-label={`${project.title} images`}
                        >
                            {images.map((src, i) => (
                            <Carousel.Item key={i}>
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" />
                            </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                    <Modal.Header>
                        <Modal.Title as="h2">
                            {project.title}
                        </Modal.Title>
                        <Modal.Title as="h4" className="subtitle">
                            {project.organisation ?? "Personal Project"}
                        </Modal.Title>
                    </Modal.Header>
                </Modal>
            }
        </>
    )
}