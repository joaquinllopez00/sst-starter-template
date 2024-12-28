"use client";
import { Button } from "@/components/ui/button";

export const ClientButton = () => {
  // eslint-disable-next-line -- Dynamically generated env var
  const url = process.env.NEXT_PUBLIC_API_URL;
  // eslint-disable-next-line -- Dynamically generated env var
  const test = process.env.NEXT_PUBLIC_TEST;

  const onClick = () => {
    console.log("URL:", url, "TEST:", test);
  };

  return (
    <Button variant="outline" onClick={onClick}>
      Console.log vars
    </Button>
  );
};
