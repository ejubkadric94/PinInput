import { useCallback } from 'react';
import { Storage } from '../types';
import './Box.css';

type Props = {
    index: number;
    onValueEntered: (index: number, value: string) => void;
    value?: string;
    displayAsPassword: boolean;
    values: Storage;
    customRegex: string;
}

const Box = ({ index, onValueEntered, value, displayAsPassword, values, customRegex }: Props) => {
    const regexToUse = customRegex.length > 0 ? customRegex : '[0-9]';

    const onValueChanged = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        if (value.match(regexToUse) && value.length === 1) {
            onValueEntered(index, value);
        }
    }, [values, regexToUse])

    return (
        <input
            className='box'
            type={displayAsPassword ? "password" : "text"}
            id={`box-${index}`}
            name={`box-${index}`}
            pattern={regexToUse}
            onChange={onValueChanged}
            value={value || ''}
        />
    )
};

export default Box;
