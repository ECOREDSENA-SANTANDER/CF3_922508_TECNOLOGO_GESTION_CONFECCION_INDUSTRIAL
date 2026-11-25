<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de patronaje

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t2/img01.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t2/img02.svg', alt='')
            .col-lg-10
              p Un sistema de patronaje reúne convenciones, instrumentos y procedimientos para representar en dos dimensiones las piezas que conformarán una prenda. Los métodos manuales utilizan soportes físicos, reglas y trazos directos; los sistemas digitales emplean coordenadas, bases de datos y funciones especializadas. Ambos requieren una referencia dimensional, criterios de holgura, reglas de transformación y marcas de producción. La diferencia principal radica en el medio de construcción y gestión de la información, no en la necesidad de comprender la forma ni las relaciones entre componentes.
          p Desde la perspectiva productiva, el sistema debe conservar exactitud geométrica, identificación, capacidad de revisión y compatibilidad con las etapas siguientes. El patrón necesita ser medible, escalable, reproducible y trazable. En un entorno manual, estas condiciones se sostienen mediante originales controlados, copias identificadas y registros de modificación. En un entorno digital, dependen de archivos maestros, permisos, estructuras de almacenamiento, formatos de intercambio y procedimientos de respaldo. La digitalización reduce tareas repetitivas, pero también puede multiplicar un error si una pieza incorrecta se replica o escala sin validación (Chaudhary et al., 2020; Şen Kiliç, 2019).

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6.
      span Comparación general de los sistemas de patronaje

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Criterio
            th.bg3 Sistema manual
            th.bg3 Sistema digital CAD/CAM
            th.bg3 Implicación para la interpretación
        tbody
          tr.bg4
            td Representación
            td Líneas y marcas sobre papel, cartón u otro soporte físico.
            td Entidades geométricas almacenadas como datos.
            td La lectura debe reconocer la misma información en medios diferentes.
          tr
            td Medición
            td Se realiza con reglas, cintas y curvas.
            td Se ejecuta mediante coordenadas y herramientas de medición.
            td La unidad y la escala deben verificarse en ambos casos.
          tr.bg4
            td Modificación
            td Exige trazar, recortar o generar una nueva copia.
            td Permite editar puntos, segmentos y propiedades.
            td Todo cambio necesita versión y aprobación.
          tr
            td Escalado
            td Se aplica mediante reglas y desplazamientos trazados.
            td Se gestiona con tablas o reglas digitales.
            td Los incrementos deben conservar proporciones y empates.
          tr.bg4
            td Duplicación
            td Depende de copias físicas controladas.
            td Puede realizarse de forma inmediata.
            td Aumenta la necesidad de controlar nombres y revisiones.
          tr
            td Intercambio
            td Requiere transporte, copia o digitalización.
            td Utiliza formatos nativos o de intercambio.
            td La importación debe validarse para evitar pérdida de datos.
          tr.bg4
            td Archivo
            td Necesita conservación física y control de originales.
            td Necesita estructura de datos, permisos y respaldo.
            td La trazabilidad depende del sistema de custodia.

    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1 Patronaje manual

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-4
        p El patronaje manual consiste en representar las piezas de una prenda mediante puntos, líneas, curvas y referencias que se trazan a tamaño real o a escala reducida. Para obtener patrones precisos, es necesario trabajar sobre una superficie estable, utilizar instrumentos en buen estado, interpretar correctamente las medidas y asegurar la continuidad de los trazos.
        p Cada herramienta cumple una función específica durante la elaboración del patrón:
        .bg10.p-3.mb-2
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Reglas rectas:] permiten trazar líneas y medir distancias.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Escuadras:] facilitan la construcción de ángulos y líneas perpendiculares.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Reglas curvas:] ayudan a dibujar contornos como sisas, escotes y otras líneas curvas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Cintas métricas:] permiten tomar y verificar medidas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Ruletas:] facilitan la transferencia de líneas y marcas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Punzones:] permiten señalar puntos de referencia.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Elementos de corte:] se utilizan para separar las piezas del patrón.
      .col-lg-4.col-9.col-md-7.p-0
        img(src='@/assets/curso/temas/t2/img03.png' alt='')


    .row.justify-content-center.mb-3.bg5.g-0(data-aos="zoom-in-left")
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t2/img04.png', alt='')
      .col-lg-7
        .row.mb-0.p-4
          .col-lg-2.mb-3.col-5.col-md-3
            img.wid15(src='@/assets/curso/temas/t2/img05.svg', alt='')
          .col-lg-12
            p La selección de las herramientas depende de la actividad que se va a realizar y del nivel de precisión requerido. Por ejemplo, una curva trazada con interrupciones o segmentos poco uniformes puede dificultar el corte y alterar el recorrido de costura, incluso cuando las medidas de sus extremos son correctas. Por ello, es fundamental mantener trazos continuos y definidos durante la elaboración del patrón.
            p Los patrones básicos constituyen estructuras iniciales que reflejan dimensiones y holguras definidas para un tipo de prenda o segmento corporal. Sobre ellos se realizan transformaciones que modifican silueta, volumen o detalles. La lectura manual debe diferenciar las líneas originales de las líneas de transformación, identificar puntos de pivote, cierres de pinza, ampliaciones y cortes de estilo. En el patrón final solo deben permanecer las marcas necesarias para producción. Las líneas auxiliares que no se eliminan pueden confundirse con cortes, dobleces o posiciones de ensamble (Aldrich, 2015; Joseph-Armstrong, 2010).

    p La calidad del soporte afecta la conservación. El papel puede deformarse por humedad, doblarse o rasgarse; el cartón puede perder bordes o piquetes; las copias sucesivas pueden acumular diferencias. Por eso se distingue entre patrón maestro, patrón de trabajo y patrón de producción. El primero conserva la geometría aprobada; el segundo permite pruebas o ajustes controlados; el tercero incorpora la información necesaria para el uso operativo. Esta clasificación puede variar entre empresas, pero debe quedar definida para evitar que una copia experimental ingrese al flujo productivo.
    p La revisión de una pieza manual combina inspección visual y medición. Se observa la continuidad de contornos, la presencia de quiebres no intencionales, la claridad de las marcas y la legibilidad de la identificación. Luego se miden segmentos críticos y se comparan bordes que deberán unirse. El recorrido se evalúa sobre la línea de costura cuando existen márgenes, no únicamente sobre el borde de corte. Si dos piezas tienen recorridos distintos, debe determinarse si la diferencia corresponde a embebido, frunce, pliegue o error.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 7.
      span Verificaciones aplicables a un patrón manual

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Aspecto
            th.bg3 Método de revisión
            th.bg3 Condición esperada
            th.bg3 Hallazgo que requiere consulta
        tbody
          tr.bg4
            td Soporte
            td Observar deformación, pliegues, roturas y estabilidad.
            td Pieza íntegra y dimensionalmente estable.
            td Pérdida de borde, contracción o copia deteriorada.
          tr
            td Contorno
            td Recorrer líneas rectas y curvas con instrumentos adecuados.
            td Trazos continuos y transiciones suaves cuando corresponda.
            td Quiebres, dobles líneas o curvas sin continuidad.
          tr.bg4
            td Escala
            td Comprobar una dimensión conocida y la unidad empleada.
            td Correspondencia con la talla y la tabla.
            td Ampliación o reducción no documentada.
          tr
            td Empates
            td Comparar líneas de costura de piezas relacionadas.
            td Compatibilidad con la construcción prevista.
            td Diferencia sin función técnica identificada.
          tr.bg4
            td Marcas
            td Revisar piquetes, taladros, hilo y líneas internas.
            td Información completa y legible.
            td Marcas duplicadas, desplazadas o sin equivalencia.
          tr
            td Identificación
            td Leer código, pieza, talla, versión y cantidad.
            td Trazabilidad completa.
            td Dato ausente, tachado o incompatible con la ficha.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Control geométrico básico

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t2/img06.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t2/img07.svg', alt='')
            .col-lg-10
              p El control geométrico no busca reconstruir el patrón durante la inspección. Su propósito consiste en comprobar relaciones esenciales. Las líneas que forman ángulos rectos en centros, dobladillos o uniones deben conservarlos cuando la construcción lo exige. Las curvas de sisa y copa deben presentar continuidad; los puntos de unión deben contar con referencias; los vértices deben considerar el margen de costura y la forma de giro. La interpretación reconoce estas condiciones y documenta las excepciones.
          p Los recorridos se comparan sobre trayectorias equivalentes. Si una manga se une a una sisa, se miden los tramos entre piquetes sobre la línea de costura de ambas piezas. Una diferencia controlada puede representar embebido; una diferencia aleatoria puede producir frunces o tensión. La lectura debe consultar la ficha y la muestra antes de clasificarla. Del mismo modo, la cintura de una pretina puede ser menor que el borde al que se une cuando existe elasticidad o conformación; la geometría no puede juzgarse sin conocer el material y la construcción.

    .cajon.color-acento-contenido.p-4.mb-4
      h4 Precisión manual
      p.mb-0 La coincidencia de dos medidas extremas no garantiza la validez de una pieza. También deben conservarse la forma del recorrido, los puntos intermedios, los ángulos de unión y las marcas que controlan el ensamble.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Patronaje femenino

    p Explore los videos complementarios sobre patronaje femenino y amplíe sus conocimientos acerca de las técnicas y particularidades que intervienen en la elaboración de patrones para prendas femeninas.


    .tarjeta.bgslyder.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de chaqueta tipo sastre
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/ZGgZuhG8L2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de chaqueta tipo sastre

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo manga chaqueta sastre femenina
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/nf2vjjxt55Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo manga chaqueta sastre femenina

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de vestido de noche
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/o1f0M18Yryw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de vestido de noche

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Interpretación de prendas inferiores
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/fkHL3e5EOPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Interpretación de prendas inferiores

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Interpretación de overoles
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/XTM85aomtgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Interpretación de overoles

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Generalidades de la manga kimona y ranglan
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/254adUrqJ-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Generalidades de la manga kimona y ranglan

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Chaqueta cuello alto (traslados de pinza)
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/r1EfblFTETI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Chaqueta cuello alto (traslados de pinza)

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Abrigo asimétrico
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/aga8T_qGAFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Abrigo asimétrico

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Interpretación de pantalón sastre femenino
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/jm1L1_A7ONQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Interpretación de pantalón sastre femenino

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Análisis e interpretación de pantalón sudadera
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/5c_OWbiBHh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Análisis e interpretación de pantalón sudadera
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Patronaje masculino

    p Consulte los videos complementarios sobre patronaje masculino y fortalezca sus conocimientos sobre los procedimientos y características del trazado de patrones para prendas masculinas.

    .tarjeta.bgslyder.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Base inferior de pantalón masculino
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/kUN0Zv0mpUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Base inferior de pantalón masculino

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de camisa clásica
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/UwIdbbg5-fA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de camisa clásica

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de cuellos – generalidades y comportamientos
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/cfkxQlf6Vfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de cuellos – generalidades y comportamientos

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Camisa #[em slim fit]
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/tL1lGlD5SIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Camisa #[em slim fit]

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de manga, puño y cuello – camisa clásica y #[em slim fit]
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/VMJYcQqIKBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de manga, puño y cuello – camisa clásica y #[em slim fit]

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Base sastre masculina
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/0QCgguWkbA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Base sastre masculina

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de la chaqueta sastre masculina
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/4lyKodJxRgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de la chaqueta sastre masculina

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de pantalón tipo #[em jean] #[em slim fit]
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/HQP3N-Wi8Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de pantalón tipo #[em jean] #[em slim fit]
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Patronaje infantil

    p Explore los videos complementarios sobre patronaje infantil y amplíe sus conocimientos acerca de las características y particularidades del trazado de patrones para prendas destinadas a la población infantil.

    .tarjeta.bgslyder.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Base superior infantil
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/AZOdPmQQcc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Base superior infantil

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Implementación de básico
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/b5K4lQqNWGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Implementación de básico

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de prendas superiores
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/UXaG_W0Gaio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de prendas superiores

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de prendas inferiores - faldas
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/j2KkNYuFYYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de prendas inferiores - faldas

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de prendas inferiores - pantalón
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/66Xxzz4HlTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de prendas inferiores - pantalón

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de prendas - overol
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/6j7POrBEhNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de prendas - overol

        .row.justify-content-center
          .col-lg-11.mb-4.mb-md-0
            h4 Trazo de prendas – bata o vestido
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/eH7LRTKK040" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video. Trazo de prendas – bata o vestido

    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2 Patronaje digital CAD/CAM
    
    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img08.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño asistido por computador aplicado a confección representa las piezas mediante puntos, segmentos, curvas y propiedades almacenadas. Las funciones especializadas permiten crear y modificar geometría, establecer líneas internas, asignar talla, definir reglas de escalado, comprobar recorridos y preparar información para etapas posteriores. La manufactura asistida por computador vincula esos datos con procesos como trazado, extendido o corte automatizado. En el alcance de la interpretación interesa comprender el flujo de información y validar el patrón; la operación detallada de los equipos de corte pertenece al proceso correspondiente. 

          br
          br
          | La incorporación de sistemas CAD/CAM permite gestionar digitalmente la geometría de los patrones y vincular su información con diferentes etapas del desarrollo del producto. Beazley y Bond (2003) describen la aplicación del diseño asistido por computador al desarrollo de patrones y productos de confección, mientras que Chaudhary et al. (2020) analizan las ventajas de la adopción de tecnologías CAD para mejorar la precisión, facilitar modificaciones y apoyar la eficiencia de los procesos productivos. Estas herramientas requieren conservar la integridad de la información técnica, especialmente las medidas, las marcas, las tallas y las relaciones entre las piezas.

    p La estructura digital distingue archivos, modelos, piezas y variantes. Un modelo puede agrupar el conjunto de componentes de una referencia; cada pieza conserva propiedades; las tallas pueden almacenarse en una misma geometría escalada o en archivos independientes. La denominación y la base de datos deben ser consistentes. Si el sistema permite abrir varias versiones con nombres similares, el riesgo no radica en la herramienta sino en la falta de reglas de gestión. El archivo aprobado debe estar protegido frente a cambios no autorizados y toda modificación necesita generar una revisión identificable.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/temas/t2/img09.png', alt='')
        .col-lg-7
          .row.justify-content-center
            .col-lg-2.mb-3.col-4.col-md-2
              img(src='@/assets/curso/temas/t2/img10.svg', alt='')
            .col-lg-10
              p La digitalización de un patrón físico convierte contornos y marcas en información editable. Puede realizarse mediante mesa digitalizadora, escáner o captura especializada. El resultado debe comprobar escala, continuidad de curvas, posición de piquetes y correspondencia con el original. La captura automática no elimina la necesidad de depurar puntos redundantes. Un exceso de nodos puede producir líneas irregulares, dificultar el escalado y generar movimientos innecesarios en etapas automatizadas.
          p El intercambio entre plataformas utiliza formatos nativos o formatos intermedios. La geometría puede transferirse mediante convenciones como DXF adaptadas al sector, pero algunas propiedades, reglas o anotaciones no siempre se conservan del mismo modo. Después de importar, se revisan escala, unidades, nombres, líneas internas, piquetes, tallas y cantidad de piezas. La interoperabilidad declarada por un proveedor describe una capacidad del sistema; la aceptación del archivo depende de una verificación local con la configuración disponible (Gerber Technology, s. f.; Lectra, 2026; Optitex, s. f.).

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8.
      span Flujo de información en un sistema digital de patronaje

    .tabla-a.color-primario.mb-4
      table
        thead
          tr
            th.bg3 Etapa
            th.bg3 Dato de entrada
            th.bg3 Resultado
            th.bg3 Control requerido
        tbody
          tr.bg4
            td Creación o captura
            td Medidas, base original físico o geometría inicial.
            td Pieza digital identificada.
            td Escala, unidad, contorno y marcas.
          tr
            td Transformación
            td Pieza base y requisitos de diseño.
            td Geometría modificada.
            td Coherencia con ficha y muestra.
          tr.bg4
            td Escalado
            td Talla base y reglas de incremento.
            td Conjunto de tallas.
            td Piquetes, puntos de crecimiento y empates.
          tr
            td Validación
            td Piezas, documentos y criterios de revisión.
            td Patrón aprobado o lista de hallazgos.
            td Integridad, compatibilidad y versión.
          tr.bg4
            td Intercambio
            td Archivo nativo o formato intermedio.
            td Archivo importado en otra plataforma.
            td Unidades, datos perdidos y correspondencia.
          tr
            td Liberación
            td Versión validada y orden aplicable.
            td Juego disponible para producción.
            td Permisos, nombre, fecha y trazabilidad.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Validación del archivo digital

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La primera comprobación corresponde a la escala. Se mide un segmento conocido y se confirma la unidad del sistema. Luego se revisa el inventario de piezas, las propiedades asignadas y la visibilidad de líneas internas. Después se inspeccionan contornos y puntos; finalmente se comparan tallas y recorridos. Esta secuencia reduce el riesgo de interpretar como error de patrón lo que en realidad es un problema de importación.

          br
          br
          | Las funciones automáticas deben entenderse como ayudas. Una herramienta puede detectar líneas abiertas, piezas duplicadas o discrepancias de recorrido, pero el resultado requiere contexto. Dos bordes diferentes pueden ser correctos cuando uno se frunce; una pieza duplicada puede representar derecho e izquierdo; una línea abierta puede corresponder a una pieza al doblez según la convención. La decisión técnica combina la alerta del sistema con la ficha y la muestra.

    p La comparación digital entre revisiones facilita identificar movimientos de puntos o cambios de contorno. Para que sea útil, ambas versiones deben compartir origen, escala y criterio de superposición. Las diferencias deben vincularse con una solicitud o aprobación. Un cambio visible sin registro se considera una discrepancia; un cambio registrado sin modificación observable puede indicar que el archivo no fue actualizado.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 9.
      span Riesgos de integridad en archivos de patronaje digital

    .tabla-a.color-primario.mb-4
      table
        thead
          tr
            th.bg3 Riesgo
            th.bg3 Manifestación
            th.bg3 Verificación
            th.bg3 Tratamiento documental
        tbody
          tr.bg4
            td Escala incorrecta
            td La pieza se importa ampliada o reducida.
            td Medir una dimensión conocida y revisar unidades.
            td Bloquear el uso hasta corregir la configuración.
          tr
            td Pérdida de marcas
            td Desaparecen piquetes, taladros o líneas internas.
            td Comparar con el archivo fuente y la ficha.
            td Restituir datos en una nueva revisión autorizada.
          tr.bg4
            td Duplicidad
            td Existen piezas repetidas o superpuestas.
            td Revisar inventario, nombres y cantidad por prenda.
            td Eliminar solo después de confirmar su función.
          tr
            td Versión ambigua
            td Varios archivos tienen nombres similares.
            td Consultar historial, aprobación y ubicación maestra.
            td Aplicar regla de nomenclatura y retirar copias obsoletas.
          tr.bg4
            td Regla de talla incompleta
            td Algunos puntos no crecen o crecen en dirección incorrecta.
            td Superponer nido y revisar puntos críticos.
            td Corregir la tabla y volver a validar todas las tallas.
          tr
            td Formato incompatible
            td La importación altera curvas o propiedades.
            td Comparar geometría y metadatos.
            td Documentar limitaciones y usar el flujo autorizado.

    .cajon.color-acento-contenido.p-4.mb-4
      h4 Control digital 
      p.mb-0 La posibilidad de editar rápidamente no autoriza cambios directos sobre el archivo liberado. La revisión debe realizarse en una copia de trabajo, documentarse y sustituir la versión productiva solo después de la aprobación establecida.

    separador
    #t_2_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.3 Aplicaciones especializadas del sector

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t2/img12.png', alt='')
      .col-lg-7
        p Las aplicaciones especializadas integran funciones de patronaje, escalado, creación de modelos, verificación, prototipado, marcación o comunicación con otros sistemas. La oferta cambia con las versiones y licencias, por lo que no conviene definir una plataforma por una lista fija de comandos. La evaluación se centra en categorías funcionales: construcción y edición de piezas, reglas de talla, administración de modelos, control geométrico, intercambio de datos, visualización y conexión con la producción.
        p Modaris se orienta al patronaje y al desarrollo 2D y 3D; AccuMark reúne herramientas para diseño de patrones, escalado y preparación de marcadas; Optitex integra patronaje 2D, escalado y visualización 3D. Estas descripciones proceden de los fabricantes y sirven para reconocer el campo de aplicación, no para afirmar que todas las instalaciones incluyen los mismos módulos. La configuración disponible depende de la licencia, la versión, los dispositivos y la arquitectura de cada organización (Gerber Technology, s. f.; Lectra, 2026; Optitex, s. f.).

    p También existen soluciones centradas en desarrollo tridimensional, simulación, colaboración o gestión del ciclo de vida. Una representación 3D puede ayudar a revisar proporciones y relaciones entre piezas, pero no sustituye la comprobación 2D ni la muestra cuando el procedimiento de aprobación la exige. La simulación depende de parámetros del material, avatares, costuras y condiciones de ajuste; una visualización plausible no demuestra por sí sola que las piezas estén listas para producción.

    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación técnica de patrones digitales debe diferenciar las funciones de construcción, edición, escalado, visualización e intercambio de información. Beazley y Bond (2003) fundamentan la aplicación del diseño asistido por computador al desarrollo de patrones y productos, mientras que las plataformas especializadas incorporan herramientas para gestionar estos procesos de acuerdo con sus configuraciones particulares. Por ello, la evaluación de una aplicación debe centrarse en su capacidad para conservar la información geométrica, dimensional y documental necesaria para producción, independientemente de su interfaz comercial.
          br
          br
          | El reconocimiento de aplicaciones debe incluir criterios de selección. La empresa necesita considerar los tipos de producto, los formatos recibidos, el volumen de referencias, la curva de tallas, la necesidad de intercambio, la infraestructura y la disponibilidad de personal competente. La aplicación más amplia no es necesariamente la más adecuada. Un flujo confiable exige que las funciones utilizadas se relacionen con procedimientos internos de identificación, revisión y respaldo.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 10.
      span Categorías funcionales de las aplicaciones de patronaje

    .tabla-a.color-primario.mb-4
      table
        thead
          tr
            th.bg3 Categoría
            th.bg3 Función observable
            th.bg3 Dato que debe conservarse
            th.bg3 Criterio de verificación
        tbody
          tr.bg4
            td Patronaje 2D
            td Crear, medir y modificar contornos y líneas internas.
            td Geometría, unidad, marcas e identificación.
            td Correspondencia con ficha, talla y muestra.
          tr
            td Escalado
            td Aplicar incrementos a puntos y segmentos.
            td Talla base, reglas y conjunto de tallas.
            td Progresión, proporción y empates.
          tr.bg4
            td Modelos
            td Agrupar piezas y variantes de una referencia.
            td Cantidad, material, versión y relación entre componentes.
            td Integridad del juego requerido.
          tr
            td Visualización 3D
            td Simular la unión de piezas sobre un cuerpo digital.
            td Costuras, propiedades textiles y avatar.
            td Coherencia con la geometría 2D y el propósito de la prueba.
          tr.bg4
            td Intercambio
            td Importar o exportar información entre sistemas.
            td Escala, capas, nombres y marcas.
            td Comparación antes y después de la conversión.
          tr
            td Integración productiva
            td Transmitir datos hacia trazado o corte.
            td Versión aprobada y parámetros autorizados.
            td Bloqueo de archivos no validados.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Criterios para reconocer la plataforma adecuada


    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-4 
        p La compatibilidad se evalúa con archivos representativos del flujo real. Una demostración genérica no confirma que el sistema reciba las capas, tallas y marcas requeridas por la organización. La prueba debe incluir importación, medición, modificación controlada, exportación y reapertura. También debe revisar si los nombres, caracteres, unidades y convenciones permanecen estables.


        p La trazabilidad exige conocer quién puede crear, modificar, aprobar y liberar información. Algunos entornos gestionan permisos dentro de la aplicación; otros dependen de carpetas, repositorios o sistemas de gestión del producto. Cualquiera que sea la solución, debe existir una fuente maestra. Los archivos enviados por correo o almacenados en equipos personales no deben desplazarla.

        p La capacitación se relaciona con el rol. Quien interpreta patrones necesita localizar propiedades, medir, visualizar tallas, comparar versiones y reconocer alertas, aunque no tenga asignada la construcción completa del modelo. Definir estas funciones evita exigir dominio de herramientas ajenas al alcance y, al mismo tiempo, garantiza que la lectura no quede limitada a observar la forma en pantalla.


      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t2/img14.png', alt='')


    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Neutralidad tecnológica:] el resultado de la revisión no debe depender del prestigio comercial del #[em software]. Se acepta un patrón cuando la información es íntegra, trazable y compatible con los requisitos; se rechaza o condiciona cuando presenta discrepancias, aunque haya sido generado en una plataforma especializada.





















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
