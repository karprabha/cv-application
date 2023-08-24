import formatDate from "../../utils/formatDate";

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
        <div>
            <h2>Education</h2>
            <hr />
            <div className="section-container">
                <div className="container">
                    <h3>
                        {educationSection.instituteName || "Institute Name"}
                    </h3>
                    <span>
                        {educationSection.instituteAddress ||
                            "Institute Address"}
                    </span>
                </div>
                <div className="container italic-text">
                    <span>
                        {educationSection.course || "course"} -
                        {educationSection.cgpa || "cgpa"}
                    </span>
                    <span>
                        {formatDate(educationSection.startDate || "2023-11-01")}
                        -{formatDate(educationSection.endDate || "2023-11-01")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
