<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Qué son productos cárnicos?

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='', data-aos="zoom-in")
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los productos cárnicos procesados son alimentos elaborados a base de carnes, grasas, subproductos de animales (res, pollo, cerdo) e ingredientes de origen vegetal (condimentos, especias) y aditivos autorizados.


    .titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up").mb-4
      h2 Clasificación de los productos cárnicos procesados


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .bg-color-3.p-4.mb-4
          p.mb-0(data-aos="fade-up") La calidad de los productos cárnicos está relacionada con la materia prima que conforma la consistencia de la masa, si son embutidos o no y del proceso térmico al cual es sometido el producto. El control de calidad que se realiza a estos productos incluye pruebas organolépticas, con las cuales se evalúan características como olor, sabor y textura. También se realizan pruebas fisicoquímicas y microbiológicas, que en muchos casos son efectuadas por laboratorios contratados por las empresas relacionadas con estos productos.

        p(data-aos="fade-up") Los productos cárnicos procesados se clasifican en:

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/2.png', alt='', data-aos="zoom-in")


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos procesados cocidos

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .tarjeta.bg-color-4.p-4.mb-4.h-100
          p.mb-0(data-aos="fade-up") Los productos cárnicos procesados cocidos son elaborados a base de carne, grasa y subproductos de animales de abasto. Contienen ingredientes y aditivos permitidos y se realizan mediante procesos de tratamiento térmico. En este grupo se encuentran el salchichón, mortadela, jamonada, morcilla o rellena, pasta de hígado o paté de hígado, carne de diablo y tocineta.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/3.png', alt='', data-aos="zoom-in")

      .col-lg-4
        .tarjeta.bg-color-3.p-4.mb-4.h-100
          p.mb-0(data-aos="fade-up") El control de calidad que se le realiza al queso de cabeza es verificar que tenga el color característico, el cual es rosado, sabor a condimento y que la textura sea compacta y fácil de cortar.
          figure
            img(src='@/assets/curso/tema1/4.svg', alt='', data-aos="zoom-in", style="width: 90px;").ms-auto
          


    p(data-aos="fade-up") El control de calidad que se le realiza al queso de cabeza es verificar que tenga el color característico, el cual es rosado, sabor a condimento y que la textura sea compacta y fácil de cortar.


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos cárnicos escaldados embutidos

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-up") En estos productos, la carne es molida y mezclada con ingredientes, lo que da como resultado una pasta que es embutida en tripas o tubulares por medio de una embutidora. Luego, el producto es sometido a un proceso térmico en el cual se realizan controles de temperatura interna, que debe estar entre 68 y 72 °C. En este grupo se encuentran los salchichones, salchichas y mortadelas.

        .bg-color-3.px-4.pt-4mb-4
          .row.justify-content-center.align-items-end
            .col-lg-6
              .py-4
                p.mb-4(data-aos="fade-up") En el mercado existen las siguientes salchichas:
                ul.lista-ul--color
                  li.mb-1
                    i.fas.fa-check-circle
                    | Frankfurt

                  li.mb-1
                    i.fas.fa-check-circle
                    | Suiza
                  
                  li.mb-1
                    i.fas.fa-check-circle
                    | Perro

                  li.mb-1
                    i.fas.fa-check-circle
                    | Viena
                  
                  li.mb-1
                    i.fas.fa-check-circle
                    | Celofán

                  li.mb-1
                    i.fas.fa-check-circle
                    | Ranchera

                  li.mb-1
                    i.fas.fa-check-circle
                    | Española

            .col-lg-6
              figure  
                img(src='@/assets/curso/tema1/5.svg', alt='', data-aos="zoom-in").mt-auto
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/6.png', alt='', data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
