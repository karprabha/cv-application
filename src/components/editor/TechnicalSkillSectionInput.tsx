import Input from "./Input";

type updateTechnicalSkillSectionFunction = (key: string, value: any) => void;

interface TechnicalSkillSectionProps {
    updateTechnicalSkillSection: updateTechnicalSkillSectionFunction;
}

const TechnicalSkillSection: React.FC<TechnicalSkillSectionProps> = ({
    updateTechnicalSkillSection,
}) => {
    return (
        <div className="input-container">
            <Input
                type="text"
                keyName="programmingLanguages"
                labelName="Programming Languages"
                placeholder="Programming Languages"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="webTechnologies"
                labelName="Web Technologies"
                placeholder="Web Technologies"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="frontendFrameworks"
                labelName="Frontend Frameworks"
                placeholder="Frontend Frameworks"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="developmentTools"
                labelName="Development Tools"
                placeholder="Development Tools"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="testingFramework"
                labelName="Testing Framework"
                placeholder="Testing Framework"
                updateParentSection={updateTechnicalSkillSection}
            />
        </div>
    );
};

export default TechnicalSkillSection;
