import axios from '@app/axios';

export default async function createOrder(prods, email) {
    await axios.post('order', {
        products: prods.map((product) => ({
            objectId: product.id,
        })),
        email,
    });
}
