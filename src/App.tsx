import { useState } from "react";
import Editor from "./components/Editor";
import Output from "./components/Output";
import sampleCV from "./data/sampleCV.json";

const App = () => {
    const [cv, setCV] = useState({});
    const [font, setFont] = useState("classic-serif");

    const updateCV = (key: string, value: any) => {
        setCV((prevCV) => ({ ...prevCV, [key]: value }));
    };

    const loadSampleCV = () => {
        setCV(sampleCV);
    };

    const updateFont = (fontName: string) => {
        setFont(fontName);
    };

    return (
        <>
            <header>
                <h1>CV-Application</h1>
            </header>

            <main>
                <Editor
                    updateFont={updateFont}
                    loadSampleCV={loadSampleCV}
                    updateCV={updateCV}
                />
                <Output font={font} cv={cv} />
            </main>
        </>
    );
};

export default App;
