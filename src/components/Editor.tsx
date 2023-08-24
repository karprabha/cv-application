import { useEffect, useState } from "react";
import HeaderSection from "./editor/HeaderSectionInput";
import IntroductionSection from "./editor/IntroductionSectionInput";
import EducationSection from "./editor/EducationSectionInput";
import ProjectSection from "./editor/ProjectSectionInput";
import TechnicalSkillSection from "./editor/TechnicalSkillSectionInput";

type UpdateCVFunction = (key: string, value: any) => void;

interface EditorProps {
    updateCV: UpdateCVFunction;
}

const Editor: React.FC<EditorProps> = ({ updateCV }) => {
    const [headerSection, setHeaderSection] = useState({});
    const [introductionSection, setIntroductionSection] = useState({});
    const [educationSection, setEducationSection] = useState({});
    const [projectSection, setProjectSection] = useState({});
    const [technicalSkillSection, setTechnicalSkillSection] = useState({});

    useEffect(() => {
        updateCV("headerSection", headerSection);
        updateCV("introductionSection", introductionSection);
        updateCV("educationSection", educationSection);
        updateCV("projectSection", projectSection);
        updateCV("technicalSkillSection", technicalSkillSection);
    }, [
        headerSection,
        introductionSection,
        educationSection,
        projectSection,
        technicalSkillSection,
    ]);

    const updateHeaderSection = (key: string, value: any) => {
        setHeaderSection((prevHeaderSection) => ({
            ...prevHeaderSection,
            [key]: value,
        }));
    };

    const updateIntroductionSection = (key: string, value: any) => {
        setIntroductionSection((prevIntroductionSection) => ({
            ...prevIntroductionSection,
            [key]: value,
        }));
    };

    const updateEducationSection = (key: string, value: any) => {
        setEducationSection((prevEducationSection) => ({
            ...prevEducationSection,
            [key]: value,
        }));
    };

    const updateProjectSection = (key: string, value: any) => {
        setProjectSection((prevProjectSection) => ({
            ...prevProjectSection,
            [key]: value,
        }));
    };

    const updateTechnicalSkillSection = (key: string, value: any) => {
        setTechnicalSkillSection((prevTechnicalSkillSection) => ({
            ...prevTechnicalSkillSection,
            [key]: value,
        }));
    };

    return (
        <div className="editor">
            <HeaderSection updateHeaderSection={updateHeaderSection} />
            <hr />
            <IntroductionSection
                updateIntroductionSection={updateIntroductionSection}
            />
            <hr />
            <EducationSection updateEducationSection={updateEducationSection} />
            <hr />
            <ProjectSection updateProjectSection={updateProjectSection} />
            <hr />
            <TechnicalSkillSection
                updateTechnicalSkillSection={updateTechnicalSkillSection}
            />
        </div>
    );
};

export default Editor;
