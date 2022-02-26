import { ReactElement } from "react";
import { useSubscribeDeep } from "react-subscribe-context";
import { DeepSubscriberContext } from "./DeepSubscriberContext";

export const PreviewFirstName = (): ReactElement => {
    const [state] = useSubscribeDeep(DeepSubscriberContext);

    return (
        <span>
            {state.user.name.first} {state.user.name.last}
        </span>
    );
};
