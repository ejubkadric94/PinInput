import { useCallback } from 'react';
import './Box.css';

type Props = {
    index: number;
    onNumberEntered: (index: number, value: number) => void;
    value?: number;
    displayAsPassword: boolean;
}

const Box = ({ index, onNumberEntered, value, displayAsPassword }: Props) => {
    const onValueChanged = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        if (value.match('[0-9]') && value.length === 1) {
            console.log('true')
            onNumberEntered(index, Number.parseInt(value, 10));
        }
    }, [])
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
            value={value === null ? '' : value}
        />
    )
};

export default Box;
