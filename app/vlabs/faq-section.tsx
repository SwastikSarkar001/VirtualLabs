"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CreditCard, HelpCircle, Info, Mail, MessageSquare, Settings, User, Video } from "lucide-react"

export default function FAQSection() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12 grid gap-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white">Frequently asked questions</h1>
          <p className="text-gray-400">
            These are the most commonly asked questions about Untitled UI.
            <br />
            Can't find what you're looking for?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Chat to our friendly team
            </a>
            !
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto bg-gray-800">
            <TabsTrigger
              value="general"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              General
            </TabsTrigger>
            <TabsTrigger
              value="pricing"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Pricing
            </TabsTrigger>
            <TabsTrigger
              value="dashboard"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              API
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">Is there a free trial available?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute
                onboarding call to get you up and running. Book a call{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  here
                </a>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">Can I change my plan later?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time from your account settings.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">What is your cancellation policy?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                You can cancel your subscription at any time, and you won't be charged for the next billing cycle.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">Can other info be added to an invoice?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                Yes, you can add additional information such as your company details, tax ID, and custom notes to your
                invoices.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <Info className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">How does billing work?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                We offer monthly and annual billing options. You'll be charged at the beginning of each billing cycle.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">How do I change my account email?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                You can change your account email from your profile settings. We'll send a verification link to your new
                email address.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <Settings className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">How does support work?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                Our support team is available 24/7 via email and chat. Premium plans include priority support and
                dedicated account managers.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-b border-gray-700">
            <AccordionTrigger className="flex items-center py-4 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md bg-gray-800">
                  <Video className="h-5 w-5 text-gray-400" />
                </div>
                <span className="font-medium text-white">Do you provide tutorials?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14 pr-4 pb-4">
              <p className="text-gray-400">
                Yes, we offer comprehensive documentation, video tutorials, and regular webinars to help you get the
                most out of our platform.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

