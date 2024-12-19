import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import { HowItWorks } from '@/components/ui/HowItWorks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">AI Mock Interviews</h2>
            <p className="mb-4">Prepare for your next job interview with our cutting-edge AI-powered mock interview platform. Practice anytime, anywhere, and boost your confidence.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/dashboard/upgrade" className="hover:text-white transition-colors">Upgrade</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white border-gray-700"
              />
              <Button type="submit" className="w-full">Subscribe</Button>
              <div className="mt-1">
               
                <HowItWorks />
              </div>
            </form>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="hover:text-white transition-colors"><Facebook size={24} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Twitter size={24} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></Link>
            <Link href="#" className="hover:text-white transition-colors"><Github size={24} /></Link>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} AI Mock Interviews. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
