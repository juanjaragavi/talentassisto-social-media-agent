import { LangGraphRunnableConfig } from "@langchain/langgraph";
import { GraphAnnotation } from "../../state.js";

export async function generateLinkedinPost(
  _state: typeof GraphAnnotation.State,
  _config: LangGraphRunnableConfig,
): Promise<Partial<typeof GraphAnnotation.State>> {
  throw new Error("Not implemented");
}
