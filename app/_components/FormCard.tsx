'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function FormCard() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setAge(0);
    };

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Check if the value is a valid number or empty (allow clearing the field)
        if (value === "" || !isNaN(Number(value))) {
            setAge(value === "" ? 0 : Number(value));
        }
    };
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: "first name must be at least 2 characters.",
        }),
        lastName: z.string().min(2, {
            message: "last name must be at least 2 character"
        }),
        age: z.number({
            required_error: "Age is required",
            invalid_type_error: "Age must be a number"
        })
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    return (
        <Card className="w-[350px] !border-none !shadow-none">
            <CardHeader>
            <CardTitle>Create Student</CardTitle>
            <CardDescription>
                set a student in one-click.
                {/* <div className="flex justify-between">
                    set a student in one-click.
                    <Button variant="outline" onClick={clearForm}>Clear</Button>
                </div> */}
            </CardDescription>
            </CardHeader>
            <CardContent className="animate__animated animate__fadeIn">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Student fist name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Student last name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                        <Input placeholder="Student age name" id="age" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Create</Button>
            </form>
            </Form>
            </CardContent>
        </Card>
    )
}
