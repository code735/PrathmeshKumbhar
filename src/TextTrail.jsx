import React, { useState } from 'react';
import { useTrail, a } from 'react-spring';

const TextTrail = ({ items, config }) => {
    const [open, set] = useState(false);
    const trail = useTrail(items.length, {
        config: config || { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <div onScroll={() => set(state => !state)}>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    );
}

export default TextTrail;
