import Block from "../../lib/city/Block/Block";
import { DayCycleControl } from "../../lib/city/CycleControl/CycleControl";
import { IsoGrid, type TileData } from "../../lib/city/IsoGrid/IsoGrid";
import { generateCity } from "./ExampleCity";


const tiles: TileData[] = generateCity(40);

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
                            <div className="w-full h-480">
                                <IsoGrid tiles={tiles} tileSize={128} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-col gap">
                <h1 className="text-text">Blocks & Real Time Shadowing</h1>
                <div className="card outline d-flex flex-col gap">
                    <div className="d-flex flex-wrap gap">
                        <Block color="#fd9393" key={1} size={124} texture="grass" isometric></Block>
                        <Block color="#227145" key={2} size={124} texture="grass" isometric></Block>
                        <Block color="#143791" key={3} size={124} texture="grass" isometric></Block>
                        <Block color="#bb2566" key={4} size={124} texture="grass" isometric></Block>
                        <Block color="#bbb823" key={5} size={124} texture="grass" isometric></Block>
                    </div>
                </div>
            </div>

        </div>
    )
}