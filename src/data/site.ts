/**
 * ✏️  TODO EL CONTENIDO DE LA WEB VIVE EN ESTE ARCHIVO
 *
 * Para personalizar la página no hace falta tocar ningún componente:
 * cambia los textos de abajo y guarda. Todo lo que aquí aparece como
 * "Nombre Apellido", "tudominio.com", teléfonos, etc. es contenido de EJEMPLO.
 *
 * Fotos: guarda dos imágenes en `src/assets/` con estos nombres exactos
 * (jpg, png o webp) y aparecerán solas:
 *   - perfil.jpg    → foto de la portada (vertical, mejor 4:5)
 *   - sobre-mi.jpg  → foto de la sección "Sobre mí" (vertical, mejor 4:5)
 *
 * Si dejas un dato de contacto vacío ('') ese canal se oculta automáticamente.
 */

export const site = {
  name: 'Nombre Apellido',
  firstName: 'Nombre',
  initials: 'NA',
  role: 'Pedagoga',

  seo: {
    title: 'Nombre Apellido | Pedagoga y orientación educativa',
    description:
      'Pedagoga que acompaña a familias, estudiantes y docentes con orientación educativa, apoyo al aprendizaje y asesoramiento cercano y práctico.',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Cómo trabajo', href: '#como-trabajo' },
    { label: 'Preguntas', href: '#preguntas' },
  ],

  hero: {
    title: 'Cada persona aprende a su manera. Te ayudo a encontrar la tuya.',
    text: 'Soy pedagoga y acompaño a niños, jóvenes, familias y docentes con una orientación cercana, clara y basada en lo que de verdad funciona.',
    primaryCta: 'Escríbeme por WhatsApp',
    secondaryCta: 'Ver cómo puedo ayudarte',
    note: 'Escríbeme y charlamos sin compromiso.',
    photoAlt: 'Retrato de Nombre Apellido, pedagoga',
  },

  services: {
    title: 'En qué puedo ayudarte',
    intro:
      'Cada caso empieza escuchando. Estos son los ámbitos en los que trabajo, y si lo tuyo no aparece aquí, cuéntamelo: seguro que encontramos la manera.',
    cta: 'Cuéntame tu caso',
    items: [
      {
        title: 'Orientación educativa',
        description:
          'Para decidir con calma en los cambios de etapa: itinerarios, elección de estudios y próximos pasos, con información clara y sin presiones.',
        audience: 'Familias y jóvenes',
      },
      {
        title: 'Apoyo al aprendizaje',
        description:
          'Un refuerzo personalizado que parte de cómo aprende cada niño o niña, y no solo de lo que le cuesta.',
        audience: 'Primaria y ESO',
      },
      {
        title: 'Técnicas y hábitos de estudio',
        description:
          'Organización, planificación, comprensión lectora y estrategias para estudiar mejor con menos horas y menos estrés.',
        audience: 'ESO y Bachillerato',
      },
      {
        title: 'Asesoramiento a familias',
        description:
          'Pautas claras y realistas para acompañar en casa: rutinas, deberes, motivación, límites y comunicación.',
        audience: 'Madres, padres y tutores',
      },
      {
        title: 'Atención a la diversidad',
        description:
          'Orientación y seguimiento para dar respuesta a necesidades específicas de apoyo, en coordinación con el centro y otros profesionales.',
        audience: 'Familias y centros',
      },
      {
        title: 'Formación para docentes',
        description:
          'Talleres y sesiones prácticas sobre metodologías, convivencia y gestión del aula, adaptados a la realidad de tu equipo.',
        audience: 'Docentes y centros',
      },
    ],
  },

  about: {
    title: 'Hola, soy Nombre',
    paragraphs: [
      'Soy pedagoga y llevo años acompañando a personas en su camino de aprendizaje. Creo que casi nadie “no vale para estudiar”: lo que suele faltar es encontrar el método, el ritmo y el apoyo adecuados.',
      'Trabajo con un enfoque cercano y sin juicios, con explicaciones claras y objetivos pequeños que se pueden alcanzar. Mi meta es que, cuando terminemos, ya no me necesites.',
    ],
    principles: [
      {
        title: 'Escucho primero',
        text: 'Antes de proponer nada, entiendo tu situación, tu historia y lo que de verdad te preocupa.',
      },
      {
        title: 'Hablo claro',
        text: 'Sin jerga innecesaria. Te explico qué hacemos, por qué y cómo saber si está funcionando.',
      },
      {
        title: 'Paso a paso',
        text: 'Objetivos concretos y alcanzables para notar avances desde las primeras semanas.',
      },
    ],
    trainingTitle: 'Formación y experiencia',
    training: [
      'Grado en Pedagogía, Universidad de tu elección',
      'Máster en Orientación Educativa',
      'Experiencia en centros educativos y en atención individualizada',
      'Formación continua en metodologías activas y neurodesarrollo',
    ],
    photoAlt: 'Nombre Apellido trabajando con material educativo',
  },

  process: {
    title: 'Así trabajamos',
    intro:
      'Un proceso sencillo y transparente, para que siempre sepas en qué punto estamos y cuál es el siguiente paso.',
    items: [
      {
        title: 'Primera conversación',
        text: 'Hablamos sin compromiso para conocernos y entender qué necesitas.',
      },
      {
        title: 'Valoración',
        text: 'Analizo la situación con calma: cómo aprendes, qué te funciona y dónde hay margen de mejora.',
      },
      {
        title: 'Plan a medida',
        text: 'Definimos objetivos claros y un plan de trabajo realista, adaptado a tu ritmo y a tu día a día.',
      },
      {
        title: 'Seguimiento',
        text: 'Revisamos avances, ajustamos lo que haga falta y celebramos cada logro por el camino.',
      },
    ],
  },

  /**
   * TESTIMONIOS
   * `isExample: true` → los textos de abajo son inventados. Se ven mientras
   * trabajas en local (npm run dev) pero NO se publican: la sección se oculta
   * automáticamente en la web publicada. Cuando pongas testimonios reales
   * (con permiso de quien los da), cambia `isExample` a false.
   */
  testimonials: {
    enabled: true,
    isExample: true,
    title: 'Lo que cuentan las familias',
    items: [
      {
        quote:
          'Mi hija pasó de agobiarse cada tarde con los deberes a organizarse sola. Lo mejor es que ahora entiende por qué le funcionan las cosas.',
        author: 'Nombre de la familia',
        context: 'Madre de una alumna de 1.º de ESO',
      },
      {
        quote:
          'Nos ayudó a tomar una decisión importante sin nervios. Explicó todo con claridad y siempre con mucho cariño.',
        author: 'Nombre de la familia',
        context: 'Familia de un alumno de 4.º de ESO',
      },
      {
        quote:
          'Sus sesiones con el claustro fueron prácticas desde el primer minuto. Hemos aplicado varias ideas en el aula esa misma semana.',
        author: 'Nombre y apellido',
        context: 'Docente de Educación Primaria',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Trabajas de forma online o presencial?',
        answer:
          'Ambas. Puedes elegir sesiones presenciales en Tu ciudad o por videollamada, que funcionan igual de bien y facilitan mucho la organización.',
      },
      {
        question: '¿Cómo es la primera sesión?',
        answer:
          'Es una conversación tranquila para conocernos. Me cuentas qué te preocupa y qué te gustaría conseguir, y yo te explico cómo podría ayudarte. No hay ningún compromiso.',
      },
      {
        question: '¿Con qué edades trabajas?',
        answer:
          'Con estudiantes desde Educación Primaria hasta Bachillerato, con sus familias y con profesionales de la educación.',
      },
      {
        question: '¿Cuántas sesiones necesitaré?',
        answer:
          'Depende de cada caso. Tras la valoración inicial te propongo un plan con una duración estimada y lo vamos revisando por el camino.',
      },
      {
        question: '¿Puedes coordinarte con el colegio?',
        answer:
          'Sí. Cuando la familia lo autoriza, me coordino con tutores y orientadores para que todos vayamos en la misma dirección.',
      },
    ],
  },

  contact: {
    title: 'Cuéntame qué necesitas',
    text: 'Escríbeme por el canal que prefieras. Te respondo lo antes posible y, si encaja, concertamos una primera conversación sin compromiso.',
    email: 'hola@tudominio.com',
    phone: '+34 600 00 00 00',
    /** Solo números, con prefijo de país y sin "+": 34 = España */
    whatsapp: '34600000000',
    whatsappMessage: 'Hola, me gustaría pedir información sobre tus servicios.',
    location: 'Tu ciudad y online',
    schedule: 'De lunes a viernes, de 9:00 a 19:00',
    instagram: 'https://www.instagram.com/tuusuario',
    linkedin: 'https://www.linkedin.com/in/tuusuario',
  },

  /** Datos para la página de Aviso legal (obligatorios en España si tienes actividad profesional). */
  legal: {
    owner: 'Nombre Apellido',
    taxId: '00000000X',
    address: 'Calle Ejemplo 1, 28000, Tu ciudad',
  },
};

/** Enlaces ya construidos a partir de los datos de contacto (no hace falta tocarlos). */
export const links = {
  whatsapp: site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`
    : null,
  email: site.contact.email ? `mailto:${site.contact.email}` : null,
  phone: site.contact.phone ? `tel:${site.contact.phone.replace(/\s/g, '')}` : null,
};

/** Destino del botón principal: WhatsApp si existe, si no email, si no la sección de contacto. */
export const primaryCta = links.whatsapp ?? links.email ?? '#contacto';
