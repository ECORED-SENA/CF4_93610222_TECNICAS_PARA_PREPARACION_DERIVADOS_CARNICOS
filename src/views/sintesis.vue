<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center
      .col-lg-10.mb-5.tarjeta.bg-color-sintesis.p-4.p-lg-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de productos cárnicos procesados, clasificados en cocidos, crudos, enlatados y especiales. Los embutidos incluyen tripas naturales, artificiales y fibrosas. La elaboración abarca selección, molienda, mezcla, embutido, cocción y almacenamiento. El control de calidad evalúa propiedades organolépticas, fisicoquímicas y microbiológicas.")
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
