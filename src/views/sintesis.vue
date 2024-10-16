<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En el marco de los fundamentos pedagógicos, el proceso de enseñanza y aprendizaje se basa en una serie de elementos clave que permiten guiar tanto a educadores como a estudiantes hacia una formación integral. Estos elementos están compuestos por estrategias didácticas, políticas educativas, métodos de enseñanza y evaluación, así como programas que fortalecen el desarrollo del aprendizaje y la formación profesional.
    .row.justify-content-center
      .col-sm-12.col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis detalla cuatro pilares principales. El primero es la formación para el trabajo. El segundo se centra en los métodos y recursos didácticos, destacando las guías de aprendizaje como una herramienta esencial. El tercero cubre el currículo y evaluación, en el que se incluyen la estructura curricular, programas de emprendimiento y las orientaciones sobre evaluaciones. Por último, la didáctica se presenta como una disciplina clave dentro del proceso de enseñanza y aprendizaje.")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
