const configFactory = <TCONFIG extends Record<string, any>>(
    DEFAULT_CONFIG: TCONFIG,
    CONFIG?: TCONFIG
) => {
    if (!CONFIG) return DEFAULT_CONFIG;

    const returned: Record<string, unknown> = {};

    Object.keys(DEFAULT_CONFIG).forEach((key) => {
        returned[key] = CONFIG[key] ?? DEFAULT_CONFIG[key];
    });

    return returned as TCONFIG;
};

export default configFactory;
