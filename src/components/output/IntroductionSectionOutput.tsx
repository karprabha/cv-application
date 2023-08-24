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
            <h2>Career Objective</h2>
            <hr />
            <div className="section-container">
                <p>
                    {introductionSection.careerObjective || "Career Objective"}
                </p>
            </div>
        </div>
    );
};

export default IntroductionSection;
