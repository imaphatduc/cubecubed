/**
 * Configuration structure of line shapes.
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface LINE_SHAPE_CONFIG {
    /**
     * Color of this line shape.
     *
     * @default "#fff"
     */
    lineColor?: string;

    /**
     * Width of this line shape.
     *
     * @default 2
     */
    lineWidth?: number;
}

export const LINE_SHAPE_DEFAULT_CONFIG: LINE_SHAPE_CONFIG = {
    lineColor: "#fff",
    lineWidth: 2,
};

/**
 * Configuration structure of vector shapes.
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface VECTOR_SHAPE_CONFIG extends LINE_SHAPE_CONFIG {
    /**
     * Base length of the arrowhead.
     */
    arrowheadWidth: number;

    /**
     * Height of the arrowhead.
     */
    arrowheadHeight: number;
}

export const VECTOR_SHAPE_DEFAULT_CONFIG: VECTOR_SHAPE_CONFIG = {
    ...LINE_SHAPE_DEFAULT_CONFIG,

    arrowheadWidth: 0.3,
    arrowheadHeight: 0.5,
};
