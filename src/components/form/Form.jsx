import { useState } from "react";
import './Form.scss'

const Form = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

	return (
		<section className="section__form">
            <h2>Aufgabe React-Input-Level-1_6</h2>
			<form>
				<input
					type="text"
					placeholder="firstname"
					onChange={(event) => setFirstname(event.target.value)}
					value={firstname}
				/>
				<input
					type="text"
					placeholder="lastname"
					onChange={(event) => setLastname(event.target.value)}
					value={lastname}
				/>
                <input
					type="text"
					placeholder="email"
					onChange={(event) => setEmail(event.target.value)}
					value={email}
				/>
			</form>
            <p>Vorname: <span>{firstname}</span></p>
            <p>Nachname: <span>{lastname}</span></p>
            <p>E-Mail: <span>{email}</span></p>
		</section>
	);
};

export default Form;
