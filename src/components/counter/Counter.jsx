import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
			<section className="section__counter">
                <h2>Aufgabe React-Counter-Level-1_3</h2>
				<div>
					<button onClick={() => setCount(count + 1)}>+</button>
					<p>{count}</p>
					<button
						onClick={() => {
                            count > 0 ? setCount(count - 1) : setCount(0);
						}}
					>
						-
					</button>
				</div>
				<button onClick={() => setCount(0)}>Reset</button>
			</section>
	);
};

export default Counter;
