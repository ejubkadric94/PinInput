import { useEffect } from "react";

const useFocusBox = (boxId: string) => {
    useEffect(() => {
        const firstBox: HTMLElement | null = document.querySelector(boxId);
        if (firstBox) {
            firstBox.focus()
        }
    }, [boxId]);
};

export default useFocusBox;
