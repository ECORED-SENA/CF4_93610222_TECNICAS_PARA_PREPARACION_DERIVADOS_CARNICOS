<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tripa o funda utilizada para embutidos



    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-up") Las tripas o fundas utilizadas en la elaboración de embutidos deben soportar altas temperaturas en los procesos de producción. Se fabrican a partir de materiales sintéticos, naturales o fibrosos.

        .bg-color-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-8
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


            .col-lg-4.d-none.d-lg-block
              figure  
                img(src='@/assets/curso/tema2/1.svg', alt='', data-aos="zoom-in", style="max-width: 295px;").my-4.my-lg-0.mx-auto.mx-lg-0
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/2.png', alt='', data-aos="zoom-in")


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4(data-aos="fade-up") Tripas naturales

    .row.mb-5
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .tarjeta.custom-image-card.bg-color-4
            img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
            .custom-image-card__text.p-4
              p.mb-3.text-center #[strong Ventajas]
              p.mb-0.text-center Favorecen la adherencia de la proteína del producto con la proteína de la tripa, lo que mejora el secado.	
              p.mb-0.text-center Ayudan a prolongar la vida útil del producto.	
        .col-lg-6.mb-4(data-aos="zoom-in")
          .tarjeta.custom-image-card.bg-color-5
            img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
            .custom-image-card__text.p-4
              p.mb-3.text-center #[strong Desventajas]
              p.mb-0.text-center Su obtención es costosa y su proceso es largo.
              p.mb-0.text-center Existen variaciones en precios, suministro, calibre y longitud.


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4(data-aos="fade-up") Tripas artificiales

    p(data-aos="fade-up").mb-5 Fabricadas con celulosa, plástico o colágeno, se utilizan principalmente en la producción de #[b salchichas].

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Ventajas" :icono="require('@/assets/curso/tema2/icon-1.svg')")
        .p-4
          .row.justify-content-center
            .col-md-7.mb-4.mb-md-0
              h4 Ventajas
              p Son permeables, lo que favorece los procesos de cocción y ahumado.
              p Ofrecen una excelente presentación del producto.
              p Protegen el producto contra microorganismos patógenos.
          
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/5.png', alt='').m-auto

      .py-4.py-md-5(titulo="Desventajas" :icono="require('@/assets/curso/tema2/icon-1.svg')")
        .p-4
          .row.justify-content-center
            .col-md-7.mb-4.mb-md-0
              h4 Desventajas
              p No son comestibles, por lo que deben ser retiradas antes del consumo.
              p Pueden generar merma durante la cocción.
          
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/6.png', alt='').m-auto


    .titulo-tres.mb-4(data-aos="flip-up").mb-5
      h4(data-aos="fade-up") Tripas fibrosas

    p(data-aos="fade-up").mb-5 Elaboradas con papel o celulosa, permiten el intercambio de humedad y vapor de humo. Se usan para embutidos como mortadelas, salamis y jamones. 

    .row.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .tarjeta.custom-image-card.bg-color-4
          img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
          .custom-image-card__text.p-4
            p.mb-3.text-center #[strong Ventajas]
            p.mb-0.text-center Son resistentes mecánicamente.
            p.mb-0.text-center Se adhieren bien al producto y permiten la formación de una piel en el embutido.
            p.mb-0.text-center La permeabilidad de la tripa se puede controlar.
      .col-lg-6.mb-4(data-aos="zoom-in")
        .tarjeta.custom-image-card.bg-color-5
          img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
          .custom-image-card__text.p-4
            p.mb-3.text-center #[strong Desventajas]
            p.mb-0.text-center Son costosas.
            p.mb-0.text-center Se rompen con facilidad durante la cocción.
            p.mb-0.text-center El producto puede sufrir mermas.

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
