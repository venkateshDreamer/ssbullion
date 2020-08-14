import React, { Suspense } from "react";
import HeaderNavBar from "components/HeaderNav";

const Layout = props => {
    return (
        <>
            <HeaderNavBar />
            <Suspense fallback={<div>Loading...</div>}>
                {props.children}
            </Suspense>

        </>
    );
};

export default Layout;