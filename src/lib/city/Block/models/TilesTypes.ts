import grass from "../textures/grass.png";
import road from "../textures/road.png";

export const TILE_TYPES = {
    grass: {
        color: "#ffffff00",
        texture: grass,
    },
    road: {
        color: "#ffffff00",
        texture: road,
    }
};

export type TileType = keyof typeof TILE_TYPES;