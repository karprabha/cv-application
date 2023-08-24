type UpdateFontFunction = (fontName: string) => void;

interface ToolSectionProps {
    updateFont: UpdateFontFunction;
}

const ToolSection: React.FC<ToolSectionProps> = ({ updateFont }) => {
    const fontList = [
        "classic-serif",
        "modern-sans-serif",
        "standard-sans-serif",
    ];

    return (
        <div className="input-section-container tool-section">
            <div className="font-select-btn">
                <button type="button" onClick={() => updateFont(fontList[0])}>
                    sans-serif 1
                </button>
                <button type="button" onClick={() => updateFont(fontList[1])}>
                    sans-serif 2
                </button>
                <button type="button" onClick={() => updateFont(fontList[2])}>
                    serif
                </button>
            </div>

            <div className="resume-related-btn">
                <button type="button">Load Sample</button>
                <button type="button">Download PDF</button>
            </div>
        </div>
    );
};

export default ToolSection;
