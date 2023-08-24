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
            <ul>
                {achievementSection.achievement1 && (
                    <li>{achievementSection.achievement1}</li>
                )}
                {achievementSection.achievement2 && (
                    <li>{achievementSection.achievement2}</li>
                )}
                {achievementSection.achievement3 && (
                    <li>{achievementSection.achievement3}</li>
                )}
                {achievementSection.achievement4 && (
                    <li>{achievementSection.achievement4}</li>
                )}
                {achievementSection.achievement5 && (
                    <li>{achievementSection.achievement5}</li>
                )}
                {achievementSection.achievement6 && (
                    <li>{achievementSection.achievement6}</li>
                )}
            </ul>
        </>
    );
};

export default AchievementSection;
