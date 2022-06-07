import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import classnames from 'classnames';

export default function Layout(props) {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    console.log(toggle);

    return (
        <div>
            <Header sidebarToggle={handleToggle} />
            <div className={classnames("content-wrapper", { "minified-sidebar": toggle })} >
                <Sidebar toggle={toggle} sidebarToggle={handleToggle} />
                <main>{props.children}</main>
            </div>



        </div>
    )
}
