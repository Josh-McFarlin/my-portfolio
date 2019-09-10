import { useEffect, useRef } from 'react';

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref) => {
    const dimensions = useRef({
        width: 1000,
        height: 1000
    });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;

        console.log(30 / dimensions.current.height)
    }, []);

    return dimensions.current;
};
