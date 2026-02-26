import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/data/faqs";

const MainFaqs = () => {
  return (
    <div className="w-full px-4">
      <Accordion type="single" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-white text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MainFaqs;
