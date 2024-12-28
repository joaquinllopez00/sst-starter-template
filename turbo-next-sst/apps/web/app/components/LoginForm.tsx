"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Field } from "./Forms/Field";

const passwordSchema = z
  .string()
  .min(8, { message: "Please enter a password of at least 8 characters." })
  .max(100, { message: "Please enter a password of at most 100 characters." })
  .regex(/[a-z]/, { message: "Please enter a password with at least one lowercase letter." })
  .regex(/[A-Z]/, { message: "Please enter a password with at least one uppercase letter." })
  .regex(/[0-9]/, { message: "Please enter a password with at least one number." })
  .regex(/[^a-zA-Z0-9]/, { message: "Please enter a password with at least one symbol." });

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: passwordSchema,
  // @ts-ignore -- zod types are wrong here
  source: z.string().optional(),
});

export const LoginForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      source: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Success!",
      description: `Congrats ${values.email}, you've successfully logged in!`,
      variant: "success",
    });
  };

  return (
    <Card className="w-[500px] max-w-[80%]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Don't have an account?{" "}
          <a href="/sign-up" className="text-slate">
            Click here
          </a>{" "}
          to create an account
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pb-6 px-4 sm:px-6 lg:px-8 br-10 rounded-md">
          <Field
            control={form.control}
            name="email"
            label="Email"
            placeholder="example@example.com"
            description="This is the email that we'll use to contact you"
          />
          <Field
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            description="Must be at least 8 characters long"
          />
          <div className="mt-10">
            <Field
              control={form.control}
              name="source"
              label="How'd You Hear About Us?"
              isSelect={true}
              selectOptions={[
                { value: "LinkedIn", label: "LinkedIn" },
                { value: "Google", label: "Google" },
                { value: "Friend", label: "A friend" },
              ]}
              defaultValue=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-red-700 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
