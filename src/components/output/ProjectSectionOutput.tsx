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
        <>
            <ProjectOutput project={getParams(0)} />
            <ProjectOutput project={getParams(1)} />
            <ProjectOutput project={getParams(2)} />
        </>
    );
};

export default ProjectSection;
