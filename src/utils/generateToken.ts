const generateToken = () => {
    const rand = () => (Math.random() + 1).toString(36).substring(2);

    const token = () => rand() + rand();

    return token();
};

export default generateToken;
