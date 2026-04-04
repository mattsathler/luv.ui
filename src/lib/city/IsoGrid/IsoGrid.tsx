import React from "react";
import "./IsoGrid.scss";
import Block from "../Block/Block";

type TileData = {
    x: number;
    y: number;
    z: number;
    color?: string;
};

type IsoGridProps = {
    tiles: TileData[];
    tileSize?: number;
};



export const IsoGrid: React.FC<IsoGridProps> = ({
    tiles,
    tileSize,
}) => {

    function getIsoBounds(tiles: TileData[], size: number) {
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;

        tiles.forEach(({ x, y }) => {
            const isoX = (x - y) * (size / 2);
            const isoY = (x + y) * (size / 4);

            minX = Math.min(minX, isoX);
            maxX = Math.max(maxX, isoX);
            minY = Math.min(minY, isoY);
            maxY = Math.max(maxY, isoY);
        });

        return {
            width: (maxX - minX) + size,
            height: (maxY - minY) + size,
            offsetX: -minX,
            offsetY: -minY + size * 2
        };
    }

    const { width, height, offsetX, offsetY } = getIsoBounds(tiles, tileSize!);

    return (
        <div className="iso-grid scroll h-full w-full">
            <div
                className="iso-inner"
                style={{
                    marginLeft: `${offsetX * 2}px`,
                    marginTop: `${offsetY}px`,
                    width,
                    height,
                    position: "relative",
                }}
            >
                {tiles.map((tile, i) => (
                    <Block key={i} {...tile} size={tileSize} />
                ))}

            </div>
        </div>
    );
};