export default {
  global: {
    componenteFormativo: 'Ruta activa de aprendizaje y evaluación',
    descripcionCurso:
      'Aquí encontrará la descripción de los principios pedagógicos que guían la formación profesional integral, destacando la importancia de la didáctica, la evaluación continua y el desarrollo de competencias tanto técnicas como humanas. Además, resalta la relevancia de la innovación, el emprendimiento y la responsabilidad social en los procesos educativos del SENA, que se apoyan en métodos y recursos didácticos para fortalecer la enseñanza y el aprendizaje en el aula.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo:
          'Fundamentos pedagógicos en todo proceso de enseñanza y aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Formación para el trabajo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Didáctica: disciplina clave en el proceso de enseñanza-aprendizaje',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos y recursos didácticos en el SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Guías de aprendizaje',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Currículo y evaluación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura curricular SENA',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aspectos para destacar de SENA',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Orientaciones sobre la evaluación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Proceso de evaluación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Planes de mejoramiento',
            hash: 't_3_5',
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
        download: 'downloads/CF2_41310002_DU.pdf',
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
      tema: '1.1.	Formación para el trabajo	',
      referencia:
        'Alvarado, Sara Victoria, Ospina, Héctor Fabio, Botero, Patricia, & Muñoz, Germán. (2008). Las tramas de la subjetividad política y los desafíos a la formación ciudadana en jóvenes. Revista argentina de sociología, 6(11), 19-43. Recuperado en 30 de septiembre de 2024.',
      tipo: 'Articulo',
      link:
        'https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1669-32482008000200003&lng=es&tlng=en.',
    },
    {
      tema: '3.	Currículo y evaluación 	',
      referencia:
        'Diseño curricular para la formación metodológica de asesores de empresa con base a competencias laborales. (2002). Bogotá SENA.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000071420',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje autónomo',
      significado:
        'Proceso donde el estudiante asume la responsabilidad de identificar y desarrollar sus propias estrategias de aprendizaje.',
    },
    {
      termino: 'Competencias',
      significado:
        'Conjunto de habilidades, conocimientos y actitudes que un aprendiz debe desarrollar para desempeñarse en un entorno productivo.',
    },
    {
      termino: 'Currículo',
      significado:
        'Estructura que organiza los contenidos, tiempos y recursos para guiar el proceso educativo.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Tipo de evaluación que se aplica continuamente durante el proceso pedagógico, proporcionando retroalimentación para mejorar el aprendizaje.',
    },
    {
      termino: 'Formación Profesional Integral (FPI)',
      significado:
        'Modelo educativo del SENA que busca formar personas competentes en el ámbito técnico y humano.',
    },
    {
      termino: 'Guía de aprendizaje',
      significado:
        'Herramienta didáctica que organiza actividades y contenidos para guiar el aprendizaje.',
    },
    {
      termino: 'Heteroevaluación',
      significado:
        'Proceso donde el instructor evalúa el desempeño de los estudiantes bajo criterios predeterminados.',
    },
    {
      termino: 'Innovación',
      significado:
        'Capacidad de aplicar nuevas ideas y soluciones en el entorno productivo y social.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Proceso en el que el estudiante reflexiona y evalúa su propio desempeño de manera autónoma.',
    },
    {
      termino: 'Competencias transversales',
      significado:
        'Habilidades que son útiles en diversos contextos, como el emprendimiento y la responsabilidad social.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Habilidad clave para enfrentar situaciones laborales y profesionales que exigen análisis crítico y soluciones prácticas.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Proceso de crear y desarrollar un proyecto de negocio basado en la identificación de necesidades y oportunidades.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia y aplica métodos y técnicas para facilitar el proceso de enseñanza-aprendizaje.',
    },
    {
      termino: 'Evaluación diagnóstica',
      significado:
        'Proceso que se lleva a cabo al inicio del proceso formativo para identificar conocimientos y habilidades previas del aprendiz.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Estrategia pedagógica que fomenta la construcción conjunta de conocimiento a través del trabajo en grupo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Botero, P., Muñoz, G. & Ospina, H. F. (2010). Las tramas de la subjetividad política y los desafíos a la formación ciudadana en jóvenes. Centro de Estudios Avanzados en Niñez y Juventud (CINDE) Universidad de Manizales.',
    },

    {
      referencia:
        'Comenius, J. A. (1986). Didáctica Magna. Madrid: Ediciones Akal.',
    },

    {
      referencia:
        'Galindo, S. & Quijano, J. E. (2012). Reconociendo nuestro entorno económico, el programa de formación y las oportunidades que nos da el SENA. Bogotá: SENA.',
    },

    {
      referencia:
        'Novak, J.D. & Gowin, D.B. (1988). Aprendiendo a aprender. Traducción al español del original Learning how to learn. Barcelona: Martínez Roca.',
    },

    {
      referencia:
        'Páez, D. L. (2012). El modelo pedagógico de la formación profesional integral en el enfoque para el desarrollo de competencias y el aprendizaje por proyectos. SENA.',
    },

    {
      referencia:
        'Rendón, D.L. & Moreno, L. A. (2012). Lineamientos institucionales éticos.Bogotá: SENA.',
    },

    {
      referencia:
        'SENA. (2011). Lineamientos de planeación operativa 2012. Bogotá: SENA.',
    },

    {
      referencia:
        'Torres, C. (2002). El juego como estrategia de aprendizaje en el aula.CDCHT.',
    },

    {
      referencia:
        'Becerra, M. (s.f.). El debate. En Aprendizaje en el SENA. Estrategias didácticas.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Experta temática',
          centro:
            'Equipo de Adecuación Didáctica y Gráfica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Asesor pedagógico',
          centro:
            'Equipo de Adecuación Didáctica y Gráfica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
