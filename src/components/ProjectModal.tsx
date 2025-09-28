import type { JSX } from "react";
import type { Project } from "../types";
import { Carousel, Modal, Stack } from "react-bootstrap";
import SkillTags from "./SkillTags";

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
                            className="modal-carousel"
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
                    <Modal.Header className="bottom-divider">
                        <Stack>
                            <Modal.Title as="h2">
                                {project.title}
                            </Modal.Title>
                            <Modal.Title as="h4" className="subtitle text-center text-muted">
                                {project.organisation ?? "Personal Project"}
                            </Modal.Title>
                            { project.url && <Modal.Title as="a" className="text-center" style={{ cursor: "pointer", maxWidth: "fit-content", marginInline: "auto"}}>
                                {project.url}
                            </Modal.Title>
                            }
                            { project.indev && <div className="modal-wip">
                                WIP
                            </div>
                            }
                        </Stack>
                    </Modal.Header>
                    <Modal.Body className="bottom-divider">
                        <p>
                            {project.description
                            .split("\n")                // split at newline
                            .filter(line => line.trim()) // remove empty lines
                            .map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="footer">
                        <SkillTags skills={project.tags} />
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}