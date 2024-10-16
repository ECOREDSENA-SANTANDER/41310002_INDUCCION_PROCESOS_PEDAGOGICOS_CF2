<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 ¿Cuál es la labor de un Educador?
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/img1.png')
      .col-sm-12.col-lg-7
        p.mb-4 Este texto explora los diferentes términos que se utilizan para referirse a:
        .row.mb-
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img2.svg')
          .col-sm-12.col-lg-10
            .row.justify-content-start.mb-0
              .col-sm-12.col-lg-12
                ul.lista-ul--color.d-flex.flex-row.justify-content-between
                  li.d-flex
                    i.fas.fa-chalkboard-teacher
                    span Un maestro.
                  li.d-flex
                    i.fas.fa-chalkboard-teacher
                    span Un profesor.
                  li.d-flex
                    i.fas.fa-chalkboard-teacher
                    span Un docente.
                ul.lista-ul--color.d-flex.flex-row.justify-content-around
                  li.d-flex
                    i.fas.fa-chalkboard-teacher
                    span Un instructor.
                  li.d-flex
                    i.fas.fa-chalkboard-teacher
                    span Un tutor.
        p.mb-0 Destacando las diferencias históricas y conceptuales entre ellos. Aunque en teoría estos términos pueden emplearse de manera intercambiable, cada uno tiene un origen sociohistórico que refleja distintas características y enfoques educativos. Algunos expertos sostienen que los cambios en la denominación del educador simplemente reflejan la evolución del proceso educativo, mientras que otros consideran que estos cambios han causado una crisis de identidad en la figura del educador.
    TabsC.color-acento-contenido.mb-5
      .p-4(titulo="Maestro")
        .row.justify-content-center.mb-0.p-4
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img3.png')
          .col-sm-12.col-lg-7
            h4 Maestro
            p.mb-0 Proviene de la antigüedad griega, un contexto donde los grandes pensadores, como Sócrates, desempeñaban un papel central en la educación. El maestro no solo transmitía conocimiento, sino que encarnaba la idea de “educar con el ejemplo”, modelando virtudes y sabiduría en su vida diaria. A través de la mayéutica, ayudaba a los estudiantes a descubrir por sí mismos el conocimiento latente en su interior, promoviendo la reflexión filosófica y el autoconocimiento, lo que hacía de la educación un proceso transformador tanto para el maestro como para el aprendiz.

      .p-4(titulo="Profesor")
        .row.justify-content-center.mb-0.p-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img4.png')
          .col-sm-12.col-lg-7
            h4 Profesor
            p.mb-0 Surge en la Edad Media, un periodo marcado por el crecimiento de las universidades y la formalización del conocimiento. A diferencia del maestro griego, el profesor se enfocaba en transmitir saberes a grupos de estudiantes, generalmente jóvenes, en un entorno más formal y estructurado, a menudo dentro de instituciones religiosas o académicas. Este rol evoluciona con el tiempo, pasando de impartir un conocimiento predominantemente religioso a uno más filosófico y científico, especialmente durante el Renacimiento y la Ilustración.

      .p-4(titulo="Docente")
        .row.justify-content-center.mb-0.p-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img5.png')
          .col-sm-12.col-lg-7
            h4 Docente
            p.mb-0 Emerge durante la Revolución Industrial, cuando la enseñanza se convierte en una profesión estructurada. Con la creación de facultades de educación y la necesidad de un sistema educativo organizado, el docente se profesionaliza y recibe formación en áreas como pedagogía, epistemología y ciencias de la educación. Su rol no se limita a la transmisión de conocimientos, sino que incluye la formación de ciudadanos capaces de operar en un sistema económico en expansión. La enseñanza pasa a ser vista como una carrera profesional, muchas veces impulsada por vocación, pero también como una necesidad social.

      .p-4(titulo="Instructor")
        .row.justify-content-center.mb-0.p-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img6.png')
          .col-sm-12.col-lg-7
            h4 Instructor
            p.mb-0 Nace en respuesta a la creciente demanda de mano de obra calificada durante la industrialización. En este contexto, su función es formar técnicamente a los ciudadanos para los nuevos trabajos surgidos en fábricas y entornos industriales. El instructor se diferencia de otros educadores por su énfasis en la capacitación práctica y técnica, trabajando en estrecha colaboración con el sector productivo. Su enseñanza está orientada a competencias específicas, necesarias para cumplir con los requisitos del mercado laboral y contribuir al desarrollo industrial.

      .p-4(titulo="Tutor")
        .row.justify-content-center.mb-0.p-4
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img7.png')
          .col-sm-12.col-lg-7
            h4 Tutor
            p.mb-0 Una figura más reciente en la educación aparece como respuesta a las transformaciones generadas por la globalización y las tecnologías de la información y la comunicación (TIC). El tutor no solo enseña, sino que guía y acompaña al aprendiz en un proceso de aprendizaje autónomo, a menudo en entornos virtuales o mediados por la tecnología. En lugar de centrarse exclusivamente en la transmisión de contenidos, el tutor promueve la autorregulación y la capacidad crítica del estudiante, facilitando el aprendizaje a lo largo de la vida en un mundo cada vez más interconectado y dinámico.

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-6
        .bgimg1
          h5 Para reflexionar: 
          p.mb-0 ¿Usted qué tipo de educador se considera: maestro, profesor, docente, instructor o tutor?     
    .bgimg4.mb-3
      h3.pt-3 La crisis de la profesión docente, o “malestar docente” 
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.bg1
        img.img-bloque.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img8.png', alt='')
        
      .bloque-texto-g__texto.p-4
        p.mb-0 Este ha sido un tema recurrente en las últimas décadas y causa malestar, se manifiesta en sentimientos de impotencia, tensión y dificultad entre los educadores, atribuidos en gran parte a estudiantes desmotivados, malos resultados académicos y una formación docente deficiente. Aunque esta situación no es universal, es una realidad común en muchos países, particularmente en Latinoamérica, con algunas excepciones como Finlandia. Los docentes enfrentan desafíos que los llevan a cuestionar su efectividad y a sentir un profundo desgaste profesional.
    p.mb-5 No obstante, existen esfuerzos para revertir esta crisis, pues en varios países, incluyendo Colombia, los gobiernos han comenzado a implementar políticas para revalorizar el papel del maestro, considerándolo un actor clave en la sociedad. Sin embargo, el cambio también depende de los propios docentes, quienes deben asumir un rol activo en su desarrollo profesional, en donde deben ir actualizándose constantemente sobre sus prácticas y potencializar el compromiso con la mejora continua, ya que esto es fundamental para superar el malestar docente y restaurar la dignidad y relevancia de la profesión en la sociedad.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  ¿Por qué ser un docente? 
    p.mb-5 El pedagogo francés Philippe Meirieu destaca la fuerza interior que impulsa a quienes realmente desean ser maestros:
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/img9.png')
      .col-sm-12.col-lg-7
        .row.mb-3
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img10.svg')
          .col-sm-12.col-lg-10
            p.mb-1.fw-bold La vocación
            p.mb-0 Un verdadero maestro se forma a partir de esta vocación, un interés innato por educar y formar mejores seres humanos que puedan contribuir a construir una sociedad más justa y alcanzar su propia felicidad.
        .br1
          p.mb-0 El maestro no necesita una razón más poderosa para ejercer su profesión que el amor por su país y por el mundo, por ello, no se deja abatir por las dificultades que inevitablemente enfrenta, sino que trabaja con la convicción de que está moldeando un mejor futuro. Su recompensa es sencilla pero profunda: una sonrisa de agradecimiento, una vida transformada o un estudiante que logra sus sueños. Estas son las verdaderas razones para ser maestro.

    .bloque-texto-f.color-acento-botones.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
        i.fas.fa-quote-left.color-primario
        i.fas.fa-quote-right.color-primario
      .bloque-texto-f__texto.text-center.mb-4
        .d-block.mb-4
          img.w-10(src='@/assets/curso/temas/tema1/img7.svg')
        .d-block
          p.mb-0 Porque enseñar no es sólo poner en marcha un conjunto de competencias separadas las unas de las otras: escoger un ejercicio y hacer que reine el orden, explicar un texto y corregir las versiones del mismo… Es hacer todo eso, claro, pero con “algo más”, “algo” que los alumnos reconocen, además, bastante bien; “algo” que no se puede reducir al carisma individual y, mucho menos, a una capacidad relacional. “Algo” que remite más bien a una especie de “fuerza interior”, una “fuerza” que expresa una coherencia y es testimonio de un proyecto. Una “fuerza” de la que emana el sentimiento de que el hombre o la mujer que enseñan están aquí en su lugar. Y que ejercen una profesión que tiene sentido para ellos.
      .bloque-texto-f__autor.mb-3
        h5.mb-3 Meirieu, 2004, p. 13
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-10
        .bgimg1
          h5 Para reflexionar: 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span ¿Cuál es el motor que impulsa su labor como educador?
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span Desde su experiencia, ¿por qué cree que los futuros maestros obtienen los resultados más bajos en las pruebas Saber Pro?
            li.d-flex
              i.fas.fa-chalkboard-teacher
              span ¿Considera que esto podría estar relacionado con el llamado malestar docente?
    p.mb-3 Después de reflexionar desde su rol como docente, encontrará a continuación siete tipos de Docentes. 
    p.mb-5 Reconózcalos y reflexione sobre cuál se asemeja más a su estilo docente.
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Creativo: pensamiento innovador, recursivo y divergente")
            .col-sm-12.col-lg-12
              p.mb-0 Cuando un Docente opta por ser creativo, transforma su enfoque y considera cómo cada clase puede ofrecer a los estudiantes un recorrido único, entretenido y significativo. Al planificar, explora diversos caminos, herramientas y recursos, desde actividades simples como pintar, jugar o actuar, hasta el uso de tecnologías más avanzadas. Si no domina estas herramientas, busca aprenderlas con determinación, además, es sensible al ambiente en clase; si detecta que una estrategia no funciona, ajusta su enfoque con flexibilidad, profesionalismo y confianza.

          .row(numero="2" titulo="Intelectual: un libro abierto a mundos posibles ")
            .col-sm-12.col-lg-12
              p.mb-0 Uno de los mayores desafíos para estudiantes y profesores en Colombia es la baja competencia lectora y escritora; un Docente, independientemente de su especialidad, debe ser intelectualmente integral, con conocimientos generales y el hábito de la lectura y escritura en sus áreas de interés. A través de la literatura, el cine y la escritura, se accede a múltiples realidades y se mejoran habilidades críticas, argumentativas y ortográficas. Estas competencias permiten que los docentes sean reconocidos como profesionales reflexivos y activos, capaces de repensar y reformar su rol académico, como señala Henry Giroux (1990).

          .row(numero="3" titulo="Artista: un soñador al borde de la utopía")
            .col-sm-12.col-lg-12
              p.mb-0 Un Docente es un soñador al que se le exige inspirar y alimentar los sueños de sus estudiantes, promoviendo la transformación social y personal, y evitando el conformismo y la desesperanza. La educación es una utopía, un deseo por un mundo mejor, que se conecta con valores como el respeto, la justicia, la tolerancia y la dignidad humana; aunque la utopía parece inalcanzable, un profesor, la convierte en una posibilidad dentro de la vida y convivencia humana, transformando lo que aún no es, en algo que podría llegar a ser.

          .row(numero="4" titulo="Investigador: en búsqueda de la transformación social")
            .col-sm-12.col-lg-12
              p.mb-0 El Docente que busca la transformación social debe ser un investigador y académico activo y reflexivo, capaz de generar propuestas e investigaciones pedagógicas y sociales que impulsen cambios constantes, convirtiendo a la escuela en un espacio de producción intelectual; por tanto la escuela debe ser un lugar donde se fomente la investigación, el análisis y la creación de conocimientos, tanto en el ámbito educativo como científico, consolidándose como un eje de transformación social. Aunque la investigación científica requiere rigurosidad y seriedad, la observación del entorno puede ser el primer paso para identificar problemas relevantes y buscar soluciones que contribuyan al mejoramiento social.

          .row(numero="5" titulo="Crítico-Reflexivo: en praxis constante de su diario que hacer")
            .col-sm-12.col-lg-12
              p.mb-0 El Docente debe reflexionar constantemente sobre su práctica en el aula, considerando los sucesos, avances, desafíos y cambios que enfrenta diariamente. Esta reflexión fortalece su compromiso con el aprendizaje y el conocimiento que construye junto a los estudiantes, ya que la labor docente no debe limitarse a aspectos metodológicos, sino que debe orientar procesos más significativos y dinámicos. Para una verdadera praxis, el docente debe adoptar una postura crítica, evitando la resistencia al cambio e implementándolo cuando sea necesario, siempre generando argumentos sólidos y analizando las situaciones desde una perspectiva reflexiva.

          .row(numero="6" titulo="Responsable socialmente: un actor social formador de seres democráticos y libres")
            .col-sm-12.col-lg-12
              p.mb-0 La naturaleza del docente se refleja en un conjunto de cualidades que destacan su integralidad, aunque no todos los docentes cumplen con todas ellas; el objetivo es que, eventualmente, lo hagan para desempeñar su rol como actores sociales al servicio de la democracia y la libertad. Hoy en día, el profesor ha pasado de ser un simple transmisor de conocimientos a un formador de ciudadanos críticos, con un alto sentido de alteridad, capaces de tomar decisiones que privilegien la democracia, la libertad y la búsqueda de sus sueños. Como señala Nussbaum (2010), los métodos educativos convencionales promueven la pasividad en los estudiantes, lo que debilita sus facultades críticas y afecta negativamente la democracia, que requiere ciudadanos activos y vigilantes.
      .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema3/img11.png')












</template>

<script>
export default {
  name: 'Tema3',
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
