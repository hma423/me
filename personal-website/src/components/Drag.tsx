// Draggable.tsx
import { useSpring, animated, to} from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { scale, dist } from 'vec-la'
import "./Drag.css";

function Drag({ description }: { description: string }) {
  const randomX = (Math.random() - 0.5) * window.innerWidth* 0.5;
  const randomY = (Math.random() - 0.5) * window.innerHeight * 0.5;

  const [{ x, y }, api] = useSpring(() => ({
    x: randomX,
    y: randomY
  }));


  const bind = useDrag(({ movement: [mx, my], memo = [x.get(), y.get()], velocity, direction}) => {
      api.start({ x: memo[0] + mx, y: memo[1] + my, config: {velocity: scale(direction, velocity)}});

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