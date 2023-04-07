# Proyecto Tailwind Css
Este es un proyecto realizado para la Universidad Autónoma del Caribe Barranquilla, en este proyecto se debía realizar una página web que utilizara el framework <a href="https://tailwindcss.com/">Tailwind Css</a>.

## Estructura del proyecto
El proyecto consta principalmente de tres secciones:

La primera sección es el index.html, en este se muestra el frontend del portafolio, donde se realizó el apartado visual propuesto en el wireframe y el mock up.

La segunda es el backend, en esta sección se realizó la conexión a base de datos utilizando una arquitectura REST API. 

Por último, la tercera sección es el form, en esta sección se realizó el formulario, se desarrolló el frontend de la misma y se realizaron peticiones al backend para poder mostrar los datos de los artículos solicitados.

## ¿Cómo empezar?
Para empezar a probar este proyecto es necesario ejecutar las siguientes líneas de comando

Para instalar las dependencias:
```bash
npm install
```

Para ejecutar Tailwind Css:
```bash
npm run build
```

Para levantar el servidor (puerto 5000 por defecto):
```bash
npm start
```

## ¿Cómo conectar la base de datos?
Para crear la base de datos es necesario crear un archivo <code>.env</code> en la raíz del proyecto.

Las varaibles de entorno que se deben proporcionar para realizar la conexión a la base de datos que se tenga son las siguientes:
```js
PORT = 
DB_HOST = 
DB_USER =
DB_PASSWORD = 
DB_PORT = 
DB_NAME =
```

En caso de no proporcionar dichos valores, se tomarán los valores por defecto.

## ¿Cómo personalizar las variables Tailwind Css?
Para personalizar las variables Tailwind Css se debe ingresar al archivo <code>tailwind.config.js</code>
y agregar los valores que se deseen, para más detalles consultar la documentación oficial de <a href="https://tailwindcss.com/docs/configuration">Tailwind Css</a>.