// Draggable.tsx
import { useSpring, animated, to} from '@react-spring/web';
import { useDrag } from '@use-gesture/react';


function Drag({ description }: { description: string }) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my], memo = [x.get(), y.get()] }) => {
    if (down) {
      api.start({ x: memo[0] + mx, y: memo[1] + my });
    } else {
      api.start({ x: memo[0] + mx, y: memo[1] + my });
    }
    console.log("moved ${description}")
    return memo;
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}px, ${y}px, 0)`),
        color: 'black', // Set the text color to black
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        touchAction: 'none',
        cursor: 'grab',
        userSelect: "none", 
      }}
    >
      {description}
    </animated.div>
  );
}

export default Drag;
