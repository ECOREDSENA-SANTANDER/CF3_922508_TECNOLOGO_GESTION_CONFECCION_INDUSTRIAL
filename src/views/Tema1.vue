<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Documentación técnica del producto
        
      p(data-aos='fade-right') La documentación técnica convierte las decisiones de diseño y producción en datos que pueden consultarse, verificarse y reproducirse. Su utilidad depende de que cada documento identifique la referencia, la versión, la fecha, la talla base, los materiales, las medidas y las condiciones de construcción. Cuando alguno de estos elementos cambia sin actualizar los demás, el patrón puede conservar una geometría válida y, sin embargo, dejar de corresponder al producto aprobado. La lectura documental debe preceder a la revisión de las piezas porque establece el marco contra el cual se interpretan los contornos, los puntos de unión y la información de producción.

      .row.justify-content-center.mb-3(data-aos='fade-right')
        .col-lg-8.mb-2
          p.bg2.p-3 Una referencia industrial suele articular información gráfica, dimensional, constructiva y administrativa. El dibujo técnico representa la apariencia y los detalles; la tabla de medidas fija dimensiones y tolerancias; la lista de materiales identifica textiles, insumos y consumos previstos; la especificación de costuras describe uniones; la orden de producción determina el lote que debe fabricarse, y el patrón materializa la forma de los componentes. Ninguna fuente debe leerse de manera aislada. La coherencia se confirma cuando código, descripción, talla, versión y condiciones de fabricación coinciden en todo el conjunto documental (Geršak, 2022; Nayak & Padhye, 2015).
          p El control de versiones es determinante. Una corrección en el largo de manga, el margen de costura o la forma de un escote puede modificar una pieza y afectar otras que se unen con ella. La fecha del archivo no basta para establecer vigencia, ya que una copia local puede ser posterior y no estar autorizada. Resulta necesario comprobar el identificador de revisión, la aprobación registrada y la relación con la muestra liberada. Si existen dos documentos con datos distintos, la discrepancia debe registrarse y resolverse antes de continuar; seleccionar uno por conveniencia técnica introduce un cambio no controlado.
        .col-lg-4.col-9.col-md-7
          img(src='@/assets/curso/temas/t1/img01.svg', alt='')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Conjunto documental requerido para interpretar el patrón

      .tabla-a.color-primario.mb-4
        table
          thead
            tr
              th.bg3.w-25 Documento
              th.bg3 Información principal
              th.bg3 Verificación sobre el patrón
              th.bg3 Riesgo ante una inconsistencia
          tbody
            tr.bg4
              td Ficha técnica
              td Código, versión, diseño, medidas, tolerancias, materiales y construcción.
              td Coincidencia de identidad, dimensiones, detalles y especificaciones.
              td Uso de piezas que pertenecen a otra versión del producto.
            tr
              td Orden de producción
              td Referencia, cantidades, tallas, colores, lote y fecha requerida.
              td Disponibilidad de todas las tallas y piezas necesarias para la mezcla solicitada.
              td Faltantes, duplicidades o preparación de tallas no requeridas.
            tr.bg4
              td Tabla de medidas
              td Puntos de medición, dimensiones objetivo y tolerancias.
              td Relación entre medidas terminadas, líneas de costura y holguras previstas.
              td Alteración del ajuste o incumplimiento dimensional.
            tr
              td Muestra física
              td Volumen, proporción, construcción, ubicación de detalles y acabado.
              td Correspondencia visual y constructiva entre las piezas y el producto aprobado.
              td Producción de una forma diferente a la muestra autorizada.
            tr.bg4
              td Lista de materiales
              td Material principal, complementos, entretelas e insumos.
              td Compatibilidad de la geometría, orientación y cantidades con cada material.
              td Asignación incorrecta de piezas o consumos.
            tr
              td Patrón aprobado
              td Contornos, líneas internas, aplomos, talla, cantidad y orientación.
              td Integridad del conjunto y compatibilidad entre piezas de unión.
              td Imposibilidad de ensamblar o pérdida de trazabilidad.

      .cajon.color-acento-contenido.p-4.mb-0(data-aos='fade-right')
        h4 Regla de precedencia
        p.mb-0 La documentación aprobada debe indicar cuál fuente controla cada dato. La muestra orienta la forma y la construcción  observables, pero no debe utilizarse para reemplazar una medida escrita ni para validar una versión distinta sin autorización.

      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1 Ficha técnica y orden de producción 

      p La ficha técnica reúne los requisitos y especificaciones que permiten caracterizar una referencia de manera clara y organizada. Aunque su estructura puede variar según la organización, generalmente incluye los siguientes elementos:

      .fondo01.mb-4.p-4(data-aos="zoom-in-left")
        .row.justify-content-center.align-items-center
          .col-lg-11
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/1.svg' alt='')
              h4.text-center Identificación del producto
              p.text-center Nombre, código y descripción de la referencia.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/2.svg' alt='')
              h4.text-center Representación gráfica
              p.text-center Dibujos técnicos del producto.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/3.svg' alt='')
              h4.text-center Materiales
              p.text-center Tipos y características de los insumos requeridos.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/4.svg' alt='')
              h4.text-center Medidas
              p.text-center Dimensiones y tallas establecidas.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/5.svg' alt='')
              h4.text-center Tolerancias
              p.text-center Variaciones permitidas en las medidas.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/6.svg' alt='')
              h4.text-center Operaciones críticas
              p.text-center Procesos que requieren especial control durante la fabricación.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/7.svg' alt='')
              h4.text-center Acabados
              p.text-center Características finales del producto.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/8.svg' alt='')
              h4.text-center Etiquetas
              p.text-center Información y elementos de identificación.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/9.svg' alt='')
              h4.text-center Presentación
              p.text-center Condiciones de empaque y presentación del producto.

            .tarjeta.bg1.p-4
              .row.justify-content-center.mb-3
                .col-8.col-md-5
                  img(src='@/assets/curso/temas/t1/10.svg' alt='')
              h4.text-center Registro de revisiones
              p.text-center Control de los cambios y actualizaciones realizados a la ficha técnica.

      p Para interpretar patrones interesan especialmente el código de estilo, la talla base, la descripción de los componentes, la tabla de medidas, los detalles constructivos y las observaciones que alteran la geometría. Una indicación como “cuello terminado de 3,5 cm” debe relacionarse con la pieza correspondiente, su línea de doblez, los márgenes y el método de construcción; leer solo la cifra no permite determinar si el patrón representa la medida terminada o la medida antes del ensamble.

      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t1/img03.svg', alt='')
            .col-lg-10
              p La orden de producción aplica la referencia aprobada a una necesidad concreta. Define qué se fabrica, en qué cantidades, con cuáles tallas, colores o materiales y dentro de qué horizonte. La ficha responde a las características del producto; la orden precisa el lote. Esta diferencia evita trasladar al patrón información administrativa que no modifica su forma y, al mismo tiempo, obliga a comprobar que las piezas disponibles cubran la curva de tallas solicitada. Cuando la orden incluye una variante de material, forro o acabado, debe verificarse si esa variante requiere componentes específicos o reglas de colocación diferentes.
          p La lectura inicia por la identidad documental. El código de referencia debe coincidir con el nombre del archivo o del juego físico; la revisión debe ser la autorizada; la talla base debe corresponder con la tabla utilizada para desarrollar el modelo; las unidades deben estar declaradas, y los dibujos deben representar el frente, la espalda y los detalles relevantes. Las abreviaturas internas requieren una convención disponible. Si una pieza indica “C2” y la ficha no explica si significa cortar dos unidades, cortar doble o cortar en dos materiales, la ambigüedad impide liberar el patrón.
      p Después se establece la relación entre medida de cuerpo, medida de prenda y medida de patrón. Las normas de designación de tallas distinguen dimensiones corporales primarias y secundarias para identificar prendas; estas dimensiones no equivalen necesariamente a las medidas del producto terminado. El patrón incorpora holguras funcionales o de diseño y puede incluir márgenes de costura. Por tanto, comparar directamente un contorno corporal con el borde exterior de una pieza conduce a interpretaciones erróneas. La norma ISO 8559-1 establece definiciones antropométricas para la medición corporal, mientras que ISO 8559-2 define indicadores de dimensiones primarias y secundarias para la designación de tallas. Estas referencias permiten diferenciar las medidas corporales, las dimensiones del producto terminado y la información geométrica del patrón (International Organization for Standardization [ISO], 2017, 2025).

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2.
        span Diferencias funcionales entre ficha técnica y orden de producción

      .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg3 Criterio
              th.bg3 Ficha técnica
              th.bg3 Orden de producción
              th.bg3 Lectura conjunta
          tbody
            tr.bg4
              td Propósito
              td Define las especificaciones aprobadas de la referencia.
              td Autoriza una cantidad y una combinación productiva.
              td Confirma qué versión debe aplicarse al lote.
            tr
              td Temporalidad
              td Permanece vigente hasta una revisión autorizada.
              td Corresponde a un pedido o periodo determinado.
              td Evita emplear una versión anterior en una orden nueva.
            tr.bg4
              td Tallas
              td Presenta la base dimensional y las reglas del producto.
              td Indica la curva y las cantidades requeridas.
              td Permite comprobar la disponibilidad de patrones por talla.
            tr
              td Materiales
              td Especifica composición, referencia y ubicación.
              td Determina color, lote o variante solicitada.
              td Permite identificar piezas o restricciones particulares.
            tr.bg4
              td Cambios
              td Registra revisiones técnicas del producto.
              td Registra ajustes autorizados del pedido.
              td Diferencia una modificación del diseño de una novedad del lote.
            tr
              td Responsabilidad
              td Es controlada por desarrollo de producto o área técnica.
              td Es emitida por planeación, comercial o producción según el sistema interno.
              td Exige trazabilidad entre aprobación técnica y ejecución.


      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-0.mx-3 Procedimiento de lectura documental

      .row.justify-content-center.mb-3.bg5.g-0(data-aos="zoom-in-left")
        .col-lg-5.p-0
          img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img04.png', alt='')
        .col-lg-7
          .row.mb-0.p-4
            .col-lg-2.mb-3.col-5.col-md-2
              img.wid15(src='@/assets/curso/temas/t1/img05.svg', alt='')
            .col-lg-12
              p La revisión puede organizarse mediante una secuencia estable sin convertirla en una comprobación mecánica. Primero se identifica la referencia y su revisión; luego se determina el alcance de la orden; después se comparan dibujos, tabla de medidas, lista de materiales y observaciones; finalmente se relaciona cada requisito con las piezas disponibles. El resultado no es una aceptación general, sino un registro de coincidencias, dudas y discrepancias. Esta forma de trabajo permite localizar el origen de un dato y evita corregir el patrón para compensar un error documental no confirmado.
              p Las unidades merecen una revisión específica. Una tabla expresada en centímetros no debe mezclarse con un archivo configurado en milímetros o pulgadas. El riesgo aumenta cuando el intercambio digital conserva la geometría, pero modifica la escala durante la importación. La verificación debe incluir una medida conocida, por ejemplo, una línea de referencia de 100 mm o la longitud declarada de una pieza. Si la medida importada no coincide, todo el archivo debe considerarse condicionado hasta corregir la configuración.
      p Las tolerancias describen el intervalo admisible del producto terminado y no una licencia para alterar el patrón. Una tolerancia de ± 0,5 cm indica el margen de aceptación de la medida controlada bajo el método definido; no autoriza aumentar o reducir cada borde en esa cantidad. La variación acumulada de varias costuras puede superar el rango final. Por ello, el patrón se interpreta con respecto a la medida objetivo y al método constructivo, mientras la tolerancia se utiliza para evaluar el resultado conforme al punto de medición especificado.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 3.
        span Secuencia para contrastar la documentación con el patrón

      .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg3 Paso
              th.bg3 Pregunta técnica
              th.bg3 Evidencia requerida
              th.bg3 Decisión posible
          tbody
            tr.bg4
              td Identidad
              td ¿La referencia, talla y revisión coinciden?
              td Código, nombre del archivo, fecha y aprobación.
              td Continuar o bloquear por versión incorrecta.
            tr
              td Integridad
              td ¿Están todos los documentos y piezas?
              td Índice documental e inventario del juego.
              td Continuar o solicitar faltantes.
            tr.bg4
              td Dimensión
              td ¿Las medidas y unidades son compatibles?
              td Tabla de medidas, escala y puntos de control.
              td Aceptar, medir nuevamente o registrar discrepancia.
            tr
              td Construcción
              td ¿Las piezas representan los detalles descritos?
              td Dibujos, secciones, costuras y muestra.
              td Confirmar correspondencia o escalar consulta.
            tr.bg4
              td Producción
              td ¿El conjunto cubre la orden solicitada?
              td Curva de tallas, cantidades y variantes.
              td Liberar para la etapa siguiente o completar información.
            tr
              td Trazabilidad
              td ¿La conclusión conserva evidencia?
              td Formato de revisión, responsable, fecha y hallazgo.
              td Cerrar la revisión o mantenerla pendiente.

      .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
        h4 Ejemplo de discrepancia
        p.mb-0 La ficha indica talla base M y revisión 04, mientras el archivo digital presenta talla M y revisión 03. Aunque las dimensiones aparenten coincidir, la geometría no debe liberarse hasta comprobar qué cambió entre revisiones y cuál versión fue aprobada.

      p Explore el video #[b Introducción a la ficha técnica] para reconocer la importancia de este documento en la caracterización y especificación de una prenda de vestir.

      .row.justify-content-center.align-items-center(data-aos="fade-right").mb-4         
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/5YOLIDHLiCw?si=Ees8-zxW9YdThKte" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          Figcaption Video. Introducción a la ficha tecnica

      p Revise el video #[b Diligenciamiento de ficha técnica] de prenda para identificar los elementos que la componen y comprender cómo registrar la información técnica de una prenda.

      .row.justify-content-center.align-items-center(data-aos="fade-right").mb-4          
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/ck4jApUj5ss?si=P5vmAyYfY-8X8euZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          Figcaption Video. Diligenciamiento de ficha técnica de prenda


      separador
      #t_1_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.2 Muestra física, piezas, tallas y referencias	

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-9 
          img(src='@/assets/curso/temas/t1/img06.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t1/img07.svg', alt='')
            .col-lg-10 
              p La muestra física permite comprender cómo se relacionan las diferentes piezas de una prenda una vez ensambladas. A partir de su observación, es posible identificar la ubicación de las costuras, la distribución de la amplitud, la unión y superposición de los componentes, así como los detalles que se forman mediante dobleces, frunces, pliegues, pinzas o elásticos.
          p Para realizar esta lectura, se recomienda comenzar por reconocer la silueta general de la prenda y, posteriormente, examinar cada una de sus zonas constructivas. El propósito es relacionar las partes visibles con las piezas que conforman el patrón, sin necesidad de desarmar la prenda ni calcular medidas que ya se encuentran documentadas.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-0.mx-3 Identificación de las piezas y los componentes

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .col-lg-3.mb-3.col-9.col-md-5 
          img(src='@/assets/curso/temas/t1/img07.png', alt='')
        .col-lg-9
          p Una prenda puede estar conformada por piezas exteriores, piezas internas y componentes auxiliares. Cada uno cumple una función en su estructura, construcción o acabado. Entre los más comunes se encuentran:
          .row.justify-content-center.mb-0.bg6.g-0
            .col-lg-5.p-0
              img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t1/img09.svg', alt='')
            .col-lg-7.p-lg-5.p-4
              ul
                li #[b Piezas principales:] delanteros, espaldas y mangas, que determinan la forma y el volumen de la prenda.
                li #[b Componentes de acabado:] vistas, falsos, forros, cuellos, puños y pretinas.
                li #[b Componentes funcionales:] bolsillos y tapas.
                li #[b Componentes de refuerzo:] entretelas y otros materiales de soporte que aportan estructura o estabilidad.
      p Es importante tener en cuenta que no todas las piezas se elaboran con el mismo material. Algunas se cortan en tela principal, mientras que otras requieren forro, entretela o materiales complementarios.

      .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-8.mb-3 
          p.bg2.p-4  La identificación de las piezas también requiere reconocer su función constructiva y su relación con la estructura del producto. Aldrich (2015) y Joseph-Armstrong (2010) explican los fundamentos geométricos y dimensionales utilizados para desarrollar patrones básicos, piezas complementarias y transformaciones de diseño. En el contexto productivo, esta información debe relacionarse con las cantidades requeridas, las condiciones de simetría, los materiales asignados y las referencias de montaje, con el propósito de comprobar que el conjunto de piezas corresponde a la prenda aprobada.
          p Las tallas se identifican mediante códigos alfanuméricos o numéricos y se relacionan con dimensiones corporales definidas por el sistema de la organización. La talla nominal no constituye una medida por sí sola. Dos marcas pueden asignar el mismo código a intervalos diferentes, y una referencia puede utilizar una talla base distinta de la que se emplea para producción. La interpretación debe consultar el cuadro de tallas y los incrementos de escalado en lugar de asumir equivalencias comerciales. Las dimensiones primarias y secundarias establecidas por ISO 8559-2 permiten estructurar la designación, pero no reemplazan el sistema interno ni la validación de ajuste (ISO, 2025).
          p La referencia identifica el producto; la talla identifica una variante dimensional; la pieza identifica un componente del modelo, y la versión identifica el estado aprobado de la información. Confundir estas categorías produce errores de archivo y de producción. Un delantero talla 10 revisión B no puede sustituirse por un delantero talla M revisión A solo porque ambos pertenecen a la misma familia de prendas. La codificación debe permitir rastrear cada pieza hasta el modelo y la aprobación correspondientes.
        .col-lg-4.col-9.col-md-7
          img(src='@/assets/curso/temas/t1/img08.png', alt='')
      
      .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
        h5 Tabla 4.
        span Datos mínimos para identificar una pieza de patrón

      .tabla-a.color-primario.mb-3(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg3.w-25 Campo
              th.bg3 Contenido esperado
              th.bg3 Comprobación productiva
          tbody
            tr.bg4
              td Referencia
              td Código único del modelo o estilo.
              td Debe coincidir con la ficha y la orden.
            tr
              td Nombre de pieza
              td Denominación funcional del componente.
              td Debe permitir relacionarla con la muestra y el ensamble.
            tr.bg4
              td Talla
              td Código de la variante dimensional.
              td Debe pertenecer a la curva solicitada.
            tr
              td Versión
              td Revisión autorizada del patrón.
              td Debe coincidir con la documentación vigente.
            tr.bg4
              td Cantidad
              td Número de unidades requeridas por prenda y material.
              td Debe considerar pares, piezas dobles y componentes internos.
            tr
              td Material
              td Principal, forro, entretela u otro.
              td Debe corresponder con la lista de materiales.
            tr.bg4
              td Orientación
              td Hilo, sesgo, doblez, dirección o restricción.
              td Debe ser compatible con la estructura y apariencia del material.
            tr
              td Marcas
              td Piquetes, taladros, líneas internas y puntos de unión.
              td Deben ser legibles y coherentes con las piezas relacionadas.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-0.mx-3 Relación entre muestra y piezas

      p Para identificar las piezas que conforman una prenda, es importante comparar la muestra física con el patrón y analizar cada zona constructiva. Esta revisión permite establecer qué piezas intervienen en su elaboración y verificar que todas estén incluidas en el conjunto de patrones.
      p Por ejemplo, en una camisa, la correspondencia puede identificarse de la siguiente manera:
      
      ImagenInfografica.color-acento-botones.mb-4(data-aos="zoom-in-left")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/info.svg', alt='')

        .tarjeta.bg1.p-3(x="15%" y="12%" numero="1")
          p.mb-0 #[b Cuerpo:] delanteros, espalda y canesú.
        .tarjeta.bg1.p-3(x="19%" y="65%" numero="2")
          p.mb-0 #[b Escote:] cuello, pie de cuello y vistas.
        .tarjeta.bg1.p-3(x="73%" y="13%" numero="3")
          p.mb-0 #[b Abertura:] perillas.
        .tarjeta.bg1.p-3(x="85%" y="33%" numero="4")
          p.mb-0 #[b Mangas:] mangas, puños y piezas de abertura.
        .tarjeta.bg1.p-3(x="82%" y="65%" numero="5")
          p.mb-0 #[b Bolsillos:] pieza principal y posibles refuerzos.


      p.mb-4 Esta comparación facilita la identificación de posibles omisiones o diferencias entre la muestra y el patrón. Por ejemplo, si la camisa presenta un pie de cuello independiente, pero en el conjunto de patrones solo aparece una pieza de cuello, es necesario revisar si se trata de una construcción integrada, una pieza faltante o una versión diferente de la prenda.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-0.mx-3 Interpretación de las líneas y marcas del patrón

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-10.col-md-7 
          img(src='@/assets/curso/temas/t1/img10.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2 
              img(src='@/assets/curso/temas/t1/img11.svg', alt='')
            .col-lg-10 
              p Además de los contornos, los patrones incluyen líneas y marcas internas que indican la ubicación de diferentes elementos u operaciones de confección. Estas pueden señalar:

          .bg6.p-3.mb-3
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-angle-right2
                | Ubicación de bolsillos.
              li.d-flex
                i.fas.fa-angle-right2
                | Posición de pliegues y pinzas.
              li.d-flex
                i.fas.fa-angle-right2
                | Ubicación de botones y ojales.
              li.d-flex
                i.fas.fa-angle-right2
                | Áreas destinadas a bordados o etiquetas.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 Puntos de referencia para alinear o unir piezas.
          p La muestra física permite comprobar si estas marcas corresponden a la ubicación real de los elementos o si indican el inicio de una operación o una referencia de alineación. Es importante consultar la leyenda o documentación del producto para interpretar correctamente cada símbolo, ya que marcas similares pueden tener significados diferentes.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/ico.svg', alt='')
        h3.mb-0.mx-3 Verificación de la simetría y orientación de las piezas

      p Otro aspecto fundamental es identificar cómo deben cortarse las piezas, ya que no todas se utilizan de la misma manera:

      .row.mb-3(data-aos="zoom-in-left")
        .col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/01.svg' alt='')
            .tarjeta.bg7
              .p-4
                h4.text-center Pieza al doblez
                p.mb-0.text-center Representa la mitad de una geometría y, al extender el material después del corte, forma una pieza simétrica completa.

        .col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/02.svg' alt='')
            .tarjeta.bg7
              .p-4
                h4.text-center Pieza para cortar dos unidades
                p.mb-0.text-center Requiere dos piezas, que pueden formar un par enfrentado.
        
        .col-md-6.col-lg.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/03.svg' alt='')
            .tarjeta.bg7
              .p-4
                h4.text-center Pieza asimétrica
                p.mb-0.text-center Debe conservar la orientación indicada en el patrón.

      p En prendas con cierres desplazados, drapeados, estampados localizados o detalles laterales, pueden existir piezas derechas e izquierdas que no son intercambiables. Por ello, el inventario debe diferenciarlas mediante códigos o denominaciones específicas, con el fin de evitar errores durante el corte y la confección.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 5.
        span Lectura de marcas habituales del patrón

      .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
        table
          thead
            tr
              th.bg3 Marca
              th.bg3 Función
              th.bg3 Relación que debe comprobarse
              th.bg3 Posible efecto del error
          tbody
            tr.bg4
              td Línea de hilo
              td Orienta la pieza respecto de la estructura del material.
              td Paralelismo o ángulo establecido frente al orillo.
              td Deformación, torsión o variación de apariencia.
            tr
              td Piquete
              td Identifica puntos de coincidencia entre bordes.
              td Número, posición y pieza complementaria.
              td Desfase durante el ensamble.
            tr.bg4
              td Taladro
              td Señala un punto interior de construcción o colocación.
              td Distancia a líneas de costura y función documentada.
              td Ubicación incorrecta de pinzas, bolsillos o detalles.
            tr
              td Línea de doblez
              td Indica una zona que se pliega sin separación.
              td Sentido del doblez y medida terminada.
              td Ancho o forma final incorrectos.
            tr.bg4
              td Línea de costura
              td Representa el contorno de unión cuando se diferencia del borde de corte.
              td Margen uniforme o variable según especificación.
              td Alteración de medidas y empates.
            tr
              td Línea interna
              td Ubica detalles, pliegues o referencias.
              td Coincidencia con dibujo técnico y muestra.
              td Pérdida de posición o interpretación ambigua.
            tr.bg4
              td Identificador
              td Relaciona la pieza con modelo, talla y versión.
              td Coincidencia con ficha y orden.
              td Mezcla de componentes no compatibles.

      .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
        h4 Criterio de  integridad
        p.mb-0 Un juego de patrones se considera completo cuando contiene todas las piezas requeridas, sus marcas son legibles, la cantidad por material está definida y cada componente puede relacionarse con la muestra y con los documentos vigentes.
















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
