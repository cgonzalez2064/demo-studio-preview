(function(){
  "use strict";
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches || root.classList.contains('a11y-motion');

  /* ============================================================
     I18N — Spanish (default) / English dictionary + toggle.
     Every key that appears in cms/content/schema.php is editable in the
     Content Manager (/admin); values edited there are published into
     index.html as an inert JSON block (#siteContent) and merged below.
     tools/extract-defaults.mjs regenerates cms/content/defaults.php from
     this object, so this is the single source of the approved copy.
     ============================================================ */
  var I18N = {
    es: {
      "meta.title": "Alero · Estudio de arquitectura e interiorismo en Guatemala",
      "meta.description": "Estudio de arquitectura e interiorismo en la Ciudad de Guatemala: casas, remodelaciones, oficinas y locales, con planos, licencias y supervisión de obra.",
      "og.locale": "es_GT",
      "brand.aria": "Alero, ir al inicio",
      "lang.toggle_aria": "Cambiar idioma a inglés",
      "lang.switch_to": "English",
      "menu.open_aria": "Abrir menú",
      "menu.close_aria": "Cerrar menú",
      "mobilenav.aria": "Menú principal",
      "skip": "Saltar al contenido",
      "backtotop.aria": "Volver arriba",
      "a11y.new_tab": " (se abre en una pestaña nueva)",
      "a11y.open_aria": "Opciones de accesibilidad",
      "a11y.close": "Listo",
      "a11y.size_small": "Texto normal",
      "a11y.size_medium": "Texto grande",
      "a11y.size_large": "Texto muy grande",
      "actions.call": "Llamar",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Cómo llegar",
      "actions.aria": "Acciones rápidas",
      "whatsapp.aria": "Escríbanos por WhatsApp (se abre en una pestaña nueva)",
      "contact.map_aria": "Abrir la ubicación del estudio en Google Maps (se abre en una pestaña nueva)",
      "nav.services": "Servicios",
      "nav.maternity": "Proyecto destacado",
      "nav.facilities": "El estudio",
      "nav.patients": "Cómo trabajamos",
      "nav.insurance": "Modalidades",
      "nav.contact": "Contacto",
      "nav.emergency": "Llamar",
      "hero.eyebrow": "Estudio de arquitectura e interiorismo",
      "hero.title": "Espacios pensados para <em>vivirse</em> bien",
      "hero.desc": "Diseñamos casas, interiores, oficinas y locales comerciales en Guatemala. Un mismo equipo se ocupa del diseño, los planos, las licencias y la supervisión de la obra, con un presupuesto por escrito antes de construir.",
      "hero.cta1": "Agendar una visita",
      "hero.cta2": "Escribir por WhatsApp",
      "hero.status": "Agenda abierta para proyectos de 2027",
      "hero.badge1": "Primera visita sin costo",
      "hero.badge2": "Presupuesto por escrito",
      "hero.badge3": "Renders antes de construir",
      "quick.emergency": "Llamar al estudio",
      "quick.whatsapp": "WhatsApp directo",
      "quick.visits": "Horario de atención",
      "quick.directions": "Cómo llegar",
      "quick.aria": "Información rápida",
      "stat1.value": "15",
      "stat1.label": "años de trayectoria",
      "stat2.value": "210",
      "stat2.label": "proyectos entregados",
      "stat3.value": "18",
      "stat3.label": "profesionales en el equipo",
      "stat4.value": "48,000",
      "stat4.label": "m² diseñados",
      "services.eyebrow": "Servicios",
      "services.title": "Del primer trazo a la entrega de llaves",
      "services.desc": "Puede contratar el diseño por separado o el proyecto completo con supervisión de obra. En ambos casos trabaja con un arquitecto responsable, un calendario por fases y un presupuesto aprobado por usted.",
      "services.cta": "Consultar por WhatsApp",
      "services.more": "Ver más",
      "services.more_aria": "Ver más sobre {name}",
      "services.call": "Llamar",
      "services.close": "Cerrar",
      "service1.title": "Arquitectura residencial",
      "service1.desc": "Casas nuevas diseñadas a partir de su terreno, su familia y su presupuesto.",
      "service1.more": "Antes de dibujar, visitamos el terreno y conversamos sobre cómo vive su familia: horarios, visitas, mascotas y planes a futuro.\n\nCon esa información desarrollamos el anteproyecto, el proyecto ejecutivo y el presupuesto de obra, y le acompañamos en los trámites de licencia.\n\nCada etapa se presenta con planos y renders para su aprobación antes de avanzar a la siguiente.",
      "service2.title": "Interiorismo",
      "service2.desc": "Distribución, materiales, color, mobiliario e iluminación para cada ambiente.",
      "service2.more": "Diseñamos interiores completos o ambientes puntuales, como la sala, la cocina o el dormitorio principal.\n\nEl proyecto incluye la distribución del mobiliario, la paleta de materiales y colores, el diseño de iluminación y una lista de compras con proveedores y precios.\n\nSi lo desea, coordinamos la compra, la fabricación y la instalación hasta dejar el espacio listo para usarse.",
      "service3.title": "Remodelación y ampliación",
      "service3.desc": "Renovamos casas y departamentos existentes, con un plan para vivir durante la obra.",
      "service3.more": "Evaluamos el estado de la construcción existente, las instalaciones y la estructura antes de proponer cambios.\n\nPlanificamos la obra por etapas para reducir las molestias, sobre todo cuando la familia sigue viviendo en la casa.\n\nRecibe un presupuesto detallado por partidas y un calendario semanal de avance.",
      "service4.title": "Oficinas y locales comerciales",
      "service4.desc": "Espacios de trabajo, tiendas y restaurantes diseñados para su operación y su marca.",
      "service4.more": "Diseñamos oficinas, tiendas, restaurantes y consultorios a partir de cómo trabaja su equipo y cómo se mueven sus clientes.\n\nCoordinamos los requisitos del centro comercial o del edificio, las instalaciones especiales y la imagen de marca.\n\nPlanificamos la obra para cumplir la fecha de apertura acordada.",
      "service5.title": "Anteproyecto y renders",
      "service5.desc": "Plantas, volumetría e imágenes realistas para decidir antes de construir.",
      "service5.more": "El anteproyecto define la distribución, los volúmenes y el estilo de su proyecto.\n\nLo presentamos con plantas, elevaciones y renders realistas, y un recorrido virtual en los proyectos completos.\n\nLe permite comparar opciones, pedir cambios y estimar el costo de obra antes de invertir en los planos constructivos.",
      "service6.title": "Planos y licencias",
      "service6.desc": "Juego completo de planos constructivos y gestión de la licencia municipal.",
      "service6.more": "Elaboramos los planos de arquitectura, estructura e instalaciones, coordinados con ingenieros colegiados.\n\nPreparamos el expediente y damos seguimiento a la licencia de construcción ante la municipalidad correspondiente.\n\nLos planos quedan a su nombre y le entregamos los archivos digitales al finalizar.",
      "service7.title": "Dirección y supervisión de obra",
      "service7.desc": "Visitas programadas, control de calidad y bitácora semanal con fotografías.",
      "service7.more": "Supervisamos que la obra se construya según los planos, las especificaciones y el presupuesto aprobados.\n\nRevisamos las estimaciones del contratista antes de cada pago y le enviamos una bitácora semanal con fotografías y avance.\n\nSi la obra la ejecuta su propio contratista, también podemos supervisarla de forma independiente.",
      "service8.title": "Mobiliario a medida",
      "service8.desc": "Cocinas, clósets, libreras y muebles fijos diseñados para su espacio.",
      "service8.more": "Diseñamos muebles que aprovechan cada centímetro: cocinas, clósets, centros de entretenimiento, escritorios y recepciones.\n\nElaboramos planos de taller con medidas, materiales y herrajes, y los fabricamos con talleres de confianza.\n\nRevisamos la instalación y los acabados antes de la entrega.",
      "service9.title": "Paisajismo y exteriores",
      "service9.desc": "Jardines, terrazas y áreas sociales al aire libre, con plantas adecuadas al clima.",
      "service9.more": "Diseñamos jardines, terrazas, piscinas y áreas de asador integrados a la arquitectura de la casa.\n\nElegimos especies adecuadas al clima y al mantenimiento que usted puede darles.\n\nIncluimos el riego, la iluminación exterior y los materiales de piso.",
      "service10.title": "Diseño de iluminación",
      "service10.desc": "Luz natural y artificial planificadas para cada actividad y cada hora del día.",
      "service10.more": "Analizamos el recorrido del sol y proponemos aberturas, protecciones y colores que aprovechen la luz natural.\n\nDiseñamos la iluminación artificial por capas: general, de trabajo y de ambiente, con luminarias eficientes.\n\nEntregamos el plano de iluminación con las especificaciones de cada luminaria.",
      "service11.title": "Asesoría y factibilidad",
      "service11.desc": "Revisión de un terreno o inmueble antes de comprarlo o de invertir en él.",
      "service11.more": "Antes de comprar un terreno o un inmueble, revisamos lo que permite construir la normativa municipal y lo que costaría hacerlo.\n\nLe entregamos un informe con el potencial del inmueble, los riesgos y un estimado de inversión.\n\nTambién ofrecemos visitas de asesoría por horas para decisiones puntuales de diseño.",
      "maternity.eyebrow": "Proyecto destacado",
      "maternity.title": "Casa Ciprés: una casa de 1978 <em>abierta a la luz</em>",
      "maternity.desc": "Una familia compró una casa de dos niveles con ambientes cerrados y poca luz. Redistribuimos la planta baja, abrimos la fachada al jardín y renovamos las instalaciones, sin tocar la estructura principal. La obra se entregó en siete meses, dentro del presupuesto aprobado.",
      "maternity.cta": "Solicitar una propuesta",
      "projects.cta": "Descargar la ficha del proyecto en PDF",
      "projects.cta_aria": "Descargar la ficha del proyecto en PDF",
      "mfeat1.title": "Área útil: +35 %",
      "mfeat1.desc": "Más espacio aprovechable al eliminar pasillos y muros interiores sin función estructural.",
      "mfeat2.title": "Luz natural en todos los ambientes",
      "mfeat2.desc": "Ventanales hacia el jardín y una claraboya sobre la escalera.",
      "mfeat3.title": "Entrega en 7 meses",
      "mfeat3.desc": "De la licencia a la entrega de llaves, con bitácora semanal de avance.",
      "mfeat4.title": "Consumo eléctrico: −30 %",
      "mfeat4.desc": "Iluminación LED, ventilación cruzada y calentador solar.",
      "bag.title": "Prepare su primera visita",
      "bag.desc": "Marque lo que ya tiene a la mano. Con esta información, la propuesta es más precisa.",
      "bag1": "Ubicación y medidas del terreno o inmueble",
      "bag2": "Planos existentes, si los tiene",
      "bag3": "Fotografías del espacio actual",
      "bag4": "Presupuesto aproximado para la obra",
      "bag5": "Lista de ambientes y necesidades",
      "bag6": "Imágenes de referencia que le gusten",
      "bag7": "Fecha en la que desea habitar o abrir",
      "bag8": "Escritura o documento de propiedad",
      "bag9": "",
      "bag10": "",
      "bag.note": "Si le falta algún punto, lo definimos juntos en la visita.",
      "bag.progress": "{n} de {total} listos",
      "about.eyebrow": "Quiénes somos",
      "about.title": "Diseñamos con usted, no solo para usted",
      "about.desc": "Alero es un estudio guatemalteco de arquitectura e interiorismo. Reunimos en un mismo equipo a arquitectos, interioristas, dibujantes y supervisores de obra, para que su proyecto tenga un solo responsable desde el primer boceto hasta la entrega. Trabajamos con presupuestos por escrito, renders que usted aprueba antes de construir y una bitácora semanal durante la obra.",
      "about.art_caption": "Diseño, planos y obra en un mismo equipo.",
      "about.mission_title": "Nuestro propósito",
      "about.mission_desc": "Crear espacios cómodos, duraderos y fáciles de mantener, a la medida de quien los habita.",
      "about.vision_title": "Nuestro compromiso",
      "about.vision_desc": "Respetar el presupuesto aprobado, cumplir los plazos acordados y explicar cada decisión con claridad.",
      "why.title": "Por qué elegirnos",
      "why1": "Presupuesto escrito antes de construir",
      "why2": "Un arquitecto responsable de su proyecto",
      "why3": "Renders para aprobar cada ambiente",
      "why4": "Bitácora semanal de obra",
      "why5": "Planos y archivos a su nombre",
      "why6": "Proveedores y talleres verificados",
      "projects.eyebrow": "El estudio",
      "projects.title": "Un taller donde las ideas se prueban antes de construirse",
      "projects.desc": "Trabajamos en un mismo lugar el diseño, los materiales y la presentación de cada proyecto. Usted puede visitar el estudio, tocar las muestras y revisar los planos con el equipo.",
      "projects.view_details": "Ver fotos",
      "proj1.tag": "Diseño",
      "proj1.title": "Mesa de diseño",
      "proj1.desc": "Bocetos, plantas y detalles a mano y en digital, del primer trazo al plano final.",
      "proj2.tag": "Materiales",
      "proj2.title": "Materioteca",
      "proj2.desc": "Muestras de pisos, enchapes, maderas, telas y pinturas para elegir con el material en la mano.",
      "proj3.tag": "Presentación",
      "proj3.title": "Sala de presentación",
      "proj3.desc": "Pantalla para revisar renders y recorridos virtuales de su proyecto con el equipo.",
      "proj4.tag": "Ideas",
      "proj4.title": "Sala de ideas",
      "proj4.desc": "Sesiones de trabajo para ordenar necesidades, prioridades y presupuesto.",
      "proj5.tag": "Obra",
      "proj5.title": "Supervisión en obra",
      "proj5.desc": "Visitas programadas para revisar avance, calidad y medidas en cada etapa.",
      "proj6.tag": "Equipo",
      "proj6.title": "Área de trabajo",
      "proj6.desc": "Arquitectos, interioristas y dibujantes trabajando en el mismo espacio.",
      "amen.title": "Capacidades del equipo",
      "amen1.title": "Diseño arquitectónico",
      "amen1.desc": "Casas, edificios pequeños y locales.",
      "amen2.title": "Interiorismo",
      "amen2.desc": "Ambientes completos, del piso al cielo.",
      "amen3.title": "Modelado BIM",
      "amen3.desc": "Planos y cantidades coordinados en un modelo.",
      "amen4.title": "Renders y recorridos",
      "amen4.desc": "Imágenes realistas y video del proyecto.",
      "amen5.title": "Presupuestos",
      "amen5.desc": "Cuantificación por partidas y comparación de ofertas.",
      "amen6.title": "Licencias",
      "amen6.desc": "Expedientes municipales y seguimiento del trámite.",
      "amen7.title": "Supervisión",
      "amen7.desc": "Control de calidad, avance y pagos en obra.",
      "amen8.title": "Iluminación",
      "amen8.desc": "Planos de luz natural y artificial.",
      "amen9.title": "Mobiliario",
      "amen9.desc": "Planos de taller para muebles a medida.",
      "amen10.title": "Paisajismo",
      "amen10.desc": "Jardines, terrazas y riego.",
      "amen11.title": "Estructura e instalaciones",
      "amen11.desc": "Coordinación con ingenieros colegiados.",
      "amen12.title": "Sostenibilidad",
      "amen12.desc": "Ventilación, sombra y ahorro de energía y agua.",
      "projects.modal_close": "Cerrar",
      "projects.modal_prev": "Foto anterior",
      "projects.modal_next": "Foto siguiente",
      "projects.modal_dots_aria": "Elegir foto",
      "projects.modal_goto_slide": "Ir a la foto {n}",
      "projects.modal_image_of": "Foto {n} de {total}",
      "projects.modal_photo_alt": "Foto {n} de {title}",
      "projects.modal_placeholder_note": "Aún no hay fotografías de este espacio.",
      "process.eyebrow": "Cómo trabajamos",
      "process.title": "Un proceso claro, de la primera visita a la entrega",
      "process1.title": "Visita y programa",
      "process1.desc": "Conocemos el terreno o el espacio, escuchamos sus necesidades y definimos el presupuesto.",
      "process2.title": "Anteproyecto",
      "process2.desc": "Le presentamos plantas y renders para elegir y ajustar el diseño.",
      "process3.title": "Proyecto ejecutivo",
      "process3.desc": "Planos constructivos, especificaciones, presupuesto de obra y licencia.",
      "process4.title": "Obra y entrega",
      "process4.desc": "Supervisamos la construcción y le entregamos el espacio terminado.",
      "patients.eyebrow": "Clientes",
      "patients.title": "Información para nuestros clientes",
      "patients.desc": "Lo que conviene saber antes de iniciar, durante la primera visita y mientras se construye. Si tiene dudas, llámenos en horario de atención.",
      "patients.tab1": "Antes de iniciar",
      "patients.tab2": "Primera visita",
      "patients.tab3": "Durante la obra",
      "patients.tabs_aria": "Información para clientes",
      "visits.title": "Horario de atención",
      "visits.hours_text": "Lun–Vie 8:00–17:00",
      "visits.open": "Abierto ahora",
      "visits.closed": "Cerrado en este momento",
      "visits.next": "Abrimos: {time}",
      "visits.until": "Hasta las {time}",
      "guide1": "Defina un presupuesto total que incluya diseño, obra, mobiliario e imprevistos.",
      "guide2": "Considere por separado los honorarios del estudio y el costo de la construcción.",
      "guide3": "Verifique que el terreno tenga escritura, servicios y acceso antes de diseñar.",
      "guide4": "Pregunte qué incluye cada fase y qué se cotiza aparte.",
      "guide5": "Pida ver planos y renders de proyectos anteriores.",
      "guide6": "Una licencia municipal suele tomar de cuatro a ocho semanas; inclúyala en su calendario.",
      "guide7": "",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "La primera visita dura alrededor de una hora y se realiza en el terreno o en el espacio a intervenir.",
      "visit2": "Participa el arquitecto que estará a cargo de su proyecto.",
      "visit3": "Tomamos medidas y fotografías, y le compartimos las primeras ideas.",
      "visit4": "No es necesario tener planos: basta con la información de la lista.",
      "visit5": "En un plazo de cinco días hábiles recibe la propuesta de honorarios por escrito.",
      "visit6": "",
      "visit7": "",
      "visit8": "",
      "mat1": "Cada semana recibe una bitácora con fotografías, avance y pendientes.",
      "mat2": "Su arquitecto responde en horario hábil, en un plazo máximo de un día.",
      "mat3": "Revisamos cada estimación del contratista antes de que usted la pague.",
      "mat4": "Los cambios durante la obra se aprueban por escrito con su costo y su efecto en el plazo.",
      "mat5": "Al entregar, recibe los planos finales, garantías y un manual de mantenimiento.",
      "mat6": "",
      "ext.title": "Contactos directos",
      "ext1.label": "Proyectos nuevos",
      "ext2.label": "Clientes en obra",
      "ext3.label": "Compras y proveedores",
      "ext4.label": "Facturación",
      "insurance.eyebrow": "Modalidades",
      "insurance.title": "Formas de trabajar con nosotros",
      "insurance.desc": "Puede contratar una asesoría por visita, el diseño por metro cuadrado o el proyecto completo con supervisión de obra. Antes de iniciar, recibe una propuesta por escrito con lo que incluye cada fase.",
      "insurance.insurers_title": "Tipos de proyecto",
      "insurance.insurers_desc": "Conocemos la normativa, los materiales y los tiempos de obra de estos proyectos.",
      "insurance.missing": "¿Su proyecto no aparece? Conversemos.",
      "banks.title": "Modalidades",
      "pay.title": "Formas de pago",
      "pay1": "Anticipo al iniciar cada fase",
      "pay2": "Transferencia o depósito bancario",
      "pay3": "Tarjeta de crédito o débito",
      "pay4": "Supervisión: pago mensual durante la obra",
      "pay5": "Factura electrónica por cada pago",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "¿Conversamos sobre su proyecto?",
      "ctabanner.desc": "Agende una primera visita sin costo o escríbanos por WhatsApp. Le respondemos en horario de atención.",
      "ctabanner.cta": "Llamar ahora",
      "contact.eyebrow": "Contacto",
      "contact.title": "Cuéntenos sobre su proyecto",
      "contact.desc": "Escríbanos o llámenos para agendar una visita, solicitar una propuesta o resolver sus dudas. Le respondemos en horario de atención.",
      "contact.label_address": "Dirección",
      "contact.label_phone": "Teléfonos",
      "contact.label_email": "Correo",
      "contact.label_hours": "Horario",
      "contact.label_social": "Redes sociales",
      "contact.hours_value": "Lunes a viernes 8:00–17:00",
      "contact.map_open": "Abrir en Google Maps",
      "contact.vcard": "Guardar contacto",
      "contact.vcard_aria": "Guardar el contacto de Alero en su teléfono (archivo vCard)",
      "contact.waze": "Abrir en Waze",
      "contact.map_load": "Ver mapa aquí",
      "contact.map_note": "Al mostrar el mapa, Google recibe su dirección IP.",
      "contact.map_frame": "Mapa de la ubicación del estudio",
      "contact.phone_main": "Principal",
      "contact.phone_direct": "Directo",
      "form.title": "Envíenos un mensaje",
      "form.privacy_hint": "Por su privacidad, no incluya contraseñas ni datos bancarios en este formulario.",
      "form.name_label": "Nombre completo",
      "form.name_err": "Ingrese su nombre completo.",
      "form.phone_label": "Teléfono",
      "form.phone_err": "Ingrese un número de teléfono válido.",
      "form.email_label": "Correo electrónico",
      "form.email_err": "Ingrese un correo electrónico válido.",
      "form.service_label": "¿En qué podemos ayudarle?",
      "form.opt_placeholder": "Seleccione una opción",
      "form.opt_maternity": "Casa nueva",
      "form.opt_surgery": "Remodelación o ampliación",
      "form.opt_emergency": "Interiorismo",
      "form.opt_specialist": "Oficina o local comercial",
      "form.opt_lab": "Mobiliario a medida",
      "form.opt_insurance": "Asesoría o factibilidad",
      "form.opt_other": "Otro",
      "form.service_err": "Seleccione una opción.",
      "form.message_label": "Su mensaje",
      "form.message_err": "Escriba un poco más (mínimo 10 caracteres).",
      "form.optional": "(opcional)",
      "form.choose": "Seleccione una opción",
      "form.err_required": "Complete este campo.",
      "form.err_choose": "Elija una opción.",
      "form.err_number": "Ingrese un número válido.",
      "form.err_date": "Elija una fecha válida.",
      "form.consent_label": "Acepto que usen mis datos solo para responder a mi solicitud, según el Aviso de Privacidad.",
      "form.consent_err": "Necesitamos su autorización para responderle.",
      "form.hp_label": "No completar este campo",
      "form.submit": "Enviar mensaje",
      "form.note": "Usaremos sus datos únicamente para responder a su solicitud. Consulte nuestro <a href=\"privacy-notice.html\">Aviso de Privacidad</a>.",
      "form.fallback": "¿Prefiere no usar el formulario? Comuníquese por <a href=\"tel:+50200000000\">teléfono</a>, <a href=\"mailto:hola@alero.example\">correo</a> o <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Enviando…",
      "form.status_ok": "¡Gracias! Recibimos su mensaje y le contactaremos pronto.",
      "form.status_invalid": "Revise los campos marcados antes de enviar.",
      "form.status_error": "Hubo un problema al enviar su mensaje. Intente de nuevo o escríbanos por WhatsApp.",
      "form.status_rate_limited": "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos e intente de nuevo.",
      "form.status_offline": "Parece que no tiene conexión a internet. Revise su conexión e intente de nuevo.",
      "form.status_timeout": "El envío tardó demasiado. Revise su conexión e intente de nuevo.",
      "form.status_verifying": "Verificando que no es un robot…",
      "form.status_captcha": "No pudimos completar la verificación anti-spam. Recargue la página e intente de nuevo, o escríbanos por WhatsApp.",
      "form.status_turnstile": "Complete la verificación de seguridad y vuelva a enviar.",
      "form.captcha_idle": "Protegido contra spam con verificación automática.",
      "form.captcha_pending": "Verificación anti-spam en curso…",
      "form.captcha_ok": "Verificación anti-spam completa.",
      "form.captcha_error": "No se pudo cargar la verificación anti-spam. Recargue la página.",
      "faq.eyebrow": "Preguntas frecuentes",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Cuánto cuesta el diseño de un proyecto?",
      "faq.a1": "El interiorismo inicia en Q 180 por metro cuadrado y la arquitectura residencial en Q 320 por metro cuadrado, más IVA. La supervisión de obra se cotiza aparte, según la duración de la construcción.",
      "faq.q2": "¿Cuánto tiempo toma el diseño?",
      "faq.a2": "Un interiorismo toma de cuatro a seis semanas. Una casa nueva, de tres a cuatro meses entre anteproyecto, planos y licencia.",
      "faq.q3": "¿Ustedes construyen la obra?",
      "faq.a3": "Le ayudamos a elegir contratista con ofertas comparables y supervisamos la obra en su nombre. Así usted conserva el control del presupuesto y de los pagos.",
      "faq.q4": "¿De quién son los planos?",
      "faq.a4": "Los planos se elaboran para su inmueble y se le entregan en formato digital al terminar cada fase.",
      "faq.q5": "¿Pueden trabajar con mi presupuesto?",
      "faq.a5": "Sí. En la primera visita definimos el presupuesto total y diseñamos dentro de él. Si una idea lo supera, se lo indicamos antes de desarrollarla.",
      "faq.q6": "¿Cómo se aprueba el diseño?",
      "faq.a6": "Cada fase se presenta con planos y renders. Nada avanza a la siguiente fase sin su aprobación por escrito.",
      "faq.q7": "¿Trabajan fuera de la capital?",
      "faq.a7": "Sí. Tenemos proyectos en Antigua Guatemala, el lago de Atitlán y la costa sur, con visitas de supervisión programadas.",
      "faq.q8": "¿Qué incluye la entrega final?",
      "faq.a8": "Los planos finales de lo construido, las garantías de equipos y materiales, la lista de proveedores y un manual de mantenimiento.",
      "a11y.title": "Accesibilidad",
      "a11y.desc": "Ajuste el sitio a su comodidad. Sus preferencias se guardan en este dispositivo.",
      "a11y.text_size": "Tamaño del texto",
      "a11y.contrast": "Alto contraste",
      "a11y.motion": "Reducir animaciones",
      "a11y.links": "Subrayar enlaces",
      "a11y.spacing": "Texto más espaciado",
      "a11y.reset": "Restablecer",
      "footer.about_desc": "Estudio de arquitectura e interiorismo en la Ciudad de Guatemala. Casas, remodelaciones, oficinas y locales, con supervisión de obra.",
      "footer.links_heading": "Navegación",
      "footer.services_heading": "Servicios",
      "footer.contact_heading": "Contacto",
      "footer.privacy_link": "Aviso de Privacidad",
      "footer.rights": "Todos los derechos reservados.",
      "footer.made_by": "Sitio administrado por TeraDevs",
      "notice.text": "",
      "notice.close": "Cerrar aviso",
      "notice.label": "Aviso",
      "doctors.eyebrow": "Proyectos",
      "doctors.title": "Proyectos recientes",
      "doctors.desc": "Busque por nombre, tipo de proyecto o servicio. Cada ficha resume el encargo, lo que hicimos y el resultado.",
      "doctors.cta": "WhatsApp",
      "doctors.search_label": "Buscar proyecto",
      "doctors.search_ph": "Nombre, tipo o servicio",
      "doctors.filter_aria": "Filtrar por tipo de proyecto",
      "doctors.all": "Todos",
      "doctors.empty": "No encontramos proyectos con esa búsqueda.",
      "doctors.license": "Alcance",
      "doctors.hours": "Servicios",
      "doctors.insurers": "Año",
      "doctors.request": "Solicitar algo similar",
      "doctors.wa_msg": "Hola, vi el proyecto {name} ({specialty}) en el sitio de {site} y quisiera algo similar.",
      "doctors.results": "{n} proyectos",
      "doctors.result1": "1 proyecto",
      "appt.eyebrow": "Visita",
      "appt.title": "",
      "appt.desc": "Elija el tipo de proyecto y la fecha que prefiere. Le llamaremos para confirmar la hora y el lugar de la visita.",
      "appt.submit": "Solicitar visita",
      "appt.ok": "Gracias. Recibimos su solicitud y le llamaremos para confirmar la fecha y el lugar de la visita.",
      "appt.specialty_label": "Tipo de proyecto",
      "appt.doctor_label": "Proyecto de referencia",
      "appt.doctor_any": "Ninguno en particular",
      "appt.date_label": "Fecha preferida",
      "appt.time_label": "Horario preferido",
      "appt.time_morning": "Mañana",
      "appt.time_afternoon": "Tarde",
      "appt.time_any": "Cualquiera",
      "req.name_label": "Nombre completo",
      "req.phone_label": "Teléfono",
      "req.email_label": "Correo electrónico",
      "req.notes_label": "Comentarios",
      "req.health_notice": "Por su privacidad, no incluya contraseñas ni datos bancarios: solo lo necesario para atender su solicitud.",
      "pkg.eyebrow": "Servicios de diseño",
      "pkg.title": "Honorarios de referencia",
      "pkg.desc": "Tres puntos de partida que ajustamos a su proyecto. Todos incluyen un arquitecto responsable, presentación con renders y entrega de archivos digitales.",
      "pkg.from": "Desde",
      "pkg.cta": "Solicitar propuesta",
      "pkg.note": "Honorarios de referencia en quetzales, sin IVA. No incluyen el costo de la obra ni del mobiliario, que se pagan directamente al contratista y a los proveedores. Le confirmamos el precio en una propuesta por escrito.",
      "pkg.includes": "Incluye",
      "pkg.pdf": "Descargar el detalle de honorarios en PDF",
      "comp.title": "",
      "labprep.eyebrow": "Obras en curso",
      "labprep.title": "Avance de las obras que supervisamos",
      "labprep.desc": "Así se ve el avance en la bitácora: cada obra tiene un calendario aprobado y un porcentaje de avance que actualizamos cada semana.",
      "labprep.time": "Avance",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Indíquenos la ubicación del terreno o inmueble y el presupuesto que considera. Un arquitecto revisará la información y le contactará con sus observaciones, sin compromiso.",
      "insck.submit": "Solicitar revisión",
      "insck.ok": "Gracias. Un arquitecto revisará la información y le contactará con sus observaciones.",
      "insck.insurer_label": "Tipo de proyecto",
      "insck.other": "Otro tipo de proyecto",
      "insck.policy_label": "Presupuesto estimado de obra (Q)",
      "insck.holder_label": "Ubicación del inmueble",
      "insck.service_label": "Servicio de interés",
      "reviews.eyebrow": "Testimonios",
      "reviews.title": "Lo que dicen nuestros clientes",
      "reviews.based": "Calificación promedio (ejemplo)",
      "reviews.cta": "Deje su opinión en Google",
      "reviews.stars_aria": "{n} de 5 estrellas",
      "reviews.count_text": "{n} opiniones",
      "ctabanner.directions": "Cómo llegar al estudio",
      "actions.emergency": "Llamar",
      "svcpage.back": "Volver al inicio",
      "svcpage.doctors": "Proyectos relacionados",
      "svcpage.request_title": "¿Le interesa este servicio?",
      "svcpage.request_desc": "Solicite una propuesta en línea, escríbanos por WhatsApp o llámenos.",
      "svcpage.more_services": "Otros servicios",
      "services.page": "Ver página de {name}",
      "nav.doctors": "Proyectos",
      "doctor1.specialty": "",
      "doctor1.license": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.license": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.license": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.license": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.license": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.license": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.license": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.license": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.license": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.license": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.license": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.license": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hola, quisiera información sobre los servicios de Alero.",
      "brand.tagline": "Arquitectura e interiorismo",
      "nav.packages": "Honorarios",
      "profile.specialty": "Especialidad",
      "demo.banner": "Datos ficticios.",
      "demo.banner_cta": "Solicitar cotización",
      "demo.form_ok": "Vista previa: así se confirma el envío. En el sitio en producción, la solicitud se registra en el panel y se notifica por correo.",
      "demo.preview_label": "Vista previa",
      "demo.view_aria": "Ver otro paquete",
      "demo.view_clinic": "Estudio",
      "demo.view_practice": "Interiorista",
      "brand.aria@consultorio": "Alero Interiores, ir al inicio",
      "contact.map_aria@consultorio": "Abrir la ubicación del estudio en Google Maps (se abre en una pestaña nueva)",
      "contact.vcard_aria@consultorio": "Guardar el contacto de Alero Interiores en su teléfono (archivo vCard)",
      "contact.map_frame@consultorio": "Mapa de la ubicación del estudio",
      "ctabanner.directions@consultorio": "Cómo llegar al estudio",
      "nav.doctors@consultorio": "La interiorista",
      "doctors.wa_msg@consultorio": "Hola, quisiera agendar una visita con {name} ({specialty}).",
      "form.opt_surgery@consultorio": "Interiorismo de un ambiente",
      "form.opt_emergency@consultorio": "Interiorismo de toda la casa",
      "form.opt_specialist@consultorio": "Cocina o baño",
      "form.opt_lab@consultorio": "Mobiliario a medida",
      "form.opt_maternity@consultorio": "Consulta de diseño",
      "req.name_label@consultorio": "Nombre completo",
      "appt.specialty_label@consultorio": "Servicio",
      "insck.service_label@consultorio": "Servicio",
      "demo.packages": "Ver paquetes",
      "demo.sum_express": "Express · Q4,800 + IVA · plazo: 2 semanas",
      "demo.sum_starter": "Starter · Q6,800 + IVA · plazo: 3 semanas",
      "demo.sum_profesional": "Profesional · Q10,500 + IVA · plazo: 4 a 5 semanas",
      "demo.sum_premium": "Premium · desde Q19,500 + IVA · plazo: 6 a 8 semanas",
      "doctors.license@consultorio": "Experiencia",
      "doctors.hours@consultorio": "Atención",
      "doctors.insurers@consultorio": "Áreas",
      "profile.specialty@consultorio": "Cargo",
      "svcpage.doctors@consultorio": "A cargo",
      "projects.cta_aria@consultorio": "Descargar la presentación de servicios en PDF",
      "form.opt_insurance@consultorio": "Decoración y estilismo",
      "hero.seal": "Arquitectura · Interiorismo · Remodelación · Obra ·",
      "reviews.more": "Ver más opiniones",
      "demo.all": "Todas las demostraciones",
      "demo.strip_note": "Sitio de demostración de TeraDevs. Datos ficticios."
    },
    en: {
      "meta.title": "Alero · Architecture and interior design studio in Guatemala",
      "meta.description": "Architecture and interior design studio in Guatemala City: homes, renovations, offices and retail spaces, with drawings, permits and site supervision.",
      "og.locale": "en_US",
      "brand.aria": "Alero, go to home",
      "lang.toggle_aria": "Switch language to Spanish",
      "lang.switch_to": "Español",
      "menu.open_aria": "Open menu",
      "menu.close_aria": "Close menu",
      "mobilenav.aria": "Main menu",
      "skip": "Skip to content",
      "backtotop.aria": "Back to top",
      "a11y.new_tab": " (opens in a new tab)",
      "a11y.open_aria": "Accessibility options",
      "a11y.close": "Done",
      "a11y.size_small": "Normal text",
      "a11y.size_medium": "Large text",
      "a11y.size_large": "Extra large text",
      "actions.call": "Call",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Directions",
      "actions.aria": "Quick actions",
      "whatsapp.aria": "Message us on WhatsApp (opens in a new tab)",
      "contact.map_aria": "Open the studio location in Google Maps (opens in a new tab)",
      "nav.services": "Services",
      "nav.maternity": "Featured project",
      "nav.facilities": "The studio",
      "nav.patients": "How we work",
      "nav.insurance": "Ways to work",
      "nav.contact": "Contact",
      "nav.emergency": "Call",
      "hero.eyebrow": "Architecture and interior design studio",
      "hero.title": "Spaces designed to be <em>lived in</em> well",
      "hero.desc": "We design homes, interiors, offices and retail spaces in Guatemala. One team handles the design, drawings, permits and site supervision, with a written budget before construction begins.",
      "hero.cta1": "Book a visit",
      "hero.cta2": "Message us on WhatsApp",
      "hero.status": "Now booking projects for 2027",
      "hero.badge1": "Free first visit",
      "hero.badge2": "Written budget",
      "hero.badge3": "Renders before building",
      "quick.emergency": "Call the studio",
      "quick.whatsapp": "WhatsApp",
      "quick.visits": "Office hours",
      "quick.directions": "Directions",
      "quick.aria": "Quick information",
      "stat1.value": "15",
      "stat1.label": "years in practice",
      "stat2.value": "210",
      "stat2.label": "projects delivered",
      "stat3.value": "18",
      "stat3.label": "professionals on the team",
      "stat4.value": "48,000",
      "stat4.label": "m² designed",
      "services.eyebrow": "Services",
      "services.title": "From the first sketch to the handover",
      "services.desc": "You can hire the design on its own or the complete project with site supervision. Either way, you work with an architect in charge, a phased schedule and a budget you approve.",
      "services.cta": "Ask on WhatsApp",
      "services.more": "Learn more",
      "services.more_aria": "Learn more about {name}",
      "services.call": "Call",
      "services.close": "Close",
      "service1.title": "Residential architecture",
      "service1.desc": "New homes designed around your plot, your family and your budget.",
      "service1.more": "Before drawing anything, we visit the plot and talk about how your family lives: routines, guests, pets and future plans.\n\nWith that information we develop the concept design, the construction documents and the construction budget, and we guide you through the permit process.\n\nEach stage is presented with drawings and renders for your approval before moving on to the next.",
      "service2.title": "Interior design",
      "service2.desc": "Layout, materials, colour, furniture and lighting for every room.",
      "service2.more": "We design complete interiors or individual rooms, such as the living room, kitchen or main bedroom.\n\nThe project includes the furniture layout, the palette of materials and colours, the lighting design and a shopping list with suppliers and prices.\n\nIf you wish, we coordinate purchasing, fabrication and installation until the space is ready to use.",
      "service3.title": "Renovations and extensions",
      "service3.desc": "We renovate existing homes and apartments, with a plan for living there during the works.",
      "service3.more": "We assess the condition of the existing building, its services and its structure before proposing changes.\n\nWe plan the works in stages to reduce disruption, especially when the family keeps living in the house.\n\nYou receive a budget itemised by trade and a weekly progress schedule.",
      "service4.title": "Offices and retail spaces",
      "service4.desc": "Workplaces, shops and restaurants designed around your operation and your brand.",
      "service4.more": "We design offices, shops, restaurants and practices based on how your team works and how your customers move.\n\nWe coordinate the requirements of the mall or building, the special installations and the brand image.\n\nWe plan the works to meet the agreed opening date.",
      "service5.title": "Concept design and renders",
      "service5.desc": "Floor plans, massing and realistic images so you can decide before building.",
      "service5.more": "The concept design defines the layout, massing and style of your project.\n\nWe present it with floor plans, elevations and realistic renders, plus a virtual walkthrough on complete projects.\n\nIt lets you compare options, request changes and estimate the construction cost before investing in construction drawings.",
      "service6.title": "Drawings and permits",
      "service6.desc": "A full set of construction drawings and management of the municipal permit.",
      "service6.more": "We prepare the architectural, structural and services drawings, coordinated with licensed engineers.\n\nWe prepare the application and follow up the building permit with the relevant municipality.\n\nThe drawings are in your name and we hand over the digital files at the end.",
      "service7.title": "Site management and supervision",
      "service7.desc": "Scheduled visits, quality control and a weekly log with photographs.",
      "service7.more": "We check that the works are built according to the approved drawings, specifications and budget.\n\nWe review the contractor's valuations before each payment and send you a weekly log with photographs and progress.\n\nIf your own contractor carries out the works, we can also supervise them independently.",
      "service8.title": "Bespoke furniture",
      "service8.desc": "Kitchens, wardrobes, bookcases and built-in furniture designed for your space.",
      "service8.more": "We design furniture that makes the most of every centimetre: kitchens, wardrobes, media units, desks and reception counters.\n\nWe prepare shop drawings with dimensions, materials and hardware, and have them built by trusted workshops.\n\nWe check the installation and finishes before handover.",
      "service9.title": "Landscape and outdoor spaces",
      "service9.desc": "Gardens, terraces and outdoor living areas, with plants suited to the climate.",
      "service9.more": "We design gardens, terraces, pools and barbecue areas integrated with the architecture of the house.\n\nWe choose species suited to the climate and to the upkeep you can give them.\n\nWe include irrigation, outdoor lighting and paving materials.",
      "service10.title": "Lighting design",
      "service10.desc": "Natural and artificial light planned for every activity and every time of day.",
      "service10.more": "We study the path of the sun and propose openings, shading and colours that make the most of daylight.\n\nWe design artificial lighting in layers: general, task and ambient, with efficient fittings.\n\nWe deliver the lighting plan with the specifications of every fitting.",
      "service11.title": "Advice and feasibility",
      "service11.desc": "A review of a plot or property before you buy it or invest in it.",
      "service11.more": "Before you buy a plot or a property, we review what municipal regulations allow you to build and what it would cost.\n\nWe give you a report with the property's potential, its risks and an investment estimate.\n\nWe also offer hourly advisory visits for specific design decisions.",
      "maternity.eyebrow": "Featured project",
      "maternity.title": "Casa Ciprés: a 1978 house <em>opened to the light</em>",
      "maternity.desc": "A family bought a two-storey house with closed-off rooms and little light. We redesigned the ground floor, opened the façade to the garden and renewed the services, without touching the main structure. The works were handed over in seven months, within the approved budget.",
      "maternity.cta": "Request a proposal",
      "projects.cta": "Download the project sheet (PDF)",
      "projects.cta_aria": "Download the project sheet as a PDF",
      "mfeat1.title": "Usable area: +35%",
      "mfeat1.desc": "More usable space by removing corridors and non-structural interior walls.",
      "mfeat2.title": "Daylight in every room",
      "mfeat2.desc": "Large windows onto the garden and a skylight over the stairs.",
      "mfeat3.title": "Handover in 7 months",
      "mfeat3.desc": "From the permit to the handover, with a weekly progress log.",
      "mfeat4.title": "Electricity use: −30%",
      "mfeat4.desc": "LED lighting, cross ventilation and a solar water heater.",
      "bag.title": "Prepare for your first visit",
      "bag.desc": "Tick what you already have at hand. With this information, the proposal is more accurate.",
      "bag1": "Location and dimensions of the plot or property",
      "bag2": "Existing drawings, if any",
      "bag3": "Photographs of the current space",
      "bag4": "Approximate budget for the works",
      "bag5": "List of rooms and needs",
      "bag6": "Reference images you like",
      "bag7": "Date you want to move in or open",
      "bag8": "Title deed or proof of ownership",
      "bag9": "",
      "bag10": "",
      "bag.note": "If any item is missing, we will define it together during the visit.",
      "bag.progress": "{n} of {total} ready",
      "about.eyebrow": "About us",
      "about.title": "We design with you, not just for you",
      "about.desc": "Alero is a Guatemalan architecture and interior design studio. We bring architects, interior designers, draughtspeople and site supervisors together in one team, so your project has a single person accountable from the first sketch to the handover. We work with written budgets, renders you approve before building and a weekly log during construction.",
      "about.art_caption": "Design, drawings and construction in one team.",
      "about.mission_title": "Our purpose",
      "about.mission_desc": "To create comfortable, durable and easy-to-maintain spaces, made to measure for the people who use them.",
      "about.vision_title": "Our commitment",
      "about.vision_desc": "To respect the approved budget, meet the agreed deadlines and explain every decision clearly.",
      "why.title": "Why choose us",
      "why1": "Written budget before building",
      "why2": "One architect in charge of your project",
      "why3": "Renders to approve every room",
      "why4": "Weekly site log",
      "why5": "Drawings and files in your name",
      "why6": "Vetted suppliers and workshops",
      "projects.eyebrow": "The studio",
      "projects.title": "A workshop where ideas are tested before they are built",
      "projects.desc": "We handle the design, materials and presentation of every project in one place. You can visit the studio, handle the samples and review the drawings with the team.",
      "projects.view_details": "View photos",
      "proj1.tag": "Design",
      "proj1.title": "Design table",
      "proj1.desc": "Sketches, plans and details by hand and on screen, from the first line to the final drawing.",
      "proj2.tag": "Materials",
      "proj2.title": "Materials library",
      "proj2.desc": "Samples of flooring, tiles, timber, fabrics and paints, so you choose with the material in hand.",
      "proj3.tag": "Presentation",
      "proj3.title": "Presentation room",
      "proj3.desc": "A screen to review renders and virtual walkthroughs of your project with the team.",
      "proj4.tag": "Ideas",
      "proj4.title": "Ideas room",
      "proj4.desc": "Working sessions to sort out needs, priorities and budget.",
      "proj5.tag": "Site",
      "proj5.title": "On-site supervision",
      "proj5.desc": "Scheduled visits to check progress, quality and dimensions at every stage.",
      "proj6.tag": "Team",
      "proj6.title": "Work area",
      "proj6.desc": "Architects, interior designers and draughtspeople working in the same space.",
      "amen.title": "Team capabilities",
      "amen1.title": "Architectural design",
      "amen1.desc": "Homes, small buildings and retail spaces.",
      "amen2.title": "Interior design",
      "amen2.desc": "Complete rooms, from floor to ceiling.",
      "amen3.title": "BIM modelling",
      "amen3.desc": "Drawings and quantities coordinated in one model.",
      "amen4.title": "Renders and walkthroughs",
      "amen4.desc": "Realistic images and video of the project.",
      "amen5.title": "Cost estimates",
      "amen5.desc": "Itemised quantities and comparison of bids.",
      "amen6.title": "Permits",
      "amen6.desc": "Municipal applications and follow-up.",
      "amen7.title": "Supervision",
      "amen7.desc": "Quality, progress and payment control on site.",
      "amen8.title": "Lighting",
      "amen8.desc": "Daylight and artificial lighting plans.",
      "amen9.title": "Furniture",
      "amen9.desc": "Shop drawings for bespoke furniture.",
      "amen10.title": "Landscape",
      "amen10.desc": "Gardens, terraces and irrigation.",
      "amen11.title": "Structure and services",
      "amen11.desc": "Coordination with licensed engineers.",
      "amen12.title": "Sustainability",
      "amen12.desc": "Ventilation, shade and energy and water savings.",
      "projects.modal_close": "Close",
      "projects.modal_prev": "Previous photo",
      "projects.modal_next": "Next photo",
      "projects.modal_dots_aria": "Choose photo",
      "projects.modal_goto_slide": "Go to photo {n}",
      "projects.modal_image_of": "Photo {n} of {total}",
      "projects.modal_photo_alt": "Photo {n} of {title}",
      "projects.modal_placeholder_note": "There are no photos of this space yet.",
      "process.eyebrow": "How we work",
      "process.title": "A clear process, from the first visit to the handover",
      "process1.title": "Visit and brief",
      "process1.desc": "We see the plot or space, listen to your needs and set the budget.",
      "process2.title": "Concept design",
      "process2.desc": "We present floor plans and renders so you can choose and adjust the design.",
      "process3.title": "Construction documents",
      "process3.desc": "Construction drawings, specifications, construction budget and permit.",
      "process4.title": "Construction and handover",
      "process4.desc": "We supervise construction and hand over the finished space.",
      "patients.eyebrow": "Clients",
      "patients.title": "Information for our clients",
      "patients.desc": "What is useful to know before starting, during the first visit and while the works are under way. If you have questions, call us during office hours.",
      "patients.tab1": "Before starting",
      "patients.tab2": "First visit",
      "patients.tab3": "During construction",
      "patients.tabs_aria": "Information for clients",
      "visits.title": "Office hours",
      "visits.hours_text": "Mon–Fri 8:00–17:00",
      "visits.open": "Open now",
      "visits.closed": "Closed right now",
      "visits.next": "Opens: {time}",
      "visits.until": "Until {time}",
      "guide1": "Set a total budget that covers design, construction, furniture and contingencies.",
      "guide2": "Consider the studio's fees and the cost of construction separately.",
      "guide3": "Check that the plot has a title deed, utilities and access before designing.",
      "guide4": "Ask what each phase includes and what is quoted separately.",
      "guide5": "Ask to see drawings and renders from previous projects.",
      "guide6": "A municipal permit usually takes four to eight weeks; include it in your schedule.",
      "guide7": "",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "The first visit lasts about an hour and takes place at the plot or the space to be worked on.",
      "visit2": "The architect who will be in charge of your project takes part.",
      "visit3": "We take measurements and photographs, and share our first ideas with you.",
      "visit4": "There is no need to have drawings: the information on the list is enough.",
      "visit5": "Within five working days you receive the fee proposal in writing.",
      "visit6": "",
      "visit7": "",
      "visit8": "",
      "mat1": "Every week you receive a log with photographs, progress and open items.",
      "mat2": "Your architect replies during business hours, within one day at most.",
      "mat3": "We review every contractor valuation before you pay it.",
      "mat4": "Changes during construction are approved in writing with their cost and effect on the schedule.",
      "mat5": "At handover you receive the final drawings, warranties and a maintenance manual.",
      "mat6": "",
      "ext.title": "Direct contacts",
      "ext1.label": "New projects",
      "ext2.label": "Clients on site",
      "ext3.label": "Purchasing and suppliers",
      "ext4.label": "Billing",
      "insurance.eyebrow": "Ways to work",
      "insurance.title": "Ways to work with us",
      "insurance.desc": "You can hire an advisory visit, the design by square metre or the complete project with site supervision. Before starting, you receive a written proposal with what each phase includes.",
      "insurance.insurers_title": "Project types",
      "insurance.insurers_desc": "We know the regulations, materials and construction times of these projects.",
      "insurance.missing": "Is your project not listed? Let's talk.",
      "banks.title": "Engagement models",
      "pay.title": "Payment options",
      "pay1": "Deposit at the start of each phase",
      "pay2": "Bank transfer or deposit",
      "pay3": "Credit or debit card",
      "pay4": "Supervision: monthly payment during construction",
      "pay5": "Electronic invoice for every payment",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "Shall we talk about your project?",
      "ctabanner.desc": "Book a free first visit or message us on WhatsApp. We reply during office hours.",
      "ctabanner.cta": "Call now",
      "contact.eyebrow": "Contact",
      "contact.title": "Tell us about your project",
      "contact.desc": "Write or call us to book a visit, request a proposal or ask your questions. We reply during office hours.",
      "contact.label_address": "Address",
      "contact.label_phone": "Phones",
      "contact.label_email": "Email",
      "contact.label_hours": "Hours",
      "contact.label_social": "Social media",
      "contact.hours_value": "Monday to Friday 8:00–17:00",
      "contact.map_open": "Open in Google Maps",
      "contact.vcard": "Save contact",
      "contact.vcard_aria": "Save Alero's contact on your phone (vCard file)",
      "contact.waze": "Open in Waze",
      "contact.map_load": "Show map here",
      "contact.map_note": "Showing the map sends your IP address to Google.",
      "contact.map_frame": "Map of the studio location",
      "contact.phone_main": "Main",
      "contact.phone_direct": "Direct",
      "form.title": "Send us a message",
      "form.privacy_hint": "For your privacy, do not include passwords or bank details in this form.",
      "form.name_label": "Full name",
      "form.name_err": "Enter your full name.",
      "form.phone_label": "Phone",
      "form.phone_err": "Enter a valid phone number.",
      "form.email_label": "Email address",
      "form.email_err": "Enter a valid email address.",
      "form.service_label": "How can we help?",
      "form.opt_placeholder": "Choose an option",
      "form.opt_maternity": "New home",
      "form.opt_surgery": "Renovation or extension",
      "form.opt_emergency": "Interior design",
      "form.opt_specialist": "Office or retail space",
      "form.opt_lab": "Bespoke furniture",
      "form.opt_insurance": "Advice or feasibility",
      "form.opt_other": "Other",
      "form.service_err": "Choose an option.",
      "form.message_label": "Your message",
      "form.message_err": "Please write a little more (at least 10 characters).",
      "form.optional": "(optional)",
      "form.choose": "Choose an option",
      "form.err_required": "Complete this field.",
      "form.err_choose": "Choose an option.",
      "form.err_number": "Enter a valid number.",
      "form.err_date": "Choose a valid date.",
      "form.consent_label": "I agree that my details are used only to answer my request, as described in the Privacy Notice.",
      "form.consent_err": "We need your permission to reply.",
      "form.hp_label": "Leave this field empty",
      "form.submit": "Send message",
      "form.note": "We'll only use your details to answer your request. See our <a href=\"privacy-notice.html\">Privacy Notice</a>.",
      "form.fallback": "Prefer not to use the form? Contact us by <a href=\"tel:+50200000000\">phone</a>, <a href=\"mailto:hola@alero.example\">e-mail</a> or <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Sending…",
      "form.status_ok": "Thank you! We received your message and will contact you soon.",
      "form.status_invalid": "Please check the highlighted fields before sending.",
      "form.status_error": "There was a problem sending your message. Try again or message us on WhatsApp.",
      "form.status_rate_limited": "You've sent several requests in a short time. Please wait a few minutes and try again.",
      "form.status_offline": "You seem to be offline. Check your connection and try again.",
      "form.status_timeout": "Sending took too long. Check your connection and try again.",
      "form.status_verifying": "Checking that you're not a robot…",
      "form.status_captcha": "We couldn't complete the anti-spam check. Reload the page and try again, or message us on WhatsApp.",
      "form.status_turnstile": "Complete the security check and send again.",
      "form.captcha_idle": "Protected against spam with an automatic check.",
      "form.captcha_pending": "Anti-spam check in progress…",
      "form.captcha_ok": "Anti-spam check complete.",
      "form.captcha_error": "The anti-spam check couldn't load. Reload the page.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "How much does the design of a project cost?",
      "faq.a1": "Interior design starts at Q 180 per square metre and residential architecture at Q 320 per square metre, plus VAT. Site supervision is quoted separately, according to the length of construction.",
      "faq.q2": "How long does the design take?",
      "faq.a2": "Interior design takes four to six weeks. A new house takes three to four months between concept design, drawings and permit.",
      "faq.q3": "Do you build the project?",
      "faq.a3": "We help you choose a contractor with comparable bids and supervise the works on your behalf. That way you keep control of the budget and the payments.",
      "faq.q4": "Who owns the drawings?",
      "faq.a4": "The drawings are prepared for your property and handed over in digital format at the end of each phase.",
      "faq.q5": "Can you work within my budget?",
      "faq.a5": "Yes. In the first visit we set the total budget and design within it. If an idea exceeds it, we tell you before developing it.",
      "faq.q6": "How is the design approved?",
      "faq.a6": "Each phase is presented with drawings and renders. Nothing moves on to the next phase without your written approval.",
      "faq.q7": "Do you work outside the capital?",
      "faq.a7": "Yes. We have projects in Antigua Guatemala, Lake Atitlán and the southern coast, with scheduled supervision visits.",
      "faq.q8": "What does the final handover include?",
      "faq.a8": "As-built drawings, the warranties for equipment and materials, the list of suppliers and a maintenance manual.",
      "a11y.title": "Accessibility",
      "a11y.desc": "Adjust the site to suit you. Your preferences are saved on this device.",
      "a11y.text_size": "Text size",
      "a11y.contrast": "High contrast",
      "a11y.motion": "Reduce motion",
      "a11y.links": "Underline links",
      "a11y.spacing": "More text spacing",
      "a11y.reset": "Reset",
      "footer.about_desc": "Architecture and interior design studio in Guatemala City. Homes, renovations, offices and retail spaces, with site supervision.",
      "footer.links_heading": "Navigation",
      "footer.services_heading": "Services",
      "footer.contact_heading": "Contact",
      "footer.privacy_link": "Privacy Notice",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Site managed by TeraDevs",
      "notice.text": "",
      "notice.close": "Close notice",
      "notice.label": "Notice",
      "doctors.eyebrow": "Projects",
      "doctors.title": "Recent projects",
      "doctors.desc": "Search by name, project type or service. Each sheet summarises the brief, what we did and the result.",
      "doctors.cta": "WhatsApp",
      "doctors.search_label": "Search projects",
      "doctors.search_ph": "Name, type or service",
      "doctors.filter_aria": "Filter by project type",
      "doctors.all": "All",
      "doctors.empty": "No projects match that search.",
      "doctors.license": "Scope",
      "doctors.hours": "Services",
      "doctors.insurers": "Year",
      "doctors.request": "Request something similar",
      "doctors.wa_msg": "Hello, I saw the {name} project ({specialty}) on the {site} website and would like something similar.",
      "doctors.results": "{n} projects",
      "doctors.result1": "1 project",
      "appt.eyebrow": "Visit",
      "appt.title": "",
      "appt.desc": "Choose the type of project and your preferred date. We will call you to confirm the time and place of the visit.",
      "appt.submit": "Request a visit",
      "appt.ok": "Thank you. We received your request and will call you to confirm the date and place of the visit.",
      "appt.specialty_label": "Project type",
      "appt.doctor_label": "Reference project",
      "appt.doctor_any": "None in particular",
      "appt.date_label": "Preferred date",
      "appt.time_label": "Preferred time",
      "appt.time_morning": "Morning",
      "appt.time_afternoon": "Afternoon",
      "appt.time_any": "Any",
      "req.name_label": "Full name",
      "req.phone_label": "Phone",
      "req.email_label": "Email",
      "req.notes_label": "Comments",
      "req.health_notice": "For your privacy, do not include passwords or bank details: only what we need to handle your request.",
      "pkg.eyebrow": "Design services",
      "pkg.title": "Reference fees",
      "pkg.desc": "Three starting points that we adjust to your project. All include an architect in charge, a presentation with renders and delivery of the digital files.",
      "pkg.from": "From",
      "pkg.cta": "Request a proposal",
      "pkg.note": "Reference fees in quetzales, before VAT. They do not include the cost of construction or furniture, which are paid directly to the contractor and suppliers. We confirm the price in a written proposal.",
      "pkg.includes": "Includes",
      "pkg.pdf": "Download the fee details as a PDF",
      "comp.title": "",
      "labprep.eyebrow": "Works in progress",
      "labprep.title": "Progress on the works we supervise",
      "labprep.desc": "This is what progress looks like in the log: each project has an approved schedule and a completion percentage that we update every week.",
      "labprep.time": "Progress",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Tell us the location of the plot or property and the budget you have in mind. An architect will review the information and contact you with observations, with no obligation.",
      "insck.submit": "Request a review",
      "insck.ok": "Thank you. An architect will review the information and contact you with observations.",
      "insck.insurer_label": "Project type",
      "insck.other": "Another type of project",
      "insck.policy_label": "Estimated construction budget (Q)",
      "insck.holder_label": "Property location",
      "insck.service_label": "Service of interest",
      "reviews.eyebrow": "Testimonials",
      "reviews.title": "What our clients say",
      "reviews.based": "Average rating (example)",
      "reviews.cta": "Leave a review on Google",
      "reviews.stars_aria": "{n} out of 5 stars",
      "reviews.count_text": "{n} reviews",
      "ctabanner.directions": "Directions to the studio",
      "actions.emergency": "Call",
      "svcpage.back": "Back to home",
      "svcpage.doctors": "Related projects",
      "svcpage.request_title": "Interested in this service?",
      "svcpage.request_desc": "Request a proposal online, message us on WhatsApp or call us.",
      "svcpage.more_services": "Other services",
      "services.page": "{name} page",
      "nav.doctors": "Projects",
      "doctor1.specialty": "",
      "doctor1.license": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.license": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.license": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.license": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.license": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.license": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.license": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.license": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.license": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.license": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.license": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.license": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hello, I would like information about Alero's services.",
      "brand.tagline": "Architecture and interiors",
      "nav.packages": "Fees",
      "profile.specialty": "Specialty",
      "demo.banner": "Fictional data.",
      "demo.banner_cta": "Request a quote",
      "demo.form_ok": "Preview: this is how the form confirms a message. On the real site, the request reaches the panel and the inbox.",
      "demo.preview_label": "Preview",
      "demo.view_aria": "See another package",
      "demo.view_clinic": "Studio",
      "demo.view_practice": "Designer",
      "brand.aria@consultorio": "Alero Interiores, go to home",
      "contact.map_aria@consultorio": "Open the studio location in Google Maps (opens in a new tab)",
      "contact.vcard_aria@consultorio": "Save Alero Interiores's contact on your phone (vCard file)",
      "contact.map_frame@consultorio": "Map of the studio location",
      "ctabanner.directions@consultorio": "Directions to the studio",
      "nav.doctors@consultorio": "The designer",
      "doctors.wa_msg@consultorio": "Hello, I would like to book a visit with {name} ({specialty}).",
      "form.opt_surgery@consultorio": "Interior design for one room",
      "form.opt_emergency@consultorio": "Interior design for the whole home",
      "form.opt_specialist@consultorio": "Kitchen or bathroom",
      "form.opt_lab@consultorio": "Bespoke furniture",
      "form.opt_maternity@consultorio": "Design consultation",
      "req.name_label@consultorio": "Full name",
      "appt.specialty_label@consultorio": "Service",
      "insck.service_label@consultorio": "Service",
      "demo.packages": "All packages",
      "demo.sum_express": "Express · Q4,800 + VAT · lead time: 2 weeks",
      "demo.sum_starter": "Starter · Q6,800 + VAT · lead time: 3 weeks",
      "demo.sum_profesional": "Profesional · Q10,500 + VAT · lead time: 4 to 5 weeks",
      "demo.sum_premium": "Premium · from Q19,500 + VAT · lead time: 6 to 8 weeks",
      "doctors.license@consultorio": "Experience",
      "doctors.hours@consultorio": "Availability",
      "doctors.insurers@consultorio": "Areas",
      "profile.specialty@consultorio": "Role",
      "svcpage.doctors@consultorio": "In charge",
      "projects.cta_aria@consultorio": "Download the services overview as a PDF",
      "form.opt_insurance@consultorio": "Styling and decoration",
      "hero.seal": "Architecture · Interiors · Renovation · Construction ·",
      "reviews.more": "Show more reviews",
      "demo.all": "All demos",
      "demo.strip_note": "TeraDevs demo site. Fictional data."
    }
  };

  /* ============================================================
     CONTENT MANAGER OVERRIDES — text, contact details and photo alt
     text edited in /admin arrive as an inert JSON block (#siteContent).
     ============================================================ */
  var SITE_CONTENT = (function(){
    var el = document.getElementById('siteContent');
    if (!el) return {};
    try {
      var data = JSON.parse(el.textContent);
      return (data && typeof data === 'object') ? data : {};
    } catch (e) { return {}; }
  })();
  /* Profile variants of fixed texts ("key@consultorio"), as the server renders them. */
  (function(){
    var m = /(?:^|\s)profile-(\w+)/.exec(root.className);
    if (!m) return;
    var suffix = '@' + m[1];
    ['es', 'en'].forEach(function(lang){
      Object.keys(I18N[lang]).forEach(function(k){
        if (k.slice(-suffix.length) === suffix) I18N[lang][k.slice(0, -suffix.length)] = I18N[lang][k];
      });
    });
  })();
  /* Only these keys may carry markup (built and escaped server-side). */
  var HTML_OVERRIDE_KEYS = { 'hero.title': true, 'maternity.title': true, 'form.fallback': true };
  if (SITE_CONTENT.i18n && typeof SITE_CONTENT.i18n === 'object'){
    ['es', 'en'].forEach(function(lang){
      var overrides = SITE_CONTENT.i18n[lang];
      if (!overrides || typeof overrides !== 'object') return;
      Object.keys(overrides).forEach(function(key){
        var val = overrides[key];
        if (typeof val !== 'string') return;
        if (val.indexOf('<') !== -1 && !HTML_OVERRIDE_KEYS[key]) return;
        I18N[lang][key] = val;
      });
    });
  }
  var SITE_IMAGES = (SITE_CONTENT.images && typeof SITE_CONTENT.images === 'object') ? SITE_CONTENT.images : {};

  // Nothing is stored until the visitor actually sets something (empty values remove the key).
  function store(key, val){ try { if (val === undefined) return localStorage.getItem(key); if (val === '{}' || val === '[]') localStorage.removeItem(key); else localStorage.setItem(key, val); } catch (e) { return null; } return null; }

  var LANG_KEY = 'clinica_lang';
  var currentLang = (function(){
    var saved = store(LANG_KEY);
    /* Packages without the English version stay in Spanish, whatever was chosen elsewhere on this domain. */
    if (root.hasAttribute('data-es-only')) return 'es';
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  })();
  var WHATSAPP_NUMBER = (typeof SITE_CONTENT.whatsapp === 'string' && /^\d{8,15}$/.test(SITE_CONTENT.whatsapp))
    ? SITE_CONTENT.whatsapp : (root.getAttribute('data-wa') || '50256192730');

  /** Name of the clinic or practice, as published (Perfil del sitio → Nombre). */
  function siteName(){ var el = document.querySelector('.brand-name'); return (el && el.textContent.trim()) || document.title.split(' · ')[0]; }
  function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }

  /* Shareable preview (static hosting, no PHP): the form answers itself so
     prospects can try it, and says plainly that nothing was sent. */
  var PREVIEW = document.documentElement.getAttribute('data-preview') === '1';
  function handlerFetch(url, opts){
    if (!PREVIEW) return fetch(url, opts);
    var reply = function(o){ return new Response(JSON.stringify(o), { status: 200, headers: { 'Content-Type': 'application/json' } }); };
    if (url.indexOf('challenge=1') !== -1){
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode('preview0')).then(function(h){
        var hex = Array.prototype.map.call(new Uint8Array(h), function(b){ return ('0' + b.toString(16)).slice(-2); }).join('');
        return reply({ algorithm: 'SHA-256', challenge: hex, salt: 'preview', maxnumber: 10, signature: 'preview' });
      });
    }
    return new Promise(function(r){ setTimeout(r, 600); }).then(function(){ return reply({ ok: true }); });
  }
  function okKey(k){ return PREVIEW ? 'demo.form_ok' : (k || 'form.status_ok'); }
  function fmt(s, vars){ return String(s).replace(/\{(\w+)\}/g, function(m, k){ return vars[k] !== undefined ? vars[k] : m; }); }
  /* Shareable preview: messages say which package the visitor was looking at. */
  var PKG = (root.className.match(/\bpkg-(\w+)/) || [])[1] || '';
  function waUrl(text){
    if (PREVIEW && PKG) text = '[Demo ' + PKG.charAt(0).toUpperCase() + PKG.slice(1) + '] ' + text;
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
  }

  var langToggle = document.getElementById('langToggle');
  var langListeners = [];

  function applyLang(lang){
    var dict = I18N[lang] || I18N.es;
    currentLang = lang;
    root.lang = (lang === 'es') ? 'es-GT' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n')];
      if (val === undefined) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = dict[parts[1].trim()];
        if (val !== undefined) el.setAttribute(parts[0].trim(), val);
      });
    });
    /* Service pages keep their own title (the home page's title is for the home page). */
    if (dict['meta.title'] && document.body.getAttribute('data-page') !== 'service') document.title = dict['meta.title'];
    [['metaDescription', 'meta.description'], ['ogTitle', 'meta.title'], ['ogDescription', 'meta.description'], ['twTitle', 'meta.title'], ['twDescription', 'meta.description'], ['ogLocale', 'og.locale']].forEach(function(p){
      var el = document.getElementById(p[0]);
      if (el && dict[p[1]]) el.setAttribute('content', dict[p[1]]);
    });
    if (langToggle){
      langToggle.querySelector('span').textContent = (lang === 'es') ? 'EN' : 'ES';
    }
    /* WhatsApp links: the general message, or one per service. */
    document.querySelectorAll('[data-wa]').forEach(function(a){
      var key = a.getAttribute('data-wa');
      var text = dict['whatsapp.message'];
      if (key){
        var name = dict[key] || '';
        text = (lang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + name.toLowerCase() + (lang === 'es' ? ' en ' : ' at ') + siteName() + '.';
      }
      a.setAttribute('href', waUrl(text));
    });
    if (!root.hasAttribute('data-es-only')) store(LANG_KEY, lang);
    langListeners.forEach(function(fn){ fn(lang); });
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function(b){
    b.addEventListener('click', function(){
      var next = currentLang === 'es' ? 'en' : 'es';
      // A soft cross-fade between languages where the browser supports it.
      if (document.startViewTransition && !root.classList.contains('a11y-motion') && !mqReduce.matches) document.startViewTransition(function(){ applyLang(next); });
      else applyLang(next);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header: translucent material once content scrolls under it ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;
  function onScroll(){
    ticking = false;
    var sy = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', sy > 8);
    if (backToTop) backToTop.classList.toggle('show', sy > 900);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Cards: a soft light follows the pointer (mouse only) ---------- */
  if (window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches){
    document.addEventListener('pointermove', function(e){
      var c = e.target.closest && e.target.closest('.service-card, .mv-card, .ins-card, .review-card, .stat, .doctor-card, .pkg-card');
      if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- Sheets (native <dialog>): menu, accessibility, gallery ----------
     A <dialog> opened with showModal() already traps focus, makes the page
     behind it inert and closes with Escape. Each sheet enters and leaves
     along the same path (spatial consistency); closing waits for the exit
     transition, but a new open interrupts it immediately. */
  function sheet(dialog, opener){
    if (!dialog || typeof dialog.showModal !== 'function') return null;
    var closingTimer = null;
    var returnFocus = null;
    function open(from){
      returnFocus = from || opener || document.activeElement;
      clearTimeout(closingTimer);
      dialog.classList.remove('is-closing');
      /* A popover grows from its trigger, wherever banners above the header put it. */
      if (opener && dialog.classList.contains('sheet-pop')){
        var r = opener.getBoundingClientRect();
        dialog.style.setProperty('--pop-top', Math.round(Math.max(r.bottom, 0) + 8) + 'px');
        dialog.style.setProperty('--pop-right', Math.round(Math.max(window.innerWidth - r.right - 8, 16)) + 'px');
      }
      if (!dialog.open) dialog.showModal();
      if (opener) opener.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function(){ dialog.classList.add('is-open'); });
      root.classList.add('has-sheet');
    }
    function close(){
      if (!dialog.open) return;
      dialog.classList.remove('is-open');
      dialog.classList.add('is-closing');
      if (opener) opener.setAttribute('aria-expanded', 'false');
      var done = function(){ dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); root.classList.remove('has-sheet'); if (returnFocus && returnFocus.focus) returnFocus.focus(); };
      if (reduceMotion) done(); else closingTimer = setTimeout(done, 260);
    }
    dialog.addEventListener('cancel', function(e){ e.preventDefault(); close(); });
    /* A tap on the dimmed backdrop (the <dialog> box itself) closes it. */
    dialog.addEventListener('click', function(e){ if (e.target === dialog) close(); });
    dialog.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', close); });
    if (opener) opener.addEventListener('click', function(){ dialog.open && !dialog.classList.contains('is-closing') ? close() : open(opener); });
    return { open: open, close: close, el: dialog };
  }

  var menu = sheet(document.getElementById('mobileNav'), document.getElementById('menuToggle'));
  if (menu){
    menu.el.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
    window.matchMedia('(min-width: 1200px)').addEventListener('change', function(e){ if (e.matches) menu.close(); });
  }

  /* ---------- Accessibility preferences ---------- */
  var A11Y_KEY = 'clinica_a11y';
  var a11y = (function(){ try { return JSON.parse(store(A11Y_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  var a11ySheet = sheet(document.getElementById('a11yPanel'), document.getElementById('a11yToggle'));
  function applyA11y(){
    root.setAttribute('data-text', a11y.size || '0');
    ['contrast', 'motion', 'links', 'spacing'].forEach(function(k){ root.classList.toggle('a11y-' + k, !!a11y[k]); });
    reduceMotion = mqReduce.matches || !!a11y.motion;
    root.classList.toggle('js-motion', !reduceMotion);
    document.querySelectorAll('[data-a11y]').forEach(function(sw){ sw.setAttribute('aria-checked', a11y[sw.getAttribute('data-a11y')] ? 'true' : 'false'); });
    document.querySelectorAll('[data-text-size]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-text-size') === String(a11y.size || '0'))); });
    store(A11Y_KEY, JSON.stringify(a11y));
  }
  document.querySelectorAll('[data-a11y]').forEach(function(sw){
    sw.addEventListener('click', function(){ var k = sw.getAttribute('data-a11y'); a11y[k] = !a11y[k]; applyA11y(); });
  });
  document.querySelectorAll('[data-text-size]').forEach(function(b){
    b.addEventListener('click', function(){ a11y.size = b.getAttribute('data-text-size'); applyA11y(); });
  });
  var a11yReset = document.getElementById('a11yReset');
  if (a11yReset) a11yReset.addEventListener('click', function(){ a11y = {}; applyA11y(); });
  applyA11y();
  mqReduce.addEventListener && mqReduce.addEventListener('change', applyA11y);

  /* ---------- Reveal on scroll (content is visible without JS) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Stats: count up once, from 0 to the published number ---------- */
  var statEls = document.querySelectorAll('[data-count]');
  function countUp(el){
    var text = el.textContent;
    var m = text.match(/^(\D*)(\d+)(.*)$/);
    if (!m || reduceMotion || m[2] === '24') return;
    var target = parseInt(m[2], 10), start = null, dur = 900;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && statEls.length){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); sio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    statEls.forEach(function(el){ sio.observe(el); });
  }

  /* ---------- Active section in the desktop navigation ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length){
    var byId = {};
    navLinks.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        navLinks.forEach(function(a){ a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  /* ---------- Visiting hours: live status in Guatemala time (UTC−6, no DST) ---------- */
  var visitEls = Array.prototype.slice.call(document.querySelectorAll('#visitStatus, [data-visit-status]'));
  function visitStatus(){
    visitEls.forEach(function(visitEl){
      var windows = (visitEl.getAttribute('data-windows') || '').split(',').map(function(w){
        var m = w.trim().match(/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
        return m ? [(+m[1]) * 60 + (+m[2]), (+m[3]) * 60 + (+m[4]), m[1] + ':' + m[2], m[3] + ':' + m[4]] : null;
      }).filter(Boolean);
      if (!windows.length){ visitEl.hidden = true; return; }
      var now = new Date(Date.now() - 6 * 3600 * 1000);
      var mins = now.getUTCHours() * 60 + now.getUTCMinutes();
      var open = null, next = null;
      windows.forEach(function(w){
        if (mins >= w[0] && mins < w[1]) open = w;
        if (mins < w[0] && (!next || w[0] < next[0])) next = w;
      });
      if (!open && !next) next = windows.slice().sort(function(a, b){ return a[0] - b[0]; })[0];
      visitEl.setAttribute('data-state', open ? 'open' : 'closed');
      var label = visitEl.querySelector('[data-role="label"]');
      var detail = visitEl.querySelector('[data-role="detail"]');
      var detailText = open ? fmt(t('visits.until'), { time: open[3] }) : fmt(t('visits.next'), { time: next[2] });
      if (detail){ label.textContent = t(open ? 'visits.open' : 'visits.closed'); detail.textContent = detailText; }
      else if (label) label.textContent = open ? t('visits.open') : detailText;
    });
  }
  visitStatus();
  setInterval(visitStatus, 60000);
  langListeners.push(visitStatus);

  /* ---------- Patients: tabs (WAI-ARIA pattern) with a sliding indicator ---------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist){
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var indicator = tablist.querySelector('.tab-indicator');
    var moveIndicator = function(tab){
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    };
    var select = function(tab, focus){
      tabs.forEach(function(tb){
        var on = tb === tab;
        tb.setAttribute('aria-selected', String(on));
        tb.tabIndex = on ? 0 : -1;
        document.getElementById(tb.getAttribute('aria-controls')).hidden = !on;
      });
      moveIndicator(tab);
      if (focus) tab.focus();
    };
    tabs.forEach(function(tab, i){
      /* Feedback on press, not on release. */
      tab.addEventListener('pointerdown', function(){ select(tab, false); });
      tab.addEventListener('click', function(){ select(tab, false); });
      tab.addEventListener('keydown', function(e){
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n){ e.preventDefault(); select(n, true); }
      });
    });
    var current = function(){ return tabs.filter(function(tb){ return tb.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]; };
    window.addEventListener('resize', function(){ moveIndicator(current()); });
    langListeners.push(function(){ requestAnimationFrame(function(){ moveIndicator(current()); }); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ moveIndicator(current()); });
    requestAnimationFrame(function(){ moveIndicator(current()); });
  }

  /* ---------- Hospital bag checklist, saved only on this device ---------- */
  var BAG_KEY = 'clinica_bag';
  var bag = document.getElementById('bagList');
  if (bag){
    var saved = (function(){ try { return JSON.parse(store(BAG_KEY) || '[]') || []; } catch (e) { return []; } })();
    var boxes = Array.prototype.slice.call(bag.querySelectorAll('input[type="checkbox"]'));
    var progress = document.getElementById('bagProgress');
    var ring = document.getElementById('bagRing');
    var update = function(){
      var done = boxes.filter(function(b){ return b.checked; });
      if (progress) progress.textContent = fmt(t('bag.progress'), { n: done.length, total: boxes.length });
      if (ring){ ring.style.setProperty('--p', boxes.length ? done.length / boxes.length : 0); ring.toggleAttribute('data-empty', done.length === 0); }
      store(BAG_KEY, JSON.stringify(done.map(function(b){ return b.value; })));
    };
    boxes.forEach(function(b){ b.checked = saved.indexOf(b.value) !== -1; b.addEventListener('change', update); });
    update();
    langListeners.push(update);
  }

  /* ---------- "Get a quote" buttons pick the matching form option ---------- */
  document.querySelectorAll('[data-preselect]').forEach(function(a){
    a.addEventListener('click', function(){
      var sel = document.getElementById('service');
      var val = a.getAttribute('data-preselect');
      if (sel && sel.querySelector('option[value="' + val + '"]')) sel.value = val;
    });
  });

  /* ---------- Facilities gallery: native scroll-snap carousel in a sheet ----------
     Native scrolling gives 1:1 tracking, momentum projection and rubber-band
     edges for free; the buttons and dots only ask it to scroll. */
  var gallery = sheet(document.getElementById('galleryModal'));
  if (gallery){
    var slidesEl = document.getElementById('gallerySlides');
    var dotsEl = document.getElementById('galleryDots');
    var titleEl = document.getElementById('galleryTitle');
    var tagEl = document.getElementById('galleryTag');
    var descEl = document.getElementById('galleryDesc');
    var noteEl = document.getElementById('galleryNote');
    var liveEl = document.getElementById('galleryLive');
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    var index = 0, count = 0;
    var go = function(i){
      i = Math.max(0, Math.min(count - 1, i));
      var w = slidesEl.clientWidth;
      slidesEl.scrollTo({ left: i * w, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var sync = function(){
      var i = Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth));
      if (i === index && dotsEl.childNodes.length) return;
      index = i;
      Array.prototype.forEach.call(dotsEl.children, function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i <= 0;
      next.disabled = i >= count - 1;
      liveEl.textContent = count > 1 ? fmt(t('projects.modal_image_of'), { n: i + 1, total: count }) : '';
    };
    slidesEl.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', function(){ go(index - 1); });
    next.addEventListener('click', function(){ go(index + 1); });
    slidesEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(index + 1); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(index - 1); }
    });
    document.querySelectorAll('.area-card[data-project]').forEach(function(card){
      var btn = card.querySelector('.area-open');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var pid = card.getAttribute('data-project');
        var title = t(pid + '.title');
        var paths = (card.getAttribute('data-images') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        tagEl.textContent = t(pid + '.tag');
        titleEl.textContent = title;
        descEl.textContent = t(pid + '.desc');
        slidesEl.innerHTML = '';
        dotsEl.innerHTML = '';
        if (!paths.length){
          var ph = document.createElement('div');
          var art = card.querySelector('.area-art');
          ph.className = 'gallery-slide is-placeholder ' + (art ? art.className : '');
          ph.innerHTML = art ? art.innerHTML : '';
          slidesEl.appendChild(ph);
        }
        paths.forEach(function(p, k){
          var meta = SITE_IMAGES[p] || {};
          var alt = (meta.alt && (meta.alt[currentLang] || meta.alt.es)) || fmt(t('projects.modal_photo_alt'), { n: k + 1, title: title });
          var slide = document.createElement('div');
          slide.className = 'gallery-slide';
          var img = document.createElement('img');
          img.src = p;
          if (meta.srcset){ img.srcset = meta.srcset; img.sizes = '(max-width: 760px) 100vw, 760px'; }
          img.alt = alt;
          img.decoding = 'async';
          if (k > 0) img.loading = 'lazy';
          slide.appendChild(img);
          slidesEl.appendChild(slide);
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', fmt(t('projects.modal_goto_slide'), { n: k + 1 }));
          dot.addEventListener('click', function(){ go(k); });
          dotsEl.appendChild(dot);
        });
        count = Math.max(1, paths.length);
        noteEl.hidden = paths.length > 0;
        dotsEl.hidden = prev.hidden = next.hidden = paths.length < 2;
        index = -1;
        gallery.open(btn);
        slidesEl.scrollLeft = 0;
        sync();
      });
    });
  }

  /* ---------- Service details: a sheet anchored to the card that opened it ---------- */
  var serviceSheet = sheet(document.getElementById('serviceModal'));
  if (serviceSheet){
    var sHero = document.getElementById('serviceHero');
    var sIcon = document.getElementById('serviceIcon');
    var sTitle = document.getElementById('serviceTitle');
    var sText = document.getElementById('serviceText');
    var sWa = document.getElementById('serviceWa');
    var openService = function(card, btn){
      var key = card.getAttribute('data-service');
      var photo = card.querySelector('.service-photo');
      var icon = card.querySelector('.service-icon');
      sHero.innerHTML = '';
      if (photo){
        var img = photo.cloneNode(false);
        img.removeAttribute('loading');
        img.className = '';
        img.sizes = '(max-width: 760px) 100vw, 640px';
        sHero.appendChild(img);
      }
      sIcon.innerHTML = icon ? icon.innerHTML : '';
      sIcon.className = 'service-icon' + (key === 'service1' ? ' is-emergency' : '');
      sTitle.textContent = t(key + '.title');
      sText.innerHTML = '';
      [t(key + '.desc')].concat(String(t(key + '.more') || '').split(/\n\s*\n/)).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        sText.appendChild(p);
      });
      sWa.setAttribute('data-wa', key + '.title');
      sWa.setAttribute('href', waUrl((currentLang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + t(key + '.title').toLowerCase() + (currentLang === 'es' ? ' en ' : ' at ') + siteName() + '.'));
      serviceSheet.open(btn);
      sText.scrollTop = 0;
    };
    var labelServices = function(){
      document.querySelectorAll('.service-card[data-service]').forEach(function(card){
        var btn = card.querySelector('.service-open');
        if (btn) btn.setAttribute('aria-label', fmt(t('services.more_aria'), { name: t(card.getAttribute('data-service') + '.title') }));
      });
    };
    document.querySelectorAll('.service-card[data-service]').forEach(function(card){
      var btn = card.querySelector('.service-open');
      if (btn) btn.addEventListener('click', function(){ openService(card, btn); });
    });
    langListeners.push(labelServices);
  }

  /* ---------- Map: loaded only when the visitor asks (no Google request before) ---------- */
  var mapBox = document.getElementById('mapBox');
  var mapLoad = document.getElementById('mapLoad');
  if (mapBox && mapLoad){
    mapLoad.addEventListener('click', function(){
      if (mapBox.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = mapBox.getAttribute('data-src');
      f.title = t('contact.map_frame');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function(){ mapBox.classList.add('is-loaded'); f.focus(); });
      mapBox.appendChild(f);
    });
  }

  /* ---------- Save contact: a correct vCard built on the device ---------- */
  var vcardBtn = document.getElementById('vcardBtn');
  if (vcardBtn){
    vcardBtn.addEventListener('click', function(){
      var d = {};
      try { d = JSON.parse(vcardBtn.getAttribute('data-vcard') || '{}'); } catch (e) { return; }
      var esc = function(v){ return String(v || '').replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n'); };
      var lines = ['BEGIN:VCARD', 'VERSION:3.0', 'KIND:org', 'FN:' + esc(d.name), 'ORG:' + esc(d.name)];
      (d.tel || []).forEach(function(n, i){ lines.push('TEL;TYPE=' + (i === 0 ? 'WORK,VOICE' : 'CELL,VOICE') + ':' + n); });
      if (d.email) lines.push('EMAIL;TYPE=WORK:' + d.email);
      lines.push('ADR;TYPE=WORK:;;' + esc(d.street) + ';' + esc(d.city) + ';;;Guatemala');
      if (d.url) lines.push('URL:' + d.url);
      lines.push('END:VCARD');
      var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = siteName().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.vcf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }

  /* ---------- Photos fade in once loaded (no pop-in on slow connections) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.service-photo, .area-photo, .about-photo, .maternity-img, .hero-photo img'), function(img){
    if (img.complete && img.naturalWidth) return;
    img.classList.add('is-loading');
    function done(){ img.classList.remove('is-loading'); }
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---------- Gentle parallax on the large photos (transform only, rAF-batched) ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var mqWide = window.matchMedia('(min-width: 900px)');
  var plxTicking = false;
  function parallax(){
    plxTicking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function(el){
      if (reduceMotion || !mqWide.matches){ el.style.transform = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var offset = (r.top + r.height / 2 - vh / 2) * -0.06;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  if (parallaxEls.length){
    window.addEventListener('scroll', function(){ if (!plxTicking){ plxTicking = true; requestAnimationFrame(parallax); } }, { passive: true });
    window.addEventListener('resize', parallax);
    requestAnimationFrame(parallax);
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.getElementById('inicio');
      if (skip) skip.focus({ preventScroll: true });
    });
  }

  applyLang(currentLang);
  requestAnimationFrame(onScroll);

  /* ============================================================
     Contact form — client-side validation (a UX convenience only;
     assets/contact-handler.php re-validates everything server-side),
     honeypot + minimum-completion-time anti-spam signals, and a
     defensive fetch() that handles non-JSON responses, HTTP status
     categories, timeouts, duplicate submits, offline errors, and
     field-specific errors returned by the server. Field values are
     preserved on any failure and cleared only after a confirmed
     success.
     ============================================================ */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var summary = document.getElementById('formSummary');

  /* Minimum-completion-time signal: stamped once, invisible, never an
     expectation placed on the visitor — purely a server-side anti-spam
     input alongside the honeypot. */
  var loadedAtField = document.getElementById('formLoadedAt');
  if (loadedAtField) loadedAtField.value = String(Date.now());

  /* ------------------------------------------------------------
     Captcha, two layers (verified again in assets/contact-handler.php):
     1. Built-in, always on: the handler issues a signed, single-use
        challenge and the browser finds the matching number with the
        Web Crypto API (SHA-256) in the background while the visitor
        types. Invisible: the visitor never has to do anything.
     2. Optional Cloudflare Turnstile, only when the page carries a
        site key (the owner enables it in the Content Manager). It
        stays hidden unless Cloudflare needs the visitor to click.
     ------------------------------------------------------------ */
  var captchaInput = document.getElementById('formCaptchaAnswer');
  var captchaText = document.getElementById('formCaptchaText');
  var captchaNote = document.getElementById('formCaptcha');
  var captchaJob = null;      /* Promise of the current answer */
  var captchaIssued = 0;      /* when the current challenge was requested */
  var CAPTCHA_FRESH_MS = 25 * 60 * 1000; /* the server accepts 30 min */

  function setCaptchaState(state){
    if (captchaNote) captchaNote.setAttribute('data-state', state);
    if (captchaText){
      captchaText.setAttribute('data-i18n', 'form.captcha_' + state);
      captchaText.textContent = t('form.captcha_' + state);
    }
  }

  function hexToBytes(hex){
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameBytes(buf, target){
    var a = new Uint8Array(buf);
    for (var i = 0; i < target.length; i++) if (a[i] !== target[i]) return false;
    return true;
  }

  function solveCaptcha(){
    if (!captchaInput) return Promise.resolve();
    if (!window.crypto || !window.crypto.subtle || typeof TextEncoder === 'undefined' || typeof fetch === 'undefined'){
      setCaptchaState('error');
      return Promise.reject(new Error('captcha_unsupported'));
    }
    captchaInput.value = '';
    captchaIssued = Date.now();
    setCaptchaState('pending');
    return handlerFetch('assets/contact-handler.php?challenge=1', { headers: { 'Accept': 'application/json' }, cache: 'no-store', credentials: 'same-origin' })
      .then(function(res){
        if (!res.ok) throw new Error('captcha_challenge_' + res.status);
        return res.json();
      })
      .then(function(c){
        if (!c || c.algorithm !== 'SHA-256' || typeof c.salt !== 'string' || typeof c.challenge !== 'string') throw new Error('captcha_bad_challenge');
        var enc = new TextEncoder();
        var target = hexToBytes(c.challenge);
        var BATCH = 1000;
        var search = function(start){
          if (start > c.maxnumber) throw new Error('captcha_unsolved');
          var end = Math.min(start + BATCH, c.maxnumber + 1);
          var jobs = [];
          for (var n = start; n < end; n++) jobs.push(window.crypto.subtle.digest('SHA-256', enc.encode(c.salt + n)));
          return Promise.all(jobs).then(function(hashes){
            for (var i = 0; i < hashes.length; i++) if (sameBytes(hashes[i], target)) return start + i;
            return search(end);
          });
        };
        return search(0).then(function(number){
          captchaInput.value = btoa(JSON.stringify({ algorithm: c.algorithm, challenge: c.challenge, number: number, salt: c.salt, signature: c.signature }));
          setCaptchaState('ok');
        });
      })
      .catch(function(err){
        setCaptchaState('error');
        captchaJob = null;
        throw err;
      });
  }

  /* The current answer, or a new one when there is none or it is getting old. */
  function ensureCaptcha(){
    if (!captchaJob || Date.now() - captchaIssued > CAPTCHA_FRESH_MS) captchaJob = solveCaptcha();
    return captchaJob;
  }

  function startCaptcha(){
    ensureCaptcha().catch(function(){ /* shown in the note; retried on submit */ });
    loadTurnstile();
  }

  /* Optional Cloudflare Turnstile. */
  var tsBox = document.getElementById('formTurnstile');
  var tsSiteKey = tsBox ? (tsBox.getAttribute('data-sitekey') || '') : '';
  var tsWidget = null;
  var tsToken = '';
  var tsWaiters = [];
  var tsLoading = false;

  function tsSettle(){
    var w = tsWaiters; tsWaiters = [];
    w.forEach(function(fn){ fn(); });
  }

  function loadTurnstile(){
    if (!tsSiteKey || tsLoading) return;
    tsLoading = true;
    window.clinicaTurnstileReady = function(){
      if (!window.turnstile) return;
      tsWidget = window.turnstile.render(tsBox, {
        sitekey: tsSiteKey,
        action: 'contact',
        appearance: 'interaction-only',
        language: currentLang === 'en' ? 'en' : 'es',
        callback: function(token){ tsToken = token; tsSettle(); },
        'expired-callback': function(){ tsToken = ''; },
        'error-callback': function(){ tsToken = ''; tsSettle(); }
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=clinicaTurnstileReady';
    sc.async = true;
    sc.defer = true;
    document.head.appendChild(sc);
  }

  /* Resolves with true when Turnstile is off or has a token; false after waiting. */
  function turnstileReady(){
    if (!tsSiteKey) return Promise.resolve(true);
    loadTurnstile();
    if (tsToken) return Promise.resolve(true);
    return new Promise(function(resolve){
      var timer = setTimeout(function(){ resolve(!!tsToken); }, 20000);
      tsWaiters.push(function(){ clearTimeout(timer); resolve(!!tsToken); });
    });
  }

  function resetTurnstile(){
    tsToken = '';
    if (tsWidget !== null && window.turnstile) {
      try { window.turnstile.reset(tsWidget); } catch (e) { /* widget gone */ }
    }
  }

  /* Start as soon as the visitor shows interest in the form (or it scrolls into view). */
  var contactFormEl = document.getElementById('contactForm');
  if (contactFormEl && captchaInput){
    var started = false;
    var kick = function(){ if (!started){ started = true; startCaptcha(); } };
    contactFormEl.addEventListener('focusin', kick);
    contactFormEl.addEventListener('pointerdown', kick);
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        if (entries.some(function(e){ return e.isIntersecting; })){ io.disconnect(); kick(); }
      }, { rootMargin: '300px' });
      io.observe(contactFormEl);
    }
  }

  if (form){
    /* The questions come from the Content Manager (Sitio web → Formulario de
       contacto): each .field holds one question — an input, select or
       textarea, or a group of radio buttons / checkboxes. */
    var questionFields = function(){
      return Array.prototype.filter.call(form.querySelectorAll('.field'), function(f){
        return !f.classList.contains('hp-field') && f.querySelector('input[name],select[name],textarea[name]');
      });
    };
    var fieldName = function(field){
      return field.querySelector('input[name],select[name],textarea[name]').name.replace(/\[\]$/, '');
    };
    var controlsOf = function(field){ return field.querySelectorAll('input[name],select[name],textarea[name]'); };
    var fieldValid = function(field){
      var controls = controlsOf(field);
      if (controls[0].type === 'checkbox'){
        if (!field.hasAttribute('data-required')) return true;
        return Array.prototype.some.call(controls, function(c){ return c.checked; });
      }
      return controls[0].checkValidity(); /* a radio's validity covers its whole group */
    };
    var markField = function(field, ok){
      field.classList.toggle('invalid', !ok);
      Array.prototype.forEach.call(controlsOf(field), function(c){ c.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    };
    var fieldByName = function(name){
      var found = null;
      questionFields().forEach(function(f){ if (!found && fieldName(f) === name) found = f; });
      return found;
    };
    /* Dates that must be from today on (the page is static: today is set here). */
    var today = new Date();
    var todayIso = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    Array.prototype.forEach.call(form.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayIso; });

    var submitBtn = form.querySelector('button[type="submit"]');
    var submitting = false;

    var validateAll = function(){
      var valid = true;
      var firstInvalid = null;
      questionFields().forEach(function(field){
        var ok = fieldValid(field);
        markField(field, ok);
        if (!ok){
          valid = false;
          if (!firstInvalid) firstInvalid = controlsOf(field)[0];
        }
      });
      return { valid: valid, firstInvalid: firstInvalid };
    }

    var showSummary = function(message){
      if (!summary) return;
      summary.textContent = message;
      summary.hidden = false;
    }
    var hideSummary = function(){
      if (!summary) return;
      summary.hidden = true;
      summary.textContent = '';
    }

    var setStatus = function(message, kind){
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show' + (kind ? ' ' + kind : '');
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (submitting) return; /* duplicate-submission guard */

      hideSummary();

      var result = validateAll();

      /* Honeypot check — if this hidden field has a value, silently drop
         as bot spam without hitting the network or alarming the (bot)
         "user" that anything was detected. */
      var hp = document.getElementById('website');
      if (hp && hp.value){
        setStatus(t('form.status_ok'), 'ok');
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      if (!result.valid){
        showSummary(t('form.status_invalid'));
        setStatus(t('form.status_invalid'), 'error');
        if (result.firstInvalid) result.firstInvalid.focus();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.onLine === false){
        setStatus(t('form.status_offline'), 'error');
        return;
      }

      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      var done = function(){
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
      };
      if (captchaInput && !captchaInput.value) setStatus(t('form.status_verifying'), '');

      ensureCaptcha()
        .then(function(){ return turnstileReady(); })
        .then(function(ok){
          if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
          send(false);
        }, function(){
          setStatus(t('form.status_captcha'), 'error');
          done();
        });

      function send(retried){
      setStatus(t('form.status_sending'), '');
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function(){ controller.abort(); }, 15000) : null;

      var formData = new FormData(form);
      formData.append('lang', currentLang === 'en' ? 'en' : 'es'); /* reply in the visitor's language */
      handlerFetch('assets/contact-handler.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
        .then(function(res){
          if (timeoutId) clearTimeout(timeoutId);
          var contentType = res.headers.get('Content-Type') || '';
          var parse = contentType.indexOf('application/json') !== -1
            ? res.json().catch(function(){ return null; })
            : Promise.resolve(null);
          return parse.then(function(data){ return { res: res, data: data }; });
        })
        .then(function(result){
          var res = result.res, data = result.data;

          if (res.ok && data && data.ok){
            setStatus(t(okKey()), 'ok');
            hideSummary();
            form.reset();
            questionFields().forEach(function(f){ markField(f, true); });
            if (loadedAtField) loadedAtField.value = String(Date.now());
            /* Each captcha answer works once: prepare the next one. */
            captchaJob = null;
            resetTurnstile();
            ensureCaptcha().catch(function(){});
            return;
          }

          if (res.status === 400 && data && data.error === 'captcha_failed'){
            /* Expired or already used answer (e.g. the page was open for
               hours): solve a fresh one and try once more on our own. */
            captchaJob = null;
            resetTurnstile();
            if (!retried){
              ensureCaptcha()
                .then(function(){ return turnstileReady(); })
                .then(function(ok){
                  if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
                  send(true);
                }, function(){ setStatus(t('form.status_captcha'), 'error'); done(); });
              return 'pending';
            }
            setStatus(t('form.status_captcha'), 'error');
            return;
          }

          if (res.status === 429){
            setStatus(t('form.status_rate_limited'), 'error');
            return;
          }

          if (res.status === 422 && data && Array.isArray(data.fields) && data.fields.length){
            var firstBad = null;
            data.fields.forEach(function(name){
              var bad = fieldByName(String(name));
              if (!bad) return;
              markField(bad, false);
              if (!firstBad) firstBad = controlsOf(bad)[0];
            });
            showSummary(t('form.status_invalid'));
            setStatus(t('form.status_invalid'), 'error');
            if (firstBad) firstBad.focus();
            return;
          }

          if (res.status >= 500){
            setStatus(t('form.status_error'), 'error');
            return;
          }

          /* Any other non-success status (403 origin check, unexpected
             field rejected, malformed/non-JSON response, etc.) — generic,
             non-revealing error message. Values are preserved either way. */
          setStatus(t('form.status_error'), 'error');
        })
        .catch(function(err){
          if (timeoutId) clearTimeout(timeoutId);
          if (err && err.name === 'AbortError'){
            setStatus(t('form.status_timeout'), 'error');
          } else if (typeof navigator !== 'undefined' && navigator.onLine === false){
            setStatus(t('form.status_offline'), 'error');
          } else {
            setStatus(t('form.status_error'), 'error');
          }
        })
        .then(function(outcome){
          if (outcome !== 'pending') done();
        });
      }
    });

    questionFields().forEach(function(field){
      Array.prototype.forEach.call(controlsOf(field), function(input){
        var check = function(){ markField(field, fieldValid(field)); };
        input.addEventListener('blur', check);
        /* choices: re-check as soon as one is picked */
        if (input.type === 'radio' || input.type === 'checkbox') input.addEventListener('change', check);
      });
    });
  }
  /* ============================================================
     HOSPITAL MODULES (cms/src/HospitalModules.php) — every block is
     optional: each part below does nothing when its markup is absent.
     ============================================================ */
  var todayYmd = (function(){ var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); })();
  var fold = function(s){
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  };

  /* ---------- Featured notice: hidden after its end date; closing hides it for this visit ---------- */
  var notice = document.getElementById('siteNotice');
  if (notice){
    var until = notice.getAttribute('data-until') || '';
    var noticeKey = 'clinica_notice_closed';
    var noticeSig = String((I18N.es['notice.text'] || notice.textContent || '').length) + ':' + until;
    var closed = false;
    try { closed = sessionStorage.getItem(noticeKey) === noticeSig; } catch (e) { /* storage blocked */ }
    if ((until && until < todayYmd) || closed) notice.hidden = true;
    var noticeClose = document.getElementById('noticeClose');
    if (noticeClose) noticeClose.addEventListener('click', function(){
      notice.hidden = true;
      try { sessionStorage.setItem(noticeKey, noticeSig); } catch (e) { /* storage blocked */ }
      var main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });
  }

  /* ---------- Texts made of several pieces (package lists, service page paragraphs) ---------- */
  var applyPieces = function(){
    document.querySelectorAll('[data-split-i18n]').forEach(function(ul){
      var val = t(ul.getAttribute('data-split-i18n'));
      if (!val || val === ul.getAttribute('data-split-i18n')) return;
      var items = val.split(/[;\n]+/).map(function(s){ return s.trim(); }).filter(Boolean);
      ul.innerHTML = '';
      items.forEach(function(text){
        var li = document.createElement('li');
        li.innerHTML = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
        var span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        ul.appendChild(li);
      });
    });
    document.querySelectorAll('[data-i18n-paras]').forEach(function(box){
      var val = t(box.getAttribute('data-i18n-paras'));
      if (!val || val === box.getAttribute('data-i18n-paras')) return;
      box.innerHTML = '';
      val.split(/\n\s*\n/).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        box.appendChild(p);
      });
    });
    document.querySelectorAll('[data-stars]').forEach(function(s){ s.setAttribute('aria-label', fmt(t('reviews.stars_aria'), { n: s.getAttribute('data-stars') })); });
    document.querySelectorAll('[data-reviews-count]').forEach(function(s){ s.textContent = fmt(t('reviews.count_text'), { n: s.getAttribute('data-reviews-count') }); });
    /* «Pedir cita» by WhatsApp: a message naming the doctor and the specialty. */
    document.querySelectorAll('[data-wa-doc]').forEach(function(a){
      var k = a.getAttribute('data-wa-doc');
      a.setAttribute('href', waUrl(fmt(t('doctors.wa_msg'), { site: siteName(), name: a.getAttribute('data-doc-name') || '', specialty: t(k + '.specialty') === k + '.specialty' ? '' : t(k + '.specialty') })));
    });
  };
  langListeners.push(applyPieces);
  if (currentLang !== 'es') applyPieces();

  /* ---------- Doctors: search by name or specialty, filter by specialty ---------- */
  var docGrid = document.getElementById('doctorsGrid');
  if (docGrid){
    var docSearch = document.getElementById('docSearch');
    var docFilter = document.getElementById('docFilter');
    var docEmpty = document.getElementById('docEmpty');
    var docCount = document.getElementById('docCount');
    var activeSpec = '';
    var docTimer = null;
    /* Changing the filter is animated with the Web Animations API so it works in
       every browser: cards that leave fade out in place, the ones that stay glide
       to their new position, new ones rise in one after another and the grid
       changes height smoothly. A new choice while it runs starts from where the
       cards are on screen. */
    var flipToken = 0;
    var FLIP_EASE = 'cubic-bezier(.22, 1, .36, 1)';
    var docMatches = function(card){
      var q = fold(docSearch ? docSearch.value : '');
      var okSpec = !activeSpec || card.getAttribute('data-spec') === activeSpec;
      var okText = !q || q.split(' ').every(function(w){ return (card.getAttribute('data-search') || '').indexOf(w) !== -1; });
      return okSpec && okText;
    };
    var filterDoctors = function(announce){
      var calm = document.documentElement.classList.contains('a11y-motion') || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      var cards = Array.prototype.slice.call(docGrid.children);
      var filtered = !!(activeSpec || fold(docSearch ? docSearch.value : ''));
      if (calm || !docGrid.animate || !docGrid.getAnimations){ applyDocFilter(announce); docGrid.classList.toggle('is-filtered', filtered); return; }
      var token = ++flipToken;
      var leaving = cards.filter(function(c){ return !c.hidden && !docMatches(c); });
      var move = function(){
        if (token !== flipToken) return;
        var first = [];
        cards.forEach(function(c){ first.push(c.hidden || leaving.indexOf(c) !== -1 ? null : c.getBoundingClientRect()); });
        var h0 = docGrid.getBoundingClientRect().height;
        cards.concat([docGrid]).forEach(function(c){ c.getAnimations().forEach(function(a){ if (a.id === 'case-flip') a.cancel(); }); });
        applyDocFilter(announce);
        docGrid.classList.toggle('is-filtered', filtered);
        var h1 = docGrid.getBoundingClientRect().height, entering = 0;
        cards.forEach(function(c, i){
          if (c.hidden) return;
          var a = first[i], b = c.getBoundingClientRect(), anim;
          if (a){
            var dx = a.left - b.left, dy = a.top - b.top;
            if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
            anim = c.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: 640, easing: FLIP_EASE });
          } else {
            anim = c.animate([{ opacity: 0, transform: 'translateY(34px) scale(.95)' }, { opacity: 1, transform: 'none' }], { duration: 620, delay: 70 + Math.min(entering++, 6) * 60, easing: FLIP_EASE, fill: 'backwards' });
          }
          anim.id = 'case-flip';
        });
        if (Math.abs(h0 - h1) > 1) docGrid.animate([{ height: h0 + 'px' }, { height: h1 + 'px' }], { duration: 640, easing: FLIP_EASE }).id = 'case-flip';
      };
      if (!leaving.length){ move(); return; }
      leaving.forEach(function(c){
        c.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.93)' }], { duration: 210, easing: 'cubic-bezier(.4, 0, 1, 1)', fill: 'forwards' }).id = 'case-flip';
      });
      setTimeout(move, 200);
    };
    var applyDocFilter = function(announce){
      var q = fold(docSearch ? docSearch.value : '');
      var shown = 0;
      Array.prototype.forEach.call(docGrid.children, function(card){
        var okSpec = !activeSpec || card.getAttribute('data-spec') === activeSpec;
        var okText = !q || q.split(' ').every(function(w){ return (card.getAttribute('data-search') || '').indexOf(w) !== -1; });
        card.hidden = !(okSpec && okText);
        if (!card.hidden){ shown++; card.classList.add('in'); }
      });
      if (docEmpty) docEmpty.hidden = shown !== 0;
      if (docCount && announce) docCount.textContent = shown === 1 ? t('doctors.result1') : fmt(t('doctors.results'), { n: shown });
    };
    if (docSearch) docSearch.addEventListener('input', function(){
      clearTimeout(docTimer);
      docTimer = setTimeout(function(){ filterDoctors(true); }, 180);
    });
    if (docFilter) docFilter.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.chip-btn') : null;
      if (!b) return;
      activeSpec = b.getAttribute('data-filter') || '';
      Array.prototype.forEach.call(docFilter.querySelectorAll('.chip-btn'), function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      filterDoctors(true);
    });
  }

  /* ---------- Appointment: preselect specialty / doctor (cards, service pages, ?caso= / ?servicio=) ---------- */
  var apptForm = document.getElementById('appointmentForm');
  var apptSpec = document.getElementById('apptSpecialty');
  var apptDoc = document.getElementById('apptDoctor');
  var preselectAppointment = function(doctor, spec){
    if (!apptForm) return false;
    if (apptDoc && doctor && apptDoc.querySelector('option[value="' + doctor + '"]')){
      apptDoc.value = doctor;
      spec = spec || apptDoc.options[apptDoc.selectedIndex].getAttribute('data-spec');
    }
    if (apptSpec && spec && apptSpec.querySelector('option[value="' + spec + '"]')) apptSpec.value = spec;
    return true;
  };
  if (apptForm){
    document.querySelectorAll('[data-appt-doctor],[data-appt-spec]').forEach(function(a){
      a.addEventListener('click', function(e){
        if (!preselectAppointment(a.getAttribute('data-appt-doctor'), a.getAttribute('data-appt-spec'))) return;
        e.preventDefault();
        var target = document.getElementById('reunion');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(function(){ var f = document.getElementById('apptDate'); if (f) f.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
      });
    });
    /* Picking a doctor also picks the specialty. */
    if (apptDoc) apptDoc.addEventListener('change', function(){
      var o = apptDoc.options[apptDoc.selectedIndex];
      var s = o ? o.getAttribute('data-spec') : '';
      if (s && apptSpec && apptSpec.querySelector('option[value="' + s + '"]')) apptSpec.value = s;
    });
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('caso') || params.get('servicio')) preselectAppointment(params.get('caso'), params.get('servicio'));
    } catch (e) { /* old browser */ }
  }

  /* ---------- Request forms (appointment, insurance check) ----------
     Same handler, anti-spam and captcha as the contact form; stored in
     «Prospectos» with their kind. */
  Array.prototype.forEach.call(document.querySelectorAll('form.lead-form'), function(lf){
    var stamp = lf.querySelector('[data-loaded-at]');
    if (stamp) stamp.value = String(Date.now());
    var statusEl = lf.querySelector('[data-form-status]');
    var btn = lf.querySelector('button[type="submit"]');
    var busy = false;
    var kicked = false;
    var kickOff = function(){ if (!kicked){ kicked = true; startCaptcha(); } };
    lf.addEventListener('focusin', kickOff);
    lf.addEventListener('pointerdown', kickOff);
    Array.prototype.forEach.call(lf.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayYmd; });
    var fields = function(){ return Array.prototype.filter.call(lf.querySelectorAll('.field'), function(f){ return f.querySelector('input[name],select[name],textarea[name]'); }); };
    var ctl = function(f){ return f.querySelector('input[name],select[name],textarea[name]'); };
    var valid = function(f){ return ctl(f).checkValidity(); };
    var mark = function(f, ok){ f.classList.toggle('invalid', !ok); ctl(f).setAttribute('aria-invalid', ok ? 'false' : 'true'); };
    var say = function(msg, kind){ if (!statusEl) return; statusEl.textContent = msg; statusEl.className = 'form-status show' + (kind ? ' ' + kind : ''); };
    fields().forEach(function(f){ ctl(f).addEventListener('blur', function(){ mark(f, valid(f)); }); ctl(f).addEventListener('change', function(){ if (f.classList.contains('invalid')) mark(f, valid(f)); }); });
    var finish = function(){ busy = false; if (btn) btn.disabled = false; };
    var post = function(retried){
      say(t('form.status_sending'), '');
      var fd = new FormData(lf);
      fd.set('captcha', captchaInput ? captchaInput.value : '');
      if (tsToken) fd.set('cf-turnstile-response', tsToken);
      fd.append('lang', currentLang === 'en' ? 'en' : 'es');
      handlerFetch('assets/contact-handler.php', { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
        .then(function(res){ return res.json().catch(function(){ return null; }).then(function(data){ return { res: res, data: data }; }); })
        .then(function(r){
          if (r.res.ok && r.data && r.data.ok){
            say(t(okKey(lf.getAttribute('data-ok'))), 'ok');
            lf.reset();
            fields().forEach(function(f){ mark(f, true); });
            if (stamp) stamp.value = String(Date.now());
            captchaJob = null; resetTurnstile(); ensureCaptcha().catch(function(){});
            finish();
            return;
          }
          if (r.res.status === 400 && r.data && r.data.error === 'captcha_failed' && !retried){
            captchaJob = null; resetTurnstile();
            ensureCaptcha().then(turnstileReady).then(function(ok){ if (ok) post(true); else { say(t('form.status_turnstile'), 'error'); finish(); } }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
            return;
          }
          if (r.res.status === 422 && r.data && Array.isArray(r.data.fields)){
            var first = null;
            r.data.fields.forEach(function(name){
              var c = lf.querySelector('[name="' + String(name).replace(/[^a-z_]/g, '') + '"]');
              var f = c && c.closest('.field');
              if (f){ mark(f, false); if (!first) first = c; }
            });
            say(t('form.status_invalid'), 'error');
            if (first) first.focus();
          } else if (r.res.status === 429){
            say(t('form.status_rate_limited'), 'error');
          } else {
            say(t('form.status_error'), 'error');
          }
          finish();
        })
        .catch(function(){ say(t(navigator.onLine === false ? 'form.status_offline' : 'form.status_error'), 'error'); finish(); });
    };
    lf.addEventListener('submit', function(e){
      e.preventDefault();
      if (busy) return;
      var hp = lf.querySelector('input[name="website"]');
      if (hp && hp.value){ say(t(lf.getAttribute('data-ok') || 'form.status_ok'), 'ok'); lf.reset(); return; }
      var first = null;
      fields().forEach(function(f){ var ok = valid(f); mark(f, ok); if (!ok && !first) first = ctl(f); });
      if (first){ say(t('form.status_invalid'), 'error'); first.focus(); return; }
      busy = true;
      if (btn) btn.disabled = true;
      kickOff();
      if (captchaInput && !captchaInput.value) say(t('form.status_verifying'), '');
      ensureCaptcha().then(turnstileReady).then(function(ok){
        if (!ok){ say(t('form.status_turnstile'), 'error'); finish(); return; }
        post(false);
      }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
    });
  });
})();
