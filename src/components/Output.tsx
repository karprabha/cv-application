import HeaderSection from "./output/HeaderSectionOutput";
import IntroductionSection from "./output/IntroductionSectionOutput";
import EducationSection from "./output/EducationSectionOutput";
import ProjectSection from "./output/ProjectSectionOutput";
import TechnicalSkillSection from "./output/TechnicalSkillSectionOutput";
import AchievementSection from "./output/AchievementOutput";

interface CV {
    [key: string]: any;
}

interface OutputProps {
    cv: CV;
}

const Output: React.FC<OutputProps> = ({ cv }) => {
    return (
        <div className="output">
            <HeaderSection headerSection={cv.headerSection || {}} />
            Career Objective
            <hr />
            <IntroductionSection
                introductionSection={cv.introductionSection || {}}
            />
            Education
            <hr />
            <EducationSection educationSection={cv.educationSection || {}} />
            <hr />
            <ProjectSection projectSection={cv.projectSection || {}} />
            <hr />
            <TechnicalSkillSection
                technicalSkillSection={cv.technicalSkillSection || {}}
            />
            <hr />
            <AchievementSection
                achievementSection={cv.achievementSection || {}}
            />
        </div>
    );
};

export default Output;
