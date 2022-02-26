import { ReactElement } from "react";
import { PreviewFirstName } from "./PreviewFirstName";
import { PreviewLastName } from "./PreviewLastName";

const style = {
    padding: "24px",
    color: "whitesmoke",

    " span": {
        fontSize: "16px",
    },
};

export const UserPreview = (): ReactElement => {
    return (
        <div style={style}>
            <h2>Preview</h2>
            <PreviewFirstName /> <PreviewLastName />
        </div>
    );
};
