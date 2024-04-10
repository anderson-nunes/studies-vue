export type InvoiceFindPayload = {
  dsNumeroDocumento: string;
  filtros?: {
    dtInicio: string;
    dtFim: string;
  } | null;
  dsCodigoFabricante: string;
  dsGtin: string;
  limit: number;
  page?: number;
};

//GUARDAR NO LOCALSTORAGE

// onBeforeMount(() => {
//   const invoiceQuantity = localStorage.getItem("invoiceQuantity");
//   if (invoiceQuantity) {
//     limit.value.value = invoiceQuantity;
//   }
// });
