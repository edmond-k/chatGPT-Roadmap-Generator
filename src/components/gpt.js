const { Configuration, OpenAIApi } = require("openai");

const TestGPT = async(language, period) => {
const configuration = new Configuration({
    apiKey: "api-key-here",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Write me a roadmap for learning ${language} in ${period}" }],
});

console.log(completion.data.choices[0].message);

}