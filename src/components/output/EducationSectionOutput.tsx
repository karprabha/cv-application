interface EducationSection {
    [key: string]: any;
}

interface EducationSectionProps {
    educationSection: EducationSection;
}

const EducationSection: React.FC<EducationSectionProps> = ({
    educationSection,
}) => {
    return (
        <>
            <p>{educationSection.instituteName || "Institute Name"}</p>
            <p>{educationSection.instituteAddress || "Institute Address"}</p>
            <p>{educationSection.cgpa || "cgpa"}</p>
            <p>{educationSection.course || "course"}</p>
            <p>{educationSection.startDate || "startDate"}</p>
            <p>{educationSection.endDate || "endDate"}</p>
        </>
    );
};

export default EducationSection;
