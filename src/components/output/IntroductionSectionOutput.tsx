interface IntroductionSection {
    [key: string]: any;
}

interface IntroductionSectionProps {
    introductionSection: IntroductionSection;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    introductionSection,
}) => {
    return (
        <div>
            <p>{introductionSection.careerObjective || "Career Objective"}</p>
        </div>
    );
};

export default IntroductionSection;
