import { ChangeEventHandler, ReactElement } from "react";
import { useSubscribeDeep } from "react-subscribe-context";
import { DeepSubscriberContext } from "../DeepSubscriberContext";

export const FirstNameInput = (): ReactElement => {
    const [
        {
            user: { name },
        },
        setState,
    ] = useSubscribeDeep(DeepSubscriberContext);

    const handleChangeFirstName: ChangeEventHandler<HTMLInputElement> = (e) => {
        const first = e.target.value;

        setState(({ user }) => ({
            user: { ...user, name: { ...user.name, first } },
        }));
    };

    return (
        <div>
            <label>First name</label>
            <input onChange={handleChangeFirstName} value={name.first} />
        </div>
    );
};
