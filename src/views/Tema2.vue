<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos y recursos didácticos en el SENA
    p.mb-5 Desde su fundación, el SENA ha trabajado de manera constante en la creación y mejora continua de métodos, técnicas, estrategias y recursos didácticos con el objetivo de fortalecer los procesos de enseñanza y aprendizaje, beneficiando tanto a instructores como a aprendices. Entre los elementos clave destacan:
    .tarjeta--container.row.mb-5
      .col-sm-12.col-lg-6.tarjeta.color-primario.p-5.mb-cus.h-card-3
        .row.justify-content-start.align-items-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema2/img1.svg')
          .col-sm-12.col-lg-8
            h3.bg2.mb-0 Técnicas didácticas activas
        p.mb-0 Un conjunto de actividades estructuradas dentro de un procedimiento lógico que se ajusta a una estrategia de aprendizaje. Su objetivo principal es guiar y orientar las tareas de aprendizaje planteadas, facilitando el desarrollo de competencias en el proceso educativo.
      .col-sm-12.col-lg-6.tarjeta.color-secundario.p-5.h-card-3
        .row.justify-content-start.align-items-center.mb-4
          .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema2/img3.svg')
          .col-sm-12.col-lg-8
            h3.bg2.mb-0 Guías de aprendizaje
        p.mb-0 Un recurso didáctico fundamental que, en formato de texto, facilita un aprendizaje activo y centrado en el aprendiz. Estas guías permiten abordar competencias básicas, específicas y transversales en los dominios valorativo, actitudinal, cognitivo y procedimental, esenciales para alcanzar los resultados de aprendizaje establecidos en los proyectos formativos de los programas de formación.

    .fullview.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8
          .titulo-sexto.color-secundario
            h5 Figura 3.
            span
              |   Ejemplo guía de aprendizaje 
          
          img.mb-2(src='@/assets/curso/temas/tema2/img5.png', alt='La imagen corresponde a un formato de guía de aprendizaje del SENA, específicamente relacionado con el “Proceso de Gestión de Formación Profesional Integral”. En la parte superior figura el logotipo del SENA y el título del documento. Más abajo, en la sección titulada “Identificación de la Guía de Aprendizaje”, se especifica información clave como el nombre del programa de formación, el código del programa, la competencia a desarrollar (orientación de formación presencial), y los resultados de aprendizaje asociados a dicha competencia.')
          
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema2/img4.png')
    .bgimg5.mb-4
          h3.py-1 Técnicas didácticas activas
    p.mb-3 Numerosos expertos han realizado estudios e investigaciones en torno a las técnicas didácticas activas, contribuyendo significativamente al enriquecimiento de la didáctica y a la mejora de los procesos de enseñanza-aprendizaje en el aula.
    p.mb-5 Estas técnicas, de acuerdo con su finalidad, se clasifican en:
    .row
      .col-sm-12.col-lg-4
        .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img10.svg')
          p.mb-0.text-center Para fomentar el autoaprendizaje se emplean técnicas como los comentarios, ensayos, mapas conceptuales y mentales, mentefactos, portafolios y talleres escritos.
      .col-sm-12.col-lg-4
        .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img11.svg')
          p.mb-0.text-center En el caso del aprendizaje interactivo, que es guiado por el profesor o un experto, se utilizan estrategias como la exposición, ponencia, entrevista, conferencia, demostración y simulación.
      .col-sm-12.col-lg-4
        .tarjeta--boton.color-primario.p-4.h-card-2
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/tema2/img12.svg')
          p.mb-0.text-center Para el aprendizaje colaborativo, las técnicas incluyen estudios de caso, lluvia de ideas, juegos de rol, aprendizaje basado en problemas, paneles, debates y foros.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Guías de aprendizaje
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.bg1
        img.img-bloque-3.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img13.png', alt='')
        
      .bloque-texto-g__texto.p-4
        p.mb-3 Una guía bien elaborada debe incluir ciertos campos clave, descritos en un formato institucional del SENA, actualizado periódicamente. Los instructores deben asegurarse de utilizar la versión más reciente para garantizar que las guías orienten adecuadamente las clases.
        p.mb-3 La Guía de Aprendizaje se compone de dos estructuras: de forma y de fondo. La estructura de forma está determinada por el formato GFPI-F-135, que incluye la identificación del programa, proyecto, fase, resultados de aprendizaje y duración del estudio. 
        p.mb-0 La estructura de fondo abarca un conjunto de actividades interdisciplinarias diseñadas para que el aprendiz comprenda, aplique y transfiera conocimientos, demostrando competencias en la resolución de problemas.
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--yellow")
      .row(titulo="Identificación de la guía")
        .col-sm-12.col-lg-12
          ol.lista-ol--cuadro.mb-0
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span a
              span #[b Código:] corresponde al número secuencial de la guía, comenzando por 01.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span b
              span #[b Competencia:] en este campo se especifica la competencia a desarrollar mediante la actividad propuesta, la cual debe coincidir exactamente con la competencia enunciada en la estructura de diseño curricular del programa de formación.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span c
              span #[b Duración:] el instructor establece el tiempo previsto para desarrollar la actividad, asegurándose de que no exceda la duración total del programa de formación.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span d
              span #[b Modalidad de formación:] indica si el programa de formación es presencial, semipresencial o virtual.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span e
              span #[b Resultado de aprendizaje:] se enuncian los resultados de aprendizaje asociados a la competencia y actividad propuesta. Deben coincidir con los resultados de aprendizaje presentes en la estructura del diseño curricular. Los resultados de aprendizaje representan los objetivos a lograr con la actividad.
      .row(titulo="Introducción y planteamiento de la actividad o actividades")
        .col-sm-12.col-lg-12
          ol.lista-ol--cuadro.mb-0
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span a
              span #[b Introducción:] presenta de manera clara y motivadora la actividad a desarrollar, en un máximo de 15 líneas, destacando su pertinencia, utilidad y potencial para captar el interés del aprendiz.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span b
              span #[b Actividad de aprendizaje:] describe de manera detallada y secuencial la actividad propuesta, incluyendo cuatro fases claves.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span c
              span #[b Técnica didáctica activa:] se enuncia la estrategia didáctica que articula las actividades dentro del proceso de enseñanza-aprendizaje, de forma global e integral.

      .row(titulo="Evaluación y recursos")
        .col-sm-12.col-lg-12
          ol.lista-ol--cuadro.mb-0
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span a
              span #[b Evidencia de aprendizaje:] se redactan los enunciados que evidencian lo que el estudiante “sabe”, “sabe hacer” y “es”. Estas evidencias pueden ser de conocimiento y desempeño, permitiendo evaluar el desarrollo de las competencias.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span b
              span #[b Evidencia de desempeño:] refleja lo que el aprendiz sabe hacer, incluyendo tanto la ejecución del proceso como el resultado obtenido. Las evidencias pueden ser reales o simuladas.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span c
              span #[b Evidencia de conocimiento:] demuestra lo que el aprendiz sabe en relación con los conceptos abordados en la actividad.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span d
              span #[b Evidencia de producto:] se manifiesta en el resultado obtenido de la actividad.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span e
              span #[b Criterio de evaluación:] define el grado y tipo de aprendizaje esperado, basado en conceptos, procedimientos o actitudes concretas. Estos criterios se expresan mediante indicadores o descriptores que permiten evaluar el estado de las competencias desarrolladas.
            li.d-flex.mb-3
              .lista-ol--cuadro__vineta
                span f
              span #[b Instrumento de evaluación:] se mencionan las herramientas utilizadas para recopilar datos sobre los resultados de aprendizaje, los criterios de evaluación y las evidencias definidas en el diseño curricular.
          ul.lista-ul--color.px-lg-5
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span #[b Ambiente de aprendizaje, medio y recurso didáctico:] describe el entorno donde se llevará a cabo el aprendizaje, así como los recursos que facilitarán el proceso.
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span #[b Recursos adicionales:] incluye materiales adicionales como libros, documentos PDF, videos y otros recursos que el aprendiz puede consultar para enriquecer la actividad. Este campo busca fomentar el uso de fuentes confiables y promover un aprendizaje más profundo.
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span #[b  Glosario:] define los términos nuevos, técnicos o específicos que los aprendices encontrarán en la guía, facilitando su comprensión.









































</template>

<script>
export default {
  name: 'Tema2',
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
