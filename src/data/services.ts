export type Lang = 'es' | 'en';
export type ServiceId = 'taxes' | 'bookkeeping' | 'credit' | 'formation';

interface Copy {
  name: string;
  tab: string;
  short: string;
  booking: string;
  includes: string[];
  docsShort: string[];
  docsFull: string[];
  cta: string;
}

export interface Service {
  id: ServiceId;
  icon: string;
  calendar: string;
  slug: Record<Lang, string>;
  faq: number[];
  es: Copy;
  en: Copy;
}

export const services: Service[] = [
  {
    id: 'taxes',
    icon: 'file-text',
    calendar:
      'https://calendar.google.com/appointments/schedules/AcZssZ108OimlERqzhfxP59cOJLjecXkQS40rEsqzbe9kaX7fH2rb6PT2d7UdyG2WWVoqRDvI5XdJwlj',
    slug: { es: 'impuestos', en: 'taxes' },
    faq: [2, 4, 5],
    es: {
      name: 'Preparación de Taxes',
      tab: 'Taxes',
      short:
        'Declaración de impuestos federales para individuos y negocios. Maximizamos tus deducciones legales y minimizamos tu carga fiscal.',
      booking:
        'Declaración federal para individuos y negocios. Maximizamos tus deducciones legales y te guiamos en cada paso.',
      includes: [
        'Individuos y negocios',
        'Declaraciones firmadas con PTIN',
        'Clientes con ITIN — y ayuda con la solicitud',
        'Años anteriores (hasta 3 años con derecho a reembolso)',
        'Planes de pago con el IRS',
      ],
      docsShort: [
        'ID con foto · Social Security / ITIN',
        'Formularios W-2 y/o 1099 del año',
        'Declaración del año anterior',
        'Comprobantes de deducciones',
        'Info bancaria para reembolso directo',
      ],
      docsFull: [
        'Identificación oficial con foto (ID, licencia, pasaporte)',
        'Tarjeta del Social Security o ITIN',
        'SSN/ITIN de cónyuge y dependientes',
        'Formularios W-2 (todos los empleos)',
        'Formularios 1099 (independiente, intereses, dividendos, etc.)',
        'Declaración de impuestos del año anterior',
        'Comprobantes de deducciones (donaciones, médicos, etc.)',
        'Documentos de propiedad (1098, taxes de propiedad)',
        'Comprobantes de cuidado de niños / educación',
        'Información bancaria para depósito directo del reembolso',
      ],
      cta: 'Agendar cita de Taxes',
    },
    en: {
      name: 'Tax Preparation',
      tab: 'Taxes',
      short:
        'Federal tax filings for individuals and businesses. We maximize legal deductions and minimize your tax burden.',
      booking:
        'Federal tax filing for individuals and businesses. We maximize your legal deductions and guide you every step.',
      includes: [
        'Individuals and businesses',
        'Returns signed with PTIN',
        'ITIN clients — and help applying',
        'Prior years (up to 3 years with refund eligibility)',
        'IRS payment plans',
      ],
      docsShort: [
        'Photo ID · Social Security / ITIN',
        'W-2 and/or 1099 forms for the year',
        'Prior year tax return',
        'Deduction receipts',
        'Bank info for direct deposit',
      ],
      docsFull: [
        'Government-issued photo ID (license, passport)',
        'Social Security card or ITIN',
        'SSN/ITIN for spouse and dependents',
        'W-2 forms (all jobs)',
        '1099 forms (self-employment, interest, dividends, etc.)',
        'Previous year tax return',
        'Deduction receipts (donations, medical, etc.)',
        'Property documents (1098, property taxes)',
        'Childcare / education receipts',
        'Bank info for direct deposit of refund',
      ],
      cta: 'Book tax appointment',
    },
  },
  {
    id: 'bookkeeping',
    icon: 'chart-no-axes-combined',
    calendar:
      'https://calendar.google.com/appointments/schedules/AcZssZ2QcxT8ggy14SzJ8dB2oirUnpp95TV1NXkVMn0Ad-M5Tmm-RDLS7qvlNEOFWlMspqTD5G3K0ra4',
    slug: { es: 'contabilidad', en: 'bookkeeping' },
    faq: [1, 5],
    es: {
      name: 'Contabilidad',
      tab: 'Contabilidad',
      short:
        'Registros precisos, conciliaciones mensuales y reportes financieros claros. Mantén tu negocio organizado y listo para crecer.',
      booking:
        'Registros precisos, conciliaciones mensuales y reportes financieros claros para que siempre sepas cómo está tu negocio.',
      includes: [
        'Registros precisos de ingresos y gastos',
        'Conciliaciones bancarias mensuales',
        'Profit & Loss y Balance Sheet',
        'Tu negocio listo para la temporada de taxes',
      ],
      docsShort: [
        'Estados de cuenta bancarios (3 meses)',
        'Tarjetas de crédito del negocio',
        'Facturas de ventas e ingresos',
        'Recibos de gastos del negocio',
        'EIN · Acta constitutiva del negocio',
      ],
      docsFull: [
        'Estados de cuenta bancarios (últimos 3 meses)',
        'Estados de cuenta de tarjetas de crédito del negocio',
        'Facturas de ventas / ingresos',
        'Recibos y facturas de gastos del negocio',
        'Reportes de nómina (si aplica)',
        'EIN (Número de Identificación del Empleador)',
        'Acta constitutiva del negocio (LLC, Corp, etc.)',
        'Registros de inventario (si aplica)',
      ],
      cta: 'Agendar cita de Bookkeeping',
    },
    en: {
      name: 'Bookkeeping',
      tab: 'Bookkeeping',
      short:
        'Accurate records, monthly reconciliations, and clear financial reports. Keep your business organized and ready to grow.',
      booking:
        'Accurate records, monthly reconciliations, and clear financial reports so you always know how your business is doing.',
      includes: [
        'Accurate income and expense records',
        'Monthly bank reconciliations',
        'Profit & Loss and Balance Sheet',
        'Your business ready for tax season',
      ],
      docsShort: [
        'Bank statements (3 months)',
        'Business credit card statements',
        'Sales invoices and income records',
        'Business expense receipts',
        'EIN · Business formation documents',
      ],
      docsFull: [
        'Bank statements (last 3 months)',
        'Business credit card statements',
        'Sales invoices / income records',
        'Business expense receipts and invoices',
        'Payroll reports (if applicable)',
        'EIN (Employer Identification Number)',
        'Business formation documents (LLC, Corp, etc.)',
        'Inventory records (if applicable)',
      ],
      cta: 'Book bookkeeping appointment',
    },
  },
  {
    id: 'credit',
    icon: 'credit-card',
    calendar:
      'https://calendar.google.com/appointments/schedules/AcZssZ3yYlguxVZC1U-bq09S0RKnOwTx0zouH0ol1Kc20n56CFbAGB6Q-FvylgQh9qwbbRtonZTMehW9',
    slug: { es: 'credito', en: 'credit-repair' },
    faq: [3, 5],
    es: {
      name: 'Reparación de Crédito',
      tab: 'Crédito',
      short:
        'Análisis detallado, disputas estratégicas y educación financiera para reconstruir tu historial crediticio con bases sólidas.',
      booking:
        'Análisis detallado y disputas estratégicas con los 3 burós para reconstruir tu historial crediticio.',
      includes: [
        'Análisis detallado de tu reporte',
        'Disputas estratégicas con los 3 burós',
        'Educación financiera',
        'Estrategia personalizada y ética',
      ],
      docsShort: [
        'ID con foto · Social Security',
        'Comprobante de domicilio reciente',
        'Reportes de crédito (3 burós)',
        'Cartas de cobros o disputas previas',
        'Estados de tarjetas y préstamos',
      ],
      docsFull: [
        'Identificación oficial con foto',
        'Tarjeta del Social Security',
        'Comprobante de domicilio (factura reciente)',
        'Reportes de crédito recientes (Equifax, Experian, TransUnion)',
        'Carta(s) de cobros o disputas previas',
        'Estados de cuenta de tarjetas y préstamos',
        'Comprobantes de pagos hechos',
        'Cualquier correspondencia de burós de crédito',
      ],
      cta: 'Agendar cita de Crédito',
    },
    en: {
      name: 'Credit Repair',
      tab: 'Credit',
      short:
        'Detailed analysis, strategic disputes, and financial education to rebuild your credit history on solid ground.',
      booking: 'Detailed analysis and strategic disputes with all 3 bureaus to rebuild your credit history.',
      includes: [
        'Detailed analysis of your report',
        'Strategic disputes with all 3 bureaus',
        'Financial education',
        'A personalized, ethical strategy',
      ],
      docsShort: [
        'Photo ID · Social Security card',
        'Recent proof of address',
        'Credit reports (3 bureaus)',
        'Collection or prior dispute letters',
        'Card and loan statements',
      ],
      docsFull: [
        'Government-issued photo ID',
        'Social Security card',
        'Proof of address (recent utility bill)',
        'Recent credit reports (Equifax, Experian, TransUnion)',
        'Collection or prior dispute letters',
        'Credit card and loan statements',
        'Proof of payments made',
        'Any correspondence from credit bureaus',
      ],
      cta: 'Book credit repair appointment',
    },
  },
  {
    id: 'formation',
    icon: 'landmark',
    calendar:
      'https://calendar.google.com/appointments/schedules/AcZssZ2Bent8OqhWbt9Cdkuwb5pr4Ld4aGaK68QnK1KrtS4SxVQTUpDK3rWR-OJnqhxvkcEA-ZnWOfpC',
    slug: { es: 'empresas', en: 'business-formation' },
    faq: [0, 1, 5],
    es: {
      name: 'Formación de Empresas',
      tab: 'LLC / Corp',
      short:
        'Creación de LLC, S-Corp, C-Corp y más. Estructuración completa, EIN, licencias y permisos necesarios para operar legalmente desde el día uno.',
      booking:
        'LLC, S-Corp, C-Corp con EIN, licencias y estructuración completa. Empieza tu negocio legal desde el día uno.',
      includes: [
        'LLC, S-Corp, C-Corp y más',
        'Registro estatal y EIN',
        'Operating Agreement',
        'Licencias y permisos',
      ],
      docsShort: [
        'ID y SSN/ITIN de cada socio',
        '3 opciones de nombre para la empresa',
        'Dirección física del negocio',
        'Descripción de la actividad del negocio',
        'Estado donde deseas registrar',
      ],
      docsFull: [
        'Identificación oficial con foto de cada socio/dueño',
        'Tarjeta del Social Security o ITIN de cada socio',
        'Comprobante de domicilio (factura reciente)',
        'Tres opciones de nombre para tu empresa (en orden de preferencia)',
        'Dirección física del negocio (puede ser tu domicilio o virtual)',
        'Descripción de la actividad principal del negocio',
        'Estado donde deseas registrar la empresa',
        'Información de socios: porcentaje de participación de cada uno',
        'Tipo de entidad deseada (LLC, S-Corp, C-Corp) — te asesoramos',
        'Información del Registered Agent (te lo proveemos si lo necesitas)',
        'Industria/sector para determinar licencias y permisos requeridos',
        'Si vas a tener empleados (para cuentas de nómina e impuestos)',
      ],
      cta: 'Agendar cita de LLC/Corp',
    },
    en: {
      name: 'Business Formation',
      tab: 'LLC / Corp',
      short:
        'LLC, S-Corp, C-Corp formation and more. Complete structuring, EIN, licenses and permits needed to operate legally from day one.',
      booking:
        'LLC, S-Corp, C-Corp with EIN, licenses, and complete structure. Start your business legally from day one.',
      includes: [
        'LLC, S-Corp, C-Corp and more',
        'State registration and EIN',
        'Operating Agreement',
        'Licenses and permits',
      ],
      docsShort: [
        'ID and SSN/ITIN for each partner',
        '3 business name options',
        'Physical business address',
        'Description of business activity',
        'State where you want to register',
      ],
      docsFull: [
        'Government-issued photo ID for each partner/owner',
        'Social Security card or ITIN for each partner',
        'Proof of address (recent utility bill)',
        'Three name options for your business (in order of preference)',
        'Physical business address (your home or virtual office)',
        'Description of the main business activity',
        'State where you want to register',
        'Partner information: ownership percentage for each',
        'Desired entity type (LLC, S-Corp, C-Corp) — we will advise',
        'Registered Agent information (we provide one if needed)',
        'Industry/sector to determine required licenses and permits',
        'Whether you will have employees (for payroll and tax accounts)',
      ],
      cta: 'Book LLC/Corp appointment',
    },
  },
];

export function serviceHref(s: Service, lang: Lang): string {
  return lang === 'es' ? `/servicios/${s.slug.es}/` : `/en/services/${s.slug.en}/`;
}
