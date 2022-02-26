import { ReactElement } from "react";
import { DeepSubscriberProvider } from "./DeepSubscriberContext";
import { NameInput } from "./UserForm/NameInput";
import { UserPreview } from "./UserPreview";

const style = {
    display: "flex",
    color: "whitesmoke",
};

export const DeepSubscriberDemo = (): ReactElement => {
    return (
        <DeepSubscriberProvider>
            <div style={style}>
                <div style={{ flex: 1 }}>
                    <NameInput />
                </div>
                <div style={{ flex: 1 }}>
                    <UserPreview />
                </div>
            </div>
        </DeepSubscriberProvider>
    );
};
