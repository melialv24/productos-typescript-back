const products = [
    { id: 1, name: 'Sillas', 
        nameSeller: 'Melissa',
        image: 'sillas.png',
        price: 10000,
        type : 'simple',
        simpleProduct: {
            inventory: 10
        }
    },
    { id: 2, name: 'Manteles', 
        nameSeller: 'Melissa',
        image: 'manteles.png',
        price: 25000,
        type: 'rent',
        rentProduct: {
            rentType: 'days',
            rentedDays: '["23-11-2023"]'
        }
    },
    {
        id: 3, name: 'Manteles',
        nameSeller: 'Melissa',
        image: 'manteles.png',
        price: 25000,
        type: 'rent',
        rentProduct: {
            rentType: 'hours',
            rentedDays: '[{"initialDate": "2023-05-05T20:47:07.000Z", "finalDate":"2023-05-06T20:47:07.000Z"}]'
        }
    },
    {
        id: 4, name: 'Casona Prado',
        nameSeller: 'Melissa',
        image: 'casonaPrado.png',
        price: 25000,
        type: 'space',
        spaceProduct: {
            location: '{ "lat": 11.0009135712, "lng": -74.8004384832 }',
            rentedDays: '["04-05-2023"]'
        }
    }
];

const productResolver = {
    Query: {
        products: () => products
    }
};

export default productResolver;