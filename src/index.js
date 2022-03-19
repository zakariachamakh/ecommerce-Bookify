import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
	FilterProvider,
	DataProvider,
	AuthProvider,
} from "./frontend/contexts";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<DataProvider>
					<FilterProvider>
						<App />
					</FilterProvider>
				</DataProvider>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
