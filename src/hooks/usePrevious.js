import {useRef, useEffect} from 'react'

export default function usePrevious(value){
    // 简单版本
    const ref = useRef();

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current;
}

// export default function usePrevious(state, compare){
//     // 进化版本，有问题！
//     const prevRef = useRef();
//     const curRef = useRef();

//     const needUpdate = typeof compare === 'function' ? compare(curRef.current, state) : true;

//     if (needUpdate) {
//         prevRef.current = curRef.current;
//         curRef.current = state;
//     }

//     return prevRef.current;
// }