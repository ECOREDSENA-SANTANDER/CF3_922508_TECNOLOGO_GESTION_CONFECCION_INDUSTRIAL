export default {
  global: {
    Name: 'Interpretación técnica de patrones para producción',
    Description:
      'El componente aborda la interpretación de la documentación técnica y de los patrones utilizados en la producción de prendas de vestir, mediante la identificación de piezas, tallas, referencias, transformaciones y escalados. Incluye el reconocimiento de sistemas de patronaje manual y digital CAD/CAM, la correspondencia entre patrón, ficha técnica, orden de producción y muestra física, así como la incidencia de la configuración de las piezas sobre el aprovechamiento del material.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentación técnica del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ficha técnica y orden de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Muestra física, piezas, tallas y referencias',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Patronaje manual',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Patronaje digital CAD/CAM',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicaciones especializadas del sector',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lectura productiva del patrón',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de patrones básicos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Interpretación de transformaciones y escalados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Correspondencia entre patrón y muestra física',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patrón y aprovechamiento del material',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Configuración de piezas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Incidencia del patrón en el consumo',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2015). Metric pattern cutting for women’s wear (6.ª ed.). Wiley.',
    },
    {
      referencia:
        'Beazley, A., & Bond, T. (2003). Computer-aided pattern design and product development. Blackwell Publishing.',
    },
    {
      referencia:
        'Chaudhary, S., Kumar, P., & Johri, P. (2020). Maximizing performance of apparel manufacturing industry through CAD adoption. International Journal of Engineering Business Management, 12, 1 - 12.',
    },
    {
      referencia: 'Gerber Technology. (s. f.). AccuMark overview.',
    },
    {
      referencia:
        'Geršak, J. (2022). Design of clothing manufacturing processes: A systematic approach to developing, planning, and control (2.ª ed.). Woodhead Publishing.',
    },
    {
      referencia:
        'International Organization for Standardization. (2011). Textiles - Preparation, marking and measuring of fabric specimens and garments in tests for determination of dimensional change (ISO 3759:2011).',
    },
    {
      referencia:
        'International Organization for Standardization. (2017). Size designation of clothes - Part 1: Anthropometric definitions for body measurement (ISO 8559-1:2017).',
    },
    {
      referencia:
        'International Organization for Standardization. (2025). Size designation of clothes - Part 2: Primary and secondary dimension indicators (ISO 8559-2:2025).',
    },
    {
      referencia:
        'Joseph-Armstrong, H. (2010). Patternmaking for fashion design (5.ª ed.). Pearson Education.',
    },
    {
      referencia:
        'Lectra. (17 de septiembre de 2026). What you need to know about the latest version of Modaris.',
    },
    {
      referencia:
        'Nayak, R., & Padhye, R. (Eds.). (2015). Garment manufacturing technology. Woodhead Publishing.',
    },
    {
      referencia: 'Optitex. (s. f.). 2D/3D CAD pattern design software.',
    },
    {
      referencia:
        'Pamuk, O., & Yildiz, E. Z. (2016). A study about parameters affecting the marker plan efficiency. Tekstil ve Konfeksiyon, 26(4), 430 - 435.',
    },
    {
      referencia:
        'Şen Kiliç, A. (2019). Comparison of CAD and manual system efficiency in pre-production preparation process. Tekstil ve Konfeksiyon, 29(1), 67 - 77.',
    },
    {
      referencia:
        'Vilumsone-Nemes, I. (2018). Industrial cutting of textile materials (2.ª ed.). Woodhead Publishing.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
