<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Ruta activa de aprendizaje y evaluación',
      titulo: 'Falso o verdadero',
      introduccion:
        'Evaluar la comprensión de los fundamentos pedagógicos, estrategias de aprendizaje y enfoques evaluativos, con el fin de fortalecer el conocimiento integral de los estudiantes.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'El aprendizaje autónomo está relacionado con los estilos y estrategias de enseñanza de los instructores.',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Está relacionado con los estilos y estrategias de aprendizaje de los estudiantes.',
        },
        {
          id: 2,
          texto:
            'El aprendizaje significativo promueve la integración de facultades cognitivas, emocionales y físicas del educando.',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La formación para el trabajo en el SENA está orientada únicamente a la inserción laboral en el sector productivo.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. También fomenta la creación de emprendimientos y proyectos sostenibles.',
        },
        {
          id: 4,
          texto:
            'El programa de emprendimiento del SENA incluye el acceso a financiamiento mediante el Fondo Emprender.',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La didáctica se refiere exclusivamente a juegos didácticos que se utilizan en el aula.',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. La didáctica abarca una disciplina más amplia relacionada con los métodos y técnicas aplicados en el aula.',
        },
        {
          id: 6,
          texto:
            'El currículum no se limita a un plan de estudios, sino que abarca un marco general que guía el proceso formativo.',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La evaluación en el SENA es una herramienta estática que se aplica solo al final del proceso formativo.',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. Es un proceso continuo y reflexivo que se da durante todo el ciclo formativo.',
        },
        {
          id: 8,
          texto:
            'El aprendizaje colaborativo en el SENA promueve la cooperación y el razonamiento crítico.',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La heteroevaluación es una forma en que los estudiantes evalúan su propio desempeño.',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. La heteroevaluación es cuando el docente evalúa a los estudiantes.',
        },
        {
          id: 10,
          texto:
            'La resolución de problemas en el SENA se aborda mediante técnicas activas como el estudio de caso y el aprendizaje basado en problemas (ABP).',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Has demostrado un gran dominio de los fundamentos pedagógicos y evaluativos. ¡Sigue fortaleciendo tu aprendizaje!',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
