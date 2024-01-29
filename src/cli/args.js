const parseArgs = () => {
    const args = process.argv.slice(2);

    const parsedArgs = args.reduce((obj, arg, i) => {
        if (i % 2 === 0) {
            const propName = arg.replace('--', '');
            const propValue = args[i + 1];
            obj[propName] = propValue;
        }
        return obj;
    }, {});

    const formatedArgsString = Object.entries(parsedArgs)
        .map(([key, value]) => `${key} is ${value}`)
        .join(', ');

    console.log(formatedArgsString);
};

parseArgs();