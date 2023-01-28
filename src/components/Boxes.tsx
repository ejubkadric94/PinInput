import { useEffect, useState } from 'react';
import useFocusBox from '../customHooks/useFocusBox';
import { Storage } from '../types';
import Box from './Box';
import './Boxes.css'

type Props = {
    printFinishedMessage: () => void;
    numberOfDigits: number;
    customRegex: string;
}

const Boxes = ({ printFinishedMessage, numberOfDigits, customRegex }: Props) => {
    const [secretMode, setSecretMode] = useState(false);
    const [values, setValues] = useState<Storage>({});

    useFocusBox('#box-0');

    useEffect(() => {
        if (Object.keys(values).length === numberOfDigits) {
            printFinishedMessage();
        }
    }, [values])

    const moveToNextBox = (index: number, value: string) => {
        setValues({
            ...values,
            [index.toString()]: value,
        })

        const nextBox: HTMLElement | null = document.querySelector(`#box-${index + 1}`);
        if (nextBox) {
            nextBox.focus()
        }
    };

    const onSetSecretMode = () => {
        setSecretMode(!secretMode);
    };

    return (
        <>
            <div>   
                <label>
                    <input 
                        type="checkbox" 
                        checked={secretMode}
                        onChange={onSetSecretMode}
                    />
                    Secret mode
                </label>
            </div>
            <div className='boxes'>
                {new Array(numberOfDigits).fill(null).map((el, idx) => (
                    <Box
                        displayAsPassword={secretMode}
                        key={idx}
                        index={idx}
                        onValueEntered={moveToNextBox}
                        value={values[idx.toString()]}
                        values={values}
                        customRegex={customRegex}
                    />
                ))}
            </div>
        </>
    );
};

export default Boxes;