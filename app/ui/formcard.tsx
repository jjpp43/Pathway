import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@nextui-org/react";
import HoverButton from "./hoverButton";

interface FormCardProps {
  title: string;
  description: string;
}

const FormCard: React.FC<FormCardProps> = ({
  title = "",
  description = "",
}) => {
  return (
    <Card className="relative w-fit pl-4 pr-32 py-4">
      <div className="absolute inset-0 bg-white/30 rounded-lg opacity-90"></div>

      <CardHeader>
        <CardTitle className="relative z-10 pb-2 text-accent-foreground font-semibold text-4xl z-10">
          {title}
        </CardTitle>
        <CardDescription className="relative z-10 pb-6 text-card-foreground text-xl font-normal z-10">
          {description}
        </CardDescription>
        <Input
          id="email"
          type="email"
          className="relative z-10 border-2 rounded-lg border-card"
          placeholder="Enter your email"
          maxLength={30}
        />
        <Input
          id="school"
          pattern="[A-Za-z0-9]+"
          className="relative z-10 pb-6 border-2 rounded-lg border-card"
          placeholder="Enter school name"
          maxLength={30}
        />
        <HoverButton text="Send" />
      </CardHeader>
    </Card>
  );
};

export default FormCard;
