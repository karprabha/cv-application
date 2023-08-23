import { useEffect, useState } from "react";

type updateHeaderSectionFunction = (key: string, value: any) => void;

interface InputProps {
    updateHeaderSection: updateHeaderSectionFunction;
    type: string;
    keyName: string;
    placeholder?: string;
    maxLength?: number;
}

const Input: React.FC<InputProps> = ({
    type,
    keyName,
    updateHeaderSection,
    placeholder,
    maxLength,
}) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        updateHeaderSection(keyName, inputValue);
    }, [inputValue]);

    const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (maxLength === undefined || newValue.length <= maxLength) {
            setInputValue(newValue);
        }
    };

    return (
        <input
            type={type}
            value={inputValue}
            onChange={updateValue}
            placeholder={placeholder}
        />
    );
};

export default Input;
