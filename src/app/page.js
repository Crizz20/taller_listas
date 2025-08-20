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

const pedidos = [ 
  { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] }, 
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] }, 
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] }, 
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] }, 
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] }, 
];

const blogs = [
  {
    id: 1,
    titulo: "Aprendiendo React",
    autor: { nombre: "Ana", pais: "Colombia" },
    categorias: ["JavaScript", "Frontend"],
    comentarios: [
      {
        usuario: "Luis",
        texto: "Muy útil",
        respuestas: [
          {
            usuario: "Marta",
            texto: "Totalmente de acuerdo",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
              { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Next.js SSR",
    autor: { nombre: "Luis", pais: "México" },
    categorias: ["JavaScript", "SSR"],
    comentarios: [
      {
        usuario: "Marta",
        texto: "Interesante",
        respuestas: [
          {
            usuario: "Ana",
            texto: "Lo probaré",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }
            ]
          }
        ]
      }
    ]
  }
];


export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] ">
      
       <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {producto.categoria.nombre}</p>  <br></br>
          </li>
        ))}
      </ul> <br></br>
      
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nombre}</strong>
            <p>
              Dirección: {usuario.direccion.calle}, {usuario.direccion.ciudad},{" "}
              {usuario.direccion.pais}  <br></br>
            </p>
          </li>
        ))}
      </ul>  <br></br>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <strong>{curso.nombre}</strong>
            <ul>
              {curso.modulos.map((modulo, index) => (
                <li key={index}>{modulo.nombre}</li>  
              ))} <br></br>
            </ul>
          </li>
        ))}
      </ul>  <br></br>

      <h1>Lista de Pedidos</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            <strong>Cliente: {pedido.cliente}</strong>
            <ul>
              {pedido.productos.map((producto, index) => (
                <li key={index}>
                  {producto.nombre} - Cantidad: {producto.cantidad} <br></br>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> <br></br>

        <h1>Lista de Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: "20px" }}>
          <h2>{blog.titulo}</h2>
          <p>
            Autor: {blog.autor.nombre} ({blog.autor.pais})
          </p>
          <p>Categorías: {blog.categorias.join(", ")}</p>

          <h3>Comentarios</h3>
          <ul>
            {blog.comentarios.map((comentario, i) => (
              <li key={i}>
                <strong>{comentario.usuario}:</strong> {comentario.texto}
                <ul>
                  {comentario.respuestas.map((respuesta, j) => (
                    <li key={j}>
                      <strong>{respuesta.usuario}:</strong> {respuesta.texto}
                      <ul>
                        {respuesta.reacciones.map((reaccion, k) => (
                          <li key={k}>
                            <em>{reaccion.tipo}</em> por{" "}
                            {reaccion.usuario.nombre} (
                            {reaccion.usuario.rol})<br></br>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}
