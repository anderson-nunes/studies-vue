import { InvoiceFindPayload } from "./types";

const searchInvoice = async (payload: InvoiceFindPayload) => {
  localStorage.setItem("invoiceQuantity", payload.limit.toString());

  try {
  } catch (e) {}

  return searchInvoice;
};
