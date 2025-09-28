import type { JSX } from "react";

export default function SkillTags({ skills }: { skills: string[] }): JSX.Element
{
    return (
        <div className="skill-tags">
            {skills.map((tag) => (
                <span key={tag} className="skill">{tag}</span>
            ))}

        </div>
    )
}