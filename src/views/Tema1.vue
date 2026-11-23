<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Documentación técnica del producto
        
      p La documentación técnica convierte las decisiones de diseño y producción en datos que pueden consultarse, verificarse y reproducirse. Su utilidad depende de que cada documento identifique la referencia, la versión, la fecha, la talla base, los materiales, las medidas y las condiciones de construcción. Cuando alguno de estos elementos cambia sin actualizar los demás, el patrón puede conservar una geometría válida y, sin embargo, dejar de corresponder al producto aprobado. La lectura documental debe preceder a la revisión de las piezas porque establece el marco contra el cual se interpretan los contornos, los puntos de unión y la información de producción.

      .row.justify-content-center.mb-3
        .col-lg-8.mb-2
          p.bg2.p-3 Una referencia industrial suele articular información gráfica, dimensional, constructiva y administrativa. El dibujo técnico representa la apariencia y los detalles; la tabla de medidas fija dimensiones y tolerancias; la lista de materiales identifica textiles, insumos y consumos previstos; la especificación de costuras describe uniones; la orden de producción determina el lote que debe fabricarse, y el patrón materializa la forma de los componentes. Ninguna fuente debe leerse de manera aislada. La coherencia se confirma cuando código, descripción, talla, versión y condiciones de fabricación coinciden en todo el conjunto documental (Geršak, 2022; Nayak & Padhye, 2015).
          p El control de versiones es determinante. Una corrección en el largo de manga, el margen de costura o la forma de un escote puede modificar una pieza y afectar otras que se unen con ella. La fecha del archivo no basta para establecer vigencia, ya que una copia local puede ser posterior y no estar autorizada. Resulta necesario comprobar el identificador de revisión, la aprobación registrada y la relación con la muestra liberada. Si existen dos documentos con datos distintos, la discrepancia debe registrarse y resolverse antes de continuar; seleccionar uno por conveniencia técnica introduce un cambio no controlado.
        .col-lg-4
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

      .cajon.color-acento-contenido.p-4.mb-0
        h4 Regla de precedencia
        p.mb-0 La documentación aprobada debe indicar cuál fuente controla cada dato. La muestra orienta la forma y la construcción  observables, pero no debe utilizarse para reemplazar una medida escrita ni para validar una versión distinta sin autorización.

      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1 Ficha técnica y orden de producción 

      p La ficha técnica reúne los requisitos y especificaciones que permiten caracterizar una referencia de manera clara y organizada. Aunque su estructura puede variar según la organización, generalmente incluye los siguientes elementos:

   











































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
