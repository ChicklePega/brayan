import { NextResponse } from 'next/server';
import { z } from 'zod';

// Schema must match the client-side schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10),
  privacy: z.boolean().refine((val) => val === true),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: result.error.format() },
        { status: 400 }
      );
    }

    const data = result.data;

    // In a real application, you would send an email here using Resend, SendGrid, Nodemailer, etc.
    // or save the data to a database.
    
    console.log('Contact form submission received:', data);

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
