import { useEffect, useState } from "react";
import ProjectInput from "./ProjectInput";

type updateProjectSectionFunction = (key: string, value: any) => void;

interface ProjectSectionProps {
    updateProjectSection: updateProjectSectionFunction;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
    updateProjectSection,
}) => {
    const [projects, setProjects] = useState([{}, {}, {}]);

    useEffect(() => {
        updateProjectSection("projects", projects);
    }, [projects]);

    const updateProjects = (index: number, newValue: any) => {
        const newProjects = projects.map((value, idx) =>
            idx === index ? newValue : value
        );
        setProjects(newProjects);
    };

    return (
        <div className="input-container">
            <div className="project-input-container">
                <h2>Project 1</h2>
                <ProjectInput
                    projectId={0}
                    updateProjectSection={updateProjects}
                />
            </div>

            <div className="project-input-container">
                <h2>Project 2</h2>
                <ProjectInput
                    projectId={1}
                    updateProjectSection={updateProjects}
                />
            </div>

            <div className="project-input-container">
                <h2>Project 3</h2>
                <ProjectInput
                    projectId={2}
                    updateProjectSection={updateProjects}
                />
            </div>
        </div>
    );
};

export default ProjectSection;
