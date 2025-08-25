const fs = require('fs/promises');
const path = './data/products.json';

class Product {
    products = [];
    
    constructor(products = []) {
        this.products = products;
    }
    
    async saveJSON() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            await fs.writeFile(path, data);
        } catch (error) {
            console.log('No se pudo guardar los datos');
        }
    }
    
    async readJSON() {
        try {
            const data = await fs.readFile(path);
            const products = JSON.parse(data);
            return products;
        } catch (error) {
            console.error('No se pudo leer los datos');
            return [];
        }
    }
    
    addProduct(product) {
        const id = crypto.randomUUID();
        product.id = id;
        this.products.push(product);
        this.saveJSON();
    }
    
    async getProducts() {
        this.products = await this.readJSON();
        return this.products;
    }
    
    async getProductById(id) {
        this.products = await this.readJSON();
        const product = this.products.find(item => item.id == id);
        return product ? product : {};
    }
    
    deleteProductById(id) {
        const index = this.products.findIndex(item => item.id === id);
        
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveJSON();
            return true;
        } else {
            console.log("Producto no encontrado, intente nuevamente");
            return false;
        }
    }
    
    updateProductById(id, product) {
        const index = this.products.findIndex(item => item.id === id);
        
        if (index !== -1) {
            product.id = id;
            this.products[index] = product;
            this.saveJSON();
            return true;
        } else {
            console.log("El producto no pudo ser actualizado.");
            return false;
        }
    }
}

module.exports = Product; 
