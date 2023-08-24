interface ProjectOutput {
    [key: string]: any;
}

interface ProjectOutputProps {
    project: ProjectOutput;
}

const ProjectOutput: React.FC<ProjectOutputProps> = ({ project }) => {
    return (
        <>
            <p>{project.title || "Title"}</p>
            <p>{project.technologies || "technologies"}</p>
            <p>{project.demoURL || "demoURL"}</p>
            <p>{project.repositoryURL || "repositoryURL"}</p>
            <p>{project.npmURL || "npmURL"}</p>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
            <p>{project.description3}</p>
            <p>{project.description4}</p>
            <p>{project.description5}</p>
            <p>{project.description6}</p>
        </>
    );
};

export default ProjectOutput;
