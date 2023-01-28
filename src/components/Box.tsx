import { useCallback } from 'react';
import { Storage } from '../types';
import './Box.css';

type Props = {
    index: number;
    onNumberEntered: (index: number, value: number) => void;
    value?: number;
    displayAsPassword: boolean;
    values: Storage;
}

const Box = ({ index, onNumberEntered, value, displayAsPassword, values }: Props) => {
    const onValueChanged = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        if (value.match('[0-9]') && value.length === 1) {
            onNumberEntered(index, Number.parseInt(value, 10));
        }
    }, [values])
    return (
        <input
            className='box'
            type={displayAsPassword ? "password" : "number"}
            id={`box-${index}`}
            name={`box-${index}`}
            min="0"
            max="9"
            step="1"
            pattern='^[0-9]*$'
            onChange={onValueChanged}
            value={value || ''}
        />
    )
};

export default Box;
