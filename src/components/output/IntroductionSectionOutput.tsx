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
        <>
            <p>{introductionSection.careerObjective || "Career Objective"}</p>
        </>
    );
};

export default IntroductionSection;
