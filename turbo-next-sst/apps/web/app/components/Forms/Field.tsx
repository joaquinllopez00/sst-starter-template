import React from "react";
import { Control, FieldValues, useController, Path } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectOption {
  value: string;
  label: string;
}

interface FieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: keyof TFieldValues;
  label: string;
  placeholder?: string;
  type?: string;
  description?: string;
  isSelect?: boolean;
  selectOptions?: SelectOption[];
  defaultValue?: string;
}

export const Field = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
  description = "",
  isSelect = false,
  selectOptions = [],
  defaultValue = "",
}: FieldProps<TFieldValues>) => {
  const { field } = useController({ name: name as Path<TFieldValues>, control });

  const renderInput = () => (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {isSelect ? (
          <Select onValueChange={field.onChange} defaultValue={defaultValue || field.value}>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.map((option, idx) => (
                <SelectItem key={idx} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input type={type} placeholder={placeholder} {...field} />
        )}
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );

  return <FormField control={control} name={name as Path<TFieldValues>} render={() => renderInput()} />;
};
