const { z } = require("zod");
const { OpenAI } = require("langchain/llms/openai");
const { PromptTemplate } = require("langchain/prompts");
const { LLMChain } = require("langchain/chains");
const {
  StructuredOutputParser,
  OutputFixingParser,
} = require("langchain/output_parsers");


async function OpenAIJsonParser(chatString, ConfigUser) {
  const outputParser = StructuredOutputParser.fromZodSchema(
    z.object({
      Mensaje1: z.string().describe("Sugerencia para continuar la conversación"),
      Mensaje2: z.string().describe("Sugerencia para continuar la conversación"),
      Mensaje3: z.string().describe("Sugerencia para continuar la conversación"),
    }).describe("objeto con 3 sugerencias de mensajes")
  );

  
  const chatModel = new OpenAI({
    modelName: "gpt-4-1106-preview", // Or gpt-3.5-turbo
    temperature: 0, // For best results with the output fixing parser
    openAIApiKey:"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",
  });

  const outputFixingParser = OutputFixingParser.fromLLM(chatModel, outputParser);

  // Don't forget to include formatting instructions in the prompt!
  const prompt = new PromptTemplate({
    template: `Eres un asistente para una aplicación de citas. Sugiere 3 tipos de mensaje según lo que se haya conversado. Lee el chat y sugiere mensajes para continuar la conversación. La configuración hace referencia al tono de las sugerencias que desea el usuario.\n{format_instructions}\n-Chat:{Chat}\n-Config:{Config}`,
    inputVariables: ["Chat", "Config"],
    partialVariables: {
      format_instructions: outputFixingParser.getFormatInstructions(),
    },
  });

  const answerFormattingChain = new LLMChain({
    llm: chatModel,
    prompt,
    outputKey: "text", // For readability - otherwise the chain output will default to a property named "text"
    outputParser: outputFixingParser,
  });

  console.log(answerFormattingChain);

  const result = await answerFormattingChain.call({
    Chat: chatString,
    Config: ConfigUser,
  });

  console.log(result);

  console.log(JSON.stringify(result.text, null, 2));

  return result.text;
}

module.exports = OpenAIJsonParser;
