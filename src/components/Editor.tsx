import { useEffect, useState } from "react";
import HeaderSection from "./editor/HeaderSectionInput";
import IntroductionSection from "./editor/IntroductionSectionInput";
import EducationSection from "./editor/EducationSectionInput";

type UpdateCVFunction = (key: string, value: any) => void;

interface EditorProps {
    updateCV: UpdateCVFunction;
}

const Editor: React.FC<EditorProps> = ({ updateCV }) => {
    const [headerSection, setHeaderSection] = useState({});
    const [introductionSection, setIntroductionSection] = useState({});
    const [educationSection, setEducationSection] = useState({});

    useEffect(() => {
        updateCV("headerSection", headerSection);
        updateCV("introductionSection", introductionSection);
        updateCV("educationSection", educationSection);
    }, [headerSection, introductionSection, educationSection]);

    const updateHeaderSection = (key: string, value: any) => {
        setHeaderSection((prevHeaderSection) => ({
            ...prevHeaderSection,
            [key]: value,
        }));
    };

    const updateIntroductionSection = (key: string, value: any) => {
        setIntroductionSection((prevIntroductionSection) => ({
            ...prevIntroductionSection,
            [key]: value,
        }));
    };

    const updateEducationSection = (key: string, value: any) => {
        setEducationSection((prevEducationSection) => ({
            ...prevEducationSection,
            [key]: value,
        }));
    };

    return (
        <div className="editor">
            <HeaderSection updateHeaderSection={updateHeaderSection} />
            <hr />
            <IntroductionSection
                updateIntroductionSection={updateIntroductionSection}
            />
            <hr />
            <EducationSection updateEducationSection={updateEducationSection} />
            <hr />
        </div>
    );
};

export default Editor;
