<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tripa o funda utilizada para embutidos



    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-up") Las tripas o fundas utilizadas en la elaboración de embutidos deben soportar altas temperaturas en los procesos de producción. Se fabrican a partir de materiales sintéticos, naturales o fibrosos.

        .bg-color-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              .py-4.ps-4
                p.mb-4(data-aos="fade-up") Las funciones de las tripas en la elaboración de embutidos son:
                ul.lista-ul--color
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Dar estabilidad y forma al embutido.
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Impedir la entrada de sustancias extrañas y la salida del producto.
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Evitar la contaminación al impedir la entrada de insectos y bacterias.


            .col-lg-6
              figure  
                img(src='@/assets/curso/tema2/1.svg', alt='', data-aos="zoom-in", style="max-width: 295px;").m-auto
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/2.png', alt='', data-aos="zoom-in")
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
