import { ReactElement } from "react";
import { useSubscribeDeep } from "react-subscribe-context";
import { DeepSubscriberContext } from "./DeepSubscriberContext";

export const PreviewLastName = (): ReactElement => {
    const [state] = useSubscribeDeep(DeepSubscriberContext);

    return <span>{state.user.name.last}</span>;
};
