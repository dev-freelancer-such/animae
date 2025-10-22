import React from "react";
import { ReactSVG } from "react-svg";

import icArrowRight from "@/assets/icons/common/ic-arrow-right.svg";

import { Typography } from "../../../ui/Typography";

interface DragToNextBtnProps {
  label: string;
  onHandleDragToNext?: () => void;
}

function DragToNextBtn({ label, onHandleDragToNext }: DragToNextBtnProps) {
  return (
    <article
      className="group flex items-center cursor-pointer gap-3 transition-all duration-300 hover:gap-4 w-fit"
      onClick={onHandleDragToNext}
    >
      <Typography className="group-hover:text-primary group-hover:-skew-x-12 transition-all duration-300 transform ">
        {label}
      </Typography>
      <ReactSVG
        src={icArrowRight?.src}
        className="text-secondary group-hover:text-primary transform transition-all duration-300 group-hover:translate-x-2"
      />
    </article>
  );
}

export default DragToNextBtn;
