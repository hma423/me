// Draggable.tsx
import { useSpring, animated, to} from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { scale, dist } from 'vec-la'
import "./Drag.css";

function Drag({ description }: { description: string }) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ movement: [mx, my], memo = [x.get(), y.get()] }) => {
      api.start({ x: memo[0] + mx, y: memo[1] + my });

    console.log("moved ${description}")
    return memo;
  });

  return (
    <animated.div
      className = "drag_word"
      {...bind()}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    >
      {description}
    </animated.div>
  );
}

export default Drag;
