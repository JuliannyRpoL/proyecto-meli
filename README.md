# proyecto-meli
Proyecto de prueba para mercado libre

En el siguiente repositorio encontrará un pequeño proyecto en el que se podrá realizar búsqueda de productos consumiendo las apis de mercado libre para developers.

![image](https://user-images.githubusercontent.com/45438216/168727285-b006febd-fcf5-4361-bc05-b75537dad47b.png)
![image](https://user-images.githubusercontent.com/45438216/168727459-dc26366a-2aec-41bc-996e-719e3f7689b1.png)
![image](https://user-images.githubusercontent.com/45438216/168728079-9ff1675c-05a1-4967-b7b3-c24d0247bf72.png)
![image](https://user-images.githubusercontent.com/45438216/168727600-047c4f81-dbf9-4a6d-bd73-050f5c85b7a1.png)
![image](https://user-images.githubusercontent.com/45438216/168728040-4bf3b793-8942-4ecf-8916-60457c73e1b3.png)


## Frontend
Para la implementación del frontend de la aplicación se utilizó React JS, Sass como preprocesador de estilos, BEM para el nombramiento de clases, Mobile First como práctica para el diseño responsive (la aplicación tiene algunos breakpoints, es responsive desde 375px), fetch para el consumo de APIs, etc.

Como desiciones de diseño se definió:

-  Llamado de servicios:

realizar el consumo de los servicios directamente desde el componente de la vista ya que al redirigir a otra página, enviar elementos vía props no era viable y también debido al requerimiento "si se ingresa un id de producto debería ingresar directamente a la vista de detalle..."

- Store managment:

La comunicación de estados entre componentes fue vía props cuando pertenecían a la misma vista, esto ya que al ser una data que no era enviada a múltiples componentes, no afectaba en gran medida a la rerenderización de la página en caso de un cambio de estado. Por otro lado, para el proyecto se consideró el uso de redux, pero debido a que la recomendación de implementación de este patrón es para aplicaciones grandes y que su estado sea compartido en diferentes vistas o componentes, no agregaba gran valor de performance y mantenibilidad.

- Accesibilidad:

Para el tema de accesibilidad se utilizaron diferentes etiquetas acorde con la función que buscaba dicho contenido, tales como: header, nav, main, figure, button, input, etc. También se agregaron tabuladores en la vista de resultados para poder navegar en la página, atributos alt para las imágenes, atributos role y aria label para decribir el funcionamiento de algunos elementos, se agregó la detección de la tecla enter para realizar una busqueda o seleccionar un item tabulado, etc.

- Performance:

Para temas de performance se hizo uso de promesas en vez de async y await para no realizar una petición bloqueante, se agregó la propiedad key a los elementos que fueron mapeados en el html para optmizar el rerenderizado y ayudar al algoritmo de reconciliation y se importaron dos componentes con lazy loading en las vistas donde se hacen peticiones al back para que mientras espera el request pueda importarlos. Nota: se tuvo en cuenta el uso de componentes puros pero al analizar los posibles componentes que se podrían memoizar se notó que el componente padre que lo renderizaba en realidad no sufría cambios en un caso de posible rerendización, por lo cual no fue necesario implementarlo.

- Estructuración de carpetas

![image](https://user-images.githubusercontent.com/45438216/168955737-c5b3db30-9fa6-4380-9c0b-2d3c9dea12ae.png)

- assets: para adjuntar elementos como imágenes, iconos, tipografía, etc.
- components: para agrupar los componentes transversales que pueden ser usados en diferentes vistas.
- routes: para la configuración de las rutas
- screens: los componentes de las diferentes vistas o páginas de la aplicación. Dentro de cada vista hay una carpeta components para ordenar el maquetado de la vista
- services: para agrupar los diferentes servicios que consumirá la app.
- styles: contiene los archivos de configuración del proyecto como colores, tipografía, mixins, etc.

Como otras consideraciones de UX que no fueron implementadas sería agregar un spinner al llamar las APIs para que el usuario tenga una retroalimentación de la acción.

## Backend
Para el backend se desarrolló una API en node JS y express.

En la parte lógica de la aplicación se utilizaron HOF de python para el filtrado, mapeo o reducción de elementos (objetos, arrays, etc).

Como decisiones de implementación se realizaron los siguientes ajustes a la estructura de flujos o respuestas definidas y se definió la siguiente estructura de carpetas:

#### Modificación de endpoints

1.   /api/items?q=:query

Para la implementación de este endpoint de especifica el uso del endpoint de mercado libre de search y se comenta que en estos resultados sale la información de la categoría más visitada del item, pero al hacer una revisión de este criterio en algunos casos si devolvía la información pero en otros no, por lo cual procedí a hacer el siguiente flujo:

- En caso de que se encuentre la información de la categoría en los filtros:
	Se procede a construír la información de categories con la que suministra el valor.
- En caso contrario:
	 Se realiza una búsqueda de los posibles filtros, se busca el filtro por categoría, se extrae la categoría con más búsquedas asociadas al item y luego se procede a consultar a otra API de mercado libre la información de la categoría.
	 
También, a este endpoint se agrega el valor "state" debido a que en los diseños se podía observar que faltaba este valor.

2. /api/items/:id
	
En este endopint agregué un nuevo campo a la respuesta llamado categories, esto ya que al tener el requerimiento de "si se ingresa un id de producto debería ingresar directamente a la vista de detalle...", la información de la categoría del item debe ser independiente de la categoría de los items en general.

### Estructura

![image](https://user-images.githubusercontent.com/45438216/169841455-b00b6f90-16cd-4dbb-8233-3f7d216baece.png)

- Adapter: en este folder se encuentran los adaptadores de un servicio los cuales son llamados desde los controladores.
- config: folder para ingresar las configuraciónes del proyecto. Actualmente se encuentra el mapeo de los environments
- controller: en este folder se encuentran los diferentes controladores los cuales son llamados una vez se verifican los parámetros del endpoint.
- middleware: en este folder encontrará los diferentes middleware que se encargan de interceptar las peticiones a un endpoint y realizar verificaciones.
- models: en este folder se encuentran las clases de diferentes elementos las cuales tienen la funcionalidad de procesar la información que responde las apis externas y luego darles una estructura diferente.
- routes: se encuentran los archivos de mapeo de las diferentes rutas existentes dentro del servicio
- serve.js: archivo principal donde está la inicialización de la app.
