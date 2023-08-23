import { useEffect, useState } from "react";
import HeaderSection from "./editor/HeaderSectionInput";

type UpdateCVFunction = (key: string, value: any) => void;

interface EditorProps {
    updateCV: UpdateCVFunction;
}

const Editor: React.FC<EditorProps> = ({ updateCV }) => {
    const [headerSection, setHeaderSection] = useState({});

    useEffect(() => {
        updateCV("headerSection", headerSection);
    }, [headerSection]);

    const updateHeaderSection = (key: string, value: any) => {
        setHeaderSection((prevHeaderSection) => ({
            ...prevHeaderSection,
            [key]: value,
        }));
    };

    return (
        <div className="editor">
            <HeaderSection updateHeaderSection={updateHeaderSection} />
        </div>
    );
};

export default Editor;
