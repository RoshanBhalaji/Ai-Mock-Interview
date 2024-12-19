"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Check, Target, BookOpen, Trophy } from "lucide-react";
import HeroSection from '@/components/ui/HeroSection';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);

  const trustedLogos = [
    { name: "Harvard", logo: "/harvard-logo.png" },
    { name: "Stanford", logo: "/stanford-logo.png" },
    { name: "MIT", logo: "/mit-logo.png" },
    { name: "Berkeley", logo: "/berkeley-logo.png" }
  ];

  const benefitGroups = [
    {
      icon: <BookOpen className="w-12 h-12 text-black" />,
      title: "Students",
      description: "Prepare for technical, behavioral, and industry-specific interviews"
    },
    {
      icon: <Target className="w-12 h-12 text-black" />,
      title: "Career Changers",
      description: "Build confidence and master interview skills across different domains"
    },
    {
      icon: <Trophy className="w-12 h-12 text-black" />,
      title: "Professionals",
      description: "Upgrade your interviewing techniques and stay competitive in the job market"
    }
  ];

  const userReviews = [
    {
      name: "Sarah Chen",
      role: "Software Engineer, Google",
      review: "MockInterviewerGPT transformed my interview preparation. I landed my dream job at Google!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, Stripe",
      review: "The AI feedback is incredibly detailed and helped me improve my communication skills.",
      rating: 5
    },
    {
      name: "Emily Wong",
      role: "Data Scientist, Amazon",
      review: "Realistic scenarios and personalized coaching made all the difference in my interviews.",
      rating: 5
    },
    {
      name: "Alex James",
      role: "Software Engineer, Google",
      review: "MockInterviewerGPT has boosted my interview preparation. I landed my dream job at Google!",
      rating: 5
    },
    {
      name: "Michael Vaughn",
      role: "Product Manager, Stripe",
      review: "The AI feedback is incredibly detailed and helped me improve my communication skills.",
      rating: 5
    },
    {
      name: "Willy Wong",
      role: "Data Scientist, Amazon",
      review: "Realistic scenarios and personalized coaching made all the difference in my interviews.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white -mt-20">
     
      <HeroSection/>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Trusted by Top Institutions Worldwide</h2>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            {trustedLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo.logo} 
                alt={logo.name} 
                className="h-16 grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Who Can Benefit?</h2>
          <p className="text-gray-600 mt-4">Our AI interview coach is designed for everyone seeking to excel</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader className="flex items-center">
                {group.icon}
                <CardTitle className="mt-4">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{group.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Try an Interactive Demo Section */}
     

      {/* User Reviews Carousel */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
        </div>
        <Carousel 
          opts={{ align: "start" }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {userReviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex flex-col justify-between p-6 h-full">
                    <div className="mb-4">
                      <div className="flex mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{review.review}"</p>
                    </div>
                    <div className="flex items-center">
                      <Avatar>
                        <AvatarImage src={`/avatars/${review.name.toLowerCase().replace(' ', '-')}.jpg`} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <h4 className="font-bold">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-8 text-gray-300">Start your journey to interview mastery today</p>
          <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> Sign In Now </a>
        </div>
      </section>
    </div>
  );
}