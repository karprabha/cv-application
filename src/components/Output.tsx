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

            <IntroductionSection
                introductionSection={cv.introductionSection || {}}
            />

            <EducationSection educationSection={cv.educationSection || {}} />

            <ProjectSection projectSection={cv.projectSection || {}} />

            <TechnicalSkillSection
                technicalSkillSection={cv.technicalSkillSection || {}}
            />

            <h2>Achievements</h2>
            <hr />
            <AchievementSection
                achievementSection={cv.achievementSection || {}}
            />
        </div>
    );
};

export default Output;
