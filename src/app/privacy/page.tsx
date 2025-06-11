"use client"

import {
  Shield,
  Database,
  Users,
  Lock,
  Cookie,
  UserCheck,
  ExternalLink,
  FileText,
  Eye,
  Edit,
  Trash2,
  Mail,
  MessageSquare,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function ClientPrivacyPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Image 
            onClick={() => router.back()}
            src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp" 
            alt="Philport Logo" width={60} height={60} className="rounded-lg cursor-pointer" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">Client Data Protection & Privacy Guidelines</p>
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
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Your Privacy</h2>
          </div>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              At <strong>Philport</strong>, we value your privacy and are committed to protecting the personal
              information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data
              when you interact with our website, services, and communications.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Database className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          </div>
          <p className="text-gray-700 mb-6">
            When you interact with our services (via our website, contact forms, or email), we may collect the following
            types of information:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-blue-900">Personal Information</h3>
              </div>
              <ul className="text-blue-800 space-y-2 text-sm">
                <li>• Name and contact details</li>
                <li>• Email address and phone number</li>
                <li>• Business information</li>
                <li>• Voluntarily provided data</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Usage Data</h3>
              </div>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>• Website interaction patterns</li>
                <li>• IP address and browser type</li>
                <li>• Pages visited and time spent</li>
                <li>• Device and location data</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <MessageSquare className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-purple-900">Communication Content</h3>
              </div>
              <ul className="text-purple-800 space-y-2 text-sm">
                <li>• Customer inquiries</li>
                <li>• Support chat messages</li>
                <li>• Email communications</li>
                <li>• Feedback and reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Settings className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
          </div>
          <p className="text-gray-700 mb-6">We use the information we collect for the following purposes:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <MessageSquare className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Customer Support</h3>
                <p className="text-purple-800 text-sm">Respond to inquiries and provide comprehensive support</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Settings className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Service Delivery</h3>
                <p className="text-purple-800 text-sm">Deliver and manage our services effectively</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Personalization</h3>
                <p className="text-purple-800 text-sm">Personalize your experience with our agency</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Improvement</h3>
                <p className="text-purple-800 text-sm">Improve our website and service offerings</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Bell className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-purple-900">Communications</h3>
                <p className="text-purple-800 text-sm">Send updates and marketing content (opt-in only)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sharing Your Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">3. Sharing Your Information</h2>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
            <p className="text-orange-800 font-semibold">We do not sell or rent your personal data to third parties.</p>
          </div>
          <p className="text-gray-700 mb-6">However, we may share your information in the following situations:</p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
              <p className="text-gray-700">
                With team members who help deliver our services (under strict confidentiality agreements)
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
              <p className="text-gray-700">When legally required (e.g., court orders or legal processes)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="font-semibold text-gray-900 mb-2">Safety & Protection</h3>
              <p className="text-gray-700">
                To protect the rights, property, or safety of Philport, our users, or others
              </p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-red-800 leading-relaxed">
              We take data protection seriously. Your information is <strong>stored securely</strong> and accessible
              only to authorized team members. We implement technical and organizational measures to safeguard your data
              against unauthorized access, alteration, or disclosure.
            </p>
          </div>
        </div>

        {/* Cookies and Tracking */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Cookie className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">5. Cookies and Tracking</h2>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800 leading-relaxed">
              Our website may use <strong>cookies or similar tracking technologies</strong> to enhance your browsing
              experience. You can control cookie settings through your browser preferences.
            </p>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <UserCheck className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
          </div>
          <p className="text-gray-700 mb-6">You have the right to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Eye className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Access Your Data</h3>
              </div>
              <p className="text-green-800 text-sm">Request a copy of your personal information</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Edit className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Correct Information</h3>
              </div>
              <p className="text-green-800 text-sm">Update any inaccurate details</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Trash2 className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Delete Data</h3>
              </div>
              <p className="text-green-800 text-sm">Request deletion (subject to legal exceptions)</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Bell className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-900">Withdraw Consent</h3>
              </div>
              <p className="text-green-800 text-sm">Opt out of communications at any time</p>
            </div>
          </div>
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">
              <strong>To exercise any of these rights, please email us at:</strong>{" "}
              <a href="mailto:contact@philport.com" className="text-green-600 hover:underline">
                contact@philport.com
              </a>
            </p>
          </div>
        </div>

        {/* External Links */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <ExternalLink className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">7. External Links</h2>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <p className="text-indigo-800 leading-relaxed">
              Our website may contain links to <strong>third-party websites</strong>. Please note that we are not
              responsible for their content or privacy practices. We encourage you to review their policies before
              submitting any personal information.
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">8. Updates to This Policy</h2>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
            <p className="text-pink-800 leading-relaxed">
              We may update this Privacy Policy occasionally to reflect changes in our practices or legal obligations.
              When we do, we&apos;ll update the <strong>&quot;Effective Date&quot;</strong> at the top of this page.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-xl shadow-lg p-8 text-white mb-8">
          <div className="flex items-center mb-4">
            <Mail className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Questions or Concerns?</h2>
          </div>
          <p className="text-teal-100 leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or how we handle your data, feel free to
            reach out. We&apos;re here to help.
          </p>
          <a
            href="mailto:contact@philport.com"
            className="inline-flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:contact@philport.com"> contact@philport.com</a>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center">
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
          <p className="text-gray-500 text-sm mt-2">
            Your privacy is our priority. We&apos;re committed to protecting your personal information.
          </p>
        </div>
      </div>
    </div>
  )
}
