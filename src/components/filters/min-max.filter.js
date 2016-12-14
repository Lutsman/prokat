const minMaxFilter = () => {
    return (input, min, max) => {
        if (!input) return [];

        return input.filter((item) => {
            let result = true;

            if ( min > 0 && max > min) {
                result = item.price >= min && item.price <= max;
            } else if (min > 0) {
                result = item.price >= min;
            } else if (max > 0) {
                result = item.price <= max;
            }

           /* if (isFinite(min) && isFinite(max)) {
                result = item.price >= min && item.price <= max;
            } else if (isFinite(min)) {
                result = item.price >= min;
            } else if (isFinite(max)) {
                result = item.price <= max;
            }*/

            return result;
        });
    };
};

export default minMaxFilter;