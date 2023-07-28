import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <Link to="/shop">SHOP</Link>
            <Link to="/auth">SINGIN</Link>
        </Fragment>
    )
}

export default Navigation;
