# proyecto-meli
Proyecto de prueba para mercado libre

En el siguiente repositorio encontrará un pequeño proyecto en el que se podrá realizar búsqueda de productos consumiendo las apis de mercado libre para developers.

![image](https://user-images.githubusercontent.com/45438216/168727285-b006febd-fcf5-4361-bc05-b75537dad47b.png)
![image](https://user-images.githubusercontent.com/45438216/168727459-dc26366a-2aec-41bc-996e-719e3f7689b1.png)
![image](https://user-images.githubusercontent.com/45438216/168727501-d200b890-c2c3-48e8-8626-b38d13787076.png)
![image](https://user-images.githubusercontent.com/45438216/168727600-047c4f81-dbf9-4a6d-bd73-050f5c85b7a1.png)
![image](https://user-images.githubusercontent.com/45438216/168727564-a4040bb5-ce01-4b6b-b970-9b8abfb4fe71.png)


## Estructura
- front: en este directorio encontrará la parte frontend desarrollada con la librería React JS
- back: en este directorio encontrará la parte backend desarrollada con python y la librería Flask

### Frontend
Para la implementación del frontend de la aplicación se utilizó React JS, Sass como preprocesador, BEM para el nombramiento de clases, Mobile First como práctica para el diseño responsive (la aplicación tiene algunos breakpoints, es responsive desde 375px), fetch para el consumo de APIs, etc.

Como desiciones de diseño en cuanto al store managment no se optó por usar redux debido a que al ser un proyecto pequeño con pocos datos no aportaba gran diferencia (En proyectos grandes si se recomienda su uso o el de otra librería que comparta un estado global). También, el consumo de los servicios se realizaron directamente de la vista ya que al redirigir a otra página, enviar elementos vía props no era viable, igual también debido al requerimiento "si se ingresa un id de producto debería ingresar directamente a la vista de detalle...", hacer el llamado el componente inicial de la página era la mejor opción.  

Como otras consideraciones de diseño que no fueron implementadas al ser un proyecto pequeño y por el tiempo serían: implementar un spinner al llamar las APIs para que el usuario tenga una retroalimentación de la acción y también, como mencioné anteriormente, manejar un estado, no solo para la comunicación entre componentes sino también para al devolverse de los detalles del item a los resultados de búsqueda, evitar volver a consumir la API.

En cuanto a las decisiones de estructuración de archivos se tiene las siguientes carpetas:

- assets: para adjuntar elementos como imágenes, iconos, tipografía, etc.
- components: para agrupar los componentes transversales que pueden ser usados en diferentes vistas.
- routes: para la configuración de las rutas
- screens: los componentes de las diferentes vistas o páginas de la aplicación. Dentro de cada vista hay una carpeta components para ordenar el maquetado de la vista
- services: para agrupar los diferentes servicios que consumirá la app.
- styles: contiene los archivos de configuración del proyecto como colores, tipografía, mixins, etc.

### Backend
Para el backend se utilizó Flask, una librería de python, esto debido a que en la parte backend es la librería con la que he realizado proyectos pequeños y tengo el conocimiento; de igual forma node me parece más óptimo para este tipo de aplicaciones. 

En la parte lógica de la aplicación se utilizaron HOF de python para el filtrado, mapeo o reducción de elementos (objetos, arrays, etc).

Algo en lo que me gustaría detallar de desiciones de implementación fueron las siguientes:

1.  Endpoint /api/items?q=:query
	En el desarrollo de este endpoint hay dos flujos, uno en caso de que la api de mercadolibre de search retorne la información de la categoría y otro en caso de que no devuelva esta información. Esto lo hice porque a veces dependiendo de la búsqueda el elemento filters llega vacío; en este caso en el flujo alterno procedo a buscar la categoría más buscada con el nombre del item y luego consulto a otra api de mercado libre que me trae la información de dicha categoría.
	
2. Endpoint /api/items/:id
	En este endopint agregué un nuevo campo a la respuesta llamado categories, esto ya que al tener el requerimiento de "si se ingresa un id de producto debería ingresar directamente a la vista de detalle...", la información de la categoría del item debe ser independiente de la categoría de los items en general.
