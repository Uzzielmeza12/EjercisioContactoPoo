class Contacto {
    constructor(nombre, apellidos, telefono) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
    }
  }
  
  class ListaContactos {
    constructor() {
      this.contactos = [];
    }
  
    agregarContacto(contacto) {
      this.contactos.push(contacto); //agrego contacto con push
    }
  
    buscarContactoPorNombre(nombre) {
      for (let i = 0; i < this.contactos.length; i++) {
        if (this.contactos[i].nombre === nombre) {
          return this.contactos[i];
        }
      }
      return null;
    }
  }
  
  // Uso
  
  const listaContactos = new ListaContactos();
  
  const contacto1 = new Contacto("Miguel", "Pérez", "6876231005");
  const contacto2 = new Contacto("Elvia", "García", "6731330978");
  const contacto3 = new Contacto("Lorenzo", "Martinez", "687546302");
  
  listaContactos.agregarContacto(contacto1);
  listaContactos.agregarContacto(contacto2);
  listaContactos.agregarContacto(contacto3);


  const contactoEncontrado = listaContactos.buscarContactoPorNombre("Lorenzo");
  if (contactoEncontrado) {
    console.log("Contacto encontrado:", contactoEncontrado);
  } else {
    console.log("Contacto no encontrado.");
  }