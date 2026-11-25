<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Lectura productiva del patrón

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img01.png', alt='')

    p La lectura productiva examina el patrón como información destinada a convertirse en piezas cortadas y, posteriormente, en una prenda. Su interés principal no es valorar la creatividad del diseño, sino comprobar que cada componente tiene una función reconocible, se relaciona con otros bordes, conserva las marcas requeridas y representa la talla y la versión documentadas. Esta lectura conecta geometría, construcción y orden de producción sin invadir la ejecución del trazo o del ensamble.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t3/img02.png', alt='')
      .col-lg-7
        p El análisis avanza desde el conjunto hacia el detalle. Primero se identifica la familia de prenda y el inventario; luego se reconocen patrones básicos y componentes derivados; después se examinan transformaciones, escalado y relaciones de unión; finalmente se contrasta el juego con la muestra física. Esta secuencia ayuda a interpretar una pieza por su función dentro del producto y evita emitir conclusiones basadas solo en su silueta aislada.
        p La interpretación de las piezas requiere reconocer las relaciones geométricas y constructivas que permiten transformar superficies planas en componentes de una prenda. Aldrich (2015) y Joseph-Armstrong (2010) proporcionan fundamentos para comprender la configuración de patrones básicos, las transformaciones y las relaciones dimensionales entre piezas. Desde la perspectiva industrial, esta lectura se complementa con los criterios de identificación, preparación y trazabilidad del producto abordados por Nayak y Padhye (2015).

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 11.
      span Niveles de lectura productiva del patrón

    .tabla-a.color-primario(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Nivel
            th.bg3 Objeto de análisis
            th.bg3 Pregunta central
            th.bg3 Resultado esperado
        tbody
          tr.bg4
            td Conjunto
            td Juego completo de piezas y materiales.
            td ¿El inventario representa la referencia solicitada?
            td Relación completa de componentes y faltantes.
          tr
            td Componente
            td Función de cada pieza dentro de la prenda.
            td ¿Qué zona forma y con cuáles piezas se une?
            td Identificación funcional y correspondencia.
          tr.bg4
            td Geometría
            td Contornos, líneas internas, ángulos y recorridos.
            td ¿La forma es compatible con la construcción?
            td Confirmación o registro de discrepancias.
          tr
            td Talla
            td Base, reglas y progresión entre tamaños.
            td ¿La dimensión corresponde con el sistema aprobado?
            td Curva de tallas coherente.
          tr.bg4
            td Muestra
            td Producto físico liberado.
            td ¿Las piezas explican la forma y los detalles observados?
            td Correspondencia documentada.
          tr
            td Producción
            td Cantidad, orientación, material y versión.
            td ¿La información puede continuar al proceso siguiente?
            td Liberación, condición o bloqueo.

    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1 Identificación de patrones básicos

    p Los patrones básicos son estructuras de referencia que permiten desarrollar diferentes familias de prendas. Para identificarlos, es necesario reconocer sus partes, líneas de referencia y características funcionales.
    .tarjeta.bgslyder.p-4.mb-4(data-aos="zoom-in-left")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Reconocimiento de los patrones básicos
            p Cada patrón presenta elementos que permiten identificar su estructura:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Cuerpo:] cuello, hombro, sisa, costado y cintura.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Manga:] copa, línea de bíceps, codo y puño.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Falda:] cintura, cadera y largo.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Pantalón:] cintura, cadera, tiro, entrepierna, costado y bota.
            p Reconocer estas zonas facilita la interpretación de las piezas y la comprensión de las transformaciones que pueden realizarse a partir de cada base. No es necesario reconstruir el método de elaboración, sino identificar sus ejes, líneas y puntos funcionales.

          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/1.png' alt='')

        .row.justify-content-center(data-aos="zoom-in-left")
          .col-lg-6.mb-4.mb-md-0
            h4 Características para identificar las piezas
            p La forma, las líneas de referencia y los bordes de unión permiten diferenciar los patrones y establecer su ubicación dentro de la prenda. Para ello, se consideran los siguientes aspectos:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Delantero y espalda:] se diferencian por la forma del escote, la sisa, las pinzas y la ubicación del centro.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Mangas:] se reconocen por la forma de la copa y los piquetes, que indican los puntos de correspondencia.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Cuellos:] se identifican mediante el centro, la línea de doblez y su relación con el escote.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Pretinas:] se reconocen por su longitud, forma y características del sistema de cierre.
            p El nombre del archivo debe coincidir con las características visibles de la pieza. Si existen diferencias entre la denominación y la geometría, es necesario registrar la inconsistencia para su verificación, sin asumir una identificación que no esté confirmada.

          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/2.png' alt='')

        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h4 Identificación de piezas complementarias y derivadas
            p Además de los patrones principales, existen piezas que se obtienen de las bases o se incorporan para completar la construcción de una prenda. Entre las más comunes se encuentran:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Vistas:] reproducen una parte del escote o de una abertura y permiten dar un acabado adecuado a sus bordes.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Entretelas:] se incorporan a una pieza completa o a una zona específica para proporcionar firmeza y estabilidad.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Forros:] complementan el interior de la prenda y pueden presentar ajustes de holgura y acabado.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Tapas de bolsillo:] se relacionan con la abertura y las dimensiones finales del bolsillo.
            p Para reconocer estas piezas, se deben considerar su forma, material, cantidad, líneas internas y función dentro de la construcción de la prenda.

          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/3.png' alt='')

        .row.justify-content-center(data-aos="zoom-in-left")
          .col-lg-6.mb-4.mb-md-0
            h4 Orientación y referencias corporales
            p La orientación de los patrones permite establecer su ubicación y correspondencia durante el proceso de confección. Para facilitar su interpretación, se utilizan las siguientes referencias:
            ul.lista-ul--color.mb-0
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Centro delantero y centro espalda:] establecen los ejes principales de cada pieza.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Línea de cintura:] permite identificar la separación entre el cuerpo superior y el inferior.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Costado:] conecta los contornos delantero y espalda.
              li.d-flex
                i.fas.fa-angle-right2
                p.mb-0 #[b Líneas de pecho, cadera y rodilla:] sirven para ubicar zonas específicas y comparar proporciones.
            p En las prendas asimétricas, estas referencias también permiten orientar las piezas, aunque sus formas no sean iguales en ambos lados. Por esta razón, es importante conservar la identificación del lado derecho e izquierdo, así como el sentido de ubicación indicado en cada patrón.

          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/temas/t3/4.png' alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 12.
      span Referencias para reconocer patrones básicos

    .tabla-a.color-primario.mb-3(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Familia
            th.bg3 Líneas y zonas principales
            th.bg3 Piezas relacionadas
            th.bg3 Verificación frente a la muestra
        tbody
          tr.bg4
            td Cuerpo superior
            td Centro, cuello, hombro, sisa, costado y cintura.
            td Delantero, espalda, canesú, vistas y forros.
            td Proporción del torso, aberturas y líneas de estilo.
          tr
            td Manga
            td Copa, bíceps, codo, costados y puño.
            td Puño, vista de abertura y refuerzos.
            td Longitud, amplitud, posición y orientación.
          tr.bg4
            td Falda
            td Cintura, cadera, centro, costado y ruedo.
            td Pretina, vistas, bolsillos y forro.
            td Volumen, largo, pinzas, pliegues o cortes.
          tr
            td Pantalón
            td Cintura, cadera, tiro, entrepierna, costado y bota.
            td Pretina, bolsillos, vistas y piezas de cierre.
            td Altura de tiro, amplitud, largo y forma de pierna.
          tr.bg4
            td Cuello
            td Centro, borde exterior, pie, doblez y puntos de montaje.
            td Pie de cuello, entretela y vistas.
            td Altura, caída, simetría y unión al escote.
          tr
            td Componentes menores
            td Contornos funcionales y líneas de colocación.
            td Bolsillos, tapas, presillas, trabillas y refuerzos.
            td Cantidad, posición y medida terminada.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Reconocimiento por relaciones de unión

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t3/img03.png', alt='')
      .col-lg-7
        p Una pieza se confirma mediante sus relaciones. La copa de manga debe vincularse con la sisa; el cuello, con el escote; la pretina, con la cintura; la tapa, con la abertura del bolsillo. Los piquetes dividen esos recorridos y ayudan a establecer orientación. La coincidencia no siempre significa igualdad de longitud. Puede existir embebido, frunce, elasticidad o conformación; la ficha debe indicar la condición y la muestra evidenciar su resultado.
        p Los bordes libres también aportan información. Un ruedo puede incluir margen, doblez o pieza adicional; un escote puede terminarse con vista, sesgo o rib; una abertura puede contener extensión o refuerzo. La geometría se interpreta junto con la sección constructiva. Si el acabado declarado requiere una vista y esta no aparece en el juego, el patrón se considera incompleto hasta confirmar una solución alternativa documentada.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      h5 Lectura funcional
      p.mb-0 La forma visual orienta la identificación, pero la función se confirma mediante el código, las marcas, el material, la cantidad y la relación de unión con otras piezas.

    separador
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2 Interpretación de transformaciones y escalados

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-4 
        p Las transformaciones modifican un patrón básico para obtener una forma de diseño. Entre las más frecuentes se encuentran traslado y conversión de pinzas, incorporación de líneas de estilo, ampliación para pliegues o frunces, supresión de volumen, modificación de escotes, desarrollo de cuellos, cambio de largos y conformación de piezas. Interpretarlas implica reconocer qué efecto producen sobre la prenda y cómo se distribuye el volumen, no ejecutar nuevamente el procedimiento de construcción.

        p Una pinza controla volumen tridimensional. Puede trasladarse mientras su convergencia conserve la relación con el punto de volumen y su apertura responda al ajuste previsto. Cuando se convierte en frunce, pliegue o corte, la función permanece, aunque cambie la representación. La muestra ayuda a reconocer la solución final. Un patrón que presenta mayor amplitud en un borde puede corresponder a fruncido; si la ficha y la muestra muestran una superficie lisa, esa ampliación requiere revisión (Joseph-Armstrong, 2010).
        p Las líneas de estilo dividen una superficie en piezas que deben reconstruir la misma forma. La lectura revisa continuidad, piquetes, dirección y compatibilidad de recorridos. También identifica si el corte modifica la orientación de cada componente o genera pares asimétricos. Una transformación puede incrementar el número de piezas y afectar el consumo, incluso cuando las medidas terminadas no cambian.

      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t3/img04.png', alt='')

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El escalado genera tallas a partir de una base mediante incrementos distribuidos en puntos definidos. No consiste en ampliar todo el patrón con un factor uniforme. Las dimensiones corporales no crecen en la misma proporción y los detalles pueden conservar tamaño, cambiar con reglas particulares o reposicionarse. La interpretación revisa la dirección y magnitud del crecimiento, la continuidad del nido y la conservación de empates. Aldrich (2015) y Joseph-Armstrong (2010) explican el escalado como una aplicación sistemática de incrementos vinculados al cuadro de tallas y a la construcción.
          br
       
    p Un nido de tallas superpone los contornos para mostrar la progresión. Las líneas deben avanzar de manera ordenada; cruces inesperados, saltos o puntos inmóviles pueden indicar una regla incorrecta, aunque algunas zonas mantengan posición por decisión técnica. La comprobación se concentra en puntos críticos: hombro, sisa, costado, cintura, cadera, tiro, largos y ubicación de detalles. También se revisan los bordes complementarios para evitar que el escalado altere su relación.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 13.
      span Lectura de transformaciones frecuentes

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Transformación
            th.bg3 Evidencia en el patrón
            th.bg3 Efecto esperado en la prenda
            th.bg3 Control de correspondencia
        tbody
          tr.bg4
            td Traslado de pinza
            td Cambio de dirección o ubicación de la abertura.
            td Conservación del volumen con nueva orientación.
            td Punto de volumen, cierre y apariencia de la muestra.
          tr
            td Corte de estilo
            td División del básico en dos o más componentes.
            td Redistribución de forma y detalle visual.
            td Empates, piquetes y continuidad de línea.
          tr.bg4
            td Ampliación
            td Separación de segmentos o aumento de borde.
            td Frunce, pliegue, vuelo o mayor holgura.
            td Cantidad de amplitud y método de control.
          tr
            td Supresión
            td Reducción de contorno o eliminación de apertura.
            td Ajuste más cercano o cambio de volumen.
            td Medida terminada y comportamiento del material.
          tr.bg4
            td Cambio de largo
            td Desplazamiento de ruedo o extremo.
            td Variación vertical del producto.
            td Punto de medición y margen de acabado.
          tr
            td Asimetría
            td Diferencias geométricas entre los lados derecho e izquierdo.
            td Detalle desplazado o construcción no simétrica.
            td Identificación, cantidad y orientación.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 14.
      span Criterios para revisar un escalado

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Criterio
            th.bg3 Observación requerida
            th.bg3 Señal de coherencia
            th.bg3 Señal de alerta
        tbody
          tr.bg4
            td Talla base
            td Identificar la talla desde la cual se aplicaron reglas.
            td Coincide con ficha y cuadro dimensional.
            td La base no está identificada o difiere del documento.
          tr
            td Incrementos
            td Comparar variaciones entre tallas consecutivas.
            td Responden a la progresión aprobada.
            td Saltos, inversión o crecimiento uniforme sin sustento.
          tr.bg4
            td Dirección
            td Observar movimiento horizontal y vertical de puntos.
            td Mantiene proporciones y posición funcional.
            td Cruces o desplazamientos sin lógica constructiva.
          tr
            td Empates
            td Comparar bordes complementarios en varias tallas.
            td Conservan relación de unión.
            td La diferencia aumenta o disminuye sin explicación.
          tr.bg4
            td Detalles
            td Revisar bolsillos, piquetes, pinzas y líneas internas.
            td Se reposicionan o dimensionan según regla definida.
            td Permanecen fuera de proporción o se desplazan.
          tr
            td Extremos
            td Inspeccionar tallas menor y mayor.
            td Mantienen forma utilizable.
            td Curvas deformadas, ángulos agudos o piezas superpuestas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Ejemplo de interpretación de un nido

    p(data-aos="zoom-in-left") Un nido de tallas es la representación superpuesta de un mismo patrón en diferentes tallas. Su interpretación permite identificar cómo cambian las dimensiones, las formas y la ubicación de los elementos a medida que aumenta o disminuye la talla.
    p Para comprender su lectura, se presenta el siguiente ejemplo: un patrón de delantero escalado en cinco tallas. Al comparar las piezas superpuestas, se pueden identificar los siguientes cambios:


    .row.align-items-stretch(data-aos="zoom-in-left")
      .col-lg-6.mb-4
        .tarjeta-info
          .tarjeta-info__imagen
            img(src='@/assets/curso/temas/t3/img06.png' alt='')
          .tarjeta-info__contenido
            h5 Cambios en las dimensiones y la forma
            ul
              li #[b Hombro:] se desplaza hacia afuera y ligeramente hacia arriba.
              li #[b Costado:] aumenta progresivamente en las zonas de pecho, cintura y cadera.
              li #[b Largo:] presenta incrementos graduales entre una talla y otra.
              li #[b Bolsillo:] modifica su ubicación de acuerdo con las reglas de escalado establecidas.
            p Estos cambios deben mantener coherencia con el cuadro de tallas y las especificaciones técnicas. Por ejemplo, si el bolsillo conserva exactamente la misma posición en todas las tallas, puede quedar desproporcionado o demasiado cerca del centro en las tallas mayores. Por ello, antes de realizar ajustes, es necesario verificar las reglas de ubicación aprobadas.

      .col-lg-6.mb-4
        .tarjeta-info
          .tarjeta-info__imagen
            img(src='@/assets/curso/temas/t3/img07.png' alt='')
          .tarjeta-info__contenido
            h5 Revisión de la sisa y su correspondencia con la manga
            p La sisa también puede modificar su forma y recorrido entre las diferentes tallas. Para comprobar que el escalado es correcto, se deben revisar los siguientes aspectos:
            ul.lista-ul
              li
                | • Continuidad y suavidad de la curva en cada talla.
              li
                | • Correspondencia entre la longitud de la sisa y la copa de la manga.
              li
                | • Ubicación de los piquetes que indican los puntos de unión.
              li
                | • Distancias entre piquetes y distribución de los recorridos.
              li
                | • Compatibilidad entre el delantero, la espalda y la manga, especialmente en las tallas más pequeñas y más grandes.
            p Es importante tener presente que la superposición de los contornos exteriores no garantiza, por sí sola, que las piezas puedan ensamblarse correctamente. También se deben comprobar las medidas y los puntos de unión.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      h5 Límite del análisis
      p.mb-0 La revisión  del escalado comprueba la coherencia de las tallas y sus relaciones productivas. La definición de un nuevo cuadro de tallas o la modificación de las reglas corresponde al procedimiento de desarrollo y aprobación del producto.

    separador
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3 Correspondencia entre patrón y muestra física

    p La muestra física permite comprobar cómo los patrones se transforman en una prenda terminada. Esta revisión ayuda a determinar si las piezas, las medidas y los detalles de construcción corresponden con el producto esperado. Para realizarla, es necesario comparar la muestra con el patrón, la ficha técnica y las especificaciones de la misma referencia, talla y versión. Es importante utilizar una muestra actualizada, ya que una prenda de una revisión anterior puede tener características similares, pero presentar modificaciones que ya no corresponden al diseño aprobado.

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-8.mb-3 
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificación de la muestra física")
            .col-12
              p Antes de iniciar la revisión, se deben reconocer las características generales de la prenda:
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-angle-right2
                  | Referencia y nombre del producto.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Talla correspondiente.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Versión o revisión del patrón.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Tipo de prenda y características del diseño.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Estado de conservación de la muestra.
              p La muestra debe encontrarse en condiciones adecuadas, sin deformaciones ocasionadas por el uso, el lavado o el almacenamiento, que puedan alterar sus dimensiones y apariencia.

          .row(titulo="Revisión de la forma y los componentes")
            .col-12
              p La inspección comienza con la orientación de la prenda y la identificación de sus principales líneas de construcción. Según el tipo de producto, se revisan:
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Líneas estructurales:] centros delantero y espalda, hombros, sisas, costados, cintura, tiro y ruedos.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Componentes principales:] delantero, espalda, mangas, cuellos, faldas o piernas de pantalón.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Detalles de diseño:] bolsillos, aberturas, cierres, pliegues, frunces y pinzas.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Elementos internos:] vistas, forros y entretelas, cuando sean visibles o puedan verificarse.
              p Esta revisión permite establecer si las piezas del patrón representan correctamente las formas, uniones y características de la muestra.

          .row(titulo="Verificación de medidas")
            .col-12
              p Las medidas de la muestra deben tomarse en puntos previamente definidos, utilizando un procedimiento uniforme. Para ello, se deben considerar:
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Preparación:] disponer la prenda sobre una superficie plana y en condiciones adecuadas para la medición.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Posición:] ubicar correctamente la prenda y definir los puntos de inicio y final del recorrido.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 #[b Instrumento:] utilizar una cinta métrica u otro instrumento apropiado.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Tensión:] evitar estirar o deformar el material durante la medición.
                li.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0  #[b Registro:] consignar los valores obtenidos para compararlos con la ficha técnica y el patrón.
              p La norma ISO 3759:2011 establece principios para la preparación, el marcado y la medición de tejidos y prendas en ensayos de cambio dimensional. Aunque está orientada a este tipo de ensayos, constituye una referencia sobre la importancia de utilizar procedimientos reproducibles. Para el control del producto, se debe aplicar el método de medición documentado por la organización (ISO, 2011).

          .row(titulo="Comparación de las medidas del patrón y la muestra")
            .col-12
              p Para realizar esta comparación, es necesario identificar qué línea del patrón corresponde a la medida terminada de la prenda. No siempre es posible comparar directamente ambas dimensiones, debido a la presencia de márgenes de costura, pinzas, pliegues y superposiciones. Se deben tener en cuenta los siguientes aspectos:
              ul.lista-ul--color.mb-0
                li.d-flex
                  i.fas.fa-angle-right2
                  | Identificar si la medida del patrón corresponde al contorno de corte o a la línea de costura.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Descontar los márgenes de costura cuando corresponda.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Considerar las reducciones generadas por pinzas, pliegues y superposiciones.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Sumar los recorridos útiles cuando una medida está formada por varias piezas.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Comparar los resultados con las tolerancias establecidas en la ficha técnica.
              p.mt-3 Por ejemplo, para verificar el contorno de cintura de una prenda, se deben sumar los tramos correspondientes del delantero y la espalda, considerando las pinzas y las uniones que modifican la medida final.
      .col-lg-4.col-8.col-md-6
        img(src='@/assets/curso/temas/t3/img08.png' alt='')

    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5 Relación básica entre patrón y medida terminada
        br 
        br
        p La ecuación se adapta a la construcción. Solo deben sumarse segmentos que forman la medida controlada y deben excluirse márgenes de costura cuando la ficha define una dimensión terminada.
        br
        br
        h5 Medida terminada estimada = Σ recorridos sobre línea de costura − tomas de pinzas − superposiciones + extensiones funcionales

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 15.
      span Matriz de correspondencia entre patrón y muestra

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Elemento
            th.bg3 Evidencia en el patrón
            th.bg3 Evidencia en la muestra
            th.bg3 Criterio de correspondencia
        tbody
          tr.bg4
            td Silueta
            td Contornos, amplitudes y largos.
            td Volumen y proporción general.
            td La geometría explica la forma aprobada.
          tr
            td Costuras
            td Bordes de unión, piquetes y líneas internas.
            td Ubicación y recorrido de uniones.
            td Las piezas se relacionan con cada costura observable.
          tr.bg4
            td Pinzas y pliegues
            td Líneas, taladros y cantidades de toma.
            td Volumen controlado y dirección.
            td Posición, profundidad y sentido coinciden.
          tr
            td Bolsillos
            td Piezas y líneas de colocación.
            td Tamaño, forma y ubicación.
            td La medida terminada y la posición responden a la ficha.
          tr.bg4
            td Cuellos y vistas
            td Contornos, dobleces y empates.
            td Altura, caída y acabado interior.
            td El conjunto explica la construcción observada.
          tr
            td Medidas
            td Recorridos útiles y relaciones geométricas.
            td Puntos de medición sobre la prenda.
            td El resultado se encuentra dentro del criterio documentado.
          tr.bg4
            td Simetría
            td Piezas al doblez, pares o componentes diferenciados.
            td Equilibrio o asimetría intencional.
            td La orientación coincide con el diseño aprobado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Tratamiento de discrepancias

    p Durante la revisión de los patrones pueden encontrarse diferencias entre las medidas, las formas, las referencias o la información registrada. Estas situaciones se denominan discrepancias y deben documentarse con claridad para facilitar su análisis y corrección.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Registro de las discrepancias")
        .col-lg-6.mb-4.mb-md-0
          p Toda diferencia identificada debe describirse mediante información verificable. Para ello, se recomienda registrar:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Referencia:] código o nombre del patrón.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Talla:] medida o rango al que corresponde la pieza.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Versión:] revisión del archivo utilizado.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Punto de medición:] zona donde se identifica la diferencia.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Valor esperado y observado:] medida establecida y medida encontrada.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Piezas implicadas:] patrones relacionados con la discrepancia.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Evidencia:] muestra utilizada, fecha y demás soportes de verificación.
          p Por ejemplo, en lugar de escribir "la manga no coincide", se debe indicar qué medida presenta la diferencia, en qué punto se encuentra y cuáles piezas están involucradas.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t3/01.png' alt='')

      .row.justify-content-center(titulo="Clasificación de las discrepancias")
        .col-lg-6.mb-4.mb-md-0
          p No todas las diferencias tienen el mismo nivel de importancia. Su clasificación depende de las consecuencias que puedan generar durante el proceso de confección. Algunos ejemplos son:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Discrepancia documental:] ausencia de un código o identificador que puede solucionarse mediante la verificación de los registros.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Discrepancia dimensional:] diferencias en medidas o contornos que pueden impedir el ensamble de las piezas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Discrepancia de ubicación:] posición incorrecta de elementos como bolsillos, pinzas o aberturas respecto a las especificaciones.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 #[b Discrepancia estética:] variaciones en la apariencia de la prenda que no están documentadas o autorizadas.
          p Esta clasificación permite establecer cuáles situaciones requieren ajustes, verificación técnica o suspensión de la liberación del patrón.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t3/02.png' alt='')

      .row.justify-content-center(titulo="Corrección y verificación")
        .col-lg-6.mb-4.mb-md-0
          p Una vez identificada la discrepancia, se debe realizar el seguimiento correspondiente sin eliminar la evidencia inicial. Para ello, se recomienda:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Conservar el registro y los soportes de la diferencia encontrada.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Realizar los ajustes necesarios y generar una nueva versión del patrón.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Verificar nuevamente las piezas que fueron modificadas.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Revisar las piezas complementarias cuando el cambio afecte bordes o puntos de unión compartidos.
            li.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Comprobar el conjunto de tallas cuando el ajuste modifique una regla de graduación.
          p De esta manera, se garantiza la trazabilidad de los cambios y se evitan correcciones aisladas que puedan generar incompatibilidades entre las piezas durante la confección.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t3/03.png' alt='')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 16.
      span Registro técnico de una discrepancia

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Campo
            th.bg3 Contenido requerido
            th.bg3 Ejemplo de redacción
        tbody
          tr.bg4
            td Identificación
            td Referencia, talla, pieza, versión y archivo.
            td Referencia 4821, talla M, manga, revisión 03.
          tr
            td Fuente comparada
            td Ficha, orden, muestra o pieza relacionada.
            td Muestra aprobada revisión 04 y tabla de medidas vigente.
          tr.bg4
            td Ubicación
            td Punto, línea o tramo específico.
            td Recorrido de copa entre piquetes delantero y hombro.
          tr
            td Resultado esperado
            td Valor o condición documentada.
            td Recorrido compatible con la sisa y embebido autorizado.
          tr.bg4
            td Resultado observado
            td Valor medido o condición encontrada.
            td Diferencia adicional de 1,2 cm sin indicación técnica.
          tr
            td Efecto
            td Consecuencia posible sobre producción o producto.
            td Riesgo de frunce no previsto en la copa.
          tr.bg4
            td Estado
            td Pendiente, corregido, aprobado o rechazado.
            td Pendiente de confirmación por desarrollo de producto.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      h5 Redacción del hallazgo
      p.mb-0 Debe  indicarse qué se comparó, dónde aparece la diferencia, cuánto mide o cómo se manifiesta y qué requisito resulta afectado. No se atribuye una causa hasta contar con evidencia suficiente.
















































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
