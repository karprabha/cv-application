import Input from "../Input";

type updateHeaderSectionFunction = (key: string, value: any) => void;

interface HeaderSectionProps {
    updateHeaderSection: updateHeaderSectionFunction;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    updateHeaderSection,
}) => {
    return (
        <>
            <Input
                type="text"
                keyName="name"
                placeholder="Your Name"
                updateHeaderSection={updateHeaderSection}
            />
            <Input
                type="email"
                keyName="email"
                placeholder="abc@xyz.com"
                updateHeaderSection={updateHeaderSection}
            />

            <Input
                type="number"
                keyName="countryCode"
                maxLength={4}
                placeholder="91"
                updateHeaderSection={updateHeaderSection}
            />

            <Input
                type="tel"
                keyName="phoneNumber"
                maxLength={10}
                placeholder="98XXXXXXXX"
                updateHeaderSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="portfolioURL"
                placeholder="https://www.portfolio.me"
                updateHeaderSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="githubURL"
                placeholder="https://www.github.com/username"
                updateHeaderSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="linkedInURL"
                placeholder="https://www.linkedin.com/in/username"
                updateHeaderSection={updateHeaderSection}
            />
        </>
    );
};

export default HeaderSection;
