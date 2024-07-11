import { FileDown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CVDownload = ({ text }: { text: string }) => {
  return (
    <Link href={"/cv/Mostafa_CV.pdf"} target="_blank">
      <Button className="font-semibold flex gap-1 bg-[#006bde] hover:bg-[#009cf8] duration-300 text-white">
        <span>
          <FileDown size={22} />
        </span>
        <span>{text}</span>
      </Button>
    </Link>
  );
};

export default CVDownload;
