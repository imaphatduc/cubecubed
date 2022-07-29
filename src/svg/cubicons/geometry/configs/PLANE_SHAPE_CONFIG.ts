/**
 * Configuration structure of geometry shapes.
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface PLANE_SHAPE_CONFIG {
    /**
     * Fill color of this plane shape.
     *
     * @default "none"
     */
    fillColor?: string;

    /**
     * Fill opacity of this plane shape.
     *
     * @default 1
     */
    fillOpacity?: number;

    /**
     * Stroke color of this plane shape.
     *
     * @default "#fff"
     */
    strokeColor?: string;

    /**
     * Stroke width of this plane shape (in pixels).
     *
     * @default 2
     */
    strokeWidth?: number;
}

export const PLANE_SHAPE_DEFAULT_CONFIG: PLANE_SHAPE_CONFIG = {
    fillColor: "none",
    fillOpacity: 1,
    strokeColor: "#fff",
    strokeWidth: 2,
};
