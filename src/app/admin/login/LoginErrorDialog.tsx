import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const LoginErrorDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-red-100 border-none shadow-lg max-w-md text-center"
        style={{ backgroundColor: "#FEF5F5" }} // Tailwind bg-red-100 fallback
      >
        <DialogHeader className="text-center">
          <div className="flex justify-center text-red-500 text-4xl">❗</div>
          <DialogTitle className="text-xl font-bold text-center mt-2">
            Unable to Sign You In
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm">
            We encountered an issue while trying to log you into your
            ShopifySupport account. Don’t worry, we&apos;re here to help you get
            back on track.
          </DialogDescription>
        </DialogHeader>
        <div
          className="mt-4 border border-red-200 text-sm text-left text-red-500 p-4 rounded"
          style={{ backgroundColor: "##FEF2F2" }}
        >
          {" "}
          {/* Tailwind bg-red-200 fallback */}
          <strong>Common issues:</strong> Incorrect email or password, account
          not activated, or temporary server issues.
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Troubleshooting Tips</AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600 text-left">
              <ul className="list-disc space-y-1 list-outside pl-5">
                <li>Check that your email address is spelled correctly</li>
                <li>
                  Ensure your password is entered correctly (case-sensitive)
                </li>
                <li>Clear your browser cache and cookies</li>
                <li>Try using a different browser or device</li>
                <li>Check if your account needs to be activated</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};
