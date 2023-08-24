import TrimURL from "../../utils/TrimURL";

interface HeaderSection {
    [key: string]: any;
}

interface HeaderSectionProps {
    headerSection: HeaderSection;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ headerSection }) => {
    return (
        <div>
            <div className="container header-section-container">
                <div className="left-container">
                    <h1>{headerSection.name || "Your Name"}</h1>
                    <span>
                        Email:
                        <a
                            href={
                                "mailto:" +
                                (headerSection.email || "abc@xyz.com")
                            }
                        >
                            {headerSection.email || "abc@xyz.com"}
                        </a>
                    </span>
                    <span>
                        Mobile:
                        <span>(+{headerSection.countryCode || "91"})</span>
                        <span>
                            {headerSection.phoneNumber || "98XXXXXXXXXX"}
                        </span>
                    </span>
                </div>

                <div className="right-container">
                    <span>
                        {headerSection.portfolioURL && (
                            <>
                                Portfolio:
                                <a
                                    href={headerSection.portfolioURL}
                                    target="_blank"
                                >
                                    {TrimURL(headerSection.portfolioURL)}
                                </a>
                            </>
                        )}
                    </span>
                    <span>
                        {headerSection.githubURL && (
                            <>
                                Github:
                                <a
                                    href={headerSection.githubURL}
                                    target="_blank"
                                >
                                    {TrimURL(headerSection.githubURL)}
                                </a>
                            </>
                        )}
                    </span>
                    <span>
                        {headerSection.linkedInURL && (
                            <>
                                LinkedIn:
                                <a
                                    href={headerSection.linkedInURL}
                                    target="_blank"
                                >
                                    {TrimURL(headerSection.linkedInURL)}
                                </a>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
