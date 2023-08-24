interface ProjectOutput {
    [key: string]: any;
}

interface ProjectOutputProps {
    project: ProjectOutput;
}

const ProjectOutput: React.FC<ProjectOutputProps> = ({ project }) => {
    return (
        <div>
            <div className="container">
                <h3>{project.title || "Title"}</h3>
                <span className="italic-text">
                    {project.technologies || "technologies"}
                </span>

                <div>
                    <span>
                        {project.demoURL && (
                            <>
                                <a href={project.demoURL} target="_blank">
                                    Live Demo
                                </a>
                            </>
                        )}
                    </span>

                    {project.demoURL && project.repositoryURL && " | "}

                    <span>
                        {project.repositoryURL && (
                            <>
                                <a href={project.repositoryURL} target="_blank">
                                    Repository
                                </a>
                            </>
                        )}
                    </span>

                    {project.repositoryURL && project.npmURL && " | "}

                    <span>
                        {project.npmURL && (
                            <>
                                <a href={project.npmURL} target="_blank">
                                    NPM
                                </a>
                            </>
                        )}
                    </span>
                </div>
            </div>
            <ul>
                {project.description1 && <li>{project.description1}</li>}
                {project.description2 && <li>{project.description2}</li>}
                {project.description3 && <li>{project.description3}</li>}
                {project.description4 && <li>{project.description4}</li>}
                {project.description5 && <li>{project.description5}</li>}
                {project.description6 && <li>{project.description6}</li>}
            </ul>
        </div>
    );
};

export default ProjectOutput;
