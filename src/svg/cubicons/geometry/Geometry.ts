/**
 * Configuration structure of basic shapes (Rectangle, Square and Circle).
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface SHAPE_CONFIG {
    /**
     * @default "none"
     */
    fillColor?: string;
    /**
     * @default 1
     */
    fillOpacity?: number;
    /**
     * @default "#fff"
     */
    strokeColor?: string;
    /**
     * @default 2
     */
    strokeWidth?: number;
}

export const SHAPE_DEFAULT_CONFIG = {
    fillColor: "none",
    fillOpacity: 1,
    strokeColor: "#fff",
    strokeWidth: 2,
};

/**
 * Configuration structure of line-like shapes (Line and Vector).
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface LINE_CONFIG {
    /**
     * @default "#fff"
     */
    lineColor?: string;
    /**
     * @default 2
     */
    lineWidth?: number;
}

export const LINE_DEFAULT_CONFIG = {
    lineColor: "#fff",
    lineWidth: 2,
};

/**
 * Configuration structure of vector shapes.
 *
 * If this is not specified, then fall back to all of the default values.
 */
export interface VECTOR_CONFIG extends LINE_CONFIG {
    arrowWidth: number;
    arrowHeight: number;
}

export const VECTOR_DEFAULT_CONFIG = {
    ...LINE_DEFAULT_CONFIG,
    arrowWidth: 0.3,
    arrowHeight: 0.5,
};
