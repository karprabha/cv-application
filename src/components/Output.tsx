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

            <h2>Career Objective</h2>
            <hr />
            <IntroductionSection
                introductionSection={cv.introductionSection || {}}
            />

            <h2>Education</h2>
            <hr />
            <EducationSection educationSection={cv.educationSection || {}} />

            <h2>Projects</h2>
            <hr />
            <ProjectSection projectSection={cv.projectSection || {}} />

            <h2>Technical Skills</h2>
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
