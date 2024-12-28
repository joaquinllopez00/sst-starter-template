import { SignUpForm } from "@/components/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Hook Starter Kit",
  description: "A starter kit for Red Hook",
};

export default function Page(): JSX.Element {
  return (
    <div className="flex items-center min-h-[90vh] justify-center">
      <SignUpForm />
    </div>
  );
}
