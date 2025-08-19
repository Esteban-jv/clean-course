(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private masterEmail: string = 'xd@xd.com';

        sendEmail( to: string, subject: string, body: string ) {
            console.log(`Enviando correo a: ${to}. Asunto: ${subject}: ${body}`);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.loadProduct(id);
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(
                'cliente@ejemplo.com',
                'Nuevo producto disponible',
                'Hemos agregado un nuevo producto a nuestra tienda.'
            );
        }
    }

    class CartBloc {
        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }
    


    const productBloc = new ProductBloc(
        new ProductService(),
        new Mailer()
    );
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();