import ProjectOutput from "./ProjectOutput";

interface ProjectSection {
    [key: string]: any;
}

interface ProjectSectionProps {
    projectSection: ProjectSection;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectSection }) => {
    const getParams = (index: number) => {
        return projectSection.projects ? projectSection.projects[index] : {};
    };

    return (
        <div>
            <h2>Projects</h2>
            <hr />
            <div className="section-container">
                <ProjectOutput project={getParams(0)} />
                <ProjectOutput project={getParams(1)} />
                <ProjectOutput project={getParams(2)} />
            </div>
        </div>
    );
};

export default ProjectSection;
