<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Patrón y aprovechamiento del material
      
    .row.justify-content-center.mb-3.bg5.g-0(data-aos="zoom-in-left")
      .col-lg-5.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img01.png', alt='')
      .col-lg-7
        .row.mb-0.p-4
          .col-lg-2.mb-3.col-5.col-md-3
            img.wid15(src='@/assets/curso/temas/t4/img02.svg', alt='')
          .col-lg-12
            p La configuración de las piezas condiciona el uso del material antes de construir una marcada. El número, el tamaño, la forma, la orientación, la simetría, las restricciones de dirección y la coincidencia de motivos determinan las posibilidades de ubicación. El patrón no establece por sí solo el consumo definitivo, porque también intervienen el ancho útil, la combinación de tallas, la longitud del tendido y el método de trazado. Sin embargo, permite reconocer factores que aumentarán o limitarán el aprovechamiento (Pamuk & Yildiz, 2016; Vilumsone-Nemes, 2018).

            p La interpretación productiva examina esas restricciones para anticipar necesidades y validar datos de planeación. No reemplaza la elaboración del trazo ni la selección del método de extendido. Su resultado consiste en identificar qué piezas participan, en qué cantidad, sobre cuál material, con qué orientación y bajo cuáles condiciones. Esta información debe pasar íntegra a la etapa de trazo y corte.
   
    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1 Configuración de piezas
  
    p La configuración comprende la geometría y las propiedades productivas del juego. Las piezas grandes ocupan franjas continuas del ancho; las piezas pequeñas pueden utilizar espacios residuales; las formas cóncavas y convexas ofrecen oportunidades de encaje; las extensiones estrechas pueden generar zonas difíciles de aprovechar. Estas relaciones no se evalúan solo por área. Dos conjuntos con igual área total pueden requerir longitudes diferentes debido a sus contornos y restricciones.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t4/img03.png', alt='')
      .col-lg-7
        p La cantidad por prenda debe expresarse para cada material. Un delantero puede cortarse una vez al doblez, dos veces en espejo o como piezas derecha e izquierda. Una pretina puede requerir material principal y entretela; un bolsillo puede existir en una sola posición; un forro puede utilizar una geometría semejante con modificaciones. Si la cantidad se registra sin material, el sistema puede duplicar u omitir componentes.
        p La línea de hilo define la orientación principal respecto del tejido. En materiales de tejido plano suele relacionarse con la urdimbre; en tejidos de punto se establece según la dirección prevista de mayor estabilidad o elasticidad. Algunas piezas admiten una tolerancia angular; otras deben conservar paralelismo estricto. La desviación no puede decidirse durante el trazo si el patrón o la especificación no la autoriza.

    
    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los materiales con pelo, brillo direccional, sombreado o estampado orientado pueden exigir colocación en un solo sentido. Los cuadros, rayas y motivos localizados añaden puntos de coincidencia. Estas restricciones reducen la libertad de encaje y pueden aumentar consumo. La literatura de corte industrial distingue el tratamiento de materiales lisos de aquellos con dirección, repetición o bordes especiales, porque la apariencia final depende de la continuidad del motivo y de la orientación uniforme (Vilumsone-Nemes, 2018).
          br
          br
          | Los márgenes también inciden. Aumentar un margen amplía el área y puede impedir que dos piezas encajen como antes. Los márgenes variables deben estar identificados; eliminarlos para mejorar aprovechamiento alteraría la construcción. Del mismo modo, piezas con líneas de corte abiertas, solapamientos digitales o contornos duplicados generan interpretaciones incorrectas y deben corregirse antes de cualquier cálculo

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 17.
      span Propiedades del patrón que condicionan la ubicación

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Propiedad
            th.bg3 Condición que requiere
            th.bg3 Incidencia probable
            th.bg3 Dato que debe transferirse
        tbody
          tr.bg4
            td Cantidad por prenda
            td Número de unidades de cada pieza y material.
            td Determina el conjunto total que debe ubicarse.
            td Cantidad, par, doblez o asimetría.
          tr
            td Línea de hilo
            td Orientación respecto de la estructura textil.
            td Limita la rotación de la pieza.
            td Dirección y tolerancia permitida.
          tr.bg4
            td Sentido
            td Orientación visual o funcional del material.
            td Puede exigir todas las piezas en una dirección.
            td Unidireccional, bidireccional o condición especial.
          tr
            td Simetría
            td Relación entre componentes derechos e izquierdos.
            td Define si una pieza puede espejarse.
            td Par enfrentado o pieza diferenciada.
          tr.bg4
            td Motivo
            td Rayas, cuadros o estampados con repetición.
            td Exige reservas para coincidencia.
            td Puntos y líneas de emparejamiento.
          tr
            td Contorno
            td Forma exterior y márgenes de corte.
            td Afecta el encaje con piezas vecinas.
            td Geometría cerrada y versión aprobada.
          tr.bg4
            td Material
            td Tejido principal, forro, entretela u otro.
            td Separa conjuntos y anchos disponibles.
            td Código y propiedades relevantes.


    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Análisis previo de configuraciones complejas

    p Una referencia con varias tallas y materiales requiere separar conjuntos. Las piezas de material principal no se mezclan automáticamente con forros o entretelas; cada material posee ancho, dirección y comportamiento propios. Si la orden combina colores, también puede requerir agrupaciones independientes. La lectura debe producir un inventario por referencia, talla, material y cantidad antes de considerar el aprovechamiento.

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las piezas al doblez merecen una distinción. En patronaje, la indicación puede expresar que el centro no lleva costura; en producción, la ubicación depende de si el proceso utiliza material doblado y de cómo se organiza la marcada. La interpretación registra la condición geométrica y evita convertirla en una instrucción de extendido sin analizar el proceso. Esa decisión pertenece a la planeación del trazo y del corte.
          br
          br
          | Los componentes con coincidencia de motivos deben incluir referencias claras. En una camisa de cuadros, el centro delantero, el bolsillo y la tapa pueden requerir continuidad; en una prenda rayada, los costados o mangas pueden alinearse según el diseño. La ausencia de líneas de coincidencia no significa que la exigencia no exista si la muestra y la ficha la establecen. El hallazgo debe incorporarse a la información que recibe el área de trazo.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 18.
      span Ejemplo de inventario productivo por material

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Pieza
            th.bg3 Material
            th.bg3 Cantidad por prenda
            th.bg3 Orientación
            th.bg3 Condición especial
        tbody
          tr.bg4
            td Delantero derecho
            td Tejido principal
            td 1 unidad
            td Un solo sentido
            td Coincidencia de raya en centro
          tr
            td Delantero izquierdo
            td Tejido principal
            td 1 unidad
            td Un solo sentido
            td Componente asimétrico
          tr.bg4
            td Espalda
            td Tejido principal
            td 1 unidad al doblez
            td Hilo paralelo al centro
            td Sin costura central
          tr
            td Manga
            td Tejido principal
            td 2 unidades en espejo
            td Un solo sentido
            td Piquetes diferenciados
          tr.bg4
            td Cuello
            td Tejido principal
            td 2 unidades
            td Un solo sentido
            td Centro y extremos identificados
          tr
            td Entretela de cuello
            td Entretela
            td 1 unidad
            td Según especificación
            td Geometría sin margen adicional
          tr.bg4
            td Bolsillo
            td Tejido principal
            td 1 unidad
            td Un solo sentido
            td Coincidencia con delantero

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      h5 Transferencia de información
      p.mb-0 Antes del trazo deben quedar definidos el inventario, la cantidad, el material, la talla, la orientación, la simetría y las restricciones  de coincidencia. Una marcada eficiente construida con datos incompletos no representa una solución válida.

    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2 Incidencia del patrón en el consumo

    p El consumo relaciona la cantidad de material requerida con una unidad o lote de producción. En tejidos comercializados por longitud, suele expresarse en metros por prenda o metros para una cantidad definida; en otros materiales puede utilizar masa, área o unidades. El patrón aporta la geometría y las restricciones, mientras el ancho útil y la combinación de piezas determinan la longitud. Por esta razón, el consumo no puede obtenerse sumando únicamente largos máximos ni dividiendo el área total por el ancho sin considerar la capacidad real de encaje.

    .row.justify-content-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-4 
        p La eficiencia de una marcada compara el área ocupada por las piezas con el área del rectángulo de material utilizado. Es un indicador de aprovechamiento geométrico. Una eficiencia mayor significa menor área no ocupada dentro de ese rectángulo, siempre que se comparen condiciones equivalentes. No permite ignorar orillos, defectos, coincidencias, separaciones técnicas ni restricciones de dirección. Estudios sobre marcada muestran que el ancho, la mezcla de tallas, la cantidad de piezas, la forma y el sentido de colocación modifican el resultado (Pamuk & Yildiz, 2016; Vilumsone-Nemes, 2018).
        .bg10.p-3.mb-2
          h5 Eficiencia geométrica de referencia
          p.mb-0 Eficiencia (%) = [Σ área de las piezas ÷ (ancho útil × longitud utilizada)] × 100
        p El numerador reúne el área neta de las piezas incluidas. El denominador corresponde al área rectangular disponible bajo las mismas unidades. El resultado solo es comparable cuando se mantienen material, ancho, orientación, separación y mezcla de tallas.
      .col-lg-4.col-10.col-md-7
        img(src='@/assets/curso/temas/t4/img06.png', alt='')

    .bloque-texto-g.bg9.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fórmula describe la relación, pero la interpretación debe revisar sus variables. El ancho útil puede ser menor que el ancho nominal debido a orillos o zonas no utilizables. La longitud utilizada debe corresponder al mismo conjunto de piezas incluido en el numerador. Si se calcula el área de una talla y se divide por la longitud de una marcada con varias tallas, el porcentaje carece de sentido.
          br
         
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-8.col-md-6
        img(src='@/assets/curso/temas/t4/img08.png', alt='')
      .col-lg-9 
        p El consumo unitario puede estimarse dividiendo la longitud total entre el número de prendas completas representadas, siempre que todas estén definidas bajo la misma condición. En una mezcla de tallas, el promedio describe el lote y no cada talla individual. Si se necesita consumo por talla, deben emplearse marcadas o asignaciones que permitan distinguirlas. La cifra se redondea según la política de abastecimiento y se complementa con las reservas autorizadas; dichas reservas no deben incorporarse de manera arbitraria
        .row.justify-content-center.mb-0.bg6.g-0
          .col-lg-5.p-0
            img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t4/img09.svg', alt='')
          .col-lg-7.p-3.p-4
            h5 Consumo lineal promedio del conjunto
            h5 Consumo promedio por prenda = longitud utilizada ÷ número de prendas completas representadas
            p.mb-0 Cuando la marcada combina tallas, el resultado corresponde a la mezcla analizada. Debe declararse el ancho útil, el número de prendas, la curva de tallas y las restricciones aplicadas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 19.
      span Variables que modifican el consumo asociado al patrón

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Variable
            th.bg3 Cambio observado
            th.bg3 Efecto posible
            th.bg3 Condición para interpretar
        tbody
          tr.bg4
            td Número de piezas
            td Aumento por detalles, forros o divisiones.
            td Mayor área total y nuevas posibilidades o restricciones de encaje.
            td Comparar la misma versión del producto.
          tr
            td Forma
            td Contornos más irregulares o extensiones estrechas.
            td Mayor espacio residual entre piezas.
            td Mantener ancho y orientaciones equivalentes.
          tr.bg4
            td Talla
            td Crecimiento de contornos y largos.
            td Cambio de área y de relación con el ancho.
            td Analizar la curva de tallas solicitada.
          tr
            td Ancho útil
            td Reducción o aumento de la zona aprovechable.
            td Cambio de longitud requerida.
            td Excluir orillos y zonas no utilizables.
          tr.bg4
            td Dirección
            td Paso de colocación bidireccional a un solo sentido.
            td Menor libertad para rotar y encajar.
            td Conservar la apariencia requerida.
          tr
            td Motivo
            td Exigencia de casar cuadros, rayas o estampados.
            td Reserva adicional y posiciones obligadas.
            td Definir repetición y puntos de coincidencia.
          tr.bg4
            td Margen
            td Modificación del borde de corte.
            td Cambio de área y proximidad entre piezas.
            td Utilizar márgenes autorizados.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Ejemplo de lectura del consumo

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t4/img10.png', alt='')
      .col-lg-7
        p Considérese una marcada de 8,40 m de longitud y 1,48 m de ancho útil que contiene seis prendas completas. El área rectangular disponible equivale a 12,432 m². Si el área acumulada de las piezas es 10,25 m², la eficiencia geométrica es 82,45 %. El consumo lineal promedio es 1,40 m por prenda. Estas cifras describen la condición analizada; no pueden trasladarse a un ancho distinto o a una marcada unidireccional sin recalcular.
          p Si la ficha cambia una manga corta por una manga larga, el patrón aumenta su área y puede cambiar el encaje. No basta con sumar la diferencia de largo a 1,40 m, porque la nueva pieza podría ubicarse en un espacio existente o forzar una longitud adicional. La interpretación correcta reconoce que la modificación afecta el consumo y solicita una nueva evaluación en la etapa de trazo.

    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5 Cálculo del ejemplo
        p Las cifras se presentan con fines explicativos. La aceptación de un consumo requiere emplear los datos reales del patrón, el material y la orden de producción.
          br
          br
          h5.mb-0 Área disponible = 1,48 m × 8,40 m = 12,432 m² 
          br      
          h5.mb-0 Eficiencia = (10,25 m² ÷ 12,432 m²) × 100 = 82,45 %}
          br    
          h5.mb-0 Consumo promedio = 8,40 m ÷ 6 = 1,40 m por prenda

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 20.
      span Interpretación de resultados de aprovechamiento

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3 Resultado
            th.bg3 Lectura válida
            th.bg3 Conclusión que debe evitarse
            th.bg3 Verificación adicional
        tbody
          tr.bg4
            td Eficiencia superior
            td La misma área se ubicó con menor espacio no ocupado bajo condiciones equivalentes.
            td El producto siempre consumirá menos material.
            td Ancho, tallas, sentido, motivo y separaciones.
          tr
            td Consumo promedio menor
            td La mezcla analizada requiere menor longitud por prenda.
            td Todas las tallas tienen ese consumo.
            td Composición de la curva y número de prendas.
          tr.bg4
            td Área de patrón mayor
            td Las piezas suman mayor superficie neta.
            td La longitud aumentará en igual proporción.
            td Posibilidad de encaje dentro del ancho útil.
          tr
            td Más piezas pequeñas
            td El modelo tiene mayor fragmentación.
            td El aprovechamiento necesariamente empeora.
            td Capacidad de ocupar espacios residuales y restricciones.
          tr.bg4
            td Colocación unidireccional
            td La orientación está más restringida.
            td La eficiencia siempre caerá un porcentaje fijo.
            td Forma de piezas, ancho y repetición del material.
          tr
            td Cambio de margen
            td La geometría exterior fue modificada.
            td El ajuste de la prenda no cambia.
            td Línea de costura, construcción y versión aprobada.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/ico.svg', alt='')
      h3.mb-0.mx-3 Datos que deben acompañar una estimación


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-5.mb-3.col-10.col-md-8
        img(src='@/assets/curso/temas/t4/img12.png', alt='')
      .col-lg-7
        p Una cifra de consumo sin condiciones no es reproducible. Debe registrarse referencia, versión de patrón, material, ancho útil, orientación, curva de tallas, cantidad de prendas, longitud, eficiencia y fecha. También se anotan restricciones de motivo, separaciones y reservas. Esta información permite distinguir una estimación preliminar de un consumo aprobado.

        p La trazabilidad adquiere especial importancia cuando el patrón cambia. Una nueva revisión puede conservar el nombre del estilo y modificar una sola pieza; si el consumo no se recalcula, la orden puede continuar con un valor obsoleto. El vínculo entre versión de patrón y versión de consumo evita esa separación. En entornos digitales puede gestionarse mediante identificadores; en registros manuales debe conservarse de forma explícita.
    p El consumo interpretado en esta etapa funciona como dato de alerta y planeación. La validación definitiva depende del método de trazo y de las condiciones de corte. Separar ambos alcances evita anticipar procedimientos y, al mismo tiempo, asegura que el área responsable reciba patrones completos y restricciones claramente identificadas.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 21.
      span Ficha mínima de trazabilidad del consumo

    .tabla-a.color-primario.mb-4(data-aos="zoom-in-left")
      table
        thead
          tr
            th.bg3.w-25 Campo
            th.bg3 Registro esperado
            th.bg3 Razón técnica
        tbody
          tr.bg4
            td Referencia y revisión
            td Código del producto y versión del patrón.
            td Relaciona el valor con una geometría específica.
          tr
            td Material
            td Código, descripción y condición superficial.
            td Define las restricciones aplicables.
          tr.bg4
            td Ancho útil
            td Medida disponible después de exclusiones.
            td Establece el área real de ubicación.
          tr
            td Curva de tallas
            td Tallas y cantidades contenidas.
            td Permite interpretar el promedio del lote.
          tr.bg4
            td Sentido y motivo
            td Orientación y coincidencias requeridas.
            td Explica restricciones de colocación.
          tr
            td Longitud y eficiencia
            td Valores obtenidos bajo el mismo conjunto.
            td Permite reconstruir el cálculo.
          tr.bg4
            td Estado
            td Preliminar, validado, sustituido o anulado.
            td Evita usar estimaciones fuera de vigencia.
          tr
            td Responsable y fecha
            td Identificación de quien calcula y valida.
            td Conserva trazabilidad de la decisión.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="zoom-in-left")
      .h5 Interpretación del consumo
      p.mb-0 El patrón  permite reconocer variables que afectan el aprovechamiento y realizar relaciones preliminares. La construcción y aprobación de la marcada, el extendido y el corte se desarrollan con sus propios métodos y controles.



























</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
