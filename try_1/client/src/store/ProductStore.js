import {makeAutoObservable} from 'mobx';

export default class ProductStore {
    constructor() {
        this._products= [
            {id:1, name:'Кросовка 1', price: 4200, size: 32},
            {id:2, name:'Кросовка 2', price: 4500, size: 38},
            {id:3, name:'Кросовка 3', price: 400, size: 8},
        ]
        makeAutoObservable(this)
    }

    setProducts(products){
        this._products = products
    }

    get products(){
        return this._products
    }
}