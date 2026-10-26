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
  time: string;
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
            id: "registro",
            time: "07:00 – 08:00 AM",
            location: "Entrada Principal",
            title: "Mesa de inscripción y registro",
            kind: "logistics",
            note: "Encargados: Benjamín Martínez, Laura Marchena, Andrea García, Lesly Agambula",
          },
        ],
      },
      {
        label: "Jornada de la mañana",
        items: [
          {
            id: "apertura-mesa-central-1",
            time: "08:00 – 10:15 AM",
            location: "Salón Múltiple 2",
            title: "Apertura del Foro y Mesa Central 1",
            kind: "central",
            subEvents: [
              { time: "08:00 – 08:30 AM", text: "Apertura del Foro" },
              {
                time: "08:30 – 10:15 AM",
                text: "Palabras de bienvenida e instalación — Numas Gil Olivera (Decana de Ciencias Humanas), Germán Giller, Luis Eduardo Gamba (Universidad del Atlántico)",
              },
            ],
          },
          {
            id: "receso-dia-1-manana",
            time: "10:15 – 10:30 AM",
            location: "Hall Central",
            title: "Coffee Break / Receso",
            kind: "break",
          },
          {
            id: "mesa-1",
            time: "10:30 – 12:00 PM (120 minutos)",
            location: "Teatrino 1",
            title: "Mesa 1: Filosofía de las Ciencias, Tecnología e Inteligencia Artificial",
            kind: "mesa",
            moderator: "Luis, Kener y Prof. Roger (Apertura del profesor Bermúdez y profesor Roger)",
            presentations: [
              {
                title: "Antropomorfismo y libre albedrio. Problemas epistemologicos en la atribucion de mente y agencia",
                speakers: "Andrea García y Daniel Muñoz",
                affiliation: "Universidad del Atlántico",
              },
              {
                title: "¿Es fiable el cerebro para ser juez de sí mismo?: una perspectiva Neuroética",
                speakers: "Carmelo David Santiago Moreno",
                affiliation: "Universidad del Atlántico",
              },
              {
                title: "¿Puede la inteligencia artificial tener un \"yo\"? Una aproximación filosófica a la identidad, la memoria y la autoconciencia artificial",
                speakers: "Natalia Lucía Torres Polo",
                affiliation: "Universidad del Atlántico",
              },
              {
                title: "¿Qué significa amar en tiempos de afecto artificial? Dependencia emocional, alteridad y vínculos en la sociedad contemporánea",
                speakers: "Lauren Sofía Bohórquez Orozco",
              },
            ],
          },
          {
            id: "mesa-3",
            time: "10:30 – 12:00 PM",
            location: "Salón S.P1",
            title: "Mesa 3: Filosofía del Suicidio, Pesimismo y Literatura",
            kind: "mesa",
            moderator: "Johan, Luisa, Cristian y Valentina",
            presentations: [
              {
                title: "La muerte en libertad. Nietzsche frente al suicidio como afirmación y como decadencia",
                speakers: "Sebastián Alberto Vallejos Contreras",
                affiliation: "Pontificia Universidad Católica de Valparaíso",
              },
              {
                title: "Exámenes sobre la noción de Espejo en Arthur Schopenhauer",
                speakers: "Jorge Eduardo Negrete Crisóstomo",
              },
              {
                title: "Lenguaje: ¿asesino del suicidio?",
                speakers: "Josep Josué Orozco Suárez",
              },
              {
                title: "Distopía y ontología de la imagen técnica: Orwell, Bradbury y Bazterrica a la luz del concepto de \"poetizar\" de Gustavo Bueno",
                speakers: "Cristian David Romero Chamorro",
                affiliation: "Universidad del Atlántico - Semillero Homeomerías",
              },
            ],
          },
          {
            id: "mesa-4",
            time: "10:30 – 12:00 PM",
            location: "Salón S.P2",
            title: "Mesa 4: Filosofía Feminista, de Género, Arte y Estética",
            kind: "mesa",
            moderator: "Benjamín, Alba, Robert y Libni",
            presentations: [
              {
                title: "Resignificación de los imaginarios políticos de la violencia contra la mujer: consideraciones sobre el carácter performativo del discurso político de la mujer indígena Mokaná en el territorio del municipio de Galapa Atlántico",
                speakers: "Laury Ayala Marín",
              },
              {
                title: "Consideraciones acerca de la Muerte y el Reconocimiento Público desde la Poesía de Emily Dickinson",
                speakers: "Sarai Santamaría Cuesta",
              },
              {
                title: "La decaída del deseo: La metafísica de la música en Schopenhauer a través del Preludio en Mi menor de Chopin",
                speakers: "Enmanuel de Jesús Amaranto Chávez",
              },
              {
                title: "Arte, técnica y revolución: la articulación entre estética y política en el pensamiento de Walter Benjamin",
                speakers: "Sebastián de Jesús Toro Chacón",
              },
            ],
          },
          {
            id: "almuerzo-dia-1",
            time: "12:00 – 13:30 PM",
            title: "Almuerzo libre",
            kind: "break",
          },
        ],
      },
      {
        label: "Jornada de la tarde",
        items: [
          {
            id: "mesa-5",
            time: "13:30 – 15:30 PM",
            location: "Teatrino 1",
            title: "Mesa 5: Filosofía Latinoamericana y en el Caribe Colombiano",
            kind: "mesa",
            moderator: "Aldair Catalán y Carmelo (Apertura del profesor Eucilio)",
            presentations: [
              {
                title: "\"Ruinas de agua y progreso. Una lectura de Walter Benjamin en La Mojana\"",
                speakers: "José Vega",
              },
              {
                title: "\"Estanislao Zuleta: la trascendencia de la dificultad en la ilusión de la felicidad permanente\"",
                speakers: "Aldair David Catalán Arrieta",
              },
            ],
          },
          {
            id: "mesa-6",
            time: "13:30 – 15:30 PM",
            location: "Teatrino 2",
            title: "Mesa 6: Filosofía de la Religión",
            kind: "mesa",
            moderator: "Julián y Cristian Maldonado",
            presentations: [
              {
                title: "El valor de la experiencia en el mundo árabe",
                speakers: "Prof. Fidel",
              },
              {
                title: "Más allá del concepto: fenomenología de la religión, donación y los límites de la racionalización en jean-luc marion. Una aproximación al problema de dios, la teología y la relación entre filosofía y religión",
                speakers: "Laura Vanessa Marchena Almarales",
              },
            ],
          },
          {
            id: "mesa-7",
            time: "13:30 – 15:30 PM",
            location: "Salón S.P1",
            title: "Mesa 7: Semillero Escolar",
            kind: "mesa",
            moderator: "Natalia Torres",
            presentations: [
              {
                title: "Gobernar con justicia o por conveniencia: la política frente al desafío ético de kant",
                speakers: "Valeri Calderón, Akemy Soto y Olianys Noriega",
              },
              {
                title: "Cuando el poder deja de pensar: abuso, violencia, banalidad del mal y responsabilidad política en el orden mundial contemporáneo. Una lectura crítica desde la perspectiva de Hannah Arendt, Michel Foucault y Noam Chomsky",
                speakers: "Stephania Pérez Vera",
              },
              {
                title: "La arquitectura del poder: ¿Cómo la dominación sostiene la desigualdad?",
                speakers: "Joselyne del Toro Gutiérrez y Massielly Paola Medrano Aguilar",
              },
              {
                title: "Redes sociales y la libertad en Sartre",
                speakers: "Miranda Alexis Campuzano y Luigy San Juan Shired",
              },
              {
                title: "¿Puedo pertenecer sin dejar de ser yo? Identidad, autenticidad y libertad juvenil",
                speakers: "Rafael Antonio Velandia Páez y Mariángel Monsalvo Amarís",
              },
              {
                title: "La violencia barrista: ¿una expresión de la naturaleza humana o el resultado de una sociedad que normaliza la deshumanización?",
                speakers: "Andrea Carolina Quintero Ardila y Ana Sofía Rangel Lindado",
              },
            ],
          },
          {
            id: "mesa-8",
            time: "13:30 – 15:30 PM",
            location: "Salón S.P2",
            title: "Mesa 8: Investigación, Posgrados y Maestría",
            kind: "mesa",
            moderator: "Por definir",
            presentations: [
              {
                title: "Develar el Anti-Humanismo: Lo Contra-humano de lo Humano",
                speakers: "Johan Camilo Méndez Moreno",
                affiliation: "Maestría en Filosofía",
              },
              {
                title: "Hacia una infancia mayor: elementos y mecanismo de una educación pasional",
                speakers: "Jair España Galán",
              },
              {
                title: "La modernidad o la imagen del mundo a partir de Heidegger y Habermas",
                speakers: "Prof. Luis Eugenio Ribón Pérez",
              },
              {
                title: "Habitar el acontecimiento: Ontología del arte popular caribeño a partir de los cuadros vivos de galeras, sucre",
                speakers: "Rafael David Galván Zabaleta",
                affiliation: "Maestría en Filosofía",
              },
              {
                title: "La clase de filosofía como encuentro formativo en el aula",
                speakers: "Omaira Barreto Chica",
                affiliation: "Maestría en Filosofía",
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
            time: "15:30 – 16:00 PM",
            location: "Hall Central",
            title: "Coffee Break / Receso",
            kind: "break",
          },
          {
            id: "cierre-dia-1",
            time: "16:00 – 17:30 PM",
            location: "Salón Múltiple 2",
            title: "Mesa Central de Cierre (Día 1)",
            kind: "central",
            moderator: "Comité Organizador",
            presentations: [
              {
                title: "Presentación de Libro: Historia de la filosofía en el caribe colombiano",
                speakers: "Prof. Arteta",
                affiliation: "Universidad del Atlántico",
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
        label: "Jornada de la mañana",
        items: [
          {
            id: "mesa-central-2",
            time: "08:30 – 10:30 AM",
            location: "Salón Múltiple 2",
            title: "Mesa Central 2",
            kind: "central",
            moderator: "Por definir",
            note: "Ponencia Central 2: Prof. Eduardo Contreras, Prof. Roche, Prof. Roger + Ponente Invitado",
          },
          {
            id: "receso-dia-2-manana",
            time: "10:30 – 10:45 AM",
            location: "Hall Central",
            title: "Coffee Break / Receso",
            kind: "break",
          },
          {
            id: "mesa-9",
            time: "10:45 – 12:30 PM",
            location: "Teatrino 2",
            title: "Mesa 9: Fenomenología y Hermenéutica (Reemplaza Trabajos Pendientes)",
            kind: "mesa",
            moderator: "Mirian (Apertura: Eduardo Contreras y Rodolfo Wenger)",
            presentations: [
              {
                title: "La grieta del Absurdo: Distinción fenomenológica entre Jean-Paul Sartre y Albert Camus",
                speakers: "Elianys Carolina Ramos Ramos",
              },
              {
                title: "Una mirada Neurofenomenológica al problema de la adicción",
                speakers: "Johana Valentina Campo Blanco",
              },
              {
                title: "La casa y los espacios habitados: una propuesta fenomenológica",
                speakers: "Pedro José Silva Valencia",
                affiliation: "Universidad del Cauca / Universidad de Caldas",
              },
              {
                title: "Vigilancia sin mirada: objetivación algorítmica y los límites del \"regard\" (mirada) en la fenomenología sartreana",
                speakers: "Roberto Certain Ruiz",
              },
              {
                title: "Prácticas de estabilización conversacional como articulación entre sensus communis y medición comunitaria",
                speakers: "Jhonan Jacob Ramírez Murillo",
              },
              {
                title: "Reconstruir el tiempo: fenomenología de la temporalidad herida a partir de Ser y tiempo",
                speakers: "Juan Manuel Hernández Aguilar",
              },
              {
                title: "Percepción, cuerpo, y carne: la deuda pendiente de Merleau-Ponty consigo mismo",
                speakers: "Julián Gerónimo",
              },
              {
                title: "El valor de lo santo en la axiología de Max Scheler: universalidad y portador absoluto",
                speakers: "Yen Lucía Germán Meza",
              },
            ],
          },
          {
            id: "mesa-2-parte-1",
            time: "10:45 – 12:30 PM",
            location: "Salón S.P2",
            title: "Mesa 2 (Parte I): Filosofía Política y Ética",
            kind: "mesa",
            moderator: "Julián y Cristian Maldonado (Apertura del profesor Ribón)",
            presentations: [
              {
                title: "Ecuación analítica de la ética",
                speakers: "Leopoldo Casiani",
                affiliation: "Universidad del Atlántico",
              },
              {
                title: "¿Quién merece ser reconocido como humano? Dignidad y precaridad: una lectura de la película The Elephant Man desde Judith Butler y la bioética",
                speakers: "Libni Barraza Merchán",
              },
              {
                title: "Desdemocratización. Presentación de un problema",
                speakers: "Yerson Yismendy Carrillo Ardila",
              },
              {
                title: "Pensamiento Crítico y alienación social: un análisis del concepto individualismo y masas en Nietzsche y Hannah Arendt",
                speakers: "Nataly De Moya",
              },
              {
                title: "Entre el Aquinate y los algoritmos: pertinencia de los fundamentos éticos tomistas al debate filosófico contemporáneo sobre la agencia moral en la inteligencia artificial",
                speakers: "Luis Manuel Fontalvo Thomas",
              },
              {
                title: "Conversaciones entre Heidegger y Marcuse: Hacía una visión política de la época",
                speakers: "Jairo Julio García Sosa",
              },
            ],
          },
          {
            id: "mesa-10",
            time: "10:45 – 12:30 PM",
            location: "Salón S.P1",
            title: "Mesa 10: Filosofía de la Educación",
            kind: "mesa",
            moderator: "Russell",
            presentations: [
              {
                title: "¿Vivir para la filosofía de la filosofía? La búsqueda de la verdad frente a la filosofía universitaria en Arthur Schopenhauer",
                speakers: "Jhon E. Gutiérrez Cantero y Juan Sebastián Ballen",
              },
            ],
          },
          {
            id: "almuerzo-dia-2",
            time: "12:30 – 14:00 PM",
            title: "Almuerzo libre",
            kind: "break",
          },
        ],
      },
      {
        label: "Jornada de la tarde",
        items: [
          {
            id: "mesa-2-parte-2",
            time: "14:00 – 16:00 PM",
            location: "Salón S.P2",
            title: "Mesa 2 (Parte II): Filosofía Política y Ética",
            kind: "mesa",
            moderator: "Julián y Cristian Maldonado",
            presentations: [
              {
                title: "Supresión del dolor dentro de la clínica: Su impacto en la palabra y dignidad del enfermo",
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
                title: "El sujeto político y los límites de la autonomía moral: religión, discursos neoreligiosos y heteronomía",
                speakers: "Santiago Orellano Fabra",
              },
              {
                title: "El a priori antropológico: testimonio y ruptura epistémica de las madres de Soacha en los falsos positivos 2008-2009 de Colombia",
                speakers: "Sharon Dayana Villa Gutiérrez",
              },
            ],
          },
          {
            id: "mesa-12",
            time: "14:00 – 16:00 PM",
            location: "Teatrino 1",
            title: "Mesa 12: Filosofía de la Existencia y Existencialismo",
            kind: "mesa",
            moderator: "Jordan y Josep",
            presentations: [
              {
                title: "Del colonialismo al discurso sobre la migración: actualidad de la crítica sartreana de la representación del Otro",
                speakers: "Yazmin Guevara y Farid Ricardo",
              },
              {
                title: "Identidad y libertad en la cuestión judía y palestina: una aproximación filosófica desde jean paul sartre",
                speakers: "Génesis Carolina Tobías Meneses",
                affiliation: "Universidad del Atlántico - Semillero Phrónesis",
              },
              {
                title: "Colonialismo, identidad y libertad: una aproximación filosófica desde Jean Paul Sartre y Albert Memmi",
                speakers: "Grace Wehdeking Rey",
              },
              {
                title: "Amor o libertad: el conflicto existencial del amor en la filosofía de sartre",
                speakers: "Luisa Fernanda Escorcia Julo",
              },
              {
                title: "¿Vivir para la filosofía o de la filosofía? La búsqueda de la verdad frente a la filosofía universitaria en Arthur Schopenhauer",
                speakers: "Alejandro Elías Rincón Jiménez",
                affiliation: "Universidad del Atlántico",
              },
              {
                title: "Tipología del inconsciente y fenomenología de la conciencia: Tensiones ontológicas sobre la emancipación del sujeto",
                speakers: "Rodríguez María",
              },
              {
                title: "Afectividad, voluntad y poder en Schopenhauer y Nietzsche: una lectura desde la fenomenología material de la vida de Michel Henry",
                speakers: "Maria Camila Núñez Ureche",
              },
              {
                title: "Análisis del pensamiento pesimista de Emil Cioran: consideraciones sobre el suicidio",
                speakers: "Yoaldris Inés Luna Fábregas",
              },
              {
                title: "La angustia como método: el vacío kierkegaardiano en la escritura de Alejandra Pizarnik",
                speakers: "Yoaldris Ines Luna Fabregas",
              },
              {
                title: "Análisis del pensamiento pesimista de Emil Cioran: consideraciones sobre el suicidio",
                speakers: "María Camila Núñez Ureche",
              },
              {
                title: "Crisis de identidad del sujeto en la obra La metamorfosis: alienación e intersubjetividad en Sartre",
                speakers: "María José Jiménez Carreño",
              },
            ],
          },
          {
            id: "clausura-general",
            time: "16:00 – 17:00 PM",
            location: "Salón Múltiple 2",
            title: "Clausura General",
            kind: "closing",
            moderator: "Por definir",
            note: "Cierre del XX Foro Nacional de Filosofía (Obra de teatro)",
          },
        ],
      },
    ],
  },
];
