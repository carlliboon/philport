"use client"

import { Users, ShoppingCart, UserCheck, Palette, Settings, FileText, CreditCard, Shield, RefreshCw, AlertTriangle, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ClientTermsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                onClick={() => router.back()}
                src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
                alt="Philport Logo"
                width={80}
                height={80}
                className="object-contain cursor-pointer"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-lg text-gray-600">Professional e-commerce support services</p>
            <Badge variant="outline" className="mt-2">
              Effective Date: January 2025
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="mb-8 bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200">
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern the services provided by <strong>Philport</strong> (the &quot;Company,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) to any client (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;). By engaging with our services, you agree
              to be bound by these Terms.
            </p>
          </CardContent>
        </Card>

        {/* Services Offered */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <Settings className="h-6 w-6 mr-3 text-teal-600" />
              1. Services Offered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">Philport provides a range of services including but not limited to:</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Customer Support</h3>
                <p className="text-sm text-blue-700">Email, chat, inbound/outbound call handling</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <ShoppingCart className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-green-900 mb-1">Store Development</h3>
                <p className="text-sm text-green-700">Shopify store development & customization</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <UserCheck className="h-8 w-8 text-purple-600 mb-2" />
                <h3 className="font-semibold text-purple-900 mb-1">Virtual Assistance</h3>
                <p className="text-sm text-purple-700">Admin support & task management</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <Palette className="h-8 w-8 text-orange-600 mb-2" />
                <h3 className="font-semibold text-orange-900 mb-1">Design Services</h3>
                <p className="text-sm text-orange-700">Graphic & media design solutions</p>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 md:col-span-2 lg:col-span-1">
                <Settings className="h-8 w-8 text-teal-600 mb-2" />
                <h3 className="font-semibold text-teal-900 mb-1">App Support</h3>
                <p className="text-sm text-teal-700">Shopify app setup & assistance</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              All services are customized based on your business needs and will be outlined in a separate project
              agreement or discussion.
            </p>
          </CardContent>
        </Card>

        {/* Engagement & Scope */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <FileText className="h-6 w-6 mr-3 text-teal-600" />
              2. Engagement & Scope
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Each engagement will include a clear scope of work, timeline, and agreed-upon pricing. Any additional work
              or revisions outside the agreed scope may be subject to extra charges.
            </p>
          </CardContent>
        </Card>

        {/* Rates & Payments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <CreditCard className="h-6 w-6 mr-3 text-teal-600" />
              3. Rates & Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Hourly or fixed rates will be discussed and confirmed before starting the project.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Invoices are issued biweekly or monthly, unless otherwise agreed.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Payment must be made via the agreed platform (e.g., Upwork, PayPal, Wise, etc.).
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Late payments (beyond 5 business days) may incur a penalty or cause service interruption.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Client Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <UserCheck className="h-6 w-6 mr-3 text-teal-600" />
              4. Client Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Provide clear requirements, timely feedback, and necessary access to tools/platforms.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Ensure all information shared is accurate and complete.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Respect agreed timelines and communication schedules.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Confidentiality */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <Shield className="h-6 w-6 mr-3 text-teal-600" />
              5. Confidentiality
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Both parties agree to maintain confidentiality of any proprietary or sensitive information exchanged
              during the course of the project. This obligation will remain in effect even after termination of
              services.
            </p>
          </CardContent>
        </Card>

        {/* Revisions & Changes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <Edit className="h-6 w-6 mr-3 text-teal-600" />
              6. Revisions & Changes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Revisions must be requested within 7 days of submission.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Minor revisions are included; major changes or scope expansions may require a new agreement or fee
                adjustment.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
              7. Termination of Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Either party may terminate the engagement with 7 days&apos; written notice. Upon termination:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                All unpaid work will be invoiced and must be settled.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Access to shared platforms/tools will be revoked.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Any unused prepaid hours or fees may be refunded at our discretion.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Ownership & Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <Shield className="h-6 w-6 mr-3 text-teal-600" />
              8. Ownership & Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">Unless otherwise agreed:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Work delivered is owned by the client upon full payment.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                We reserve the right to showcase completed, non-confidential work in our portfolio.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <AlertTriangle className="h-6 w-6 mr-3 text-amber-600" />
              9. Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We are not liable for any indirect, incidental, or consequential damages resulting from the use of our
              services. Our total liability shall not exceed the total fees paid by you in the last 30 days prior to any
              claim.
            </p>
          </CardContent>
        </Card>

        {/* Amendments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-gray-900">
              <RefreshCw className="h-6 w-6 mr-3 text-teal-600" />
              10. Amendments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We may update these Terms at any time, and will notify clients of significant changes via email or
              platform notification. Continued use of our services implies acceptance of the updated Terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Questions?</h3>
            <p className="text-gray-700 mb-4">Please contact us if you have any questions regarding these Terms.</p>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => router.push("/contact")}>Contact Support</Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <Image
              src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
              alt="Philport Logo"
              width={40}
              height={40}
              className="object-contain mr-3"
            />
            <p className="text-gray-600">© 2025 Philport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
