import { useState } from "react";
import Editor from "./components/Editor";
import Output from "./components/Output";

const App = () => {
    const [cv, setCV] = useState({});
    const [font, setFont] = useState("classic-serif");

    const updateCV = (key: string, value: any) => {
        setCV((prevCV) => ({ ...prevCV, [key]: value }));
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
                <Editor updateFont={updateFont} updateCV={updateCV} />
                <Output font={font} cv={cv} />
            </main>
        </>
    );
};

export default App;
