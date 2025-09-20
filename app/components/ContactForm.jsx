'use client';
import React from 'react';
import { useForm } from "react-hook-form";
import { cn } from "@/app/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  contactReason: z.string()
});

function ContactForm() {
    const [submitStatus, setSubmitStatus] = React.useState(null);
    
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            contactReason: "general"
        }
    });

    const contactReasons = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'business', label: 'Business Listing' },
        { value: 'support', label: 'Technical Support' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'other', label: 'Other' }
    ];

    const onSubmit = async (data) => {
        try {
            // Simulate API call - replace with actual submission logic
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            setSubmitStatus('error');
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.1) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h3>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-300">
                    {submitStatus === 'success' && (
                        <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-sm animate-pulse">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-green-800 font-semibold">Message sent successfully! 🎉</p>
                                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl shadow-sm">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-red-800 font-semibold">Oops! Something went wrong</p>
                                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="group">
                                            <FormLabel className="text-gray-700 font-semibold flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                Full Name *
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    placeholder="Enter your full name" 
                                                    className="border-2 border-gray-200 focus:border-red-400 focus:ring-red-100 rounded-xl h-12 transition-all duration-300 hover:border-red-300"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="group">
                                            <FormLabel className="text-gray-700 font-semibold flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                Email Address *
                                            </FormLabel>
                                            <FormControl>
                                                <Input 
                                                    type="email" 
                                                    placeholder="Enter your email address" 
                                                    className="border-2 border-gray-200 focus:border-red-400 focus:ring-red-100 rounded-xl h-12 transition-all duration-300 hover:border-red-300"
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="contactReason"
                                render={({ field }) => (
                                    <FormItem className="group">
                                        <FormLabel className="text-gray-700 font-semibold flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                            Reason for Contact
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border-2 border-gray-200 focus:border-red-400 focus:ring-red-100 rounded-xl h-12 transition-all duration-300 hover:border-red-300">
                                                    <SelectValue placeholder="Select a reason" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="rounded-xl border-2">
                                                {contactReasons.map(reason => (
                                                    <SelectItem key={reason.value} value={reason.value} className="rounded-lg hover:bg-red-50">
                                                        {reason.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem className="group">
                                        <FormLabel className="text-gray-700 font-semibold flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Subject *
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder="Enter the subject of your message" 
                                                className="border-2 border-gray-200 focus:border-red-400 focus:ring-red-100 rounded-xl h-12 transition-all duration-300 hover:border-red-300"
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="group">
                                        <FormLabel className="text-gray-700 font-semibold flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Message *
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your message (minimum 10 characters)"
                                                rows={6}
                                                className="border-2 border-gray-200 focus:border-red-400 focus:ring-red-100 rounded-xl transition-all duration-300 hover:border-red-300 resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="text-sm text-gray-500">Minimum 10 characters required</p>
                                            <p className={`text-sm font-medium ${field.value.length < 10 ? 'text-red-500' : 'text-green-600'}`}>
                                                {field.value.length}/500 characters
                                            </p>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <div className="pt-4">
                                <Button 
                                    type="submit" 
                                    className="w-full h-14 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-lg"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    </div>
                </div>
            </section>
        );
    }

    export default ContactForm;