import { useState } from "react";
import './Darkmode.scss';

const Darkmode = () => {
    const [darkmode, setDarkmode] = useState(false);
    const buttonText = darkmode ? "Change to Day" : "Change to Night";
    const paragraphText = darkmode ? "Night" : "Day";

    return (
        <section className={`section__darkmode ${darkmode ? "dark" : "light"}`}>
            <h2>Aufgabe React-state-Day-Night-change-Level-2_2</h2>
            <p>{paragraphText}</p>
            <button className={`${darkmode ? "dark" : "light"}`} onClick={() => setDarkmode((Darkmode) => !Darkmode)}>
                {buttonText}
            </button>
        </section>
    );
};

export default Darkmode;