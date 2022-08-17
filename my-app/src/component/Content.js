import React from "react";
const Content = (props) => {  
    const contentChange = props.contentState;
    return (
        <h3 className={contentChange? "hide" : "show"}>nội dung Togger</h3>
    )
}
export default Content;