import { cn } from "@/core/libs/shadcn/utils";
import { ReactNode } from "react";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("mx-auto", className)}>{children}</div>;
};
