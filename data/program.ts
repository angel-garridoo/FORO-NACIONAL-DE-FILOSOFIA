export type Presentation = {
  title: string;
  speakers: string;
  affiliation?: string;
};

export type SubEvent = {
  time: string;
  text: string;
};

export type AgendaItem = {
  id: string;
  time?: string;
  location?: string;
  title: string;
  kind: "mesa" | "central" | "break" | "logistics" | "closing";
  moderator?: string;
  note?: string;
  presentations?: Presentation[];
  subEvents?: SubEvent[];
};

export type DayProgram = {
  id: "dia-1" | "dia-2";
  number: string;
  date: string;
  fullDate: string;
  sections: {
    label: string;
    items: AgendaItem[];
  }[];
};

const mesa8Presentations: Presentation[] = [
  {
    title:
      "Del colonialismo al discurso sobre la migración: actualidad de la crítica sartreana de la representación del Otro",
    speakers: "Yazmin Guevara y Farid Ricardo",
  },
  {
    title:
      "Identidad y libertad en la cuestión judía y palestina: una aproximación filosófica desde Jean Paul Sartre",
    speakers: "Génesis Carolina Tobías Meneses",
    affiliation:
      "Semillero Phronesis: Razón Práctica. Estudiante del programa de Filosofía, Universidad del Atlántico.",
  },
  {
    title:
      "Colonialismo, identidad y libertad: una aproximación filosófica desde Jean Paul Sartre y Albert Memmi",
    speakers: "Grace Wehdeking Rey",
    affiliation:
      "Semillero Phronesis: Razón Práctica. Estudiante del programa de Filosofía, Universidad del Atlántico.",
  },
  {
    title:
      "Vigilancia sin mirada: objetivación algorítmica y los límites del ‘regard’ (mirada) en la fenomenología sartreana",
    speakers: "Luisa Fernanda Escorcia Julio",
  },
  {
    title:
      "Prácticas de estabilización conversacional como articulación entre sensus communis y medición comunitaria",
    speakers: "Jhonan Jacob Ramírez Murillo",
  },
  {
    title:
      "Tipología del inconsciente y fenomenología de la conciencia: tensiones ontológicas sobre la emancipación del sujeto",
    speakers: "Jhon E. Gutiérrez Cantero",
  },
  {
    title:
      "Afectividad, voluntad y poder en Schopenhauer y Nietzsche: una lectura desde la fenomenología material de la vida de Michel Henry",
    speakers: "Juan Sebastián Ballen Rodríguez",
  },
  {
    title:
      "La angustia como método: el vacío kierkegaardiano en la escritura de Alejandra Pizarnik",
    speakers: "Yoaldris Inés Luna Fábregas",
  },
  {
    title:
      "Crisis de identidad del sujeto en la obra La metamorfosis: alienación e intersubjetividad en Sartre",
    speakers: "María José Jiménez Carreño",
  },
];

const mesa9Presentations: Presentation[] = [
  {
    title: "Ecuación analítica de la ética",
    speakers: "Leopoldo Casiani",
  },
  {
    title:
      "¿Quién merece ser reconocido como humano? Dignidad y precaridad: una lectura de la película The Elephant Man desde Judith Butler y la bioética",
    speakers: "Libni Barraza Merchán",
  },
  {
    title: "Desdemocratización. Presentación de un problema",
    speakers: "Yerson Yismendy Carrillo Ardila",
  },
  {
    title:
      "Pensamiento crítico y alienación social: un análisis del concepto individualismo y masas en Nietzsche y Hannah Arendt",
    speakers: "Nataly De Moya",
  },
  {
    title:
      "Entre el Aquinate y los algoritmos: pertinencia de los fundamentos éticos tomistas al debate filosófico contemporáneo sobre la agencia moral en la inteligencia artificial",
    speakers: "Luis Manuel Fontalvo Thomas",
  },
  {
    title: "Conversaciones entre Heidegger y Marcuse: hacía una visión política de la época",
    speakers: "Jairo Julio García Sosa",
  },
  {
    title: "Supresión del dolor dentro de la clínica: su impacto en la palabra y dignidad del enfermo",
    speakers: "Roxana López López",
  },
  {
    title: "Biolinguistica y E topías",
    speakers: "Jairo Gutiérrez Bossa",
  },
  {
    title: "El ser humano como demonio de la democracia",
    speakers: "Jorge Eduardo Negrete Crisóstomo",
  },
  {
    title:
      "El sujeto político y los límites de la autonomía moral: religión, discursos neoreligiosos y heteronomía",
    speakers: "Santiago Orellano Fabra",
  },
  {
    title:
      "El a priori antropológico: testimonio y ruptura epistémica de las madres de Soacha en los falsos positivos 2008-2009 de Colombia",
    speakers: "Sharon Dayana Villa Gutiérrez",
  },
  {
    title:
      "¿Vivir para la filosofía o de la filosofía? La búsqueda de la verdad frente a la filosofía universitaria en Arthur Schopenhauer",
    speakers: "Alejandro Elías Rincón Jiménez",
    affiliation: "Filosofía de la educación.",
  },
];

