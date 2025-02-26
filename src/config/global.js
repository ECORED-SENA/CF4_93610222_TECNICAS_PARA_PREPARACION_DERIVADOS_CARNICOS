export default {
  global: {
    Name: 'Clasificación y elaboración de productos cárnicos procesados',
    Description:
      'El componente formativo presenta la clasificación de los productos cárnicos procesados según la normatividad colombiana, abordando tipos, empaques y procesos de elaboración. Explica el tratamiento térmico, los ingredientes y el control de calidad en embutidos, enlatados y productos especiales. También destaca la importancia de estándares sanitarios para garantizar la seguridad y calidad de los alimentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: '¿Qué son productos cárnicos?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tripa o funda utilizada para embutidos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proceso de elaboración de productos cárnicos',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: '¿Qué son productos cárnicos?',
      referencia:
        'El Mundo del Campo - alfonso Uribe. (2019).Productos cárnicos chorizos caqueta, chicharrón KAPEL.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=6Nvp6M3DtxQ&ab_channel=ElMundodelCampo-alfonsouribet',
    },
    {
      tema: 'Clasificación de los productos cárnicos procesados',
      referencia:
        'Jahira Casilla. (2021). Clasificación de productos cárnicos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=9RKsBh3bFz0&ab_channel=JahiraCasilla',
    },
    {
      tema: 'Tripa o funda utilizada para embutidos',
      referencia:
        'TARAJAI. (2021). Diferentes tripas para embutidos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nU98UwnzV28&ab_channel=TARAJAI',
    },
    {
      tema: 'Proceso de elaboración de productos cárnicos',
      referencia: 'FAO. (s.f.). Procesados de carnes',
      tipo: 'Documento',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/389de810-1911-4f0e-965f-d9fe0b8aa52e/content',
    },
  ],
  glosario: [
    {
      termino: 'Ahumado',
      significado:
        'técnica de conservación que otorga sabor y color mediante la exposición al humo.',
    },
    {
      termino: 'Embutido',
      significado:
        'producto cárnico moldeado dentro de una tripa natural o artificial.',
    },
    {
      termino: 'Esterilización',
      significado:
        'eliminación de microorganismos mediante altas temperaturas en productos enlatados.',
    },
    {
      termino: 'Maduración',
      significado:
        'proceso bioquímico que mejora el sabor y textura de productos cárnicos crudos.',
    },
    {
      termino: 'Morcilla',
      significado:
        'producto elaborado con sangre de cerdo, arroz y condimentos.',
    },
    {
      termino: 'Productos cárnicos',
      significado:
        'alimentos elaborados con carne, grasa y aditivos autorizados.',
    },
    {
      termino: 'Salchichón',
      significado:
        'embutido cocido a base de carne de res o cerdo con especias.',
    },
    {
      termino: 'Tratamiento térmico',
      significado:
        'proceso de cocción utilizado para garantizar la seguridad y conservación del producto.',
    },
    {
      termino: 'Tripa artificial',
      significado:
        'recubrimiento sintético de celulosa, plástico o colágeno para embutidos.',
    },
    {
      termino: 'Tripa natural',
      significado:
        'funda de origen animal utilizada en la elaboración de embutidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amézquita, A., Arango, C., Restrepo, D. y Restrepo, R. (2001). Industria de carnes. Medellín, Colombia: Universidad Nacional.',
      link: '',
    },
    {
      referencia:
        'Girad, J. (1991). <em>Tecnología de la carne y de los productos cárnicos</em>. Madrid, España: Acribia.',
      link: '',
    },
    {
      referencia:
        'Decreto 2162 de 1983. (01 de agosto). <em>Por el cual se reglamenta parcialmente el título V de la Ley 09 de 1979, en cuanto a producción, procesamiento, transporte y expendio de los productos cárnicos procesados.</em> Diario Oficial, 36325, 30 de agosto de 1983.',
      link: '',
    },
    {
      referencia:
        'Ramírez, R. (2006). <em>Tecnología de cárnicos</em>. Bogotá, Colombia: Universidad Nacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla ',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Mutis',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
