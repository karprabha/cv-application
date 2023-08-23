import TrimURL from "../../utils/TrimURL";

interface HeaderSection {
    [key: string]: any;
}

interface HeaderSectionProps {
    headerSection: HeaderSection;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ headerSection }) => {
    return (
        <>
            <h1>{headerSection.name || "Your Name"}</h1>
            <h2>{headerSection.email || "abc@xyz.com"}</h2>
            <h2>(+{headerSection.countryCode || "91"})</h2>
            <h2>{headerSection.phoneNumber || "98XXXXXXXXXX"}</h2>

            <h2>
                {headerSection.portfolioURL && (
                    <span>
                        Portfolio:
                        <a href={headerSection.portfolioURL} target="_blank">
                            {TrimURL(headerSection.portfolioURL)}
                        </a>
                    </span>
                )}
            </h2>
            <h2>
                {headerSection.githubURL && (
                    <span>
                        Github:
                        <a href={headerSection.githubURL} target="_blank">
                            {TrimURL(headerSection.githubURL)}
                        </a>
                    </span>
                )}
            </h2>
            <h2>
                {headerSection.linkedInURL && (
                    <span>
                        LinkedIn:
                        <a href={headerSection.linkedInURL} target="_blank">
                            {TrimURL(headerSection.linkedInURL)}
                        </a>
                    </span>
                )}
            </h2>
        </>
    );
};

export default HeaderSection;
