import { CHAIN_CONFIG } from "../config/chain.config.js";

export async function recordOnChain(eventType, payload) {
  if (!CHAIN_CONFIG.enabled) return;
  console.log("[CHAIN EVENT]", eventType, payload);

  // Hook futuro:
  // - firma lato wallet
  // - invio a smart contract
  // - relay opzionale
}
