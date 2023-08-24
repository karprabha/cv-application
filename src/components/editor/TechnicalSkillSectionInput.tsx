import Input from "./Input";

type updateTechnicalSkillSectionFunction = (key: string, value: any) => void;

interface TechnicalSkillSectionProps {
    updateTechnicalSkillSection: updateTechnicalSkillSectionFunction;
}

const TechnicalSkillSection: React.FC<TechnicalSkillSectionProps> = ({
    updateTechnicalSkillSection,
}) => {
    return (
        <>
            <Input
                type="text"
                keyName="programmingLanguages"
                placeholder="Programming Languages"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="webTechnologies"
                placeholder="Web Technologies"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="webTechnologies"
                placeholder="Web Technologies"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="frontendFrameworks"
                placeholder="Frontend Frameworks"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="developmentTools"
                placeholder="Development Tools"
                updateParentSection={updateTechnicalSkillSection}
            />

            <Input
                type="text"
                keyName="testingFramework"
                placeholder="Testing Framework"
                updateParentSection={updateTechnicalSkillSection}
            />
        </>
    );
};

export default TechnicalSkillSection;
