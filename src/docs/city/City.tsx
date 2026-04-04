import Block from "../../lib/city/Block/Block";
import { DayCycleControl } from "../../lib/city/CycleControl/CycleControl";
import { IsoGrid } from "../../lib/city/IsoGrid/IsoGrid";


const tiles = [
    { x: 1, y: 1, z: 1, color: "#6aa84f" },
    { x: 2, y: 1, z: 1, color: "#6aa84f" },
    { x: 3, y: 1, z: 1, color: "#6aa84f" },
    { x: 4, y: 1, z: 1, color: "#6aa84f" },
    { x: 5, y: 1, z: 1, color: "#6aa84f" },
    { x: 6, y: 1, z: 1, color: "#6aa84f" },

    { x: 1, y: 1, z: 2, color: "#afbb0a" },
    { x: 1, y: 1, z: 3, color: "#afbb0a" },
    { x: 1, y: 1, z: 4, color: "#afbb0a" },

    { x: 1, y: 2, z: 1, color: "#6aa84f" },
    { x: 2, y: 2, z: 1, color: "#6aa84f" },
    { x: 3, y: 2, z: 1, color: "#6aa84f" },
    { x: 4, y: 2, z: 1, color: "#6aa84f" },
    { x: 5, y: 2, z: 1, color: "#6aa84f" },
    { x: 6, y: 2, z: 1, color: "#6aa84f" },

    { x: 1, y: 3, z: 1, color: "#6aa84f" },
    { x: 2, y: 3, z: 1, color: "#6aa84f" },
    { x: 3, y: 3, z: 1, color: "#6aa84f" },
    { x: 4, y: 3, z: 1, color: "#6aa84f" },
    { x: 5, y: 3, z: 1, color: "#6aa84f" },
    { x: 6, y: 3, z: 1, color: "#6aa84f" },

    { x: 1, y: 4, z: 1, color: "#6aa84f" },
    { x: 2, y: 4, z: 1, color: "#6aa84f" },
    { x: 3, y: 4, z: 1, color: "#6aa84f" },
    { x: 4, y: 4, z: 1, color: "#6aa84f" },
    { x: 5, y: 4, z: 1, color: "#6aa84f" },
    { x: 6, y: 4, z: 1, color: "#6aa84f" },

    { x: 1, y: 5, z: 1, color: "#6aa84f" },
    { x: 2, y: 5, z: 1, color: "#6aa84f" },
    { x: 3, y: 5, z: 1, color: "#6aa84f" },
    { x: 4, y: 5, z: 1, color: "#6aa84f" },
    { x: 5, y: 5, z: 1, color: "#6aa84f" },
    { x: 6, y: 5, z: 1, color: "#6aa84f" },

    { x: 1, y: 6, z: 1, color: "#6aa84f" },
    { x: 2, y: 6, z: 1, color: "#6aa84f" },
    { x: 3, y: 6, z: 1, color: "#6aa84f" },
    { x: 4, y: 6, z: 1, color: "#6aa84f" },
    { x: 5, y: 6, z: 1, color: "#6aa84f" },
    { x: 6, y: 6, z: 1, color: "#6aa84f" },
];

export default function City() {
    return (
        <div className="d-flex flex-col gap">
            <div className="dialog primary d-flex flex-col gap">
                <div className="d-flex flex-col gap">
                    <h1 className="text-text">Grid & City Structure</h1>
                    <div className="card outline d-flex flex-col gap hidden">
                        <IsoGrid tiles={tiles} tileSize={64} />
                    </div>
                    <div className="card outline d-flex flex-col gap hidden">
                        <IsoGrid tiles={tiles} tileSize={32} />
                    </div>
                </div>

                <div className="d-flex flex-col gap">
                    <h1 className="text-text">Blocks & Real Time Shadowing</h1>
                    <div className="card outline d-flex flex-col gap">
                        <div className="d-flex flex-wrap gap">
                            <Block color="#fd9393" key={1} size={124}></Block>
                            <Block color="#227145" key={2} size={124}></Block>
                            <Block color="#143791" key={3} size={124}></Block>
                            <Block color="#bb2566" key={4} size={124}></Block>
                            <Block color="#bbb823" key={5} size={124}></Block>
                        </div>
                        <DayCycleControl />
                    </div>
                </div>

            </div>
        </div>
    )
}