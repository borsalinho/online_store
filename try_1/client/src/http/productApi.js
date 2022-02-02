import { $host } from "./index";

export const createProducts = async (product) => {
    const {data} = await $host.post('api/product', product)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/product')
    return data
}