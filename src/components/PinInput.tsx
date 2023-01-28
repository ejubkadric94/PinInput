import { useCallback } from 'react';
import Boxes from './Boxes';
import './PinInput.css';

const PinInput = () => {
    const printFinalMessage = useCallback(() => {
        console.log('finished');
    }, []);
    return (
        <div id='pin-input-container'>
            PIN Input
            <Boxes printFinishedMessage={printFinalMessage} />
        </div>
    )
};

export default PinInput;
