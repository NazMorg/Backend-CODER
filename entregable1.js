class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
        console.log("Todos los datos son obligatorios.");
        return;
      }
  
      const existingProduct = this.products.find((product) => product.code === code);
      if (existingProduct) {
        console.log("El código del producto ya existe.");
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado exitosamente:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
        return null;
      }
    }
  }
  
  //Inicio
  const manager = new ProductManager();

  //addProduct
  manager.addProduct("Producto 1", "Descripción del producto 1", 150, "imagen1.jpg", "P1", 20);
  manager.addProduct("Producto 2", "Descripción del producto 2", 400, "imagen2.jpg", "P2", 15);
  
  //getProducts y getProductById
  console.log("Lista de productos:", manager.getProducts());
  const productById = manager.getProductById(2);
  console.log("Producto por ID:", productById);
  
  //Validaciones:
  manager.addProduct("Producto 3", "Descripción del producto 3", 350, "imagen3.jpg", "P1", 25); // Validación de code repetido
  manager.addProduct("Producto 4", "Descripción del producto 4", "imagen4.jpg", 25); // Validacion de campos faltantes
  const nonExistentProduct = manager.getProductById(3); // Busqueda de producto no existente 
  