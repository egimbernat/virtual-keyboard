const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const summaryElement = document.getElementById('summary');
const resultElement = document.getElementById('result');
const detailedSummaryElement = document.getElementById('detailed-summary');
const questionForm = document.getElementById('question-form');
const modeSelection = document.getElementById('mode-selection');
const adminContainer = document.getElementById('admin-container');

//let questions = shuffleArray(JSON.parse(localStorage.getItem('questions')) ||

let questions = shuffleArray( [
        {
            "question": "Con rotor antihorario cuando aumenta la velocidad la sustentacion translacional es:",
            "answers": ["Es efectiva sube el morro y tiende a girar a izquierda", "Es efectiva sube el morro y alabea a la derecha", "Es menos efectiva baja el morro y a la derecha", "No afecta"],
            "correct": 1
        },
        {
            "question": "0,85:",
            "answers": ["Velocidad subsonica", "Transonica", "Supersonica", "Hipersonica"],
            "correct": 0
        },
        {
            "question": "Un helicoptero que tiene velocidad 0,8 es",
            "answers": ["Subsonico", "Transonico", "Hipersonico", "Supersonico"],
            "correct": 1
        },
        {
            "question": "Que tipo de capa aumenta mas la velocidad en superficie",
            "answers": ["Laminar", "Turbulento", "De transicion", "Potencial"],
            "correct": 0
        },
        {
            "question": "En un flare que es lo que ocurre:",
            "answers": ["Empuje inverso, aumentan RPM, aumenta la potencia del rotor", "Empuje inverso, disminuye RPM, disminuye la potencia del rotor", "Disminuye el momento radial y aumenta el empuje"],
            "correct": 0
        },
        {
            "question": "Porque los rotores tandem no necesitan antitorque:",
            "answers": ["Porque los motores giran en la misma direccion", "Porque los motores giran en direccion opuesta", "Porque los rotores giran en la misma direccion", "Porque los rotores giran en direccion opuesta"],
            "correct": 3
        },
        {
            "question": "El sobrecabezeo es generado por:",
            "answers": ["Un movimiento de bandera", "Aumento de energia potencial", "En estacionario", "Al ascender verticalmente"],
            "correct": 2
        },
        {
            "question": "Si la velocidad aumenta al doble el radio de giro sera",
            "answers": ["El cuadruple", "El triple", "El doble", "No cambia"],
            "correct": 0
        },
        {
            "question": "En un viraje el angulo depende de:",
            "answers": ["TAS", "Peso"],
            "correct": 0
        },
        {
            "question": "El aumento de sustentacion es controlado por",
            "answers": ["El angulo entre la cuerda y el flujo relativo de viento", "El angulo entre la cuerda y eje de rotacion", "Cerrando el puno de gases y bajando colectivo", "Entrando en autorrotacion"],
            "correct": 0
        },
        {
            "question": "La simetría de sustentación como se corrige:",
            "answers": ["Aumentando el ángulo de ataque de las palas en avance y disminuyendo en las palas de retroceso", "Aumentando el ángulo de ataque de las palas en retroceso y disminuyendo en las palas de avance"],
            "correct": 1
        },
        {
            "question": "Las vibraciones verticales de baja frecuencia son:",
            "answers": ["Debido al rotor de cola", "Debido al rotor principal", "Debido a un desbalance longitudinal or lateral del rotor principal"],
            "correct": 2
        },
        {
            "question": "La estabilidad longitudinal se refiere a:",
            "answers": ["Retorno de la estabilidad tras ser alterado retomando la estabilidad en relacion al eje translacional", "Retorno de la estabilidad tras ser alterado retomando la estabilidad en relacion al eje lateral"],
            "correct": 0
        },
        {
            "question": "Los rotores coaxiales son:",
            "answers": ["Rotores que giran en direccion opuesta montados sobre el mismo mastil", "Rotores que giran en misma direccion montados sobre el mismo mastil", "Rotores que giran en direccion opuesta montados en diferente mastil"],
            "correct": 0
        },
        {
            "question": "Si se pierde el rotor de cola",
            "answers": ["Se debe entrar en autorotacion y cerrar el puno de gases", "Se debe entrar en autorotacion", "El estabilizador horizontal provee el suficiente control direccional para que el piloto pueda maniobrar"],
            "correct": 0
        },
        {
            "question": "¿Qué tipos de flujo de aire se pueden observar alrededor del perfil aerodinámico de una pala de rotor?",
            "answers": ["Flujo de aire laminar en el borde de ataque flujo de aire turbulento más atrás", "Flujo de aire turbulento en toda la superficie superior", "Flujo de aire laminar en toda la superficie superior", "Flujo de aire turbulento en el borde de ataque flujo de aire laminar más atrás"],
            "correct": 0
        },
        {
            "question": "El eje de rotación virtual de un rotor es…",
            "answers": ["perpendicular al plano del cubo", "perpendicular al plano de la trayectoria de la punta", "paralelo al eje del rotor principal", "perpendicular al plano que contiene el plato cíclico"],
            "correct": 1
        },
        {
            "question": "Un helicóptero con un rotor que gira en el sentido contrario a las agujas del reloj visto desde arriba flota lateralmente hacia la derecha. ¿Cuál es el ángulo de azimut donde las palas del rotor principal tienen el mayor ángulo de paso?",
            "answers": ["90°", "0°", "180°", "270°"],
            "correct": 2
        },
        {
            "question": "¿Por qué se acelera inicialmente el ascenso de un helicóptero después de un aumento del ángulo de cabeceo?",
            "answers": ["El flujo de aire inicialmente alto aumenta el empuje del rotor hasta que la menor densidad del aire reduce el empuje del rotor nuevamente", "La inercia del aire aumenta temporalmente el ángulo de ataque efectivo hasta que un componente adicional de la velocidad de ascenso reduce nuevamente el ángulo de ataque efectivo", "La conversión de aire energético en energía cinética del rotor disminuye continuamente a medida que aumenta la densidad de altitud", "El ángulo de inclinación mayor provoca una disminución y una compresión del flujo de aire hasta que la velocidad de ascenso corresponde a la velocidad inducida a través del disco del rotor principal"],
            "correct": 1
        },
        {
            "question": "¿Qué opción describe el término 'disimetría de elevación lateral'?",
            "answers": ["La diferencia en el rendimiento requerido durante el efecto de vuelo estacionario dentro y fuera del suelo", "La mayor sustentación en la región exterior del rotor en comparación con la región interior", "Durante el vuelo de crucero la pala del rotor que avanza tiene más flujo de aire que la pala del rotor que retrocede", "El desplazamiento de las fuerzas impulsoras hacia la pala del rotor que avanza en una autorrotación vertical"],
            "correct": 2
        },
        {
            "question": "El flujo de aire inducido en el rotor de un helicóptero en vuelo nivelado tiene el mayor valor en el…",
            "answers": ["pala del rotor en retirada", "zona del rotor delantero", "zona del rotor trasero", "pala del rotor en avance"],
            "correct": 2
        },
        {
            "question": "¿Qué lugar de aterrizaje (sin viento) evita que se afecte el efecto suelo?",
            "answers": ["Terreno inclinado", "Terreno llano", "Helipuerto elevado", "Claro del bosque estrecho"],
            "correct": 1
        },
        {
            "question": "¿Cuál es la forma correcta de contrarrestar el estado del anillo de vórtice?",
            "answers": ["Aumentar las RPM colectivas y disminuir las RPM del rotor", "Abre el acelerador y tira hacia atrás la palanca", "Levantar colectivo y tirar hacia atrás el colectivo", "Intenta ganar velocidad y entrar en autorrotación"],
            "correct": 3
        },
        {
            "question": "¿Cuál es el efecto del estado del anillo de vórtice?",
            "answers": ["Fluctuaciones en las RPM del rotor y del motor", "Descenso estable y vibraciones de alta frecuencia en el helicóptero", "Alta tasa de descenso y movimientos irregulares de cabeceo balanceo y guiñada", "Disminución de la velocidad de descenso y fuertes vibraciones del motor"],
            "correct": 2
        },
        {
            "question": "¿Qué causa el desfase entre el desplazamiento y el aleteo de una pala de rotor?",
            "answers": ["Redondeo de las puntas de las palas del rotor", "Inercia masa y fuerzas aerodinámicas", "Fricción en los husillos de las palas del rotor", "Ángulo de avance o retroceso de 90°"],
            "correct": 1
        },
        {
            "question": "Se utiliza una bisagra delta-tres para permitir...",
            "answers": ["la pala que avanza gira alrededor de la bisagra", "para un ángulo de paso reducido en una pala que aletea hacia arriba", "la pala que avanza se arrastre sobre la bisagra", "la pala que avanza se mueva alrededor de la bisagra"],
            "correct": 1
        },
        {
            "question": "¿A qué se debe un aumento de estabilidad en un helicóptero?",
            "answers": ["Una mejora del control bajo factores de carga negativos", "Una disminución de las fuerzas de control requeridas", "Un aumento de la seguridad general de los vuelos", "Una optimización de la masa máxima del helicóptero"],
            "correct": 2
        },
        {
            "question": "¿Por qué son tan importantes los criterios de estabilidad de un helicóptero?",
            "answers": ["La gran estabilidad aumenta la masa máxima de despegue", "La baja estabilidad reduce las fuerzas de control disponibles", "La falta de estabilidad puede provocar la pérdida de control", "La alta estabilidad evita factores de carga bajos"],
            "correct": 2
        },
        {
            "question": "¿Cuál es el propósito del estabilizador vertical?",
            "answers": ["Compensación de la estabilidad del rotor de cola", "Reducción de la estabilidad de maniobra", "Mejora de la estabilidad direccional", "Ajuste de la estabilidad longitudinal"],
            "correct": 2
        },
        {
            "question": "¿Qué comportamiento muestra un helicóptero sin sistemas de estabilización ante perturbaciones externas en vuelo estacionario sin acción correctiva?",
            "answers": ["Estáticamente estable y dinámicamente indiferente", "Estáticamente estable y dinámicamente estable", "Estáticamente indiferente y dinámicamente inestable", "Estáticamente estable y dinámicamente inestable"],
            "correct": 3
        },
        {
            "question": "Rotor de cola envuelto:",
            "answers": ["Fenestron", "Coaxial", "Notar"],
            "correct": 0
        },
        {
            "question": "¿Cuándo es más probable que tengamos sobrecabeceo?",
            "answers": ["Maniobra de bandera", "Vuelo estacionario", "Cuando se requiere más potencia", "Cuando se requiere menos potencia"],
            "correct": 1
        },
        {
            "question": "Si el helicóptero alabea hacia derecha que haremos para volver a posición normal:",
            "answers": ["Cíclico posición neutra", "Colectivo posición neutra", "Cíclico hacia delante", "Cíclico hacia atrás"],
            "correct": 0
        },
        {
            "question": "La pérdida depende de:",
            "answers": ["Ángulo de ataque", "Peso", "Temperatura"],
            "correct": 0
        },
        {
            "question": "Si queremos girar la dirección del helicóptero como lo hacemos:",
            "answers": ["Cambiando el paso del rotor de cola", "Cambiando las RPM del rotor de cola", "Moviendo el cíclico hacia la dirección de giro"],
            "correct": 2
        },
        {
            "question": "Vibraciones baja frecuencia:",
            "answers": ["Rotor principal", "Rotor de cola", "Motor"],
            "correct": 0
        },
        {
            "question": "Vibraciones alta frecuencia:",
            "answers": ["motor", "Rotor de cola", "Motor y rotor de cola", "Rotor principal"],
            "correct": 2
        },
        {
            "question": "Velocidad transónica:",
            "answers": ["Alrededor de 1 Mach", "Arriba de Match 1", "A partir de 0,8"],
            "correct": 0
        },
        {
            "question": "En autorotacion:",
            "answers": ["La rueda libre desconecta el motor de la transmision", "La rueda libre desconecta el motor del rotor principal", "El rotor principal hace girar al motor"],
            "correct": 0
        },
        {
            "question": "¿Cuál de las relaciones establecidas entre sustentación y resistencia se aplica mejor para un helicóptero en vuelo (levantamiento: resistencia)?",
            "answers": ["1: 2", "1: 45", "45:1", "2: 1"],
            "correct": 2
        },
        {
            "question": "¿Cómo se puede reducir la resistencia inducida en la punta de la pala del rotor?",
            "answers": ["Reducción del coeficiente de sustentación en la punta de la pala", "Ángulo de paso constante a lo largo de la longitud de las palas del rotor", "Larguero metálico adicional en el interior del perfil de la pala del rotor", "Paneles embellecedores en el borde trasero del perfil de la pala del rotor"],
            "correct": 0
        },
        {
            "question": "El efecto suelo se nota por...",
            "answers": ["mayores requerimientos de energía", "fuertes vibraciones horizontales", "menores requisitos de energía", "fuertes oscilaciones verticales"],
            "correct": 2
        },
        {
            "question": "Sin movimientos correctivos un helicóptero flotando en efecto suelo en condiciones sin viento ejecutará...",
            "answers": ["ligeros movimientos ascendentes y descendentes", "movimientos rápidos de guiñada", "movimiento de cabeceo alrededor del centro", "movimientos de balanceo a aproximadamente 60°"],
            "correct": 0
        },
        {
            "question": "Durante una autorrotación un helicóptero acelera de 60 a 90 nudos sin más correcciones. Las RPM del rotor...",
            "answers": ["variar", "disminuir", "aumentar", "permanecer constante"],
            "correct": 1
        },
        {
            "question": "Donde se siente la vibración de alta frecuencia del rotor de cola:",
            "answers": ["Pedales", "Cíclico", "Colectivo", "Techo"],
            "correct": 0
        },
    {
        "question": "En vuelo hacia adelante, la pala de retirada experimenta una inversión del flujo de aire que:",
        "answers": [
            "Aumenta la tendencia del disco a batir hacia atrás",
            "Disminuye la resistencia del rotor en la pala de avance",
            "Aumenta la resistencia del rotor en la pala de retirada",
            "Aumenta la tendencia del disco a batir hacia adelante"
        ],
        "correct": 0
    },
    {
        "question": "¿Qué sucede cuando ocurre un sobrepaso?",
        "answers": [
            "Las RPM del rotor disminuyen y el ángulo de cono disminuye",
            "Las RPM del rotor aumentan y el ángulo de cono aumenta",
            "Las RPM del rotor disminuyen y el ángulo de cono aumenta",
            "Las RPM del rotor aumentan y el ángulo de cono disminuye"
        ],
        "correct": 2
    },
    {
        "question": "¿Con qué se asocia la inversión del flujo de aire?",
        "answers": [
            "Vuelo a alta velocidad hacia adelante, originándose en la raíz de la pala de retirada",
            "Vuelo a baja velocidad hacia adelante, originándose en la punta de la pala de retirada",
            "Vuelo a alta velocidad hacia adelante, originándose en la punta de la pala de retirada",
            "Vuelo a baja velocidad hacia adelante, originándose en la raíz de la pala de retirada"
        ],
        "correct": 0
    },
    {
        "question": "¿A qué altura del patín es más efectivo el efecto suelo?",
        "answers": [
            "Sobre hierba alta",
            "A 4 pies",
            "Alrededor de 3/4 del diámetro del rotor",
            "Por debajo de 4 pies"
        ],
        "correct": 3
    },
    {
        "question": "¿Por qué la velocidad máxima durante el vuelo hacia atrás es menor que en el vuelo hacia adelante?",
        "answers": [
            "el rango de control se reduce en la dirección hacia atrás, junto con la estabilidad direccional del fuselaje",
            "interferencia aerodinámica entre el rotor principal y el rotor de cola",
            "el espacio restringido entre el rotor principal y el rotor de cola",
            "el aumento del arrastre parásito al volar hacia atrás"
        ],
        "correct": 0
    },
    {
        "question": "Durante la autorrotación, un aumento en el paso colectivo ____ la fuerza del rotor, ____ las RPM del rotor y ____ la tasa de descenso.",
        "answers": [
            "aumenta; disminuye; disminuye",
            "disminuye; disminuye; aumenta",
            "aumenta; aumenta; aumenta",
            "disminuye; disminuye; disminuye"
        ],
        "correct": 0
    },
    {
        "question": "¿Con qué se asocia el flujo de aire invertido sobre parte del disco del rotor?",
        "answers": [
            "vuelo a alta velocidad hacia adelante",
            "vórtice de anillo",
            "autorrotación",
            "flotando en efecto suelo"
        ],
        "correct": 0
    },
    {
        "question": "La potencia del perfil del rotor es la requerida para:",
        "answers": [
            "Mantener las RPM del rotor con la palanca colectiva completamente hacia abajo y para accionar el rotor de cola y los accesorios",
            "Contrarrestar el arrastre inducido",
            "Contrarrestar el arrastre parásito",
            "Inducir un flujo"
        ],
        "correct": 0
    },
    {
        "question": "¿Qué es el Centro de Presión en relación con una sección de aerofolio?",
        "answers": [
            "Donde actúa la reacción total",
            "Donde el flujo de aire se separa de la sección del aerofolio",
            "Donde ocurre el espesor máximo del aerofolio",
            "Donde actúa el peso total de la aeronave"
        ],
        "correct": 0
    },
    {
        "question": "¿Cuál es el propósito del rango negativo del paso del rotor de cola?",
        "answers": [
            "Se usa para el control de guiñada en autorrotación",
            "para eliminar el aleteo del rotor de cola",
            "para contrarrestar la deriva del rotor de cola",
            "para el control al realizar un giro puntual a favor del torque"
        ],
        "correct": 0
    },
    {
        "question": "Durante un descenso autorrotativo, la distancia de planeo máxima se obtendrá a:",
        "answers": [
            "una velocidad mayor que la asociada con la tasa mínima de descenso",
            "una velocidad ligeramente inferior a la asociada con la tasa mínima de descenso",
            "la velocidad asociada con la tasa mínima de descenso",
            "la velocidad mínima que mantendrá las RPM del rotor"
        ],
        "correct": 0
    },
    {
        "question": "¿Por qué se determina el ángulo de cono?",
        "answers": [
            "La sustentación y la fuerza centrífuga producida por una pala",
            "La sustentación y el arrastre producido por una pala",
            "La fuerza centrífuga y las RPM del rotor",
            "El empuje del rotor y el arrastre del rotor"
        ],
        "correct": 0
    },
    {
        "question": "¿Qué tres características principales definen la velocidad máxima de un helicóptero?",
        "answers": [
            "el límite de compresibilidad de la pala de avance, el bloqueo de la pala de retirada y los límites de diseño del control cíclico",
            "el límite de RPM del rotor, la velocidad de retroceso y la inversión del flujo de aire",
            "la resistencia de la pala de retirada, el límite de velocidad de la pala y el límite de velocidad del rotor de cola",
            "el límite de diseño del control colectivo, la compresibilidad de las palas de avance y la inversión del flujo de aire"
        ],
        "correct": 0
    },
    {
        "question": "¿Qué es cierto respecto al Estado de Vórtice de Anillo?",
        "answers": [
            "Es una condición inestable que puede resultar en una tasa de descenso incontrolada",
            "Es una condición estable que reduce la tasa de descenso",
            "Es una condición estable que aumenta la tasa de descenso",
            "Normalmente se controla aumentando el paso colectivo"
        ],
        "correct": 0
    },
    {
        "question": "Si se aumenta el ángulo de cono:",
        "answers": [
            "el centro de gravedad de la pala se desplaza hacia adentro",
            "el centro de gravedad del helicóptero se desplaza hacia adelante",
            "el centro de gravedad del helicóptero se desplaza hacia atrás",
            "el centro de gravedad de la pala se desplaza hacia afuera"
        ],
        "correct": 0
    },
    {
        "question": "El ángulo de ataque de una pala de rotor de helicóptero es el ángulo entre:",
        "answers": [
            "la línea de cuerda de la pala y el flujo de aire relativo",
            "la línea de cuerda de la pala y el flujo de aire invertido",
            "la línea de cuerda de la pala y el plano de rotación",
            "la superficie inferior de la pala y el plano de trayectoria de la punta"
        ],
        "correct": 0
    },
    {
        "question": "Durante la autorrotación en un helicóptero con rotación en sentido antihorario visto desde arriba, el empuje del rotor de cola:",
        "answers": [
            "Se dirige hacia la izquierda cuando se ve desde atrás",
            "Es mayor que en el vuelo normal con motor",
            "Actúa en la misma dirección que en el vuelo normal con motor",
            "Se dirige hacia la derecha cuando se ve desde atrás"
        ],
        "correct": 0
    },
    {
        "question": "¿A qué se debe la resonancia del suelo?",
        "answers": [
            "una acoplamiento entre la frecuencia de un desequilibrio del rotor principal y la frecuencia natural del tren de aterrizaje",
            "una frecuencia alta y una vibración de baja amplitud que emana de áreas de piel delgada como puertas y paneles",
            "la estela del rotor principal que afecta al rotor de cola cuando está en el suelo o cerca de él",
            "una velocidad de balanceo que no puede ser detenida con el ciclo completo opuesto"
        ],
        "correct": 0
    },
    {
        "question": "En vuelo hacia adelante, si las RPM del rotor aumentan por encima de los límites especificados:",
        "answers": [
            "las grandes fuerzas centrífugas imponen cargas severas y posiblemente excesivas en el buje",
            "el aumento de la fuerza centrífuga disminuye el ángulo de cono y reduce las RPM a su nivel original",
            "la mayor resistencia de la pala automáticamente hace que las RPM se reduzcan a su nivel original",
            "se inducirá una pérdida de la pala de retirada a una velocidad reducida hacia adelante"
        ],
        "correct": 0
    },
    {
        "question": "El empuje total del rotor de un helicóptero...",
        "answers": [
            "está en ángulo recto con el plano de rotación, actuando a través del buje.",
            "actúa a través del eje del eje.",
            "está en ángulo recto con el plano de rotación, pasando por el centro de gravedad.",
            "actúa a través del centro de presión de cada pala."
        ],
        "correct": 0
    },
    {
        "question": "Cual es la secuencia correcta al entrar en autorotacion",
        "answers": [
            "Levantar colectivo y empujar morro hacia abajo",
            "Levantar colecyivo y hacer flare",
            "Bajar colectivo y hacer flare",
            "Bajar colectivo y empujar morro hacia abajo",
        ],
        "correct": 2
    },
    ]);

