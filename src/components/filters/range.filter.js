const rangeFilter = () => {
    return (input, from, to) => {
        if (!input) return [];

        return input.slice(from, to);
    }
};

export default rangeFilter;