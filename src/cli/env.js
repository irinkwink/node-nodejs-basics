const parseEnv = () => {
    const prefix = 'RSS_';

    const variablesWithPrefix = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(variablesWithPrefix);
};

parseEnv();