<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
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
          img(src='@/assets/curso/tema1/3.png', alt='', data-aos="zoom-in").my-4.my-lg-0

      .col-lg-4
        .tarjeta.bg-color-3.p-4.mb-4.h-100
          p.mb-0(data-aos="fade-up") El control de calidad que se le realiza al queso de cabeza es verificar que tenga el color característico, el cual es rosado, sabor a condimento y que la textura sea compacta y fácil de cortar.
          figure
            img(src='@/assets/curso/tema1/4.svg', alt='', data-aos="zoom-in", style="width: 90px;").ms-auto
          


    p(data-aos="fade-up").mb-5 El control de calidad que se le realiza al queso de cabeza es verificar que tenga el color característico, el cual es rosado, sabor a condimento y que la textura sea compacta y fácil de cortar.


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos cárnicos escaldados embutidos

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade-up") En estos productos, la carne es molida y mezclada con ingredientes, lo que da como resultado una pasta que es embutida en tripas o tubulares por medio de una embutidora. Luego, el producto es sometido a un proceso térmico en el cual se realizan controles de temperatura interna, que debe estar entre 68 y 72 °C. En este grupo se encuentran los salchichones, salchichas y mortadelas.

        .bg-color-3.px-4.mb-4
          .row.justify-content-center.align-items-end
            .col-lg-6
              .py-4
                p.mb-4(data-aos="fade-up") En el mercado existen las siguientes salchichas:
                ul.lista-ul--color
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Frankfurt

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Suiza
                  
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Perro

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Viena
                  
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Celofán

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Ranchera

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Española

            .col-lg-6
              figure  
                img(src='@/assets/curso/tema1/5.svg', alt='', data-aos="zoom-in").mt-auto
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/6.png', alt='', data-aos="zoom-in")


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos procesados crudos

    p(data-aos="fade-up").mb-5 Se denominan productos procesados crudos a aquellos alimentos que, en su elaboración, han sido sometidos a tratamiento térmico, ahumado y pueden haber sido embutidos o no. Los productos procesados crudos se clasifican en:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg-color-4.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/7.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[strong Productos crudos embutidos]

      .col-lg-6
        .bg-color-4.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/8.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[strong Productos procesados crudos madurados]


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos crudos frescos


    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/c7y9-kClD2Q?si=kA60v6fy-saPqele" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos crudos madurados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-up").mb-4 Son productos cárnicos que, durante su elaboración, experimentan un proceso de maduración en el que se producen cambios bioquímicos y microbiológicos controlados. Este proceso implica la reducción del pH y la pérdida de humedad, lo que mejora su textura, sabor y vida útil. Ejemplos incluyen salami, jamón serrano y tocinetas curadas. En esta clasificación se incluyen productos como:

        .bg-color-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              .p-4
                ul.lista-ul--color
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Tocinetas

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Jamones tipo serrano

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Salami

            .col-lg-6
              figure  
                img(src='@/assets/curso/tema1/9.svg', alt='', data-aos="zoom-in").mt-auto

        p(data-aos="fade-up").mb-4 El proceso de fabricación comprende una mezcla inicial de ingredientes, ya sea mediante procesamiento de carnes molidas o mezclando ingredientes no cárnicos entre sí, para luego ser aplicados a cortes enteros de carne.

        p(data-aos="fade-up").mb-4 La segunda etapa consiste en el desarrollo de fenómenos bioquímicos y microbiológicos conocidos como maduración, la cual implica en el producto dos tipos de cambios:

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/10.png', alt='', data-aos="zoom-in")


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .bg-color-4.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/11.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[strong Descenso del pH]

      .col-lg-6
        .bg-color-4.px-4.py-3.mb-4
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/12.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
            .col
              p.mb-0(data-aos="fade-up") #[strong Pérdida de humedad]


    .bg-color-5.mb-5.p-4
      p(data-aos="fade-up").mb-0 Muchos de estos productos pueden tener una vida útil de aproximadamente 18 meses sin refrigeración, y su calidad está directamente ligada a la materia prima utilizada.


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos enlatados

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/13.png', alt='', data-aos="zoom-in")

      .col-lg-8
        p(data-aos="fade-up").mb-4 Los productos enlatados están compuestos principalmente por carne y otros ingredientes con aditivos permitidos. Son empacados herméticamente en recipientes de lata y sometidos a un proceso de esterilización rigurosa. El material de los envases debe ser aprobado por el #[strong Ministerio de Salud]. Según el #[strong Decreto 2162 de 1983], los productos procesados enlatados se clasifican en:

        .bg-color-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-6
              .p-4
                ul.lista-ul--color
                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Albóndigas

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Carne curada enlatada

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Carne de diablo

                  li.mb-1
                    i.fa-regular.fa-circle-right
                    | Salchicha enlatada
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/14.svg', alt='', data-aos="zoom-in").mt-auto


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4(data-aos="fade-up") Productos cárnicos especiales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p(data-aos="fade-up").mb-4 Estos productos son elaborados con materias primas de alta calidad y con técnicas especiales. Algunos ejemplos incluyen:

        .row.justify-content-center.align-items-center
          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/15.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Chuleta ahumada

          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/16.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Lomo ahumado

          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/17.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Muchacho relleno


        .row.justify-content-center.align-items-center
          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/18.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Sobrebarriga rellena

          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/19.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Tocineta

          .col-lg-4
            .bg-color-4.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/20.svg', alt='', data-aos="zoom-in", style="width: 90px;").mx-auto.mx-lg-0
                .col
                  p.mb-0(data-aos="fade-up") Pavo relleno

        p(data-aos="fade-up").mb-0 El control de calidad en estos productos se realiza mediante la evaluación de sus características organolépticas, #[strong químicas] y #[strong microbiológicas].
      .col-lg-3
        figure
          img(src='@/assets/curso/tema1/21.png', alt='', data-aos="zoom-in").mt-4.mt-lg-0

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
