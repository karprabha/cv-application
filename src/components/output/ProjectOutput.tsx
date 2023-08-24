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
            <p>
                {project.demoURL && (
                    <>
                        <a href={project.demoURL} target="_blank">
                            demoURL
                        </a>
                    </>
                )}
            </p>
            <p>
                {project.repositoryURL && (
                    <>
                        <a href={project.repositoryURL} target="_blank">
                            repositoryURL
                        </a>
                    </>
                )}
            </p>
            <p>
                {project.npmURL && (
                    <>
                        <a href={project.npmURL} target="_blank">
                            npmURL
                        </a>
                    </>
                )}
            </p>
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
