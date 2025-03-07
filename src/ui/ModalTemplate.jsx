import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Template1 from "../assets/image/Resume 1.jpg";
import Template2 from "../assets/image/Frame 2.jpg";
import Template3 from "../assets/image/image 8.jpg";
import Template4 from "../assets/image/Frame 3.jpg";

export default function ModalTemplate() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <button onClick={handleOpen}>Resume Builder</button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Your Attention is Required!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="flex place-items-center gap-4">
          {/* Template Pilihan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 overflow-auto">
            {/* Card 1 */}
            <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
              <img
                src={Template1}
                alt="Template 1"
                className="w-full h-80 object-cover"
              />
              <Link
                to="/edit/1"
                className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Use Template
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
              <img
                src={Template2}
                alt="Template 2"
                className="w-full h-80 object-cover"
              />
              <button
                className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
                disabled>
                Coming Soon
              </button>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
              <img
                src={Template3}
                alt="Template 3"
                className="w-full h-80 object-cover"
              />
              <button
                className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
                disabled>
                Coming Soon
              </button>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
              <img
                src={Template4}
                alt="Template 4"
                className="w-full h-80 object-cover"
              />
              <button
                className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
                disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Close
          </Button>
          <Button variant="gradient" onClick={handleOpen}>
            Ok, Got it
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
