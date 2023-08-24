import { useEffect, useState } from "react";

type updateIntroductionSectionFunction = (key: string, value: any) => void;

interface IntroductionSectionProps {
    updateIntroductionSection: updateIntroductionSectionFunction;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    updateIntroductionSection,
}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        updateIntroductionSection("careerObjective", inputValue);
    }, [inputValue]);

    const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return (
        <div className="input-container">
            <label>
                <h3>Career Objective</h3>
                <textarea
                    rows={8}
                    value={inputValue}
                    onChange={updateValue}
                    placeholder="Career Objective"
                />
            </label>
        </div>
    );
};

export default IntroductionSection;
