import { getValueSrcParams } from "../universal/getValueSrcParams";

export function isRedactPage() {
  return getValueSrcParams("redact") === "true";
}
