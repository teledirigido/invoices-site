type Locale = 'en' | 'es';
type Text = Record<Locale, string>;

export type ToolParam = {
  name: string;
  type: string;
  required: boolean;
  description: Text;
};

export type Tool = {
  name: string;
  kind: 'read-only' | 'action';
  description: Text;
  params: ToolParam[];
};

export type ToolGroup = {
  name: Text;
  tools: Tool[];
};

export type LocalizedToolParam = {
  name: string;
  type: string;
  required: boolean;
  description: string;
};

export type LocalizedTool = {
  name: string;
  kind: 'read-only' | 'action';
  description: string;
  params: LocalizedToolParam[];
};

export type LocalizedToolGroup = {
  name: string;
  tools: LocalizedTool[];
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');

export const mcpToolGroups: ToolGroup[] = [
  {
    name: { en: 'Account', es: 'Cuenta' },
    tools: [
      {
        name: 'whoami',
        kind: 'read-only',
        description: {
          en: 'Returns the company the connector is currently acting on behalf of — name, VAT number, address, and contact details.',
          es: 'Devuelve la empresa en cuyo nombre está actuando el conector: nombre, NIF, dirección y datos de contacto.',
        },
        params: [],
      },
      {
        name: 'add_company',
        kind: 'action',
        description: {
          en: 'Registers a company for an account that has none yet, and sets it as the default. A Nitidez account can only have one company, so this runs at most once.',
          es: 'Registra una empresa para una cuenta que todavía no tiene ninguna, y la deja como predeterminada. Una cuenta de Nitidez solo puede tener una empresa, así que esto se ejecuta como máximo una vez.',
        },
        params: [
          { name: 'name', type: 'string', required: true, description: { en: 'Full legal name of the company/self-employed business.', es: 'Nombre legal completo de la empresa o negocio autónomo.' } },
          { name: 'vatNumber', type: 'string', required: true, description: { en: 'VAT/tax ID number (NIF/CIF).', es: 'NIF/CIF.' } },
          { name: 'address', type: 'string', required: true, description: { en: 'Street address.', es: 'Dirección.' } },
          { name: 'city', type: 'string', required: true, description: { en: 'City.', es: 'Ciudad.' } },
          { name: 'postalCode', type: 'string', required: true, description: { en: 'Postal code.', es: 'Código postal.' } },
          { name: 'country', type: 'string', required: false, description: { en: "ISO 3166-1 alpha-2 country code. Defaults to 'ES'.", es: "Código de país ISO 3166-1 alfa-2. Por defecto 'ES'." } },
          { name: 'email', type: 'string', required: true, description: { en: 'Contact email for the company.', es: 'Email de contacto de la empresa.' } },
          { name: 'phone', type: 'string', required: false, description: { en: 'Contact phone number.', es: 'Teléfono de contacto.' } },
          { name: 'bankName', type: 'string', required: false, description: { en: 'Bank name for invoice payment details.', es: 'Nombre del banco para los datos de pago de las facturas.' } },
          { name: 'bankIban', type: 'string', required: false, description: { en: 'Bank IBAN for invoice payment details.', es: 'IBAN para los datos de pago de las facturas.' } },
          { name: 'bankBic', type: 'string', required: false, description: { en: 'Bank BIC/SWIFT code.', es: 'Código BIC/SWIFT del banco.' } },
        ],
      },
    ],
  },
  {
    name: { en: 'Invoices', es: 'Facturas' },
    tools: [
      {
        name: 'list_invoices',
        kind: 'read-only',
        description: {
          en: "Lists the user's invoices for their default company, most recent first.",
          es: 'Lista las facturas del usuario para su empresa predeterminada, de la más reciente a la más antigua.',
        },
        params: [
          { name: 'status', type: '"DRAFT" | "SENT" | "DELETED"', required: false, description: { en: 'Filter by invoice status. Omit to get all non-deleted invoices.', es: 'Filtra por estado de la factura. Si se omite, devuelve todas las no eliminadas.' } },
        ],
      },
      {
        name: 'get_invoice',
        kind: 'read-only',
        description: {
          en: 'Retrieves full detail for a single invoice, including line items and customer.',
          es: 'Recupera el detalle completo de una factura: líneas, cliente e importes.',
        },
        params: [
          { name: 'invoiceId', type: 'string', required: true, description: { en: 'Id of the invoice, from list_invoices.', es: 'Id de la factura, obtenido de list_invoices.' } },
        ],
      },
      {
        name: 'update_invoice_payment',
        kind: 'action',
        description: {
          en: 'Marks an invoice as paid, pending, or overdue.',
          es: 'Marca una factura como pagada, pendiente o vencida.',
        },
        params: [
          { name: 'invoiceId', type: 'string', required: true, description: { en: 'Id of the invoice, from list_invoices.', es: 'Id de la factura, obtenido de list_invoices.' } },
          { name: 'paymentStatus', type: '"PENDING" | "PAID" | "OVERDUE"', required: true, description: { en: 'New payment status.', es: 'Nuevo estado de pago.' } },
        ],
      },
      {
        name: 'get_create_invoice_link',
        kind: 'read-only',
        description: {
          en: 'Returns a link to the Nitidez dashboard page for creating a new invoice. Invoice creation involves line items, tax rates, and legal/Veri*Factu requirements best handled in the real form, so it is not exposed as a direct write tool.',
          es: 'Devuelve un enlace a la página del panel de Nitidez para crear una factura nueva. Crear una factura implica líneas, tipos de IVA y requisitos legales/Veri*Factu que se gestionan mejor en el formulario real, por lo que no se expone como una herramienta de escritura directa.',
        },
        params: [],
      },
      {
        name: 'download_invoice_pdf',
        kind: 'action',
        description: {
          en: "Gets a download link for the generated PDF of an invoice that has already been marked as sent. The link is valid for 5 minutes and can only be used once. Also returns a permanent link to the invoice's page on the Nitidez dashboard as a fallback.",
          es: 'Obtiene un enlace de descarga del PDF generado de una factura ya marcada como enviada. El enlace es válido durante 5 minutos y de un solo uso. También devuelve un enlace permanente a la página de la factura en el panel de Nitidez como alternativa.',
        },
        params: [
          { name: 'invoiceId', type: 'string', required: true, description: { en: 'Id of the invoice, from list_invoices.', es: 'Id de la factura, obtenido de list_invoices.' } },
        ],
      },
    ],
  },
  {
    name: { en: 'Customers and Suppliers', es: 'Clientes y proveedores' },
    tools: [
      {
        name: 'list_customers',
        kind: 'read-only',
        description: {
          en: "Lists the user's existing customers (id, name, VAT number).",
          es: 'Lista los clientes existentes del usuario (id, nombre, NIF).',
        },
        params: [],
      },
      {
        name: 'add_customer',
        kind: 'action',
        description: {
          en: 'Creates a new customer. Intended to be called only after checking list_customers for an existing match.',
          es: 'Crea un cliente nuevo. Pensada para usarse solo después de comprobar en list_customers que no existe ya.',
        },
        params: [
          { name: 'name', type: 'string', required: true, description: { en: "Customer's legal/trade name.", es: 'Nombre legal/comercial del cliente.' } },
          { name: 'vatNumber', type: 'string', required: true, description: { en: "Customer's VAT/tax ID number.", es: 'NIF del cliente.' } },
          { name: 'address', type: 'string', required: true, description: { en: "Customer's address.", es: 'Dirección del cliente.' } },
          { name: 'country', type: 'string', required: true, description: { en: 'ISO 3166-1 alpha-2 country code, e.g. ES.', es: 'Código de país ISO 3166-1 alfa-2, p. ej. ES.' } },
          { name: 'city', type: 'string', required: false, description: { en: "Customer's city.", es: 'Ciudad del cliente.' } },
          { name: 'customerType', type: '"PERSONA_FISICA" | "EMPRESA"', required: false, description: { en: 'Customer type; defaults to EMPRESA.', es: 'Tipo de cliente; por defecto EMPRESA.' } },
          { name: 'language', type: '"ES" | "EN"', required: false, description: { en: "Customer's invoicing language; defaults to ES.", es: 'Idioma de facturación del cliente; por defecto ES.' } },
          { name: 'email', type: 'string', required: false, description: { en: "Customer's email.", es: 'Email del cliente.' } },
          { name: 'phone', type: 'string', required: false, description: { en: "Customer's phone number.", es: 'Teléfono del cliente.' } },
          { name: 'postalCode', type: 'string', required: false, description: { en: "Customer's postal code.", es: 'Código postal del cliente.' } },
        ],
      },
      {
        name: 'list_suppliers',
        kind: 'read-only',
        description: {
          en: "Lists the user's existing suppliers (id, name, VAT number).",
          es: 'Lista los proveedores existentes del usuario (id, nombre, NIF).',
        },
        params: [],
      },
      {
        name: 'add_supplier',
        kind: 'action',
        description: {
          en: 'Creates a new supplier. Intended to be called only after checking list_suppliers for an existing match, and after confirming with the user that they want it created.',
          es: 'Crea un proveedor nuevo. Pensada para usarse solo después de comprobar en list_suppliers que no existe ya, y tras confirmar con el usuario que quiere crearlo.',
        },
        params: [
          { name: 'name', type: 'string', required: true, description: { en: "Supplier's legal/trade name.", es: 'Nombre legal/comercial del proveedor.' } },
          { name: 'vatNumber', type: 'string', required: true, description: { en: "Supplier's VAT/tax ID number.", es: 'NIF del proveedor.' } },
          { name: 'address', type: 'string', required: false, description: { en: "Supplier's address.", es: 'Dirección del proveedor.' } },
          { name: 'country', type: 'string', required: false, description: { en: 'ISO 3166-1 alpha-2 country code, e.g. ES.', es: 'Código de país ISO 3166-1 alfa-2, p. ej. ES.' } },
        ],
      },
    ],
  },
  {
    name: { en: 'Expenses', es: 'Gastos' },
    tools: [
      {
        name: 'list_expenses',
        kind: 'read-only',
        description: {
          en: "Lists the user's expenses for their default company, most recent first. Can filter by supplier or by year and quarter.",
          es: 'Lista los gastos del usuario para su empresa predeterminada, del más reciente al más antiguo. Se puede filtrar por proveedor o por año y trimestre.',
        },
        params: [
          { name: 'supplierId', type: 'string', required: false, description: { en: 'Only show expenses from this supplier, from list_suppliers.', es: 'Muestra solo los gastos de este proveedor, obtenido de list_suppliers.' } },
          { name: 'year', type: 'number', required: false, description: { en: 'Filter to a specific year, e.g. 2026 (requires quarter too).', es: 'Filtra por un año concreto, p. ej. 2026 (requiere también quarter).' } },
          { name: 'quarter', type: 'number (1-4)', required: false, description: { en: 'Filter to a specific quarter (requires year too).', es: 'Filtra por un trimestre concreto (requiere también year).' } },
        ],
      },
      {
        name: 'add_expense',
        kind: 'action',
        description: {
          en: 'Creates a new expense. For a Social Security (TGSS) payment, use category SEGURIDAD_SOCIAL and leave supplierId, description, ivaRate and irpfRate unset — the tool auto-selects the TGSS supplier, forces IVA/IRPF to 0, and generates the description from documentDate.',
          es: 'Crea un gasto nuevo. Para un pago a la Seguridad Social (TGSS), usa la categoría SEGURIDAD_SOCIAL y deja sin definir supplierId, description, ivaRate e irpfRate: la herramienta selecciona automáticamente el proveedor TGSS, fuerza el IVA/IRPF a 0 y genera la descripción a partir de documentDate.',
        },
        params: [
          { name: 'description', type: 'string', required: false, description: { en: 'What the expense was for. Auto-generated for category SEGURIDAD_SOCIAL.', es: 'Para qué fue el gasto. Se genera automáticamente para la categoría SEGURIDAD_SOCIAL.' } },
          { name: 'baseAmount', type: 'number', required: true, description: { en: 'Expense amount before tax.', es: 'Importe del gasto antes de impuestos.' } },
          { name: 'ivaRate', type: 'number', required: false, description: { en: 'IVA (VAT) rate as a percentage, e.g. 21.', es: 'Tipo de IVA en porcentaje, p. ej. 21.' } },
          { name: 'irpfRate', type: 'number', required: false, description: { en: 'IRPF withholding rate as a percentage, e.g. 0 or 15.', es: 'Tipo de retención de IRPF en porcentaje, p. ej. 0 o 15.' } },
          { name: 'deductiblePercentage', type: 'number (0-100)', required: false, description: { en: 'Percentage of the expense that is tax-deductible. Defaults to 100.', es: 'Porcentaje del gasto que es deducible. Por defecto 100.' } },
          { name: 'category', type: 'enum', required: true, description: { en: 'Expense category, e.g. COMPRAS, SUMINISTROS, SEGURIDAD_SOCIAL.', es: 'Categoría del gasto, p. ej. COMPRAS, SUMINISTROS, SEGURIDAD_SOCIAL.' } },
          { name: 'documentDate', type: 'string (YYYY-MM-DD)', required: true, description: { en: 'Date on the expense document/invoice.', es: 'Fecha del documento/factura del gasto.' } },
          { name: 'paidAt', type: 'string (YYYY-MM-DD)', required: true, description: { en: 'Date the expense was paid.', es: 'Fecha en que se pagó el gasto.' } },
          { name: 'supplierId', type: 'string', required: false, description: { en: 'Id of an existing supplier this expense belongs to.', es: 'Id de un proveedor existente al que pertenece este gasto.' } },
          { name: 'documentNumber', type: 'string', required: false, description: { en: 'Invoice/receipt number from the supplier.', es: 'Número de factura/recibo del proveedor.' } },
          { name: 'notes', type: 'string', required: false, description: { en: 'Any additional notes.', es: 'Notas adicionales.' } },
        ],
      },
      {
        name: 'get_expense_attachment_upload_link',
        kind: 'action',
        description: {
          en: 'Returns a one-time link the user can open on their phone or browser to upload a receipt photo or document for an expense. Valid for 5 minutes, single use.',
          es: 'Devuelve un enlace de un solo uso que el usuario puede abrir desde el móvil o el navegador para subir una foto o documento de un gasto. Válido durante 5 minutos, un solo uso.',
        },
        params: [
          { name: 'expenseId', type: 'string', required: true, description: { en: 'Id of the expense to attach a file to, from add_expense or list_expenses.', es: 'Id del gasto al que adjuntar el archivo, obtenido de add_expense o list_expenses.' } },
        ],
      },
    ],
  },
  {
    name: { en: 'Taxes', es: 'Impuestos' },
    tools: [
      {
        name: 'get_tax_insights',
        kind: 'read-only',
        description: {
          en: "Summarizes the user's IVA (Modelo 303) and IRPF (Modelo 130) position for a given quarter, including how much is due or refundable. Defaults to the current quarter.",
          es: 'Resume la situación de IVA (Modelo 303) e IRPF (Modelo 130) del usuario para un trimestre dado, incluyendo cuánto se debe o se puede compensar. Por defecto usa el trimestre actual.',
        },
        params: [
          { name: 'year', type: 'number', required: false, description: { en: 'Year, e.g. 2026. Defaults to the current year.', es: 'Año, p. ej. 2026. Por defecto el año actual.' } },
          { name: 'quarter', type: 'number (1-4)', required: false, description: { en: 'Defaults to the current quarter.', es: 'Por defecto el trimestre actual.' } },
        ],
      },
    ],
  },
];

export function getLocalizedToolGroups(locale: Locale): LocalizedToolGroup[] {
  return mcpToolGroups.map((group) => ({
    name: group.name[locale],
    tools: group.tools.map((tool) => ({
      name: tool.name,
      kind: tool.kind,
      description: tool.description[locale],
      params: tool.params.map((param) => ({
        name: param.name,
        type: param.type,
        required: param.required,
        description: param.description[locale],
      })),
    })),
  }));
}
