import {useState, useMemo} from 'react'
import useToggle from './useToggle'

export default function useBoolean(defaultValue = false){
    const [state, {toggle}] = useToggle(defaultValue);

    const actions = useMemo(() => {
        const setTrue = () => toggle(true);
        const setFalse = () => toggle(false);
        return {
            toggle,
            setTrue,
            setFalse
        }
    }, [toggle]);

    return [state, actions];
}