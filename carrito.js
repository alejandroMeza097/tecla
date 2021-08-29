let generalStock = [{name:"pants",price:12.3,pieces:3},{name:"shirt",price:10.7,pieces:4}]

class cart{

    constructor(productName,description,promoCode){
        this.description = description;
        this.productName = productName; 
        this.articles = [];
        this.promoCode = promoCode || false;
        this.total = 0;
        this.promoCuponTotal = 0;
        this.numItems = 0;
        

    }

    //este metodo imprime en consola el estado del carrito.
    inform(mensaje){
        console.log(mensaje);
    }

    // este metodo añade un articulo al carrito
    //generalStock es un array que contiene todos los articulos disponibles

    addArticle(nameArticle){
        for(const element of generalStock){
            if(nameArticle == element.name && element.pieces > 0){   
                this.articles.push(element);
                element.pieces = element.pieces - 1;                                                      
                this.inform("articulo añadido con exito");
                break;
            }
        }
        

    }

    //este metodo quita un articulo del carrito en caso de que este exista.
    remove(nameArticle){
        let  numOfIndex;
        if(this.articles.length > 0){
            for(const element of this.articles){
                if(nameArticle == element.name){
                    numOfIndex = this.articles.indexOf(element);
                    break;
                }
            }
            this.articles = this.articles.splice(numOfIndex,1);
            this.inform("El articulo ha sido eliminado.")
        }
        else{
            this.inform("no hay articulos en el carrito.")
        }


    }

    //este metodo suma todo lo que se tiene en el carrito
    totalCompra(){
        for(const element of this.articles){
            this.total = 0;
            this.total = this.total + element.price;
            
        }
        this.inform(`El total es :${this.total}`);
        
    }

    //este metodo hace un decuento sobre el total de la compra si se tiene un cupon
    promoCodeTotal(){
        if( this.promoCode == true){
            this.promoCuponTotal = this.promoCuponTotal - this.promoCuponTotal*(.10);
            this.inform(`El total de la compra con cupon de descuento es :: ${this.CuponTotal}.`);
        }
        else{
            this.inform('No tiene cupon de descuento.')
        }
    }

    // este metodo cuenta el numero de articulos se compraran
    numArticles(){
        this.numItems = this.articles.length;
        this.inform(`Numero de articulos en el carrito : ${this.numItems}`);
    }
    

}

let mercadito = new cart();
mercadito.addArticle("pants");
mercadito.addArticle("pants");
mercadito.totalCompra();
mercadito.promoCodeTotal();
mercadito.numArticles();
mercadito.remove("pants");
mercadito.numArticles();
mercadito.totalCompra();



