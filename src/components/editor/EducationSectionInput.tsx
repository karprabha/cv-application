import Input from "./Input";

type updateEducationSectionFunction = (key: string, value: any) => void;

interface EducationSectionProps {
    updateEducationSection: updateEducationSectionFunction;
}

const EducationSection: React.FC<EducationSectionProps> = ({
    updateEducationSection,
}) => {
    return (
        <>
            <Input
                type="text"
                keyName="instituteName"
                placeholder="Institute Name"
                updateParentSection={updateEducationSection}
            />

            <Input
                type="text"
                keyName="instituteAddress"
                placeholder="Institute Address"
                updateParentSection={updateEducationSection}
            />

            <Input
                type="text"
                keyName="course"
                placeholder="Course"
                updateParentSection={updateEducationSection}
            />

            <Input
                type="number"
                keyName="cgpa"
                placeholder="CGPA"
                updateParentSection={updateEducationSection}
            />

            <Input
                type="date"
                keyName="startDate"
                updateParentSection={updateEducationSection}
            />

            <Input
                type="date"
                keyName="endDate"
                updateParentSection={updateEducationSection}
            />
        </>
    );
};

export default EducationSection;
