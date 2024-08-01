import React from "react";
import "./HelloFeature.module.css";
export default function HelloFeature() {
	return (
		<div className="nametag">
			<div className="nametag-header">Hello, my name is</div>
			<div className="nametag-body">
				<div className="name">
					{"<Matt Lohkamp />".split("").map((val, i) => (
						<span key={i}>{val}</span>
					))}
				</div>
			</div>
		</div>
	);
}
