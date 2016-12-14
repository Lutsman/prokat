const sortFilter = () => {
    return (input, key, fromLowToHight) => {
        if (!input) return [];
        if (!key) return input;

        return input.sort(function (a, b) {
            if (fromLowToHight) {
                if (a[key] > b[key]) return 1;
                if (a[key] < b[key]) return -1;
            } else {
                if (a[key] < b[key]) return 1;
                if (a[key] > b[key]) return -1;
            }
        });
    };
};

export default sortFilter;