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
            <p>
                {technicalSkillSection.programmingLanguages ||
                    "programmingLanguages"}
            </p>
            <p>{technicalSkillSection.webTechnologies || "webTechnologies"}</p>
            <p>
                {technicalSkillSection.frontendFrameworks ||
                    "frontendFrameworks"}
            </p>
            <p>
                {technicalSkillSection.developmentTools || "developmentTools"}
            </p>
            <p>
                {technicalSkillSection.testingFramework || "testingFramework"}
            </p>
        </>
    );
};

export default TechnicalSkillSection;
