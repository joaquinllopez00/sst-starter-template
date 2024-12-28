"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Field } from "./Forms/Field";
import { userService } from "store/services/userService";
import { useAppDispatch } from "store/hooks";
import { setUser } from "store/reducers/users";
import { useRouter } from "next/navigation";

const passwordSchema = z
  .string()
  .min(8, { message: "Please enter a password of at least 8 characters." })
  .max(100, { message: "Please enter a password of at most 100 characters." })
  .regex(/[a-z]/, { message: "Please enter a password with at least one lowercase letter." })
  .regex(/[A-Z]/, { message: "Please enter a password with at least one uppercase letter." })
  .regex(/[0-9]/, { message: "Please enter a password with at least one number." })
  .regex(/[^a-zA-Z0-9]/, { message: "Please enter a password with at least one symbol." });

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter your first name." }),
  lastName: z.string().min(1, { message: "Please enter your last name." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: passwordSchema,
  source: z.string().optional(),
});

export const SignUpForm = () => {
  const { toast } = useToast();
  const [signUp, { isLoading }] = userService.useSignUpMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      source: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await signUp(values).unwrap(); // unwrap() is a helper function that returns the value of a successful promise or throws an error
      dispatch(setUser(response));
      toast({
        title: "Success!",
        description: `Congrats ${values.email}, you've successfully logged in! You'll be redirected to the home screen automatically.`,
        variant: "success",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      toast({
        title: "Error!",
        description: "There was an error signing up. Please try again later.",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <Card className="w-[500px] max-w-[80%]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Already have an account? <a href="/login">Click here</a> to login.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pb-6 px-4 sm:px-6 lg:px-8 br-10 rounded-md">
          <div className="grid grid-col-1 md:grid-cols-2 gap-4">
            <Field control={form.control} name="firstName" label="First Name" placeholder="John" />
            <Field control={form.control} name="lastName" label="Last Name" placeholder="Appleseed" />
          </div>
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
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
