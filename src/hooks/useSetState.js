import {useState, useCallback} from 'react'

export default function useSetState(defaultValue = {}){
    const [state, setState] = useState(defaultValue);

    const setMergeState = useCallback((patch) => {
        setState(prev => Object.assign({}, prev, patch instanceof Function ? patch(prev) : patch))
    }, [setState]);

    return [state, setMergeState];
}