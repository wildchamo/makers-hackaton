const OpenAIJsonParser = require("./OpenAIJsonParser");

async function main() {
  const chat = {
    "chatCitas": [
      {
        "usuario": "Usuario1",
        "mensaje": "Hola, me llamó la atención tu perfil. ¿Cómo estás?",
        "hora": "20:45"
      },
      {
        "usuario": "Usuario2",
        "mensaje": "¡Hola! Estoy bien, gracias. Me alegra que te haya gustado mi perfil. ¿Qué te interesó más?",
        "hora": "20:47"
      },
      {
        "usuario": "Usuario1",
        "mensaje": "Me encantó tu gusto por la música y los viajes. ¿Cuál es tu destino favorito?",
        "hora": "20:49"
      },
      {
        "usuario": "Usuario2",
        "mensaje": "Siempre he querido ir a Japón, especialmente durante la temporada de Sakura. ¿Y tú?",
        "hora": "20:51"
      },
      {
        "usuario": "Usuario1",
        "mensaje": "Japón suena increíble. Yo disfruté mucho mi viaje a Italia, la comida y la historia son fascinantes.",
        "hora": "20:53"
      },
      {
        "usuario": "Usuario2",
        "mensaje": "Italia es hermoso, ¡la pizza y el gelato son lo mejor! ¿Has probado cocinar alguna receta italiana?",
        "hora": "20:55"
      },
      {
        "usuario": "Usuario1",
        "mensaje": "Sí, he intentado hacer pasta casera. No es fácil, pero es divertido. ¿Te gusta cocinar?",
        "hora": "20:57"
      },
      {
        "usuario": "Usuario2",
        "mensaje": "Bastante, especialmente cuando tengo compañía. Tal vez podríamos intentar cocinar algo juntos alguna vez.",
        "hora": "20:59"
      },
      {
        "usuario": "Usuario1",
        "mensaje": "Eso suena como un plan genial. ¿Qué tal si planeamos algo para el próximo fin de semana?",
        "hora": "21:01"
      },
      {
        "usuario": "Usuario2",
        "mensaje": "Me encantaría. ¡Hagámoslo!",
        "hora": "21:03"
      }
    ]
  }

  // chat json to string
  const chatString = JSON.stringify(chat);

  console.log(chatString)

  const ConfigUser = "Tosco, sucio y picante"
  OpenAIJsonParser(chatString,ConfigUser);

}
main();
