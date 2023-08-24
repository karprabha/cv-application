interface TechnicalSkillSection {
    [key: string]: any;
}

interface TechnicalSkillSectionProps {
    technicalSkillSection: TechnicalSkillSection;
}

const TechnicalSkillSection: React.FC<TechnicalSkillSectionProps> = ({
    technicalSkillSection,
}) => {
    return (
        <>
            {technicalSkillSection.programmingLanguages && (
                <div>
                    <h4 className="display-inline">Programming Languages: </h4>
                    <span>{technicalSkillSection.programmingLanguages}</span>
                </div>
            )}
            {technicalSkillSection.webTechnologies && (
                <div>
                    <h4 className="display-inline">Web Technologies: </h4>
                    <span>{technicalSkillSection.webTechnologies}</span>
                </div>
            )}
            {technicalSkillSection.frontendFrameworks && (
                <div>
                    <h4 className="display-inline">Frontend Frameworks: </h4>
                    <span>{technicalSkillSection.frontendFrameworks}</span>
                </div>
            )}
            {technicalSkillSection.developmentTools && (
                <div>
                    <h4 className="display-inline">Development Tools: </h4>
                    <span>{technicalSkillSection.developmentTools}</span>
                </div>
            )}
            {technicalSkillSection.testingFramework && (
                <div>
                    <h4 className="display-inline">Testing Frameworks: </h4>
                    <span>{technicalSkillSection.testingFramework}</span>
                </div>
            )}
        </>
    );
};

export default TechnicalSkillSection;
