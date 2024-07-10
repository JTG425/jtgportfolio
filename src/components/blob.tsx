import "../componentstyles/blob.css";
import { useSpring, animated } from "@react-spring/web";
import blobshape from "blobshape";
import { useState } from "react";

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18
  }).path;
}

export default function Blob(props) {
  const [flip, set] = useState(false);
  const width = props.width || "500px";
  const height = props.height || "500px";

  const { path } = useSpring({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 9000 : 6000
    },
    onRest: (x) => {
      x.value.path = getRandomPath();
      set(!flip);
    }
  });

  return (
    <div className="blob-container">
      <svg className="blob" viewBox="0 0 500 500" width={width} height={height}>
        <g transform="translate(50, 50)">
          {!props.image && <animated.path fill={props.color} d={path} />}
          {props.image && (
            <>
              <defs>
                <clipPath id="a">
                  <animated.path fill={props.color} d={path} />
                </clipPath>
              </defs>
              <image
                width="80%"
                height="80%"
                clipPath="url(#a)"
                xlinkHref={props.image}
                preserveAspectRatio="xMidYMid slice"
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
