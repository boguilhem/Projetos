var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",

        image: "./assets/vmSocks-green-onWhite.jpg",
        alternative: "A pair of green socks on white background",

        inventory: 0,
        onSale: false,

        details: ["80% cotton", "20% polyester", "Gender-neutral"],

        variants: [
            {
                variantID: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantAlt: "A pair of green socks on white background",
            },
            {
                variantID: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantAlt: "A pair of blue socks on white background",
            }
        ],

        sizes: ["XS", "S", "M", "L", "XL"],

        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;    
            }            
        },
        updateProduct(variantImage, variantAlt) {
            this.image = variantImage;
            this.alternative = variantAlt;
        }
    }
})