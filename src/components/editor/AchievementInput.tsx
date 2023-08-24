import Input from "./Input";

type updateAchievementSectionFunction = (key: string, value: any) => void;

interface AchievementSectionProps {
    updateAchievementSection: updateAchievementSectionFunction;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
    updateAchievementSection,
}) => {
    return (
        <>
            <Input
                type="text"
                keyName="achievement1"
                placeholder="achievement1"
                updateParentSection={updateAchievementSection}
            />

            <Input
                type="text"
                keyName="achievement2"
                placeholder="achievement2"
                updateParentSection={updateAchievementSection}
            />

            <Input
                type="text"
                keyName="achievement3"
                placeholder="achievement3"
                updateParentSection={updateAchievementSection}
            />

            <Input
                type="text"
                keyName="achievement4"
                placeholder="achievement4"
                updateParentSection={updateAchievementSection}
            />

            <Input
                type="text"
                keyName="achievement5"
                placeholder="achievement5"
                updateParentSection={updateAchievementSection}
            />
        </>
    );
};

export default AchievementSection;
