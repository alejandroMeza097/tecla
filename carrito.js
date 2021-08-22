let generalStock = [{name:"pants",price:12.3,pieces:3},{name:"shirt",price:10.7,pieces:4}]

class cart{

    constructor(cupon){
        this.articles = [];
        this.cupon = cupon || false;
        this.total = 0;
        

    }

    //este metodo imprime en consola el estado del carrito.
    status(mensaje){
        console.log(mensaje);
    }

    // este metodo añade un articulo al carrito
    add(article){
        for(const element of generalStock){
            if(article == element.name && element.pieces > 0){
                this.articles.push(element);
                this.status("articulo añadido con exito");
                break;
            }
        }
        

    }

    //este metodo quita un articulo del carrito en caso de que este exista.
    remove(article){
        if(this.articles.length > 0){
            this.status("no avilitado");
        }
        else{
            this.status("no hay articulos en el carrito")
        }


    }

    //este metodo suma todo lo que se tiene en el carrito
    totalCompra(){
        for(const element of this.articles){
            this.total = this.total + element.price;
            
        }
        this.status(`El total es :${this.total}`);
        

    }

    //este metodo hace un decuento sobre el total de la compra si se tiene un cupon
    cuponTotal(){
        if( this.cupon == true){
            this.total = this.total - this.total*(.15);
            this.status(`El total con cupon es : ${this.total}.`);
        }
        else{
            this.status('No tiene cupon de descuento.')
        }
    }
    


}

let carrito = new cart();
carrito.add("shirt");
carrito.totalCompra();
carrito.cuponTotal();



