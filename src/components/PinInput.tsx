import { useCallback, useState } from 'react';
import Boxes from './Boxes';
import './PinInput.css';

const NUMBER_OF_BOXES = 5;

const PinInput = () => {
    const [numberOfDigits, setNumberOfDigits] = useState<number>(NUMBER_OF_BOXES);
    const [regex, setRegex] = useState<string>("");

    const printFinalMessage = useCallback(() => {
        console.log('finished');
    }, []);

    const onSetNumberOfDigits = (e: React.FormEvent<HTMLInputElement>) => {
        setNumberOfDigits(Number.parseInt(e.currentTarget.value, 10));
    };

    const onSetRegex = (e: React.FormEvent<HTMLInputElement>) => {
        setRegex(e.currentTarget.value);
    };

    return (
        <div id='pin-input-container'>
            <div>
                <label>Number of digits: </label>
                <input type='number' value={numberOfDigits} onChange={onSetNumberOfDigits} />
            </div>
            <div>
                <label>Regex: </label>
                <input value={regex} onChange={onSetRegex} />
            </div>
            <Boxes 
                printFinishedMessage={printFinalMessage} 
                numberOfDigits={numberOfDigits} 
                customRegex={regex}
            />
        </div>
    )
};

export default PinInput;
