import {useState, useMemo} from 'react'

function useToggle(defaultValue = false, reverseValue){
    const [state, setState] = useState(defaultValue);

    const actions = useMemo(() => {
        const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
        
        const setLeft = () => setState(defaultValue);
        const setRight = () => setState(reverseValueOrigin);

        const toggle = (value) => {
            if (value !== undefined) {
                setState(value);
                return;
            }
            setState(prev => prev === defaultValue ? reverseValueOrigin : defaultValue)
        };

        return {
            toggle,
            setLeft,
            setRight
        };
    }, [defaultValue, reverseValue]);

    return [state, actions];
}

export default useToggle;