import React from "react";
import { Route, Redirect } from "react-router-dom";

const AppRoute = ({
	component: Component,
	isAuthProtected,
	...rest
}) => (
		<Route
			{...rest}
			render={props => {

					return (
						<Redirect to={{ pathname: "/home", state: { from: props.location } }} />
					);
			
	
				
			}}
		/>
	);

export default AppRoute;

