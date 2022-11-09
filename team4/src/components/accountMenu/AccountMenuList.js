import React from "react";

const AccountMenuList = ({ visible, children }) => {
    return (
        visible ? 
            <div className="menu-list-container">
                <div className="menu-list">{children}</div>
            </div>
        :""    
    )
};

export default AccountMenuList;
