import Image from "next/image";

const productos = [
  { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
];

const usuarios = [ 
  { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } }, 
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } }, 
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } }, 
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } }, 
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } }, 
];

const cursos = [ 
  { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] }, 
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] }, 
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] }, 
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] }, 
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] }, 
];


export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {producto.categoria.nombre}</p>
          </li>
        ))}
      </ul>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong>
            <p>
              Dirección: {usuario.direccion.calle}, {usuario.direccion.ciudad},{" "}
              {usuario.direccion.pais}
            </p>
          </li>
        ))}
      </ul>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <strong>{curso.nombre}</strong>
            <ul>
              {curso.modulos.map((modulo, index) => (
                <li key={index}>{modulo.nombre}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
