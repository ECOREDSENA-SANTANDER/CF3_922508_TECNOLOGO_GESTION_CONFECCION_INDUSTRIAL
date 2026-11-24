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
          .col-lg-2.mb-3.col-5.col-md-2
            img.wid15(src='@/assets/curso/temas/t4/img02.svg', alt='')
          .col-lg-12
            p La configuración de las piezas condiciona el uso del material antes de construir una marcada. El número, el tamaño, la forma, la orientación, la simetría, las restricciones de dirección y la coincidencia de motivos determinan las posibilidades de ubicación. El patrón no establece por sí solo el consumo definitivo, porque también intervienen el ancho útil, la combinación de tallas, la longitud del tendido y el método de trazado. Sin embargo, permite reconocer factores que aumentarán o limitarán el aprovechamiento (Pamuk & Yildiz, 2016; Vilumsone-Nemes, 2018).

            p La interpretación productiva examina esas restricciones para anticipar necesidades y validar datos de planeación. No reemplaza la elaboración del trazo ni la selección del método de extendido. Su resultado consiste en identificar qué piezas participan, en qué cantidad, sobre cuál material, con qué orientación y bajo cuáles condiciones. Esta información debe pasar íntegra a la etapa de trazo y corte.
   
    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1 Configuración de piezas
  
    p La configuración comprende la geometría y las propiedades productivas del juego. Las piezas grandes ocupan franjas continuas del ancho; las piezas pequeñas pueden utilizar espacios residuales; las formas cóncavas y convexas ofrecen oportunidades de encaje; las extensiones estrechas pueden generar zonas difíciles de aprovechar. Estas relaciones no se evalúan solo por área. Dos conjuntos con igual área total pueden requerir longitudes diferentes debido a sus contornos y restricciones.

    .row.justify-content-center.mb-3
      .col-lg-5.mb-3 
        img(src='@/assets/curso/temas/t4/img03.png', alt='')
      .col-lg-7
        p La cantidad por prenda debe expresarse para cada material. Un delantero puede cortarse una vez al doblez, dos veces en espejo o como piezas derecha e izquierda. Una pretina puede requerir material principal y entretela; un bolsillo puede existir en una sola posición; un forro puede utilizar una geometría semejante con modificaciones. Si la cantidad se registra sin material, el sistema puede duplicar u omitir componentes.
        p La línea de hilo define la orientación principal respecto del tejido. En materiales de tejido plano suele relacionarse con la urdimbre; en tejidos de punto se establece según la dirección prevista de mayor estabilidad o elasticidad. Algunas piezas admiten una tolerancia angular; otras deben conservar paralelismo estricto. La desviación no puede decidirse durante el trazo si el patrón o la especificación no la autoriza.

    
    .bloque-texto-g.bloque-texto-g--inverso.bg8.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los materiales con pelo, brillo direccional, sombreado o estampado orientado pueden exigir colocación en un solo sentido. Los cuadros, rayas y motivos localizados añaden puntos de coincidencia. Estas restricciones reducen la libertad de encaje y pueden aumentar consumo. La literatura de corte industrial distingue el tratamiento de materiales lisos de aquellos con dirección, repetición o bordes especiales, porque la apariencia final depende de la continuidad del motivo y de la orientación uniforme (Vilumsone-Nemes, 2018).
          br
          br
          | Los márgenes también inciden. Aumentar un margen amplía el área y puede impedir que dos piezas encajen como antes. Los márgenes variables deben estar identificados; eliminarlos para mejorar aprovechamiento alteraría la construcción. Del mismo modo, piezas con líneas de corte abiertas, solapamientos digitales o contornos duplicados generan interpretaciones incorrectas y deben corregirse antes de cualquier cálculo




































































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
