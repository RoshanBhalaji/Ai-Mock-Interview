import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { Lightbulb, MessageSquare, CheckCircle } from 'lucide-react'
  
  export function HowItWorks() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">How It Works</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>How MockInterviewerGPT Works</DialogTitle>
            <DialogDescription>
              Prepare for your interviews with our AI-powered platform
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Lightbulb className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-medium">1. Choose Your Interview Type</h3>
                <p className="text-sm text-gray-500">Select from various interview scenarios</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="font-medium">2. Practice with AI</h3>
                <p className="text-sm text-gray-500">Engage in realistic interview simulations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="font-medium">3. Receive Feedback</h3>
                <p className="text-sm text-gray-500">Get personalized tips to improve your skills</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  