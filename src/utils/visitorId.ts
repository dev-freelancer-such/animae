import { constants } from "@/settings";

import webStorageClient from "@/utils/webStorageClient";

function createVisitorId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getVisitorId(): string | undefined {
  if (typeof window === "undefined") return undefined;

  const stored =
    localStorage.getItem(constants.VISITOR_ID) ||
    webStorageClient.get(constants.VISITOR_ID);

  if (stored) {
    if (!localStorage.getItem(constants.VISITOR_ID)) {
      localStorage.setItem(constants.VISITOR_ID, stored);
    }
    return stored;
  }

  const visitorId = createVisitorId();
  localStorage.setItem(constants.VISITOR_ID, visitorId);
  webStorageClient.set(constants.VISITOR_ID, visitorId);
  return visitorId;
}
