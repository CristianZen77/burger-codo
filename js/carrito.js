const ejemplocarrito = Vue.createApp({
    data() {
        return {
            productos: [
                // { nombre: "Cheddar", cantidad: 10 },
                // { nombre: "Doble", cantidad: 3 },
                // { nombre: "Veggie", cantidad: 11 },
                // { nombre: "Bacon", cantidad: 4 },
                // { nombre: "BIG", cantidad: 5 }
            ],
            nuevoProducto: '',
            aviso: false,
            total: 0
        }
    },
    methods: {
        agregarProductoConIf(){
            if (this.nuevoProducto != "") {
                this.productos.push({ nombre: this.nuevoProducto, cantidad: 0})
                this.nuevoProducto = '',
                this.aviso = false
            }
            else {
                this.aviso = true
                alert("Caja de texto vacía")
            }
        }
    },
    computed: {
        sumarProductos() {//Muestra sumatoria total de cantidades de frutas.
          this.total = 0;
          for (producto of this.productos) {
            this.total += producto.cantidad; //acumulador
            //this.total = this.total + producto.cantidad; //acumulador
          }
          return this.total;
        }
      }
}).mount('#carrito')
