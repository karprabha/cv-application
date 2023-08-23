import { useState } from "react";
import Editor from "./components/Editor";
import Output from "./components/Output";

const App = () => {
    const [cv, setCV] = useState({});

    const updateCV = (key: string, value: any) => {
        setCV((prevCV) => ({ ...prevCV, [key]: value }));
    };

    console.log(cv);

    return (
        <>
            <Editor updateCV={updateCV} />
            <Output cv={cv} />
        </>
    );
};

export default App;
