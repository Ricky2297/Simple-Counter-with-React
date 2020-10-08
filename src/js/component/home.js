import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Home(props) {
	function inputFieldValue(e) {
		let input = document.querySelector("#input");
		input = e.value;
		console.log(input);
	}
	return (
		<div>
			<div id="container" className="container d-flex">
				<div>
					<i className="fas fa-clock" />
				</div>
				<div>{props.number1}</div>
				<div>{props.number2}</div>
				<div>{props.number3}</div>
				<div>{props.number4}</div>
				<div>{props.number5}</div>
				<div>{props.number6}</div>
			</div>
			<div className="container-fluid d-flex justify-content-center">
				<input id="input" className="bg-dark" type="text" />
				<button
					onClick={inputFieldValue}
					type="button"
					className="btn btn-danger mx-3 ">
					Start
				</button>
			</div>
			<div className="container-fluid d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-danger mx-3 mt-4"
					onClick={props.resume}>
					Resume
				</button>
				<button
					onClick={props.stop}
					id="stop-button"
					type="button"
					className="btn btn-dark mx-3 mt-4">
					Stop
				</button>
				<button
					type="button"
					className="btn btn-danger mx-3 mt-4"
					onClick={props.reset}>
					Reset
				</button>
			</div>
		</div>
	);
}
Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string,
	stop: PropTypes.func,
	reset: PropTypes.func,
	resume: PropTypes.func
};
