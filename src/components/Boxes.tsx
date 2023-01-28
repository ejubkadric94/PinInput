import { useEffect, useState } from 'react';
import useFocusBox from '../customHooks/useFocusBox';
import { Storage } from '../types';
import Box from './Box';
import './Boxes.css'

const NUMBER_OF_BOXES = 5;

type Props = {
    printFinishedMessage: () => void;
}

const Boxes = ({ printFinishedMessage }: Props) => {
    const [secretMode, setSecretMode] = useState(false);
    const [values, setValues] = useState<Storage>({});

    useFocusBox('#box-0');

    useEffect(() => {
        if (Object.keys(values).length === NUMBER_OF_BOXES) {
            printFinishedMessage();
        }
    }, [values])

    const moveToNextBox = (index: number, value: number) => {
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
                {new Array(NUMBER_OF_BOXES).fill(null).map((el, idx) => (
                    <Box
                        displayAsPassword={secretMode}
                        key={idx}
                        index={idx}
                        onNumberEntered={moveToNextBox}
                        value={values[idx.toString()]}
                        values={values}
                    />
                ))}
            </div>
        </>
    );
};

export default Boxes;