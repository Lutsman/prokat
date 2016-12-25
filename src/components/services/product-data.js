class ProductData {
    constructor () {
        this.product = {
            businessType: 'В прокат',
            title: 'Горный профессиональный велосипед двухподвес GT FURY',
            adress: 'г. Ростов-на-Дону, пр-т. Космонавтов, 17/1',
            price: '400',
            currency: 'rus',
            vehicleType: 'Велосипед',
            trend: 'Горный',
            color: 'Синий',
            size: 'S',
            wheelSize: '26',
            forkSize: '180',
            absorberSize: '80',
            gearsCount: '13',
            brakesType: 'Дисковые',
            brakesSystem: 'С успокоителем',
            avaliablity: 'Есть',
            description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном или рельефом... геометрия рамы и подвеска Fury Expert, проверенные и уже побеждавшие в каньонах Юты, превращают гравитацию из вашего соперника в партнера. Каждый компонент этого байка предназначен для бескомпромиссного и продолжительного катания в больших горах. С Fury Expert вы станете быстрее, храбрее, и счастливее.',
            trader: {
                logoSrc: 'img/trader_logo_1.png',
                logoTitle: 'company logo',
                phone: '+7234567890'
            },
            statistic: {
                viewsAll: '5520',
                viewsToday: '213',
                isPremium: true,
                isAccent: true,
                addDate: 'сегодня',
                addTime: '11:00'
            }

        };
    }
}

export default ProductData;