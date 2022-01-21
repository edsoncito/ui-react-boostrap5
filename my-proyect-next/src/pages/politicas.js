import React from 'react'
import { connect } from 'react-redux';
import Logo from '../svg/logo.svg'

const delay = ms => new Promise(res => setTimeout(res, ms));

const politicas = (props) => {


  // const depuesDeLaCarga = async () => {
  //   await delay(1500);
  //   console.log("Waited");
  //   //aqui se conecta con el socket en index principal
  //   if (!props.state.usuarioReducer.usuarioLog) {
  //     props.history.push("/login");
  //   } else {
  //     props.history.push("/inicio");
  //   }
  // };
  // depuesDeLaCarga()

  return (
    <>
      <div style={{
        flexDirection: "column",
        display: "flex",
        background: "#fafafa",
        width: "100%",
        height: "100%",
        // justifyContent: "center",
        alignItems: "center",
        padding:8,

      }}>
        <h1>Politicas y privacidad</h1><br />
        <p style={{
          textAlign:"justify"
        }}>CONDICIONES DE USO Y POLÍTICA DE PRIVACIDAD PARA NUESTRAS APPS Y ACCESO DESDE DISPOSITIVOS MÓVILES<br /><br />
        1. CONDICIONES GENERALES DE USO<br />
        El presente documento tiene por objeto establecer las Condiciones Generales de Uso de las aplicaciones móviles titularidad de Servisofts.com con domicilio social en Santa Cruz de la sierra - bolivia.<br />
<br />
        Servisofts se reserva el derecho a modificar las presentes Condiciones de Uso con el objeto de adecuarlas a la legislación vigente aplicable en cada momento. Las presentes Condiciones de Uso no excluyen la posibilidad de que determinados Servicios de las aplicaciones, por sus características particulares, sean sometidos, además de a las Condiciones Generales de Uso, a sus propias condiciones particulares de uso (en adelante las Condiciones Particulares). Servisofts podrá, en cualquier momento y sin necesidad de previo aviso, realizar cambios y actualizaciones de las presentes Condiciones de Uso y de la Política de Privacidad. Estos cambios serán publicados en la Web y en la/s Aplicación/es y serán efectivos desde el momento de su publicación. Como consecuencia de lo anterior, el Usuario deberá revisar periódicamente si hay cambios en estas Condiciones y, tanto si existe consentimiento expreso como si no, si el Usuario continua usando el Servicio tras la publicación, ello implica la aceptación y asunción de los mismos. En caso de que no esté de acuerdo con las actualizaciones de las Condiciones de uso o de la Política de Privacidad, podrá renunciar dejando de usar el Servicio. El acceso y descarga de la aplicación es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios. Determinados servicios son exclusivos para nuestros clientes y su acceso se encuentra restringido. La descarga y uso de la aplicación atribuye la condición de usuario de la misma (en adelante, el ‘Usuario’) e implica la lectura, entendimiento y aceptación de todos los términos y condiciones recogidas por la presente.<br />
        <br />
        1.1 USO DE LA APLICACIÓN MÓVIL Y SUS SERVICIOS<br />
        El Usuario reconoce y acepta que el uso de los contenidos y/o servicios ofrecidos por la presente aplicación móvil será bajo su exclusivo riesgo y/o responsabilidad. El Usuario se compromete a utilizar la presente aplicación móvil y todo su contenido y Servicios de conformidad con la ley, la moral, el orden público y las presentes Condiciones de Uso, y las Condiciones Particulares que, en su caso, le sean de aplicación. Así mismo, se compromete hacer un uso adecuado de los servicios y/o contenidos de la aplicación móvil y a no emplearlos para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico aplicable. En particular, el Usuario se compromete a no trasmitir, introducir, difundir y poner a disposición de terceros, cualquier tipo de material e información (datos contenidos, mensajes, dibujos, archivos de sonido e imagen, fotografías, software, etc.) que sean contrarios a la ley, la moral, el orden público y las presentes Condiciones de Uso y, en su caso, a las Condiciones Particulares que le sean de aplicación. A título enunciativo, y en ningún caso limitativo o excluyente, el Usuario se compromete a:<br />
        <br />
        – No introducir o difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o que atenten contra los derechos humanos.<br />
        <br />
        – No introducir o difundir en la red programas de datos (virus y software nocivo) susceptibles de provocar daños en los sistemas informáticos del proveedor de acceso, sus proveedores o terceros usuarios de la red Internet.<br />
        <br />
        – No difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que atente contra los derechos fundamentales y las libertades públicas reconocidos constitucionalmente y en los tratados internacionales.<br />
        <br />
        – No difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que constituya publicidad ilícita o desleal.<br />
        <br />
        – No transmitir publicidad no solicitada o autorizada, material publicitario, “correo basura”, “cartas en cadena”, “estructuras piramidales”, o cualquier otra forma de solicitación, excepto en aquellas áreas (tales como espacios comerciales) que hayan sido exclusivamente concebidas para ello.<br />
        <br />
        – No introducir o difundir cualquier información y contenidos falsos, ambiguos o inexactos de forma que induzca a error a los receptores de la información.<br />
        <br />
        – No suplantar a otros usuarios utilizando sus claves de registro a los distintos servicios y/o contenidos de los Portales.<br />
        <br />
        – No difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que suponga una violación de los derechos de propiedad intelectual e industrial, patentes, marcas o copyright que correspondan a los titulares de los Portales o a terceros.<br />
        <br />
        – No difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que suponga una violación del secreto de las comunicaciones y la legislación de datos de carácter personal.<br />
        <br />
        1.2 PROPIEDAD INTELECTUAL E INDUSTRIAL<br />
        Servisofts se reserva todos los derechos sobre las marcas, nombres comerciales o demás signos distintivos, las patentes, y la propiedad intelectual, con respecto al contenido y diseño de la aplicación. Todos los contenidos de la misma, incluyendo sin carácter limitativo, textos, gráficos, imágenes, su diseño y los derechos de propiedad intelectual que pudieran corresponder a dichos contenidos, así como las marcas, nombres comerciales o cualquier otro signo distintivo son propiedad de Servisofts o, en caso de ser una aplicación realizada a un tercero, de la propiedad de este, habiendo autorizado a Servisofts a la utilización de dicho contenido aún estando protegido por copyright del cliente, quedando reservados todos los derechos sobre los mismos. Las marcas, nombres comerciales o signos distintivos son titularidad de Servisofts, sin que pueda entenderse que la descarga, acceso y uso de la aplicación le atribuya ningún derecho sobre las citadas marcas, nombres comerciales y/o signos distintivos.<br />
        <br />
        1.3 EXCLUSION DE GARANTÍAS. RESPONSABILIDAD<br />
        Servisofts no garantiza en todo momento la disponibilidad de acceso y continuidad del funcionamiento de la presente aplicación móvil y de sus servicios, por lo que Servisofts no será responsable, con los límites establecidos en el Ordenamiento Jurídico vigente, de los daños y perjuicios causados al Usuario como consecuencia de la no disponibilidad, fallos de acceso y falta de continuidad de la presente aplicación móvil y sus Servicios. Servisofts responderá única y exclusivamente de los Servicios que preste por sí misma y de los contenidos directamente originados por la empresa e identificados con su copyright. Dicha responsabilidad quedará excluida en los casos en que concurran causas de fuerza mayor o en los supuestos en que la configuración de los dispositivos del Usuario no sea la adecuada para permitir el correcto uso de los servicios de Internet prestados por Servisofts. La descarga, acceso y uso de la aplicación en los dispositivos móviles o similares, no implica la obligación por parte de Servisofts de controlar la ausencia de virus, gusanos o cualquier otro elemento informático dañino. Corresponde al Usuario, en todo caso, la disponibilidad de herramientas adecuadas para la detección y desinfección de programas informáticos dañinos.<br />
        <br />
        1.4 CONDUCTA DE LOS USUARIOS<br />
        Servisofts no garantiza que los Usuarios de la presente aplicación móvil utilicen los contenidos y/o servicios del mismo de conformidad con la ley, la moral, el orden público, ni las presentes Condiciones Generales y, en su caso, las condiciones Particulares que resulten de aplicación. Asimismo, no garantiza la veracidad y exactitud, exhaustividad y/o autenticidad de los datos proporcionados por los Usuarios. Servisofts no será responsable, indirecta ni subsidiariamente, de los daños y perjuicios de cualquier naturaleza derivados de la utilización de los Servicios y Contenidos de la aplicación por parte de los Usuarios o que puedan derivarse de la falta de veracidad, exactitud y/o autenticidad de los datos o informaciones proporcionadas por los Usuarios, o de la suplantación de la identidad de un tercero efectuada por un Usuario en cualquier clase de actuación a través de la presente aplicación móvil. Por lo tanto, el uso de esta aplicación no implica la obligación por parte de Servisofts de comprobar la veracidad, exactitud, adecuación, idoneidad, exhaustividad y actualidad de la información suministrada a través de la misma. Servisofts no se responsabiliza de las decisiones tomadas a partir de la información suministrada a través de la aplicación ni de los daños y perjuicios producidos en el Usuario o terceros con motivo de actuaciones que tengan como único fundamento la información obtenida en la aplicación.<br />
        <br />
        2. POLÍTICA PRIVACIDAD APP
        Servisofts desea poner en conocimiento de los usuarios y clientes de la/s aplicación/es, la política llevada a cabo respecto al tratamiento de todos los datos de carácter personal que por la utilización de las funciones de la/s aplicación/es se faciliten a la empresa.<br />
        <br />
        Se aplican a la política de privacidad de nuestras apps, además de todo lo descrito en esta página, lo descrito también en nuestra Política de Privacidad general.<br />
        <br />
        2.1 IDENTIFICACIÓN DEL RESPONSABLE DE FICHERO<br />
        Servisofts.com
        <br />
        2.2 FINALIDAD DEL FICHERO
        Todos los datos que se solicitan a los usuarios y clientes a través de la aplicación para dispositivos móviles serán necesarios para prestar el servicio objeto del servicio en virtud del cual se ha procedido a la descarga e instalación de la/s aplicación/es en los correspondientes dispositivos.<br />
        <br />
        2.3 CONSENTIMIENTO
        La utilización de la aplicación dará lugar al tratamiento de datos de carácter personal que Servisofts, en su caso, llevará a cabo de acuerdo con las normas y procedimientos internos establecidos al efecto, que son conocidos por los clientes y usuarios y autorizados por éstos. Servisofts, al amparo de lo previsto en el artículo 12 de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, podrá subcontratar con otras empresas o profesionales la ejecución material de todas o alguna de las prestaciones de servicios sin que en ningún caso tal comunicación constituya una cesión de datos, garantizando a los clientes y usuarios de la aplicación que los datos facilitados no se aplicarán ni utilizarán con un fin distinto al establecido.<br />
        <br />
        2.4 GARANTÍA Y PROTECCIÓN DE DATOS<br />
        En el tratamiento de los datos de carácter personal, Servisofts se compromete a garantizar y proteger las libertades públicas y los derechos fundamentales de las personas físicas de los ficheros y, especialmente, su honor y su intimidad familiar y personal, obligándose en este sentido, a efectuar el correspondiente tratamiento de datos de acuerdo con la normativa vigente en cada momento y a guardar el más absoluto secreto en relación con la información entregada por los clientes y usuarios. Los datos de carácter personal objeto de tratamiento no se utilizarán para otras finalidades que no se encuentren aquí recogidas o, en su caso, por otro documento o contrato que vinculase a ambas partes con condiciones particulares. Servisofts, salvo consentimiento expreso por parte de los usuarios y clientes, no realizará cesiones ni comunicaciones de datos que no estén previstos en el art. 11.2. LOPD.<br />
        <br />
        2.5 CALIDAD DE LOS DATOS
        Los usuarios y clientes deberán velar por el cumplimiento de todas las medidas técnicas y organizativas necesarias con la finalidad de garantizar la seguridad de los datos de carácter personal, evitando su alteración, pérdida, tratamiento o acceso no autorizado. Los datos que se comuniquen a través de la aplicación tendrán que ser exactos y puestos al día siendo de exclusiva responsabilidad de los clientes y usuarios la actualización de estos datos.<br />
        <br />
        2.6 EJERCICIO DE LOS DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN<br />
        Servisofts informa de que los usuarios podrán ejercitar los derechos de acceso, rectificación, cancelación y oposición mediante el envío de un correo electrónico a servisofts.srl@gmail.com<br />
        <br />
        2.7 MEDIDAS DE SEGURIDAD
        Servisofts informa a los usuarios y clientes que, de conformidad con lo dispuesto en la LOPD y el Reglamento de Medidas de Seguridad, ha adoptado las medidas de índole técnica y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar la alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos. Igualmente Servisofts garantiza al usuario el cumplimiento del deber de secreto profesional respecto de los datos personales de los usuarios y del deber de guardarlos.<br />
        <br />
        2.8 MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD<br />
        Servisofts se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio doctrinal de la Agencia boliviana de Protección de Datos, legislativo o jurisprudencial.<br />
        <br />
        3. ACERCA DEL TRATAMIENTO DE LA INFORMACIÓN PERSONAL DE LOS USUARIOS DE LA APP<br />
        Para el óptimo funcionamiento de esta app, es necesario recoger y procesar cierta información obtenida del dispositivo en el que se ha instalado. Esta información permite mejorar la app, adaptar el contenido de forma óptima para cada usuario o contactar con el usuario en caso de que sea necesario. Para demostrar que nos importa la privacidad de nuestros usuarios, hemos adoptado la presente Política de privacidad, la cual explica, en un lenguaje comprensible y sencillo de entender, cómo recogemos, almacenamos, usamos y revelamos la información que los usuarios nos confían.<br />
        <br />
        Esta política de privacidad trata de cubrir el mayor número de escenarios posibles, incluso en muchos casos en los que la app ni si quiera recoge ni procesa la información descrita en estas Políticas de Privacidad.<br />
        <br />
        3.1 ¿QUÉ INFORMACIÓN RECOGE LA APP?<br />
        Esta aplicación recoge la información necesaria para el normal funcionamiento de nuestra actividad. En ningún caso recogemos información personal que no esté relacionada con la actividad que desarrollamos.<br />
        <br />
        La app no recoge información personal del usuario, como su nombre o su número de teléfono, salvo que en algún momento la app solicite dicha información y el usuario la introduzca libremente, aceptando su envío. La app podrá recoger una dirección de correo electrónica y almacenarla para poder así contactar con el usuario si fuese necesario.<br />
        <br />
        3.2 ¿QUÉ INFORMACIÓN RECOGE ESTA POLÍTICA DE PRIVACIDAD?<br />
        La App puede recoger información de dos tipos: (1) información no personal y anónima recogida automáticamente o (2) información de identificación personal (IIP) recogida manualmente tras consentimiento del usuario.<br />
        <br />
        Información no personal recogida automáticamente<br />
        <br />
        Información técnica, la cual incluye cierta información o características sobre el sistema operativo, incluyendo el tipo de operador o el tipo de navegador que utiliza, el Protocolo de Internet (IP), la dirección IP y los nombres y las versiones de las aplicaciones instaladas en el dispositivo, la ubicación geográfica del dispositivo. Dicha información técnica como la mencionada anteriormente permanece anónima, es decir, no lo identifica personalmente ni se guarda asociada a cualquier otra información que la vincule con el propio usuario, salvo que el usuario introduzca voluntariamente información complementaria.<br />
        <br />
        Esta información se utilizará para mejorar la aplicación, aprendiendo cómo, cuándo y dónde navega el usuario a través de ella.<br />
        <br />
        Información que el usuario provee libremente<br />
        <br />
        Si en algún momento la app solicitase Información de Identificación Personal (IIP) que nos permitan contactar con él, como el nombre o el teléfono móvil, el usuario será libre de ofrecer dicha información. No obstante:<br />
        <br />
        Si compartes tu IIP en un formato abierto (por ejemplo, a través de redes sociales), la información que obtengamos no será protegida por esta política de privacidad.<br />
        La IIP no incluirá ningún tipo de información recogida por la aplicación por ningún medio que no sea la presente aplicación en la cual figura la política de privacidad. Esto significa que la información recogida en cualquier otro lugar distinto a esta aplicación no está amparada por la presente Política de privacidad. Cabe resaltar que, si en algún caso la app ofreciese enlaces a otras aplicaciones, no nos hacemos responsables del contenido, actividad o información que tenga lugar en las mismas.<br />
        Se considera Información de caracter personal:<br />
        <br />
        La información demográfica tal y como la edad o día de nacimiento, nacionalidad, nivel educativo, sexo, intereses o cualidades.<br />
        La Información del usuario como el nombre de usuario y la contraseña, respuestas confidenciales a ciertas preguntas de seguridad, o información similar que nos permita únicamente identificar tu cuenta o autentificarla antes de dar información personal sobre la cuenta del usuario.<br />
        La mayoría de estos datos se podrán obtener cuando la app ofrece una funcionalidad de registro social y el usuario acepta el registro en la app mediante una cuenta social. En algunos casos, la app se registra automáticamente con la cuenta social del usuario asociada al dispositivo y el usuario acepta extender dicho registro al utilizar esta app.<br />
        <br />
        3.3 ¿QUÉ OCURRE CON LA INFORMACIÓN QUE RECOGEMOS DE LOS MENORES?<br />
        Esta aplicación no recoge información personal de niños menores de 13 años. Nos tomamos la privacidad del menor seriamente, y animamos a los padres a jugar un rol activo acerca en la educación online de sus hijos en todo momento. Los niños menores de 13 años no deben instalar nuestra aplicación en ningún dispositivo que les pertenezca y, si lo hacen, será bajo la total responsabilidad de sus padres o tutores. En caso de obtener información personal de un menor de 13 años, tomaremos medidas para eliminar la información suministrada de nuestro servidor. En el caso de que el contenido de esta aplicación haya recibido una calificación de apta para menores de 13 años, ésta debería instalarse exclusivamente en dispositivos pertenecientes a sus padres, tutores o cualquier persona mayor de 13 años. Si la aplicación solicitase Información de caracter personal en algún momento, los menores de 13 años no deberán nunca introducir dicha información.<br />
        <br />
        3.4 ¿CÓMO RECOGEMOS LA INFORMACIÓN PERSONAL?<br />
        Recogemos la información de identificación personal (IIP), la información demográfica y la información del usuario de nuestros usuarios cuando los mismos:<br />
        <br />
        Se registran en nuestra aplicación.<br />
        Participan en encuestas, estudios o cuestionarios.<br />
        Participan en ofertas o promociones.<br />
        Además de la información establecida, utilizamos cookies para recoger información del usuario cuando visita nuestra aplicación. Las cookies son información que una página web o aplicación envía al dispositivo cuando se está navegando por dicha aplicación. A modo de ejemplo, cuando usted decida volver a nuestra aplicación después de registrarse, las cookies nos proporcionan información y así nuestro servidor recordar quien es usted. Usted tiene la posibilidad de aceptar o rechazar las cookies, según la configuración de su dispositivo a través de las opciones de configuración. Si usted rechaza recibir o eliminar las cookies, el acceso a algunos servicios puede que no funcione adecuadamente.<br />
        <br />
        3.5 ¿CÓMO UTILIZAMOS LA INFORMACIÓN QUE NOS PROVEE?<br />
        Utilizamos la información que recopilamos de en la aplicación, de la siguiente manera:<br />
        <br />
        Personalizar y mejorar su experiencia y permitirnos suministrarle el tipo de contenidos y ofertas que mejor se adapten a sus intereses.<br />
        Entregar, proveer y reparar productos o servicios.<br />
        Enviarle comunicaciones como cartas de bienvenida, confirmaciones de compra, avisos de pago o disposiciones administrativas.<br />
        Establecer y mantener las cuentas del usuario y su historial.<br />
        Contactar con usted acerca de nuestros productos y servicios y enviarle las mejores ofertas y promociones en función de sus intereses.<br />
        Estudiar las estadísticas de nuestra plataforma online.<br />
        Informar a nuestros empleados de atención al cliente.<br />
        Establecer su cuenta online y autentificarla durante su registro de usuario.<br />
        Procesar rápidamente sus peticiones de información.<br />
        Permitirnos responder eficientemente a sus dudas.<br />
        Analizar una promoción o una encuesta.<br />
        Enviarle material promocional.<br />
        Permitirnos compartir la información con terceras empresas en los términos que se han descrito en estas políticas de privacidad y con los propósitos descritos en los puntos anteriores, siempre que esté permitido por la ley.<br />
        3.6 ¿CON QUIÉN COMPARTIMOS LA INFORMACIÓN?<br />
        Esta aplicación puede que comparta tu información (en algunos casos), tu IIP e información de usuario, en las siguientes situaciones:<br />
        <br />
        Cuando la app se monetiza mediante publicidad, las redes de publicidad y/o los anunciantes que proveen los anuncios pueden requerir cierta información del usuario o del dispositivo para poder así ofrecer el anuncio más apropiado para el usuario o que más interés le pueda despertar.<br />
        Cuando contratamos empresas para ejecutar y optimizar campañas de marketing o anuncios y administrar y estudiar los datos de los consumidores. Estas compañías sólo están autorizadas a obtener el IIP y la información de usuario estrictamente necesaria para cumplir con la tarea encomendada, quedando totalmente prohibido utilizar cualquier tipo de información para otro fin que el acordado. También han accedido a guardar la información confidencial en un lugar seguro. En el caso de que esta aplicación contrate una red de publicidad, se requiere que dicha red se comprometa a no hacer un uso fraudulento de los datos que se le concedan para el normal uso de su actividad.<br />
        Cuando contratamos redes de publicidad independientes para mostrar el banner de publicidad de nuestra aplicación cuando visita páginas web de terceros. Para hacerlo de una manera más eficiente, la red de publicidad puede que utilice e inserte en su dispositivo cierta tecnología, como el caso de las cookies, para recoger de usted información no personal cuando visita nuestra aplicación. Esta información es utilizada para mostrar anuncios sobre bienes y servicios que mejor se adecuen a sus intereses cuando visite otras páginas web.<br />
        A menudo evaluamos (a veces con la ayuda de empresas externas) cómo nuestro contenido y servicios online están desarrollándose. La información relevada a este fin descansará en el servidor de la empresa y estará limitada al uso profesional de la misma. En ningún caso, el IIP o la información del usuario será compartida salvo para lo establecido anteriormente.<br />
        <br />
        Cuando la revelación de datos sea requerida por ley o estén dirigidas a proteger la seguridad de las aplicaciones, esta aplicación tiene el derecho de revelar cualquier información recogida, sin importar cuando de recogió esa información. Sólo llevaremos a cabo esta revelación de información cuando sea permitido o requerido por la ley, o cuando consideremos que existen motivos de buena fe: (I) para proteger su seguridad, incluido la de su propiedad, (ii) para proteger la seguridad de sus aplicaciones o terceros y (iii) para ejecutar los términos de uso, actualizaciones o promociones.<br />
        <br />
        3.7 ¿HABRÁ TERCEROS QUE RECOJAN INFORMACIÓN DE SUS APLICACIONES?<br />
        Hay ciertas situaciones donde un tercero puede recoger información de la aplicación. Esta app utiliza librerías de terceros que ofrecen cierta funcionalidad: herramientas de análisis, herramientas de comunicación, redes sociales, anunciantes, etc.<br />
        <br />
        Herramientas de análisis: para mejorar la aplicación, en ocasiones utilizamos herramientas que analizan el comportamiento de los usuarios. Así podemos saber qué partes de la aplicación son más importantes y cuáles hay que mejorar.<br />
        Herramientas de comunicación: por si en algún momento necesitamos comunicarnos con los usuarios, integramos herramientas de terceros que facilitan esta comunicación, ya sea mediante notificaciones push, emails, alertas dentro de la app, etc.<br />
        Redes sociales: si tu app en algún momento conecta con alguna red social, te pedirá autorización. Una vez autorizada la conexión, la red social podrá acceder a cierta información.<br />
        Redes publicitarias: en el caso de que esta app mostrase publicidad, normalmente proviene de redes publicitarias que conectan con los anunciantes. Estas redes necesitan cierta información para poder proporcionar el anuncio más adecuado para ti.<br />
        Esta aplicación se reserva el derecho a dar cierta información del usuario a empresas que colaboren con nosotros o a desarrolladores de software que proporcionan alguna funcionalidad de la app. Proveemos este tipo de acceso a tales empresas con el objetivo de generar interés en nuestros productos entre los miembros con los que tenemos algún tipo de acuerdo así como para permitir llegar a usted y a sus amigos el tipo de producto que ofrecemos. La información recogida por nosotros será tratada de acuerdo con los términos de esta Política de privacidad, pero el uso de la información por parte de un tercero será tratada según sus propios estándares. Esta aplicación no garantiza que la otra parte cumpla su política de seguridad.<br />
        <br />
        3.8 ¿QUÉ TIPO DE MEDIDAS DE SEGURIDAD TOMAMOS PARA SALVAGUARDAR SU INFORMACIÓN PERSONAL?<br />
        La seguridad y la confidencialidad de su información es extremadamente importante para nosotros. Por esa razón tenemos medidas de seguridad técnicas, administrativas y físicas en orden para proteger su información personal frente a acceso no autorizado y uso fraudulento. También revisamos nuestro sistema de seguridad periódicamente para insertar las novedades tecnológicas y métodos de actualización. No obstante, a pesar de nuestros esfuerzos, ningún método de seguridad es completamente perfecto e infalible.<br />
        <br />
        Usted también puede jugar un rol importante en mantener su información guardada de forma segura. Si a usted se le requiere crear una contraseña única para restringir el acceso a su cuenta, elija una contraseña que sea difícil de averiguar por otros usuarios, y tenga la precaución de no revelarla a nadie. Es su responsabilidad guardar su contraseña y la información de su cuenta en todo momento. Si usted usa un dispositivo móvil público o compartido, nunca le de a guardar usuario y cierre en todo momento la sesión de su cuenta cada vez que deje de utilizar el dispositivo.<br />
        <br />
        Finalmente, respecto a las empresas que tienen un acuerdo con esta aplicación, les requerimos que acepten proteger nuestros términos de confidencialidad, integridad y seguridad de cualquier información personal que compartamos con ellos. Cuando su información personal sea compartida o simultáneamente recogida por un tercero tal y como se exponía anteriormente, o será obvio para usted teniendo en cuenta el contexto (tal y como la aparición de un tercero en la pantalla del teléfono) o será notificado en el momento en que la información personal sea reclamada. Además, se le dará la oportunidad de aceptar o declinar este tipo de prácticas antes de que se inicien. Tal y como se estableció en la sección 3.3 de esta Política de privacidad, no recogemos información personal de niños menores de 13 años y les informamos de que no deben hacer uso de nuestra herramienta en ningún caso. De este modo, esta aplicación no compartirá información recogida de los menores de 13 años con ningún tipo de empresa que haya firmado un acuerdo de colaboración.<br />
        <br />
        En caso de que detectásemos que alguno de nuestros partners tecnológicos pusiera en riesgo tu integridad o utilizase tu información para llevar a cabo cualquier acción ilegal, tomaremos las medidas oportunas para cortar la relación con dicho proveedor.<br />
        <br />
        3.9 ¿CÓMO PUEDE HACER PREGUNTAS O ENVIARNOS COMENTARIOS ACERCA DE NUESTRA POLÍTICA DE PRIVACIDAD?<br />
        Si tiene algún tipo de duda o desea ponerse en contacto con nosotros para aclarar cualquier punto, por favor envíenos un e-mail a la dirección servisofts.srl@gmail.com<br />
        <br />
        3.10 ¿CÓMO SABRÁ USTED SI MODIFICAMOS NUESTRA POLÍTICA DE PRIVACIDAD?<br />
        Esta aplicación se reserva el derecho a modificar la presente política de privacidad en cualquier momento, aunque no es habitual. Cualquier cambio en las políticas normalmente irá acompañado de una actualización en la versión de la aplicación. Al inicio de estas políticas puedes encontrar el número de versión y la fecha en que se han editado. En caso de proceder a un cambio material en cómo recogemos, usamos o compartimos la información personal, añadiremos estos cambios en una nueva versión de estas políticas.<br />
        <br />
        4. VARIOS
        MODIFICACION DEL CONTENIDO DE LA APP<br />
        Servisofts se reserva el derecho a efectuar las modificaciones que estime oportunas, pudiendo modificar, suprimir e incluir nuevos contenidos y/o servicios, así como la forma en que éstos aparezcan presentados y localizados.<br />
        <br />
        4.1 MENORES DE EDAD
        Con carácter general, para hacer uso de los Servicios de la presente aplicación móvil los menores de edad deben haber obtenido previamente la autorización de sus padres, tutores o representantes legales, quienes serán responsables de todos los actos realizados a través de la presente aplicación móvil por los menores a su cargo. En aquellos Servicios en los que expresamente se señale, el acceso quedará restringido única y exclusivamente a mayores de 18 años.<br />
        <br />
        4.2 DURACIÓN Y TERMINACIÓN
        La prestación de los servicios y/o contenidos de la presente aplicación móvil tiene una duración indefinida. Sin perjuicio de lo anterior, Servisofts está facultada para dar por terminada, suspender o interrumpir unilateralmente, en cualquier momento y sin necesidad de preaviso, la prestación del servicio y de la presente aplicación móvil y/o de cualquiera de los servicios, sin perjuicio de lo que se hubiera dispuesto al respecto en las correspondientes condiciones particulares.<br />
        <br />
        4.3 LEY Y JURISDICCIÓN
Las cuestiones relativas a las Condiciones de Uso y Política de Privacidad, así como todas aquellas cuestiones que radican y tengan relación en parte o en su totalidad con los servicios suministrados a través de la aplicación, se rigen en todos y cada uno de sus extremos por la ley boliviana, renunciando expresamente las partes al fuero que les corresponda, y sometiéndose a los Juzgados y Tribunales de Barcelona.</p><br />
      </div>
    </>
  )
}


export default politicas;
