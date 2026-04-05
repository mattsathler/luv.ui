import './Block.scss';

type BlockProps = {
    x?: number;
    y?: number;
    z?: number;
    color?: string;
    size?: number;
    texture: string;
}

export default function Block({ color = "#6aa84f", size = 32, x = 0, y = 0, z = 0, texture }: BlockProps) {
    return (
        <div className="tile" style={{
            "--color": color,
            "--size": `${size}px`,
            "--x": x,
            "--y": y,
            "--z": z,
            "--texture": `url(${texture})`
        } as React.CSSProperties}>
            <div className="face top"></div>
            <div className="face left"></div>
            <div className="face right"></div>
        </div>
    )
}