let currentQuestionIndex = 0;
let score = 0;
let examMode = true;
let selectedMode = 'study';
let userAnswers = [];

function startQuiz(mode) {
    selectedMode = mode;
    examMode = mode === 'exam';
    modeSelection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    adminContainer.classList.add('hidden');
    currentQuestionIndex = 0; // Resetting for new quiz
    score = 0;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
    shuffledAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        const input = document.createElement('input');
        const label = document.createElement('label');
        input.type = 'radio';
        input.name = 'answer';
        input.value = currentQuestion.answers.indexOf(answer);
        input.id = `answer${index}`;
        label.htmlFor = `answer${index}`;
        label.textContent = answer;
        answerDiv.appendChild(input);
        answerDiv.appendChild(label);
        answersElement.appendChild(answerDiv);
        input.addEventListener('change', () => selectAnswer(index, currentQuestion.answers.indexOf(answer)));
    });
    nextButton.classList.add('hidden');
}

function selectAnswer(index, originalIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = originalIndex;
    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);
    if (!selectedAnswer) return;

    if (examMode) {
        nextButton.classList.remove('hidden');
        return;
    }

    if (originalIndex === currentQuestion.correct) {
        score++;
        selectedAnswer.parentElement.classList.add('correct');
    } else {
        selectedAnswer.parentElement.classList.add('incorrect');
        document.querySelector(`input[value="${currentQuestion.correct}"]`).parentElement.classList.add('correct');
    }
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showSummary();
    }
}

