import { useTracked } from "./ReactTrackContext";

const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const TextBox = () => {
    const [state, setState] = useTracked();
    const increment = () => {
        setState((prev) => ({
            ...prev,
            text: ALPHA[Math.floor(Math.random() * 26)],
        }));
    };

    return (
        <div style={{ margin: 12 }}>
            <div>Text: {state.text}</div>
            <button type="button" onClick={increment}>
                Change
            </button>
        </div>
    );
};
