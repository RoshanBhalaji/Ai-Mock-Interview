"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    // Speech to text configuration
    const {
        error,
        results,
        isRecording,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
    });

    // Append the transcript to the user's answer
    useEffect(() => {
        if (results) {
            const latestResult = results.map((result) => result?.transcript).join(' ');
            setUserAnswer((prevAns) => prevAns + latestResult);
        }
    }, [results]);

    // Start or stop recording manually
    const StartStopRecording = () => {
        if (isRecording) {
            stopSpeechToText();
            toast.success('Recording stopped. You can review or save your answer.');
        } else {
            setUserAnswer(''); // Clear previous results when starting
            setResults([]);
            startSpeechToText();
            toast('Recording started. Please speak your answer.');
        }
    };

    // Save the recorded answer with feedback and rating
    const UpdateUserAnswer = async () => {
        setLoading(true);

        const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, 
        User Answer: ${userAnswer}, 
        Please give a rating and feedback for this answer in JSON format 
        with 'rating' and 'feedback' fields only.`;

        try {
            const result = await chatSession.sendMessage(feedbackPrompt);
            const mockJsonResp = result.response.text().replace('```json', '').replace('```', '');
            const JsonFeedbackResp = JSON.parse(mockJsonResp);

            const resp = await db.insert(UserAnswer).values({
                mockIdRef: interviewData?.mockId,
                question: mockInterviewQuestion[activeQuestionIndex]?.question,
                correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
                userAns: userAnswer,
                feedback: JsonFeedbackResp?.feedback,
                rating: JsonFeedbackResp?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('DD-MM-yyyy'),
            });

            if (resp) {
                toast('User Answer recorded successfully');
                setUserAnswer('');
                setResults([]);
            }
        } catch (error) {
            console.error('Error saving response:', error);
            toast.error('Failed to record user answer');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col">
            {/* Webcam Section */}
            <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
                <Image src={'/webcam.png'} width={200} height={200} className="absolute" />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 500,
                        width: 500,
                        zIndex: 10,
                    }}
                />
            </div>

            {/* Record Button */}
            <Button
                disabled={loading}
                variant="outline"
                className="my-10"
                onClick={StartStopRecording}
            >
                {isRecording ? (
                    <h2 className="text-black animate-pulse flex gap-2 items-center">
                        <StopCircle /> Stop Recording
                    </h2>
                ) : (
                    <h2 className="text-black flex gap-2 items-center">
                        <Mic /> Record Answer
                    </h2>
                )}
            </Button>

            {/* Save Button */}
            {userAnswer && !isRecording && (
                <Button
                    disabled={loading}
                    variant="default"
                    onClick={UpdateUserAnswer}
                >
                    Save Answer
                </Button>
            )}
        </div>
    );
}

export default RecordAnswerSection;
