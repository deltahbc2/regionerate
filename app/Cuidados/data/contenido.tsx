import { Slide, ModalContent, ConsiderationCard, CareCard } from '../types/tipos';

export const slides: Slide[] = [
  { src: '/cuidados/plantar-arbol.jpg', alt: 'Plantar árbol' },
  { src: '/cuidados/llenar-hoyo.jpg', alt: 'Llenar hoyo' },
  { src: '/cuidados/regar-carrusel.jpg', alt: 'Regar árbol' },
];

export const considerationCards: ConsiderationCard[] = [
  {
    id: 'arbol',
    title: 'El árbol',
    description: 'Cada centímetro de este coloso tiene un propósito vital, una misión crítica en una compleja sinfonía de supervivencia. Elevándose hacia el cielo, una intrincada arquitectura se despliega, extensiones estratégicas diseñadas para un propósito singular: posicionar perfectamente incontables paneles verdes. Estas no son simples decoraciones; son verdaderas plantas de energía solar.',
    image: '/cuidados/arbol.jpg',
  },
  {
    id: 'herramientas',
    title: 'Herramientas necesarias',
    description: 'Antes de ensuciarnos las manos, debemos reunir a nuestros aliados: un conjunto de instrumentos diseñados no solo para facilitar la tarea física, sino para garantizar la supervivencia del nuevo huésped. Plantar un árbol es un acto de fe en el futuro, pero para que esa fe rinda frutos, la buena voluntad no es suficiente.',
    image: '/cuidados/herramientas.jpg',
    reverse: true,
  },
  {
    id: 'pozo',
    title: 'El pozo',
    description: 'La excavación inicial es, quizás, el paso más incomprendido y crítico de todo el proceso de plantación. Un error de cálculo aquí, por pequeño que parezca en centímetros, puede significar la diferencia entre un árbol que lucha por sobrevivir y uno que prospera con vigor. El secreto no está en qué tan profundo puedes llegar, sino en qué tan lejos puedes preparar el terreno.',
    image: '/cuidados/pozo.jpg',
  },
  {
    id: 'riego',
    title: 'El riego',
    description: 'Abrir la llave y dejar correr el agua por unos minutos parece la respuesta obvia, pero hidratar un árbol es un acto de precisión, no de volumen improvisado. Un riego superficial es un espejismo que debilita los cimientos invisibles del árbol. No se trata de cuántas veces mojas la tierra, sino de cómo logras que el líquido vital llegue a donde realmente importa.',
    image: '/cuidados/riego.jpg',
    reverse: true,
  },
];

