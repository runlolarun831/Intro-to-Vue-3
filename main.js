const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green'},
              { id: 2235, color: 'blue'}
            ],
            sizes: [
              {id: 1234, size: 'x-small'}, {id: 1235, size: 'small'},{id: 1236, size: 'medium'},{id: 1237, size: 'large'},{id: 1238, size: 'x-large'}
            ]
        }
    }
})
