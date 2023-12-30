class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(productData) {
      const { title, description, price, thumbnail, code, stock } = productData;
  
      // Verificar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Todos los campos son obligatorios.');
        return;
      }
  
      // Verificar que el código del producto no esté repetido
      const existingProduct = this.products.find((product) => product.code === code);
      if (existingProduct) {
        console.log(`El código '${code}' ya existe para otro producto.`);
        return;
      }
  
      // Agregar el producto con un id autoincrementable
      const newProduct = {
        id: this.productIdCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      this.productIdCounter++;
      console.log('Producto agregado:', newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.log('Producto no encontrado.');
      } else {
        console.log('Producto encontrado:', product);
      }
      return product;
    }
  
    deleteProductById(id) {
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
        console.log(`Producto con ID ${id} eliminado.`);
      } else {
        console.log('Producto no encontrado.');
      }
    }
  
    updateProductById(id, updatedData) {
      const productIndex = this.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        this.products[productIndex] = { ...this.products[productIndex], ...updatedData };
        console.log(`Producto con ID ${id} actualizado.`);
        console.log('Producto actualizado:', this.products[productIndex]);
      } else {
        console.log('Producto no encontrado.');
      }
    }
  }
  
  // Ejemplo de uso:
  
  const manager = new ProductManager();
  
  manager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del Producto 1',
    price: 29.99,
    thumbnail: 'ruta/imagen1.jpg',
    code: 'ABC123',
    stock: 50,
  });
  
  manager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del Producto 2',
    price: 49.99,
    thumbnail: 'ruta/imagen2.jpg',
    code: 'DEF456',
    stock: 30,
  });
  
  console.log('Todos los productos:', manager.getProducts());
  
  manager.deleteProductById(1);
  console.log('Productos después de eliminar un producto:', manager.getProducts());
  
  manager.updateProductById(2, { price: 59.99, stock: 40 });
  console.log('Productos después de actualizar:', manager.getProducts());
  