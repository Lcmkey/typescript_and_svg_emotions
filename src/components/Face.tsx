import React, { ReactElement, useState } from "react";
import { useSpring, animated } from "react-spring";

interface colorInterface {
    color: string;
    x: number;
    y: number;
}

interface circleInterface {
    id: string;
    cx: number;
    cy: number;
    r: number;
    fill: string;
}

interface adimatedInterface {
    strokeDasharray: string | number | undefined;
}

const Face = (props: colorInterface): ReactElement => {
    const { color, x, y }: colorInterface = props;

    const [active, setActive] = useState<boolean>(false);

    const animatedProps = useSpring<adimatedInterface>({
        strokeDasharray: active ? "170,0" : "0,170",
    });

    const handleClickEvent = (): void => {
        setActive(!active)
    }

    const renderCircle = ({ id, cx, cy, r, fill }: circleInterface): ReactElement => {
        return <circle id={id} cx={cx} cy={cy} r={r} fill={fill} />;
    };

    return (
        <svg height={300} width={300} onClick={handleClickEvent}>
            {renderCircle({ id: "face", cx: 150, cy: 150, r: 150, fill: color })};
            {renderCircle({ id: "left-eye", cx: 100, cy: 100, r: 15, fill: "black" })};
            {renderCircle({ id: "right-eye", cx: 200, cy: 100, r: 15, fill: "black", })};

            <animated.path
                d={`M 75 200 Q ${x} ${y} 225 200`}
                strokeWidth="4"
                stroke="black"
                fill="none"
                id="mouth"
                strokeDasharray={animatedProps.strokeDasharray}
            />
        </svg>
    );
};

export default Face;
