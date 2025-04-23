<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Procesamiento y clasificación de productos cárnicos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar sobre la clasificación, características, procesos de elaboración y control de calidad de los productos cárnicos procesados.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes productos pertenece a la categoría de productos procesados cocidos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salchichón.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Salami.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Chorizo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Hamburguesa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es una característica de los productos crudos frescos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son sometidos a un tratamiento térmico antes de su venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deben conservarse en refrigeración o congelación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No requieren cocción antes de su consumo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son elaborados únicamente con carne de res.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de tripa permite la formación de piel en el embutido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fibrosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Artificial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Celulósica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes productos pertenece a la categoría de productos enlatados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Albóndigas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Longaniza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carne curada enlatada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lomo ahumado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué función principal cumple la tripa en los embutidos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dar estabilidad y forma al producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar el tiempo de cocción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la humedad de la carne.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el contenido de grasa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué se debe verificar en el control de calidad de un producto cárnico cocido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color, textura y sabor característicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tiempo de maduración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porcentaje de humedad antes de embutido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de aditivos químicos utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes productos pertenece a la categoría de productos cárnicos especiales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Chorizo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hamburguesa de res.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salchicha Frankfurt.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pavo relleno.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tratamiento reciben los productos procesados enlatados para garantizar su conservación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Esterilización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Secado al aire.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fermentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué característica tienen los productos crudos madurados?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Experimentan una reducción del pH y pérdida de humedad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se cocinan antes de su comercialización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se elaboran únicamente con carne de cerdo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requieren almacenamiento especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes afirmaciones es correcta sobre el proceso de elaboración de la morcilla?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incluye sangre de cerdo, arroz y vísceras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'No contiene ningún tipo de grasa animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se embute únicamente en tripa artificial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere tratamiento térmico después del embutido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los productos cárnicos crudos frescos no necesitan refrigeración, ya que la sal y los nitritos en su composición son suficientes para conservarlos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La tripa artificial está hecha de celulosa, plástico o colágeno y no es comestible.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'La hamburguesa de res es un producto cárnico crudo madurado.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los embutidos pueden utilizar tripas naturales, artificiales o fibrosas, dependiendo del tipo de producto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los productos cárnicos enlatados requieren refrigeración constante para evitar su deterioro.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
