import { useState } from "react";
import { getDeepseekResponse } from "../utils/api";
import {
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [input, setInput] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false); // State untuk loading

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true); // Aktifkan loading
    setResponseMessage("Generating response..."); // Tampilkan teks sementara

    try {
      const response = await getDeepseekResponse(input); // Panggil fungsi dengan input
      if (response && response.choices && response.choices.length > 0) {
        setResponseMessage(response.choices[0].message.content);
      } else {
        setResponseMessage("Failed to generate response. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Matikan loading
    }

    setInput(""); // Reset input setelah mengirim
  };

  return (
    <div>
      <IconButton
        type="button"
        className="shadow-none bg-deep-purple-800"
        onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      </IconButton>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}>
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <Typography
            className="font-satoshi py-4 font-normal"
            variant="h6"
            color="blue-gray">
            What can I help with?
          </Typography>
          <div className="grid gap-6">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              label="Ask Typing Jobs"
              disabled={loading}
            />
            <Textarea
              label="Message"
              value={responseMessage}
              readOnly
              className="resize-none"
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <button
            className="text-deep-purple-800 font-satoshi px-4 py-2 rounded-2xl border border-deep-purple-800"
            onClick={handleOpen}
            disabled={loading}>
            Exit
          </button>
          <button
            className={`text-white font-satoshi px-4 py-2 rounded-2xl bg-deep-purple-800 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSendMessage}
            disabled={loading}>
            {loading ? "Loading..." : "Create Title"}
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
