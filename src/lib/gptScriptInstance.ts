import { GPTScript} from "@gptscript-ai/gptscript";

export const gptScript = new GPTScript({
    APIKey: process.env.OPENAI_API_KEY,
});

