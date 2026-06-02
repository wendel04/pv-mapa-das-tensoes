import { SalesPageConfig, BuyerNotification } from "./types";

export const initialConfig: SalesPageConfig = {
  pixelId: "6a162ffb76f77d34ce33f0dc",
  checkoutBasico: "https://pay.wiapy.com/WFhDjSl-Y5",
  checkoutCompleto: "https://pay.wiapy.com/WQvIE4ALL",
  priceBasico: "17,90",
  priceCompleto: "27,90",
  oldPriceBasico: "97,90",
  oldPriceCompleto: "147,90",
  headline: "Tenha + de 100 mapas visuais e pare de perder horas procurando defeito em placas de geladeiras.",
  subheadline: "Use mapas visuais prontos para achar o defeito da placa e pare de perder tempo analisando a placa no escuro.",
  alertBannerText: "DESCONTO DISPONÍVEL NESSA PÁGINA HOJE!",
  whatsAppLink: "https://chat.whatsapp.com/xxxxx",
};

export const defaultBuyers: BuyerNotification[] = [
  { name: "Carlos S.", city: "SP", plan: "Pacote Completo" },
  { name: "Marcos V.", city: "MG", plan: "Pacote Básico" },
  { name: "Felipe A.", city: "PR", plan: "Pacote Completo" },
  { name: "João P.", city: "RJ", plan: "Pacote Completo" },
  { name: "Roberto M.", city: "BA", plan: "Pacote Básico" },
  { name: "Lucas F.", city: "RS", plan: "Pacote Completo" },
  { name: "André T.", city: "SC", plan: "Pacote Completo" },
  { name: "Thiago O.", city: "GO", plan: "Pacote Básico" },
  { name: "Ricardo N.", city: "PE", plan: "Pacote Completo" },
  { name: "Eduardo C.", city: "DF", plan: "Pacote Completo" },
  { name: "Gustavo L.", city: "ES", plan: "Pacote Completo" },
  { name: "Maurício K.", city: "SC", plan: "Pacote Completo" },
  { name: "Aline M.", city: "SP", plan: "Pacote Completo" },
  { name: "Fernando S.", city: "RJ", plan: "Pacote Básico" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "1. Como vou receber o material?",
    answer: "Assim que o pagamento for confirmado, você recebe o acesso automaticamente no seu e-mail.",
  },
  {
    question: "2. O acesso é imediato?",
    answer: "Sim. Após a confirmação do pagamento, o acesso é liberado automaticamente.",
  },
  {
    question: "3. O acesso tem prazo para acabar?",
    answer: "Não. O acesso é vitalício.",
  },
  {
    question: "4. Vou receber atualizações futuras?",
    answer: "Sim. As atualizações futuras da biblioteca são gratuitas para os compradores.",
  },
  {
    question: "5. Quais marcas estão disponíveis?",
    answer: "A biblioteca possui mapas organizados por marcas e modelos, incluindo Brastemp, Consul, Electrolux, Panasonic, Midea e outras.",
  },
  {
    question: "6. Existe suporte ou comunidade?",
    answer: "Sim. No Plano Completo você recebe acesso ao Grupo Exclusivo de Técnicos no WhatsApp.",
  },
  {
    question: "7. E se eu não gostar do material?",
    answer: "Você tem 20 dias de garantia. Se o material não atender suas expectativas, basta solicitar o reembolso dentro do prazo e receberá seu dinheiro de volta.",
  },
];
