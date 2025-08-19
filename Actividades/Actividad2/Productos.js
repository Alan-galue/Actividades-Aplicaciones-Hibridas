const path = ('data/Products.json');
const fs = require('fs/promises');
        
    class ProductManager {
        products= []
        constructor(products=[]){
        this.products= products
    }
    
        async guardarJSON(){
        const data = JSON.stringify(this.products, null, 2 )  
        await fs.writeFile(path, data); 
        }
        async LeerJSON(){
            const data = await fs.readFile(path)
            const products = JSON.parse(data);
            console.table(products)
        }

        addProduct(product){
            // Validar datos!
            const id = crypto.randomUUID();
            product.id = id;
            this.products.push(product);
            this.guardarJSON();
        }


        async getProducts() {
            this.products = await this.LeerJSON();
            return this.products;
        }

        getProductById(id) {
            const product = this.products.find(p => p.id === id);
            if (product) {
                return product;
            } else {
                console.log("Producto no encontrado");
                return null;
            }


        
        }
        
    }

    module.exports = ProductManager;
