import Input from "./Input";

type updateHeaderSectionFunction = (key: string, value: any) => void;

interface HeaderSectionProps {
    updateHeaderSection: updateHeaderSectionFunction;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
    updateHeaderSection,
}) => {
    return (
        <div>
            <Input
                type="text"
                keyName="name"
                labelName="Name"
                placeholder="Your Name"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="email"
                keyName="email"
                labelName="Email"
                placeholder="abc@xyz.com"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="number"
                keyName="countryCode"
                labelName="Country Code"
                maxLength={4}
                placeholder="91"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="tel"
                keyName="phoneNumber"
                labelName="Phone Number"
                maxLength={10}
                placeholder="98XXXXXXXX"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="portfolioURL"
                labelName="Portfolio URL"
                placeholder="https://www.portfolio.me"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="githubURL"
                labelName="Github URL"
                placeholder="https://www.github.com/username"
                updateParentSection={updateHeaderSection}
            />

            <Input
                type="text"
                keyName="linkedInURL"
                labelName="LinkedIn URL"
                placeholder="https://www.linkedin.com/in/username"
                updateParentSection={updateHeaderSection}
            />
        </div>
    );
};

export default HeaderSection;
