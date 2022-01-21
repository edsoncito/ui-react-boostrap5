import React from 'react';
import ModalPadre from '../components/Modal/ModalPadre';
import Sidebar from '../components/SideBar'

const Layout = (props) => (
    <>
        <Sidebar childrenHijo={props.children} />
        {/* <ModalPadre /> */}
    </>
)

export default Layout;