function showSummary() {
    quizContainer.classList.add('hidden');
    summaryElement.classList.remove('hidden');

    // Calculate final score in exam mode
    if (examMode) {
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correct) {
                score++;
            }
        });
    }

    const percentage = (score / questions.length) * 100;
    const pass = percentage >= 75 ? "Pass" : "Fail";
    resultElement.textContent = `Score: ${score}/${questions.length} (${percentage.toFixed(2)}%) - ${pass}`;

    detailedSummaryElement.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        const userAnswerText = question.answers[answer] || 'No answer selected';
        const correctAnswerText = question.answers[question.correct];

        const summaryItem = document.createElement('div');
        summaryItem.innerHTML = `
      <h3>${question.question}</h3>
      <p>Your answer: ${userAnswerText}</p>
      <p>Correct answer: ${correctAnswerText}</p>
    `;
        detailedSummaryElement.appendChild(summaryItem);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

questionForm.addEventListener('submit', event => {
    event.preventDefault();
    const newQuestion = document.getElementById('new-question').value;
    const newAnswer1 = document.getElementById('new-answer-1').value;
    const newAnswer2 = document.getElementById('new-answer-2').value;
    const newAnswer3 = document.getElementById('new-answer-3').value;
    const newAnswer4 = document.getElementById('new-answer-4').value;
    const correctAnswer = parseInt(document.getElementById('correct-answer').value) - 1;

    questions.push({
        question: newQuestion,
        answers: [newAnswer1, newAnswer2, newAnswer3, newAnswer4],
        correct: correctAnswer
    });

    localStorage.setItem('questions', JSON.stringify(questions));

    questionForm.reset();
    alert("Question added!");
});

document.addEventListener('DOMContentLoaded', () => {
    if (!quizContainer.classList.contains('hidden')) {
        adminContainer.classList.add('hidden');
    }
});
