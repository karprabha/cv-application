import HeaderSection from "./output/HeaderSectionOutput";
import IntroductionSection from "./output/IntroductionSectionOutput";
import EducationSection from "./output/EducationSectionOutput";
import ProjectSection from "./output/ProjectSectionOutput";

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
            <hr />
            <IntroductionSection
                introductionSection={cv.introductionSection || {}}
            />
            <hr />
            <EducationSection educationSection={cv.educationSection || {}} />
            <hr />
            <ProjectSection projectSection={cv.projectSection || {}} />
            <hr />
        </div>
    );
};

export default Output;