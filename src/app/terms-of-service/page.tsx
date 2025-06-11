"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, Clock, Award, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function TermsOfService() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <Card className="shadow-xl mb-8 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg">
            <CardHeader className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-xl shadow-lg">
                  <Image
                    onClick={() => router.back()}
                    src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
                    alt="Philport Logo"
                    width={64}
                    height={64}
                    className="object-contain cursor-pointer"
                  />
                </div>
              </div>
              <CardTitle className="text-5xl font-bold mb-4">Terms of Service</CardTitle>
              <p className="text-white text-xl font-medium mb-2">Philport - E-commerce Support Agency</p>
              <p className="text-teal-100 text-base">
                By agreeing to this document via checkbox, the Agent confirms acceptance of all terms herein.
              </p>
            </CardHeader>
          </Card>

          {/* Introduction */}
          <Card className="shadow-lg mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Agreement Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service (the &quot;Agreement&quot;) govern the working relationship between{" "}
                    <strong>Philport</strong> (the &quot;Company&quot;) and the Agent. This agreement establishes the framework
                    for professional e-commerce support services across multiple domains including customer support,
                    store development, and technical assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scope of Work */}
          <Card className="shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-teal-600" />
                Scope of Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                The Agent shall perform tasks relevant to their assigned position within the Business. This may include,
                but is not limited to, the following service categories:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Customer Support */}
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Customer Support
                    </Badge>
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Answering customer queries via chat, email, and phone</li>
                    <li>• Handling order processes through Shopify backend</li>
                    <li>• Processing replacements, tracking, returns and refunds</li>
                    <li>• Addressing escalations and resolving disputes</li>
                    <li>• Supporting e-commerce with Gorgias, Zendesk, Shopify Admin</li>
                  </ul>
                </div>

                {/* Store Development */}
                <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Store Development
                    </Badge>
                  </h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Product uploading, categorization, and page editing</li>
                    <li>• Theme modifications and UI improvements</li>
                    <li>• Code enhancements (HTML, CSS, JavaScript, Liquid)</li>
                    <li>• Shopify app installation and configuration</li>
                  </ul>
                </div>

                {/* Admin & VA */}
                <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                  <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Admin & Virtual Assistance
                    </Badge>
                  </h3>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• Data entry, spreadsheet management, reporting</li>
                    <li>• Email management and calendar scheduling</li>
                    <li>• Team coordination and documentation</li>
                  </ul>
                </div>

                {/* Design & Media */}
                <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                  <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Graphic & Media Design
                    </Badge>
                  </h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li>• Designing banners and marketing visuals</li>
                    <li>• Basic video editing for store content</li>
                    <li>• Following brand guidelines and deliverables</li>
                  </ul>
                </div>
              </div>

              <div className="border border-teal-200 rounded-lg p-4 bg-teal-50">
                <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                    Shopify App Support
                  </Badge>
                </h3>
                <ul className="space-y-2 text-sm text-teal-700">
                  <li>• Responding to support tickets and app-related inquiries</li>
                  <li>• Testing features, reporting bugs, communicating with development teams</li>
                  <li>• Providing setup and onboarding assistance for new users</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  <strong>Exclusivity Requirement:</strong> The Agent agrees to work exclusively for clients assigned by
                  the Agency and shall not engage in similar services outside of this agreement without prior approval.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Compensation */}
          <Card className="shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-green-600" />
                Compensation and Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Base Compensation</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Hourly rates vary by role and experience level</li>
                      <li>• Rates defined during onboarding process</li>
                      <li>• Tier-based progression (Tier 1, 2, 3)</li>
                      <li>• Yearly tier upgrades available</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">Bonus Structure</h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Christmas Bonus (if contract active in December)</li>
                      <li>• Role-based performance incentives</li>
                      <li>• Customer satisfaction bonuses</li>
                      <li>• Project completion rewards</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Additional Benefits</h3>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• PHP1,000 monthly internet allowance</li>
                      <li>• Flexible payment methods (E-wallet, Bank, Cash)</li>
                      <li>• Regular payroll schedule</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Cost Structure</h3>
                    <p className="text-sm text-gray-600">
                      Compensation considers operational expenses including platform fees, job connects, contract fees
                      (10% service charge), transfer fees, and training investments.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contract Terms */}
          <Card className="shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-orange-600" />
                Contract Duration and Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                This contract is project-based and shall remain in effect until terminated by either party.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">Grounds for Immediate Termination</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Attempting to solicit clients outside of the Agency</li>
                  <li>• Direct client communication for unauthorized projects</li>
                  <li>• Consistently failing to adhere to working hours</li>
                  <li>• Not meeting 20-hour response time requirement</li>
                  <li>• Extended leave without manager notification</li>
                  <li>• Registering activity without actual work engagement</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Notice Period</h3>
                <p className="text-sm text-blue-700">
                  A minimum of 14 days&apos; notice is required for voluntary termination by either party unless termination
                  is due to a breach of contract.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Terms */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-teal-600" />
                  Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  All work performed by the Agent, including communications, brand materials, code, graphics, and other
                  intellectual property, shall remain the sole property of the Agency or its client.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Confidentiality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  The Agent agrees to maintain strict confidentiality of all client and customer data. Violation may
                  result in immediate termination and legal action.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Sections */}
          <Card className="shadow-lg mb-6">
            <CardHeader>
              <CardTitle>Additional Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Work Equipment</h3>
                    <p className="text-sm text-gray-600">
                      Agent provides own computer, stable internet, and headset. Equipment issues must be reported
                      immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Performance Monitoring</h3>
                    <p className="text-sm text-gray-600">
                      Regular evaluation based on KPIs including response time, customer satisfaction, protocol
                      adherence, and documentation quality.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Time Tracking</h3>
                    <p className="text-sm text-gray-600">
                      Accurate time logging required using approved tools. Schedule adherence is mandatory unless
                      flexibility is explicitly allowed.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Communication Standards</h3>
                    <p className="text-sm text-gray-600">
                      Professional communication required at all times through approved channels (Slack, email, project
                      management tools).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Training Requirements</h3>
                    <p className="text-sm text-gray-600">
                      Completion of onboarding, training sessions, and participation in continuous learning is
                      mandatory.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Service Nature</h3>
                    <p className="text-sm text-gray-600">
                      Philport operates in e-commerce domain. Agents must be flexible and adaptive to different
                      workflows and client expectations.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="shadow-lg mb-6">
            <CardHeader>
              <CardTitle>Dispute Resolution & Amendments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Dispute Resolution</h3>
                <p className="text-gray-700 text-sm">
                  Any disputes arising under this Agreement shall be resolved through internal mediation with the Agency
                  Manager. If resolution cannot be reached, further legal action may be pursued in accordance with
                  applicable Philippine laws.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Amendments</h3>
                <p className="text-gray-700 text-sm">
                  This Agreement may be amended only in writing or electronic communication, with notice sent via email
                  or platform message at least 7 days before enforcement.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
                    alt="Philport Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Agreement Confirmation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  By checking the agreement box before submitting the application, the Agent affirms understanding and acceptance of all
                  terms stated in this Agreement.
                </p>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <p className="text-teal-800 font-medium">
                    <strong>Philport</strong> - E-commerce Support Agency
                  </p>
                  <p className="text-teal-600 text-sm mt-1">
                    Providing comprehensive e-commerce solutions across customer support, store development, and
                    technical assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
