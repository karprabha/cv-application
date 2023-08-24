import { useEffect, useState } from "react";
import Input from "./Input";

type updateProjectInputFunction = (key: number, value: any) => void;

interface ProjectInputProps {
    updateProjectSection: updateProjectInputFunction;
    projectId: number;
}

const ProjectInput: React.FC<ProjectInputProps> = ({
    updateProjectSection,
    projectId,
}) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        updateProjectSection(projectId, project);
    }, [project]);

    const updateProject = (key: string, value: any) => {
        setProject((prevProject) => ({
            ...prevProject,
            [key]: value,
        }));
    };

    return (
        <>
            <Input
                type="text"
                keyName="title"
                placeholder="Title"
                updateParentSection={updateProject}
            />

            <Input
                type="text"
                keyName="technologies"
                placeholder="Technologies Used"
                updateParentSection={updateProject}
            />

            <Input
                type="text"
                keyName="demoURL"
                placeholder="https://www.demo.com"
                updateParentSection={updateProject}
            />

            <Input
                type="text"
                keyName="repositoryURL"
                placeholder="https://www.github.com/username/projectName"
                updateParentSection={updateProject}
            />

            <Input
                type="text"
                keyName="npmURL"
                placeholder="https://www.npm.com/username/packageName"
                updateParentSection={updateProject}
            />

            <Input
                type="text"
                keyName="description1"
                placeholder="description"
                updateParentSection={updateProject}
            />
            <Input
                type="text"
                keyName="description2"
                placeholder="description"
                updateParentSection={updateProject}
            />
            <Input
                type="text"
                keyName="description3"
                placeholder="description"
                updateParentSection={updateProject}
            />
            <Input
                type="text"
                keyName="description4"
                placeholder="description"
                updateParentSection={updateProject}
            />
            <Input
                type="text"
                keyName="description5"
                placeholder="description"
                updateParentSection={updateProject}
            />
            <Input
                type="text"
                keyName="description6"
                placeholder="description"
                updateParentSection={updateProject}
            />
        </>
    );
};

export default ProjectInput;
