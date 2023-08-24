import Input from "./Input";

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
                updateParentSection={updateHeaderSection}
            />
            <Input
                type="email"
                keyName="email"
                placeholder="abc@xyz.com"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="number"
                keyName="countryCode"
                maxLength={4}
                placeholder="91"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="tel"
                keyName="phoneNumber"
                maxLength={10}
                placeholder="98XXXXXXXX"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="portfolioURL"
                placeholder="https://www.portfolio.me"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="githubURL"
                placeholder="https://www.github.com/username"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="linkedInURL"
                placeholder="https://www.linkedin.com/in/username"
                updateParentSection={updateHeaderSection}
            />
        </>
    );
};

export default HeaderSection;