const pendingBlockAssignment =
  "El documento lista esta mesa en la mañana y en la tarde, pero todavía no distribuye las ponencias entre ambos bloques. Se muestra la lista general de la mesa.";

export const program: DayProgram[] = [
  {
    id: "dia-1",
    number: "01",
    date: "19 NOV",
    fullDate: "19 de noviembre de 2026",
    sections: [
      {
        label: "Acceso",
        items: [
          {
            id: "registro-dia-1",
            time: "07:00 – 08:00 AM",
            location: "Lobby",
            title: "Mesa de inscripción",
            kind: "logistics",
            note:
              "Encargados: Benjamín Martínez, Laura Marchena, Andrea García y Maria Nuñes.",
          },
        ],
      },
      {
        label: "Jornada de la mañana",
        items: [
          {
            id: "mesa-central-1",
            time: "08:00 – 10:30 AM",
            location: "Salón Múltiple 2",
            title: "Mesa Central 1",
            kind: "central",
            moderator: "Prof. Arturo y Elianys Carolina Ramos Ramos",
            subEvents: [
              {
                time: "08:00 – 08:30 AM",
                text: "Palabras de apertura — Prof. Arturo y Elianys Carolina Ramos Ramos.",
              },
              {
                time: "08:30 – 09:30 AM",
                text:
                  "«Existencia y cuidado del alma: Patočka —de Husserl y Heidegger—» — German Giller.",
              },
              {
                time: "09:30 – 10:30 AM",
                text: "Luis Eduardo Gamba — título de la ponencia no indicado en el documento.",
              },
            ],
          },
          {
            id: "receso-dia-1-manana",
            title: "Coffee break",
            kind: "break",
          },
          {
            id: "mesa-1",
            time: "10:30 AM – 12:30 PM",
            location: "Teatrino 1",
            title: "Mesa 1: Filosofía de la Tecnología, Inteligencia Artificial y Ciencias",
            kind: "mesa",
            moderator: "Julian Geronimo y Laura Marchera",
            presentations: [
              {
                title: "El giro computacional en la Filosofía de las Ciencias siglo XXI",
                speakers: "Eduardo Bermudez Barrera",
              },
              {
                title:
                  "Antropomorfismo y libre albedrio. Problemas epistemologicos en la atribucion de mente y agencia",
                speakers: "Andrea García y Daniel Muñoz",
              },
              {
                title: "¿Es fiable el cerebro para ser juez de sí mismo?: una perspectiva Neuroética",
                speakers: "Carmelo David Santiago Moreno",
              },
              {
                title:
                  "¿Puede la inteligencia artificial tener un \"yo\"? Una aproximación filosófica a la identidad, la memoria y la autoconciencia artificial",
                speakers: "Natalia Lucía Torres Polo",
              },
              {
                title:
                  "¿Qué significa amar en tiempos de afecto artificial? Dependencia emocional, alteridad y vínculos en la sociedad contemporánea",
                speakers: "Lauren Sofía Bohórquez Orozco",
                affiliation: "Filosofía de la tecnología e inteligencia artificial.",
              },
            ],
          },
          {
            id: "mesa-2",
            time: "10:30 AM – 12:30 PM",
            location: "Salón Posgrados 1",
            title: "Mesa 2: Filosofía del Suicidio, Pesimismo y Literatura",
            kind: "mesa",
            moderator: "Johan Palmes",
            presentations: [
              {
                title:
                  "La muerte en libertad. Nietzsche frente al suicidio como afirmación y como decadencia",
                speakers: "Sebastián Alberto Vallejos Contreras",
                affiliation:
                  "Estudiante del programa de Doctorado en Filosofía de la Pontificia Universidad Católica de Valparaíso.",
              },
              {
                title: "Exámenes sobre la noción de Espejo en Arthur Schopenhauer",
                speakers: "Jorge Eduardo Negrete",
              },
              {
                title: "Lenguaje: ¿asesino del suicidio?",
                speakers: "Josep Josué Orozco Suárez",
              },
              {
                title:
                  "Distopía y ontología de la imagen técnica: Orwell, Bradbury y Bazterrica a la luz del concepto de \"poetizar\" de Gustavo Bueno",
                speakers: "Cristian David Romero Chamorro",
                affiliation:
                  "Estudiante de Filosofía y de Humanidades y Lengua Castellana de la Universidad del Atlántico. Miembro del Semillero Homeomerías, adscrito al Grupo de Investigación Intellectus Graecus Latinus.",
              },
              {
                title: "Análisis del pensamiento pesimista de Emil Cioran: consideraciones sobre el suicidio",
                speakers: "María Camila Núñez Ureche",
              },
            ],
          },
          {
            id: "mesa-3",
            time: "10:30 AM – 12:30 PM",
            location: "Teatrino 2",
            title: "Mesa 3: Filosofía Latinoamericana, Caribe Colombiano y Religión",
            kind: "mesa",
            moderator: "Aldair Catalán y Brian Castro",
            presentations: [
              {
                title: "Geografías del poder: imperialismo, filosofía y territorio en América Latina",
                speakers: "Eleucilio Niebles Reales",
              },
              {
                title: "Ruinas de agua y progreso. Una lectura de Walter Benjamin en La Mojana",
                speakers: "José Vega",
              },
              {
                title:
                  "Estanislao Zuleta: la trascendencia de la dificultad en la ilusión de la felicidad permanente",
                speakers: "Aldair David Catalán Arrieta",
              },
              {
                title: "El valor de la experiencia en el mundo árabe",
                speakers: "Fidel Llinás Zurita",
              },
              {
                title:
                  "Más allá del concepto: fenomenología de la religión, donación y los límites de la racionalización en Jean-Luc Marion. Una aproximación al problema de Dios, la teología y la relación entre filosofía y religión",
                speakers: "Laura Vanessa Marchena Almarales",
              },
            ],
          },
          {
            id: "almuerzo-dia-1",
            time: "12:30 – 02:00 PM",
            title: "Almuerzo",
            kind: "break",
          },
        ],
      },
      {
        label: "Jornada de la tarde",
        items: [
          {
            id: "mesa-4",
            time: "02:00 – 04:00 PM",
            location: "Teatrino 1",
            title: "Mesa 4: Semillero Escolar",
            kind: "mesa",
            moderator: "Natalia Torres y Maria Jimenez",
            presentations: [
              {
                title:
                  "Gobernar con justicia o por conveniencia: la política frente al desafío ético de Kant",
                speakers: "Valeri Calderón, Akemy Soto y Olianys Noriega",
              },
              {
                title:
                  "Cuando el poder deja de pensar: abuso, violencia, banalidad del mal y responsabilidad política en el orden mundial contemporáneo. Una lectura crítica desde la perspectiva de Hannah Arendt, Michel Foucault y Noam Chomsky",
                speakers: "Stephania Perez Vera",
              },
              {
                title: "La arquitectura del poder: ¿Como la dominación sostiene la desigualdad?",
                speakers: "Joselyne del Toro Gutiérrez y Massielly Paola Medrano Aguilar",
              },
              {
                title: "Redes sociales y la libertad en Sartre",
                speakers: "Miranda Alexis Campuzano y Luigy San Juan Shired",
              },
              {
                title: "¿Puedo pertenecer sin dejar de ser yo? Identidad, autenticidad y libertad juvenil",
                speakers: "Rafael Antonio Velandia Paez y Mariangel Monsalvo Amaris",
              },
              {
                title:
                  "La violencia barrista: ¿una expresión de la naturaleza humana o el resultado de una sociedad que normaliza la deshumanización?",
                speakers: "Andrea Carolina Quintero Ardila y Ana Sofía Rangel Lindado",
              },
            ],
          },
          {
            id: "mesa-5",
            time: "02:00 – 04:00 PM",
            location: "Salón Posgrados 1",
            title: "Mesa 5: Filosofía Feminista, de Género, Arte y Estética",
            kind: "mesa",
            moderator: "Cristian Romero y Valentina",
            presentations: [
              {
                title:
                  "Resignificación de los imaginarios políticos de la violencia contra la mujer: consideraciones sobre el carácter performativo del discurso político de la mujer indígena Mokaná en el territorio del municipio de Galapa Atlántico",
                speakers: "Laury Ayala Marin",
                affiliation: "Filosofía feminista y de género.",
              },
              {
                title: "Consideraciones acerca de la Muerte y el Reconocimiento Público desde la Poesía de Emily Dickinson",
                speakers: "Sarai Santamaría Cuesta",
              },
              {
                title:
                  "La decaída del deseo: La metafísica de la música en Schopenhauer a través del Preludio en Mi menor de Chopin",
                speakers: "Enmanuel de Jesús Amaranto Chavez",
              },
              {
                title: "Arte, técnica y revolución: la articulación entre estética y política en el pensamiento de Walter Benjamin",
                speakers: "Sebastián de Jesús Toro Chacón",
              },
            ],
          },
          {
            id: "mesa-6",
            time: "02:00 – 04:00 PM",
            location: "Salón Múltiple 2",
            title: "Mesa 6: Investigación y Maestría",
            kind: "mesa",
            moderator: "Prof. Roger y Franco",
            presentations: [
              {
                title: "Develar el Anti Humanismo: Lo Contra humano de lo Humano",
                speakers: "Johan Camilo Méndez Moreno",
                affiliation: "Estudiante de la Maestría en Filosofía de la Universidad del Atlántico.",
              },
              {
                title: "Hacia una infancia mayor: elementos y mecanismo de una educación pasional",
                speakers: "Jair España Galán",
                affiliation:
                  "Filósofo y doctorando en Ciencias de la Educación de la Universidad del Atlántico. Magíster en Desarrollo Humano de FLACSO, Argentina.",
              },
              {
                title: "La modernidad o la imagen del mundo a partir de Heidegger y Habermas",
                speakers: "Luis Eugenio Ribón Pérez",
                affiliation:
                  "Mg. en Filosofía Latinoamericana, Filosofía de la Ciencia y Teoría y Técnicas en Métodos de Investigación. Doctor en Ciencias de la Educación y en Filosofía Social.",
              },
              {
                title:
                  "Habitar el acontecimiento: ontología del arte popular caribeño a partir de los cuadros vivos de Galeras, Sucre",
                speakers: "Rafael David Galván Zabaleta",
                affiliation: "Estudiante de la Maestría en Filosofía, Universidad del Atlántico.",
              },
              {
                title: "La clase de filosofía como encuentro formativo en el aula",
                speakers: "Omaira Barreto Chica",
                affiliation: "Universidad del Atlántico — Maestría en Filosofía.",
              },
              {
                title: "La negatividad del sujeto como fundamento de lo político en Žižek",
                speakers: "David Johann Ibáñez Martínez",
              },
              {
                title: "El Poder como constituens y como constitutum",
                speakers: "Steven Maestre Arango",
              },
            ],
          },
          {
            id: "receso-dia-1-tarde",
            title: "Coffee break",
            kind: "break",
          },
          {
            id: "debate-cierre-dia-1",
            time: "04:30 – 05:30 PM",
            location: "Salón Múltiple 2",
            title: "Debate de cierre: de lo eidético a la Praxis",
            kind: "central",
            presentations: [
              {
                title:
                  "Kierkegaard lector de Platón: acercamientos y distancias entre filosofía y existencia",
                speakers: "Sandro Leonel Watts Meza",
              },
              {
                title: "Y sin embargo, la Filosofía no envejece.",
                speakers: "José Gabriel Coley",
              },
            ],
          },
          {
            id: "presentacion-libro-dia-1",
            time: "05:30 – 06:30 PM",
            location: "Salón Múltiple 2",
            title: "Mesa de cierre: Presentación de libro",
            kind: "central",
            presentations: [
              {
                title: "Presentación de libro",
                speakers: "Prof. Cristóbal Arteta Ripoll",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dia-2",
    number: "02",
    date: "20 NOV",
    fullDate: "20 de noviembre de 2026",
    sections: [
      {
        label: "Acceso",
        items: [
          {
            id: "registro-dia-2",
            time: "07:00 – 08:00 AM",
            location: "Lobby",
            title: "Mesa de inscripción",
            kind: "logistics",
            note:
              "Encargados: Benjamín Martínez, Laura Marchena, Andrea García y Maria Nuñes.",
          },
        ],
      },
      {
        label: "Jornada de la mañana",
        items: [
          {
            id: "mesa-central-3",
            time: "08:30 – 10:30 AM",
            location: "Salón Múltiple 2",
            title: "Mesa Central 3",
            kind: "central",
            moderator: "Elianys y Prof. Arturo",
            note:
              "El cuadro general indica 8:30–10:30 AM; el detalle de las intervenciones consigna actividades entre 8:00 y 10:20 AM.",
            subEvents: [
              {
                time: "08:00 – 09:00 AM",
                text: "Espacio libre — Arturo Cardozo.",
              },
              {
                time: "09:00 – 09:40 AM",
                text: "Enfermedad y transformación personal: una perspectiva fenomenológica — Andrés Contreras.",
              },
              {
                time: "09:40 – 10:20 AM",
                text: "Contra la celeridad: una lectura desde Nietzsche y Heidegger — Alfredo Rocha.",
              },
            ],
          },
          {
            id: "receso-dia-2-manana",
            title: "Coffee break",
            kind: "break",
          },
          {
            id: "mesa-7",
            time: "10:30 AM – 12:30 PM",
            location: "Salón Múltiple 2",
            title: "Mesa 7: Fenomenología y Hermenéutica",
            kind: "mesa",
            moderator: "Mirian, Brinigt y Gissel",
            presentations: [
              {
                title: "¿Es posible una fenomenología de las no-cosas?",
                speakers: "Rodolfo Wenger C.",
              },
              {
                title: "La grieta del Absurdo: Distinción fenomenológica entre Jean-Paul Sartre y Albert Camus",
                speakers: "Elianys Carolina Ramos Ramos",
              },
              {
                title: "Una mirada neurofenomenológica al problema de la adicción",
                speakers: "Johana Valentina Campo Blanco",
              },
              {
                title: "La casa y los espacios habitados: una propuesta fenomenológica",
                speakers: "José Silva Valencia",
              },
              {
                title:
                  "Vigilancia sin mirada: objetivación algorítmica y los límites del ‘regard’ (mirada) en la fenomenología sartreana",
                speakers: "Roberto Certain Ruiz",
              },
              {
                title:
                  "Prácticas de estabilización conversacional como articulación entre sensus communis y medición comunitaria",
                speakers: "Jhonan Jacob Ramírez Murillo",
              },
              {
                title: "Reconstruir el tiempo: fenomenología de la temporalidad herida a partir de Ser y tiempo",
                speakers: "Juan Manuel Hernández Aguilar",
              },
              {
                title: "Percepción, cuerpo, y carne: la deuda pendiente de Merleau Ponty consigo mismo",
                speakers: "Julian Geronimo",
              },
              {
                title: "El valor de lo santo en la axiología de Max Scheler: universalidad y portador absoluto",
                speakers: "Yen Lucia German Meza",
              },
            ],
          },
          {
            id: "mesa-8-manana",
            time: "10:30 AM – 12:30 PM",
            location: "Teatrino 2",
            title: "Mesa 8: Filosofía de la Existencia y Existencialismo — mañana",
            kind: "mesa",
            moderator: "Jordan, Libni y Franco",
            note: pendingBlockAssignment,
            presentations: mesa8Presentations,
          },
          {
            id: "mesa-9-manana",
            time: "10:30 AM – 12:30 PM",
            location: "Teatrino 1",
            title: "Mesa 9: Política, Ética y Filosofía de la Educación — mañana",
            kind: "mesa",
            moderator: "Aldair Catalán y Brian Castro",
            note: pendingBlockAssignment,
            presentations: mesa9Presentations,
          },
          {
            id: "almuerzo-dia-2",
            time: "12:30 – 02:00 PM",
            title: "Almuerzo",
            kind: "break",
          },
        ],
      },
      {
        label: "Jornada de la tarde",
        items: [
          {
            id: "mesa-8-tarde",
            time: "02:00 – 04:00 PM",
            location: "Teatrino 1",
            title: "Mesa 8: Filosofía de la Existencia y Existencialismo — tarde",
            kind: "mesa",
            moderator: "Jordan, Libni y Franco",
            note: pendingBlockAssignment,
            presentations: mesa8Presentations,
          },
          {
            id: "mesa-9-tarde",
            time: "02:00 – 04:00 PM",
            location: "Teatrino 2",
            title: "Mesa 9: Política, Ética y Filosofía de la Educación — tarde",
            kind: "mesa",
            moderator: "Andrea García, Rober y Russel",
            note: pendingBlockAssignment,
            presentations: mesa9Presentations,
          },
          {
            id: "receso-dia-2-tarde",
            title: "Coffee break",
            kind: "break",
          },
          {
            id: "obra-de-teatro",
            time: "04:30 – 06:30 PM",
            location: "Salón Múltiple 2",
            title: "Obra de teatro",
            kind: "closing",
            moderator: "Elianys y Prof. Arturo",
            presentations: [
              {
                title: "Obra de teatro",
                speakers: "Estudiantes de Bellas Artes",
              },
            ],
          },
        ],
      },
    ],
  },
];
