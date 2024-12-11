import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import Image from "next/image"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            <Image 
              src="/placeholder.svg?height=40&width=150"
              alt="LedgerGate Logo"
              width={150}
              height={40}
              className="mb-8"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                Your Path to <br />
                <span className="text-orange-500">Professional Excellence!</span>
              </h1>
              <p className="text-lg text-gray-600">
                Unlock your potential with expert-led courses, interactive lessons, and certifications that matter.
                Log in to start your journey!
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-medium">Get app on</p>
              <div className="flex gap-4">
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#" className="block w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
              <div className="space-y-4 text-center">
                <div className="mx-auto w-16">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Phone Icon"
                    width={64}
                    height={64}
                    className="h-16 w-16"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Enter your mobile number for OTP
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value="+91"
                    className="w-20"
                    readOnly
                  />
                  <Input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    className="flex-1"
                  />
                </div>

                <Button 
                  color="primary"
                  size="lg"
                  className="w-full bg-gray-400 hover:bg-gray-500"
                >
                  Get OTP
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-gray-500">Don't have an account?</span>
                  <Link href="#" className="text-orange-500">
                    Continue as guest
                  </Link>
                </div>

                <p className="text-center text-xs text-gray-500">
                  By creating or logging into an account you're agreeing with our{" "}
                  <Link href="#" size="sm" className="text-orange-500">
                    Terms and conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" size="sm" className="text-orange-500">
                    Privacy policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

