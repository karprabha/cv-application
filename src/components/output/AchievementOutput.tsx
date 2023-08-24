interface AchievementSection {
    [key: string]: any;
}

interface AchievementSectionProps {
    achievementSection: AchievementSection;
}

const AchievementSection: React.FC<AchievementSectionProps> = ({
    achievementSection,
}) => {
    return (
        <>
            <p>{achievementSection.achievement1 || "achievement"}</p>
            <p>{achievementSection.achievement2 || "achievement"}</p>
            <p>{achievementSection.achievement3 || "achievement"}</p>
            <p>{achievementSection.achievement4 || "achievement"}</p>
            <p>{achievementSection.achievement5 || "achievement"}</p>
        </>
    );
};

export default AchievementSection;
