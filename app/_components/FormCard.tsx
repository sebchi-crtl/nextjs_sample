'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { api } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function FormCard() {

    // const [firstName, setFirstName] = useState<string>("");
    // const [lastName, setLastName] = useState<string>("");
    // const [age, setAge] = useState<number>(0);

    // const clearForm = () => {
    //     setFirstName("");
    //     setLastName("");
    //     setAge(0);
    // };

    // const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     if (value === "" || !isNaN(Number(value))) {
    //         setAge(value === "" ? 0 : Number(value));
    //     }
    // };
    const formSchema = z.object({
        firstName: z.string().min(2, {
            message: "first name must be at least 2 characters.",
        }),
        lastName: z.string().min(2, {
            message: "last name must be at least 2 character",
        }),
        age: z 
            .string()
            .refine((value) => !isNaN(Number(value)), {
                message: "Age must be a valid number",
            })
            .transform((value) => {
                const numValue = Number(value);
                if (isNaN(numValue)) {
                    throw new Error("Invalid number");
                }
                return numValue; // Transform to number
            }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
        },
      })
      const queryClient = useQueryClient();
    
      const createStudentMutation = useMutation(api.createStudent, {
        onSuccess: () => queryClient.invalidateQueries(['students']),
      });
    
    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log("values")
        createStudentMutation.mutate(data);
        console.log(data)
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
                        <Input type="number" placeholder="Student age name" {...field} />
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
