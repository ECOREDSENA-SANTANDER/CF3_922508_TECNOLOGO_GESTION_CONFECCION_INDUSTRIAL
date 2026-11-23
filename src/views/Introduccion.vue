<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-3.col-10.col-md-7
        img(src='@/assets/curso/temas/intro/intro.svg', alt='')
      .col-lg-8 
        p La producción industrial de prendas parte de información técnica que debe interpretarse antes de disponer materiales, máquinas y personal. La ficha técnica, la orden de producción, la muestra física y el conjunto de patrones describen diferentes dimensiones de un mismo producto y permiten reconocer qué prenda debe elaborarse, cuáles son sus componentes, qué tallas se producirán y qué características deben mantenerse durante su fabricación. Una interpretación incorrecta de cualquiera de estos elementos puede trasladarse al corte, al ensamble, al consumo de material y finalmente a la calidad del producto terminado.
        p El patrón constituye la representación técnica de las piezas que conforman una prenda. Además de definir su geometría, incorpora información necesaria para orientar el proceso productivo, como identificación de la pieza, talla, cantidad de cortes, sentido del hilo, piquetes, marcas internas y otras referencias de construcción. En los sistemas industriales, esta información puede encontrarse en patrones físicos o gestionarse mediante aplicaciones digitales CAD/CAM que facilitan su almacenamiento, escalado, modificación y posterior integración con procesos de trazo y corte.
    
    .bg1.p-4
      p.mb-0 Este componente desarrolla la interpretación del patrón desde una perspectiva productiva. El recorrido comienza con la lectura de la ficha técnica, la orden de producción y la muestra física; continúa con el reconocimiento de los sistemas manuales y digitales de patronaje; avanza hacia la identificación de patrones básicos, transformaciones y escalados; y finaliza estableciendo la relación entre la configuración de las piezas y el aprovechamiento del material. El propósito no es construir patrones, sino comprender la información que contienen y verificar su correspondencia con los requerimientos definidos para la producción.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
