<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario: interpretación técnica de patrones para producción',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la interpretación de documentación, patrones, escalados y su relación con la producción y el consumo de material.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se debe comprobar primero al interpretar un juego de patrones para producción?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de mesas libres en el área de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La coincidencia entre referencia, talla y revisión aprobada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tiempo asignado para empacar las prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La distribución del personal durante el turno de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce que la identidad documental y la revisión autorizada son esenciales antes de interpretar geometrías.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la diferencia principal entre ficha técnica y orden de producción?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ficha determina el lote y la orden dibuja las piezas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ficha registra operarios y la orden establece costuras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La ficha contiene existencias y la orden desarrolla patrones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ficha define el producto y la orden concreta el lote.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se diferencian las especificaciones estables del producto y las cantidades o variantes solicitadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 3,
          texto:
            '¿Qué procede si el patrón digital tiene una revisión anterior a la ficha vigente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar la discrepancia y comprobar la versión autorizada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Liberar las piezas al comprobar semejanza entre contornos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar el nombre del archivo y continuar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aceptar el archivo si corresponde a la misma talla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se comprende que la coincidencia aparente de medidas no reemplaza la validación de versiones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 4,
          texto:
            '¿Qué información debe contener la identificación productiva de una pieza de patrón?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente su figura y el ancho exterior de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la marca de la máquina utilizada para coser.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Referencia, pieza, talla, versión, cantidad y material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nombre del operador, turno y ubicación del almacén.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica la información que permite rastrear cada componente hasta la referencia autorizada.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 5,
          texto: '¿Qué indica un piquete situado sobre el contorno del patrón?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una referencia para hacer coincidir piezas durante el ensamble.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una instrucción para cambiar automáticamente la talla base.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una marca exclusiva para calcular el precio del tejido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un límite de almacenamiento permitido para piezas cortadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se identifica el piquete como marca de correspondencia entre bordes y componentes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 6,
          texto:
            '¿Cómo debe interpretarse una pieza señalada para cortar dos unidades en espejo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como dos piezas idénticas con igual cara orientada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como una sola pieza completa ubicada siempre al doblez.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como dos piezas destinadas a materiales sin relación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como un par derecho e izquierdo con orientación enfrentada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se comprende la necesidad de obtener componentes simétricos opuestos cuando así lo exige el producto.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un control relevante al revisar patrones manuales antes de producción?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consultar únicamente el número de operarios disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprobar contornos, piquetes, escala y empates de unión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Verificar exclusivamente los colores de etiquetas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contar el número de prendas embaladas en el pedido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce que la revisión manual exige integridad geométrica y datos productivos legibles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe verificarse al importar patrones entre dos plataformas CAD/CAM?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre comercial de las aplicaciones utilizadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el tamaño visual de los iconos en pantalla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escala, unidades, piquetes, líneas internas y tallas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La velocidad máxima del equipo de confección industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se comprende que el intercambio puede alterar geometrías o propiedades que requieren validación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 9,
          texto:
            '¿Qué criterio debe seguirse para modificar un archivo digital aprobado?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Editar el archivo maestro sin conservar versiones anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar libremente las medidas para ajustar la marcada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar alertas sin consultar la documentación de producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear una copia controlada y aprobar la nueva revisión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se identifica la gestión de cambios como condición para conservar trazabilidad digital.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 10,
          texto:
            '¿Qué diferencia fundamental existe entre patronaje manual y digital?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El medio de representación y gestión de la geometría.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La obligación de reconocer piezas y sus relaciones técnicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La necesidad de comprobar escalas y medidas del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La exigencia de conservar marcas para producción industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce que ambos sistemas exigen verificación técnica, aunque utilicen soportes distintos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de los conceptos técnicos abordados.',
        },
        {
          id: 11,
          texto:
            '¿Qué etapa de la relación con el cliente permite fortalecer la experiencia después de la compra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La atención postventa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El almacenamiento interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La producción del bien.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cierre contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 12,
          texto:
            'Un manual de servicio al cliente debe orientar principalmente sobre:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Políticas, procedimientos y estándares de atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Políticas de procesos exclusivos de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registros tributarios de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Políticas de valoración de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 13,
          texto: '¿Qué permite identificar el análisis del ciclo del servicio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los puntos de interacción que influyen en la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo las actividades contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 14,
          texto:
            'En un momento de verdad, ¿qué aspecto puede influir directamente en la percepción del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La calidad de la interacción durante el contacto con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de contactos registrados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura del almacén.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El método de depreciación utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 15,
          texto:
            '¿Cuál indicador aporta información para valorar la calidad de la atención?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de maquinaria instalada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valor de los activos fijos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de proveedores internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 16,
          texto:
            'Si una medición del servicio evidencia baja satisfacción, ¿qué debe hacer la organización?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los resultados para conservar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar las causas y formular acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los mecanismos de medición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los canales de atención disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 17,
          texto:
            'En el triángulo del servicio, ¿qué elemento orienta las acciones para responder a las necesidades del cliente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estrategia de servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El inventario de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proceso de facturación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 18,
          texto:
            '¿Qué ventaja ofrece mantener información actualizada sobre los contactos y solicitudes de un cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita la continuidad y personalización de la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impide realizar seguimiento a los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce la posibilidad de conocer antecedentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de responder solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 19,
          texto:
            '¿Qué práctica ayuda a prevenir la repetición de una falla detectada en el servicio?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentar el hallazgo y verificar la acción de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la evidencia del caso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar comunicar el hallazgo al responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerrar el caso sin analizar su causa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 20,
          texto:
            'Una organización integra protocolos, seguimiento, medición y acciones de mejora. ¿Qué busca fortalecer con estas prácticas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La calidad de la atención y la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La reducción del contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de la retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aumento de los tiempos de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra comprensión de la interpretación técnica de patrones para producción.',
      mensaje_final_reprobado:
        'No se ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad.',
    },
  }),
}
</script>