export const careCards: CareCard[] = [
  {
    id: 'partes',
    title: 'Partes de un árbol',
    subtitle: 'Conoce cada sección',
    image: '/cuidados/partes-arbol.jpg',
    modal: {
      title: 'Partes de un árbol',
      image: '/cuidados/partes-arbol-ventana.jpg',
      body: (
        <>
          <p><strong>Raíces:</strong> Son la parte subterránea del árbol que cumplen la función de anclarlo al suelo y absorber agua y nutrientes.</p>
          <p><strong>Tronco:</strong> Es la parte leñosa principal que sostiene al árbol.</p>
          <p><strong>Cuello:</strong> Corresponde a la parte inferior del tronco, en el punto de contacto con las raíces.</p>
          <p><strong>Ramas:</strong> Se trata de una estructura de madera conectada al tronco central.</p>
          <p><strong>Hojas:</strong> Realizan la fotosíntesis, convirtiendo luz en energía vital.</p>
          <p><strong>Copa:</strong> Es la parte superior del árbol que incluye las ramas y hojas.</p>
        </>
      ),
    },
  },
  {
    id: 'herramientas',
    title: 'Herramientas y materiales',
    subtitle: 'Lo que necesitas',
    image: '/cuidados/herramientas-materiales.png',
    modal: {
      title: 'Herramientas y materiales',
      image: '/cuidados/herramientas-ventana.jpg',
      body: (
        <>
          <p><strong>° Árbol nativo</strong></p>
          <p><strong>° Tijeras o navaja</strong></p>
          <p><strong>° Palas y picos</strong></p>
          <p><strong>° Acolchonado</strong></p>
          <p><strong>¿Qué es el cepellón?</strong> Conjunto de raíces del árbol que está adherido a una porción de tierra o sustrato.</p>
          <p><strong>¿Qué es el acolchonado?</strong> Capa de material reciclado (astillas de madera, hojas secas, etc) que se coloca sobre la superficie del suelo para protegerlo y mejorarlo.</p>
          <p><strong>¿Qué es la composta?</strong> Es un abono natural de alta calidad que se obtiene de la descomposición de residuos orgánicos.</p>
        </>
      ),
    },
  },
  {
    id: 'pozo',
    title: '¿Qué tan grande el pozo?',
    subtitle: 'Medidas ideales',
    image: '/cuidados/pozo-grande.jpg',
    modal: {
      title: '¿Qué tan grande debe ser la cepa o pozo?',
      image: '/cuidados/pozo-ventana.jpg',
      body: <img src="/cuidados/tabla.png" alt="Tabla de medidas" className="w-full max-w-[500px] h-auto" />,
    },
  },
  {
    id: 'riego',
    title: '¿Cómo regar tu árbol?',
    subtitle: 'Técnicas efectivas',
    image: '/cuidados/regar.jpg',
    modal: {
      title: '¿Cómo debes regar tu árbol?',
      image: '/cuidados/regar-ventana.jpg',
      body: (
        <>
          <p>Al plantar tu árbol, deja un <strong>encarcador de 10 cm de profundidad</strong> alrededor del tronco para que el <strong>agua se acumule</strong> y el árbol se mantenga <strong>hidratado</strong>.</p>
          <p>Durante los <strong>primeros 3 años</strong> de vida, es importante asegurarse de proporcionar el <strong>riego adecuado</strong>.</p>
          <p><strong>60 L (3 garrafones)</strong> por árbol, <strong>una vez por semana</strong>.</p>
          <p><strong>° Amanecer (6-9 a.m.)</strong></p>
          <p><strong>° Atardecer (6-8 p.m.)</strong></p>
          <p><strong>° Evitar regar el pasto</strong></p>
          <p><strong>° Regar el arbolado</strong></p>
          <p><strong>¿Qué debo hacer en época de sequía?</strong> Es fundamental cuidar el agua. Para asegurar que podamos seguir disfrutando de los beneficios del arbolado urbano, sólo se permite el riego de árboles.</p>
        </>
      ),
    },
  },
  {
    id: 'cuidar',
    title: '¿Cómo cuidar tu árbol?',
    subtitle: 'Mantenimiento esencial',
    image: '/cuidados/cuidar.jpg',
    modal: {
      title: '¿Cómo cuidar tu árbol?',
      image: '/cuidados/cuidados-ventana.jpg',
      body: (
        <>
          <p><strong>Acolchonado:</strong> Capa de material vegetal reciclado (astillas de madera, hojas secas, corteza, etc) que se coloca sobre la superficie del suelo para protegerlo del sol y la erosión para mejorarlo.</p>
          <p><strong>Cuello del árbol:</strong> Mantener esta zona en buen estado es vital para asegurar un crecimiento saludable y prevenir enfermedades. Los principales daños son a causa de las desbrozadoras; para protegerlo utiliza un collarín de PVC abierto de la mitad.</p>
          <p><strong>Encharcador:</strong> Es una técnica utilizada para concentrar agua en la base de un árbol, formando un pequeño charco alrededor del tronco. Esto permite que el agua se infiltre lentamente en el suelo.</p>
        </>
      ),
    },
  },
  {
    id: 'pasos',
    title: 'Plantar en 8 pasos',
    subtitle: 'Guía paso a paso',
    image: '/cuidados/plantar-pasos.jpg',
    modal: {
      title: 'Plantar tu árbol en 8 pasos',
      image: '/cuidados/pasos.jpg',
      body: (
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Excave un pozo:</strong> De 40 a 60 cm, más ancho que el cepellón y tan profundo como sus raíces. Separe la tierra superficial.</li>
          <li><strong>Coloque tierra:</strong> Superficialmente al fondo del pozo; si es posible, mézclela con abono orgánico o composta.</li>
          <li><strong>Riegue el pozo:</strong> Un día antes de la plantación. Esto favorece la humedad inicial del suelo.</li>
          <li><strong>Retire la bolsa de plástico:</strong> En la que viene el árbol con una navaja o tijeras.</li>
          <li><strong>Coloque el árbol al centro del pozo.</strong></li>
          <li><strong>Rellene el pozo con tierra:</strong> Compacte suavemente. El cuello debe quedar 10 cm bajo el nivel del suelo para retener agua.</li>
          <li><strong>Opcional:</strong> Aplique una capa de acolchado vegetal de 7 a 10 cm para conservar la humedad del suelo.</li>
          <li><strong>Riegue de inmediato:</strong> Riegue una vez por semana por inundación del encharcador.</li>
        </ol>
      ),
    },
  },
];