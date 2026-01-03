"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";

const joinSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  category: z.enum(["founder", "investor", "student", "freelancer", "professional"]),
});

export async function handleJoin(prevState: any, formData: FormData) {
  try {
    const validatedFields = joinSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || undefined,
      category: formData.get("category"),
    });

    if (!validatedFields.success) {
      return {
        message: "Please fix the errors below.",
        errors: validatedFields.error.flatten().fieldErrors,
        redirectUrl: ""
      };
    }

    // Save to database
    const submission = await prisma.joinFormSubmission.create({
      data: {
        fullName: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone || null,
        category: validatedFields.data.category,
      },
    });

    console.log("New user joined:", submission);

    return {
      message: "Thank you for joining! You can now join our WhatsApp group.",
      errors: {},
      redirectUrl: "https://chat.whatsapp.com/F9cgcA0rNd2KR6lKx8vnYz"
    };
  } catch (error: any) {
    console.error("Error in handleJoin:", error);
    
    if (error.code === 'P2002') {
      return {
        message: "This email is already registered.",
        errors: { email: ["Email already exists"] },
        redirectUrl: ""
      };
    }
    
    if (error.message?.includes("ECONNREFUSED") || error.message?.includes("connect ECONNREFUSED")) {
      return {
        message: "Database connection failed. Please try again later.",
        errors: {},
        redirectUrl: ""
      };
    }

    return {
      message: "An error occurred. Please try again.",
      errors: {},
      redirectUrl: ""
    };
  }
}
