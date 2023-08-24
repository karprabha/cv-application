import { useEffect, useState } from "react";
import HeaderSection from "./editor/HeaderSectionInput";
import IntroductionSection from "./editor/IntroductionSectionInput";
import EducationSection from "./editor/EducationSectionInput";
import ProjectSection from "./editor/ProjectSectionInput";
import TechnicalSkillSection from "./editor/TechnicalSkillSectionInput";
import AchievementSection from "./editor/AchievementInput";

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
    const [achievementSection, setAchievementSection] = useState({});

    useEffect(() => {
        updateCV("headerSection", headerSection);
        updateCV("introductionSection", introductionSection);
        updateCV("educationSection", educationSection);
        updateCV("projectSection", projectSection);
        updateCV("technicalSkillSection", technicalSkillSection);
        updateCV("achievementSection", achievementSection);
    }, [
        headerSection,
        introductionSection,
        educationSection,
        projectSection,
        technicalSkillSection,
        achievementSection,
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

    const updateAchievementSection = (key: string, value: any) => {
        setAchievementSection((prevAchievementSection) => ({
            ...prevAchievementSection,
            [key]: value,
        }));
    };

    return (
        <div className="editor">
            <div className="input-section-container">
                <h2>Header Section</h2>
                <HeaderSection updateHeaderSection={updateHeaderSection} />
            </div>
            <hr />

            <div className="input-section-container">
                <h2>Career Objective Section</h2>
                <IntroductionSection
                    updateIntroductionSection={updateIntroductionSection}
                />
            </div>
            <hr />

            <div className="input-section-container">
                <h2>Education Section</h2>
                <EducationSection
                    updateEducationSection={updateEducationSection}
                />
            </div>
            <hr />

            <div className="input-section-container">
                <h2>Projects Section</h2>
                <ProjectSection updateProjectSection={updateProjectSection} />
            </div>
            <hr />

            <div className="input-section-container">
                <h2>Technical Skills Section</h2>
                <TechnicalSkillSection
                    updateTechnicalSkillSection={updateTechnicalSkillSection}
                />
            </div>
            <hr />

            <div className="input-section-container">
                <h2>Achievement Section</h2>
                <AchievementSection
                    updateAchievementSection={updateAchievementSection}
                />
            </div>
        </div>
    );
};

export default Editor;
