import { Button } from "@/components/ui/button";
import React from "react";

const ButtonsPage = () => {
  return (
    <>
      <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <Button>Default</Button>
        <Button>Primary </Button>
        <Button>Primary Outline</Button>
      </div>
    </>
  );
};

export default ButtonsPage;
