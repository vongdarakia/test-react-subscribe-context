import { ChangeEventHandler, ReactElement } from "react";
import { useSubscribeDeep } from "react-subscribe-context";
import { DeepSubscriberContext } from "../DeepSubscriberContext";

export const LastNameInput = (): ReactElement => {
    const [
        {
            user: { name },
        },
        setState,
    ] = useSubscribeDeep(DeepSubscriberContext);

    const handleChangeLastName: ChangeEventHandler<HTMLInputElement> = (e) => {
        const last = e.target.value;

        setState(({ user }) => ({
            user: { ...user, name: { ...user.name, last } },
        }));
    };

    return (
        <div>
            <label>Last name</label>
            <input onChange={handleChangeLastName} value={name.last} />
        </div>
    );
};
