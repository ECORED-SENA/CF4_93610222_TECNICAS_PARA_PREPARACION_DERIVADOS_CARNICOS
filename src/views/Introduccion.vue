<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width-2.bg-fondo-1
      .px-5.pb-5

        .row.justify-content-center.align-items-start
          .col-lg-9(data-aos="fade-right")
            p.mb-4 Este componente formativo aborda la clasificación de los productos cárnicos procesados según la normatividad vigente en Colombia, detallando los distintos tipos existentes y sus características. Además, se presentan los empaques utilizados en la elaboración de embutidos, explicando sus funciones y diferencias en términos de material y aplicación en la industria cárnica.

            .bg-color-1.mb-4(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='', data-aos="zoom-in")
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Asimismo, se describen los procesos de producción de diferentes productos cárnicos, incluyendo embutidos, enlatados y productos especiales. Cada proceso contempla desde la selección de materias primas hasta los tratamientos térmicos y de conservación que garantizan la calidad y seguridad del producto final.

            p(data-aos="fade-right") El componente formativo permite comprender la importancia del control de calidad en la elaboración de productos cárnicos, abarcando aspectos sensoriales, fisicoquímicos y microbiológicos. Esto es fundamental para cumplir con los estándares sanitarios y ofrecer al consumidor productos seguros y de alta calidad.

          .col-lg-3(data-aos="fade-left")
            figure
              img(src="@/assets/curso/intro/1.png", alt="").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
