import { ReactElement } from "react";
import { Counter } from "./Counter";
import { Provider } from "./ReactTrackContext";
import { TextBox } from "./TextBox";

export const ReactTrackDemo = (): ReactElement => {
    return (
        <Provider>
            <div style={{ color: "whitesmoke", padding: 8, border: "1px solid white" }}>
                <Counter />
                <TextBox />
            </div>
        </Provider>
    );
};
