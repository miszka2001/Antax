import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, NavLinks, NavigationContainer } from "./navigation.styles";

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <NavLinks>
            <NavLink to="/auth">SINGIN</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            </NavLinks>
            <Outlet />
            </NavigationContainer>
        </Fragment>
    )
}

export default Navigation;
