import Block from "../../lib/city/Block/Block";
import { DayCycleControl } from "../../lib/city/CycleControl/CycleControl";
import { IsoGrid, type TileData } from "../../lib/city/IsoGrid/IsoGrid";


const tiles: TileData[] = [
    { x: 1, y: 1, z: 1, color: "#6aa84f", type: "grass" },
    { x: 2, y: 1, z: 1, color: "#6aa84f", type: "grass" },
    { x: 3, y: 1, z: 1, color: "#6aa84f", type: "grass" },
    { x: 4, y: 1, z: 1, color: "#6aa84f", type: "grass" },
    { x: 5, y: 1, z: 1, color: "#6aa84f", type: "grass" },
    { x: 6, y: 1, z: 1, color: "#6aa84f", type: "grass" },

    { x: 1, y: 2, z: 1, color: "#6aa84f", type: "road" },
    { x: 2, y: 2, z: 1, color: "#6aa84f", type: "road" },
    { x: 3, y: 2, z: 1, color: "#6aa84f", type: "road" },
    { x: 4, y: 2, z: 1, color: "#6aa84f", type: "road" },
    { x: 5, y: 2, z: 1, color: "#6aa84f", type: "road" },
    { x: 6, y: 2, z: 1, color: "#6aa84f", type: "road" },

    { x: 1, y: 3, z: 1, color: "#6aa84f", type: "grass" },
    { x: 2, y: 3, z: 1, color: "#6aa84f", type: "grass" },
    { x: 3, y: 3, z: 1, color: "#6aa84f", type: "grass" },
    { x: 4, y: 3, z: 1, color: "#6aa84f", type: "grass" },
    { x: 5, y: 3, z: 1, color: "#6aa84f", type: "grass" },
    { x: 6, y: 3, z: 1, color: "#6aa84f", type: "grass" },

    { x: 1, y: 4, z: 1, color: "#6aa84f", type: "grass" },
    { x: 2, y: 4, z: 1, color: "#6aa84f", type: "grass" },
    { x: 3, y: 4, z: 1, color: "#6aa84f", type: "grass" },
    { x: 4, y: 4, z: 1, color: "#6aa84f", type: "grass" },
    { x: 5, y: 4, z: 1, color: "#6aa84f", type: "grass" },
    { x: 6, y: 4, z: 1, color: "#6aa84f", type: "grass" },

    { x: 1, y: 5, z: 1, color: "#6aa84f", type: "grass" },
    { x: 2, y: 5, z: 1, color: "#6aa84f", type: "grass" },
    { x: 3, y: 5, z: 1, color: "#6aa84f", type: "grass" },
    { x: 4, y: 5, z: 1, color: "#6aa84f", type: "grass" },
    { x: 5, y: 5, z: 1, color: "#6aa84f", type: "grass" },
    { x: 6, y: 5, z: 1, color: "#6aa84f", type: "grass" },

    { x: 1, y: 6, z: 1, color: "#6aa84f", type: "grass" },
    { x: 2, y: 6, z: 1, color: "#6aa84f", type: "grass" },
    { x: 3, y: 6, z: 1, color: "#6aa84f", type: "grass" },
    { x: 4, y: 6, z: 1, color: "#6aa84f", type: "grass" },
    { x: 5, y: 6, z: 1, color: "#6aa84f", type: "grass" },
    { x: 6, y: 6, z: 1, color: "#6aa84f", type: "grass" },
];

export default function City() {
    return (
        <div className="d-flex flex-col gap">
            <DayCycleControl />
            <div className="dialog primary d-flex flex-col gap">
                <div className="d-flex flex-col gap">
                    <h1 className="text-text">Grid & City Structure</h1>
                    <div className="d-grid grid-wrap gap W-full">
                        <div className="card outline d-flex flex-col gap hidden">
                            <h2>64px</h2>
                            <IsoGrid tiles={tiles} tileSize={64} />
                        </div>
                        <div className="card outline d-flex flex-col gap hidden">
                            <h2>32px</h2>
                            <IsoGrid tiles={tiles} tileSize={32} />
                        </div>
                    </div>
                    <div className="d-grid grid-wrap gap W-full">
                        <div className="card outline d-flex flex-col gap hidden">
                            <h2>16px</h2>
                            <IsoGrid tiles={tiles} tileSize={16} />
                        </div>
                        <div className="card outline d-flex flex-col gap hidden">
                            <h2>8px</h2>
                            <IsoGrid tiles={tiles} tileSize={8} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-col gap">
                <h1 className="text-text">Blocks & Real Time Shadowing</h1>
                <div className="card outline d-flex flex-col gap">
                    <div className="d-flex flex-wrap gap">
                        <Block color="#fd9393" key={1} size={124} texture="grass"></Block>
                        <Block color="#227145" key={2} size={124} texture="grass"></Block>
                        <Block color="#143791" key={3} size={124} texture="grass"></Block>
                        <Block color="#bb2566" key={4} size={124} texture="grass"></Block>
                        <Block color="#bbb823" key={5} size={124} texture="grass"></Block>
                    </div>
                </div>
            </div>

        </div>
    )
}