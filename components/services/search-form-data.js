.service('searchFormData', function() {
    this.selectsData = [
        {
            options: [
                {
                    name: 'В прокат',
                    id: 1
                },
                {
                    name: 'В подарок',
                    id: 2
                },
                {
                    name: 'На продажу',
                    id: 3
                }
            ]
        },
        {
            options: [
                {
                    name: 'Велосипед',
                    id: 1
                },
                {
                    name: 'Самокат',
                    id: 2
                },
                {
                    name: 'Пепелац',
                    id: 3
                }
            ]
        },
        {
            options: [
                {
                    name: 'Горный',
                    id: 1
                },
                {
                    name: 'Норный',
                    id: 2
                },
                {
                    name: 'Амфибия',
                    id: 3
                }
            ]
        }
    ];
    this.searchData = [
        {
            name: 'в Москве',
            id: 1
        },
        {
            name: 'в Питере',
            id: 2
        },
        {
            name: 'в Баку',
            id: 3
        },
        {
            name: 'в Ростове',
            id: 4
        },
        {
            name: 'в Магадане',
            id: 5
        }
    ];
})