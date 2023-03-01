export const carouselImages = [
    {
        name: "ad_sale_1",
        title: null,
        describe: null,
        backgroundColor: null,
        color: null,
        fieldSelect: 'category',
        category: {
            id: 10,
            name: 'kovacek'
        },
        manufacturer: null
    },
    {
        name: "ad_sale_2",
        title: null,
        describe: null,
        backgroundColor: '#FFCC99',
        color: null,
        fieldSelect: null,
        category: null,
        manufacturer: null
    },
    {
        name: "ad_sale_3",
        title: null,
        describe: null,
        backgroundColor: '#ffe57f',
        color: null,
        fieldSelect: 'category',
        category: {
            id: 22,
            name: 'sporer'
        },
        manufacturer: null
    },
    {
        name: "ad_sale_11",
        title: null,
        describe: null,
        backgroundColor: null,
        color: null,
        fieldSelect: 'category',
        category: {
            id: 39,
            name: 'lehner'
        },
        manufacturer: null
    }
];

export const carouselMultiItems = [
    {
        id: 1,
        values: [
            {
                name: "ad_sale_4",
                backgroundColor: null,
                fieldSelect: 'category',
                category: {
                    id: 11,
                    name: 'bosco'
                },
                manufacturer: null
            },
            {
                name: "ad_sale_5",
                backgroundColor: null,
                fieldSelect: null,
                category: null,
                manufacturer: null
            },
        ]
    },
    {
        id: 2,
        values: [
            {
                name: "ad_sale_6",
                backgroundColor: null,
                fieldSelect: 'category',
                category: {
                    id: 25,
                    name: 'kohler'
                },
                manufacturer: null
            },
            {
                name: "ad_sale_7",
                backgroundColor: null,
                fieldSelect: 'category',
                category: {
                    id: 34,
                    name: 'hilpert'
                },
                manufacturer: null
            },
            {
                name: "ad_sale_8",
                backgroundColor: null,
                fieldSelect: 'category',
                category: {
                    id: 38,
                    name: 'ankunding'
                },
                manufacturer: null
            }
        ]
    },
    {
        id: 3,
        values:
            [
                {
                    name: "ad_sale_9",
                    backgroundColor: null,
                    fieldSelect: 'category',
                    category: null,
                    manufacturer: null
                },
                {
                    name: "ad_sale_10",
                    backgroundColor: null,
                    fieldSelect: 'category',
                    category: {
                        id: 19,
                        name: 'stiedemann'
                    },
                    manufacturer: null
                }
            ]
    }
];

export const carouselCategories = [
    {
        id: 38,
        name: 'ankunding',
        color: '#99CCFF',
        backgroundColor: '#000022',
        slide: 3,
        perSlide: 8,
        carouselHeader: [
            {
                id: 1,
                values: [
                    'ad_sale_9',
                    'ad_sale_10'
                ]
            },
            {
                id: 2,
                values: [
                    'ad_sale_1',
                    'ad_sale_5',
                    'ad_sale_6'
                ]
            }
        ]
    },
    {
        id: 19,
        name: 'stiedemann',
        color: 'white',
        backgroundColor: '#669966',
        slide: 2,
        perSlide: 4,
        carouselHeader: [
            {
                id: 1,
                values: [
                    'ad_sale_9',
                    'ad_sale_10'
                ]
            },
            {
                id: 2,
                values: [
                    'ad_sale_1',
                    'ad_sale_5',
                    'ad_sale_6'
                ]
            }
        ]
    }
];