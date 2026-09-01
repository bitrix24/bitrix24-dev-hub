import { recordOnChain } from "../services/chainAdapter.js";

export async function onBusinessEvent(type, data) {
  console.log("[BUSINESS EVENT]", type, data);
  await recordOnChain(type, data);
}
