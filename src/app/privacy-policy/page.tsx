"use client"

import { Shield, Database, Users, Lock, Clock, UserCheck, FileText, Eye, Edit, UserX, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function PrivacyPolicyPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Image onClick={() => router.back()} src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp" alt="Philport Logo" width={60} height={60} className="rounded-lg cursor-pointer" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">PhilPort Data Protection & Privacy Guidelines</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy Overview</h2>
          </div>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy outlines how <strong>PhilPort</strong> (&quot;Company&quot;) collects, uses, discloses, and
              protects personal and professional data of its agents (&quot;Agent&quot;) in the course of engagement with the
              Company.
            </p>
          </div>
        </div>

        {/* Data Collection */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Collection</h2>
          </div>
          <p className="text-gray-700 mb-6">
            We collect personal data necessary for work arrangements, including but not limited to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-900 mb-2">Personal Information</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• Full name, address, contact information</li>
                <li>• Government-issued ID and tax details</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-900 mb-2">Work-Related Data</h3>
              <ul className="text-green-800 space-y-1">
                <li>• Work logs, productivity data</li>
                <li>• Performance feedback</li>
                <li>• System and internet usage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use of Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Eye className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Use of Information</h2>
          </div>
          <p className="text-gray-700 mb-6">Collected data will be used to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Onboarding & Payroll</h3>
                <p className="text-purple-800 text-sm">Facilitate agent onboarding and payroll processing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Performance Monitoring</h3>
                <p className="text-purple-800 text-sm">Monitor and improve work performance</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Bell className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Communication</h3>
                <p className="text-purple-800 text-sm">Maintain communication and task records</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Legal Compliance</h3>
                <p className="text-purple-800 text-sm">Comply with legal and operational obligations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Sharing</h2>
          </div>
          <p className="text-gray-700 mb-6">Personal data may be shared with:</p>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-900 mb-2">Internal Company Departments</h3>
              <p className="text-orange-800">HR, payroll, and supervision departments for operational purposes</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-900 mb-2">Clients</h3>
              <p className="text-orange-800">Only when essential to the scope of work and project requirements</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-semibold text-orange-900 mb-2">Legal Entities</h3>
              <p className="text-orange-800">When required by law or legal compliance obligations</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-red-800 leading-relaxed">
              We implement <strong>industry-standard measures</strong> to protect data, including secure cloud storage,
              restricted access, and encryption where applicable. Our security protocols are regularly updated to
              maintain the highest level of data protection.
            </p>
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Clock className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <p className="text-indigo-800 leading-relaxed">
              Data will be retained for the <strong>duration of the working relationship</strong> and for a limited time
              after termination, as required for audits, reporting, and legal compliance purposes.
            </p>
          </div>
        </div>

        {/* Agent Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <UserCheck className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Agent Rights</h2>
          </div>
          <p className="text-gray-700 mb-6">Agents may:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Eye className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">Access Data</h3>
              <p className="text-green-800 text-sm">Request access to personal data stored</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Edit className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">Update Information</h3>
              <p className="text-green-800 text-sm">Request corrections or updates to data</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <UserX className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">Revoke Consent</h3>
              <p className="text-green-800 text-sm">Revoke consent to data use (subject to contractual implications)</p>
            </div>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Bell className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Policy Updates</h2>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800 leading-relaxed">
              We reserve the right to update this Privacy Policy. <strong>Agents will be notified in advance</strong>
              before significant changes take effect, ensuring transparency and continued compliance.
            </p>
          </div>
        </div>

        {/* Agreement Confirmation */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Agreement Confirmation</h2>
          </div>
          <p className="text-teal-100 leading-relaxed">
            By checking the agreement box before submitting the application, the Agent confirms understanding and acceptance of this
            Privacy Policy and all terms outlined herein.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
              alt="Philport Logo"
              width={40}
              height={40}
              className="rounded-lg mr-3"
            />
            <span className="text-2xl font-bold text-teal-600">PhilPort</span>
          </div>
          <p className="text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            For questions about this Privacy Policy, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}
