const ProductData = {
    title: {},
    description: {},
    colorOptions: [
        {
            styleName: '',
            imageUrl: ''
        },
        {
            styleName: '',
            imageUrl: ''
        },
        {
            styleName: '',
            imageUrl: ''
        },
        {
            styleName: '',
            imageUrl: ''
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;