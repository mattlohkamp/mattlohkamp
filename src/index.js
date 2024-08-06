import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root.js";
const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Root />
	</StrictMode>
);
