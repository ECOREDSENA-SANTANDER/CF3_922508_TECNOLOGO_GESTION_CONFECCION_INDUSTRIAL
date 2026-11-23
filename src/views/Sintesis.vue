<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema jerárquico sobre la interpretación técnica de patrones para producción, organizado en cuatro apartados: documentación técnica del producto, sistemas de patronaje, lectura productiva del patrón y aprovechamiento del material. Incluye fichas técnicas, órdenes de producción, muestras físicas, piezas, tallas y referencias, así como patronaje manual y digital CAD/CAM. También aborda la identificación de patrones básicos, interpretación de transformaciones y escalados, correspondencia entre patrones y muestras físicas, configuración de piezas e incidencia del patrón en el consumo de material.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema jerárquico sobre interpretación técnica de patrones para producción, organizado en cuatro apartados: documentación técnica, sistemas de patronaje, lectura productiva del patrón y aprovechamiento del material. Incluye fichas técnicas, muestras físicas, patronaje manual y digital CAD/CAM, identificación de patrones, transformaciones, escalados, configuración de piezas y consumo de material.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
