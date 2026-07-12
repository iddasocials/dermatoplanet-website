import { MessageSquareText, MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/whatsapp";

export default function CtaBar() {
  return (
    <div className="sticky bottom-0 z-40 grid grid-cols-2">
      <a
        href={waLink(WA_MESSAGES.treatmentPlan)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-teal-800 py-4 text-white transition-colors hover:bg-teal-900"
      >
        <MessageSquareText size={20} />
        <span className="text-[15px] font-semibold sm:text-lg">Get Treatment Plan</span>
      </a>
      <a
        href={waLink(WA_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-[#25a355] py-4 text-white transition-colors hover:bg-[#1f8b48]"
      >
        <MessageCircle size={20} />
        <span className="text-[15px] font-semibold sm:text-lg">WhatsApp Now</span>
      </a>
    </div>
  );
}
