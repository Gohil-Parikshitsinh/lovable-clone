import {openai, createAgent} from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  {
    id: "hello-world",
    triggers: [{ event: "test/hello.world" }],
  },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:"You are an expert next.js developer. You write readable, maintainable code. You write sample Next.js & React Snippets.",
      model: openai({model:"gpt-4o"})
    })

    const { output } = codeAgent.run(
      `Summarize the following text: ${event.data.value}`,
    );
    console.log(output);



    return { output };
  },
);
