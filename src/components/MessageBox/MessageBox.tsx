'use client'
import OpenAI from "openai";
import styles from './MessageBox.module.scss';
import { useState } from "react";

const MessageBox = () => {
    const [enteredText, setEnteredText] = useState('');
    const [loading, setLoading] = useState(false);

    const client = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true
    });

    //test cases
    const messages = [
        `"""You won 10 lakh rupees. Click here now."""`,
        `"""Congratulations! You won ₹10 lakh.
        Click immediately to claim reward. """`,
        `"""Your Amazon order has been delivered. """`,
        `"""Meeting moved to 3 PM tomorrow. """`,
        `"""Your package is delayed.
        Track here. """`,
        `"""You are selected for interview.
        Pay ₹500 registration fee. """`,
        `"""You won free iPhone. """`,
        `"""C1ick h3re n0w!!! """`,
        `"""Y0u w0n mon3y. """`,
    ]


    const handleClick = async () => {
        setLoading(true);
        try {
            const prompt = `You are an AI-Powered Scam Detection System.
        Your task is to identify the message/email text delimited by triple quotes
        is a fraudulent attempt or not which can help customers avoid the possible
        risk.
        Classify your response in terms of the following points in json object- 
        message/email, is Scam , risk type , intent, riskScore, explanation
     
        Take your time and ananlyze the text properly
        Write in a concise and professional tone.
        . ${enteredText}
            `
            const response = await client.chat.completions.create({
                model: "gpt-4.1",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    }
                ],
                temperature: 0
            });
            console.log(response.choices[0].message.content);
        }
        catch (error) {
            console.error('Error analyzing message:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleText = (e: any) => {
        const text = e.target.value;
        setEnteredText(text);
    }

    return <>
        <h1 className={styles.heading}>AI Scam Detection System</h1>
        <h3>Paste/Enter any email or message text here to check if it is a scam message or not</h3>
        <br/>
        <div>
            <textarea placeholder="Enter your text here" value={enteredText} rows={4} cols={40} className={styles.inputBox} onChange={handleText}></textarea>
        </div>
        <button disabled={loading} onClick={handleClick} className="flex h-12 w-full items-center text-white justify-center gap-2 rounded-full bg-foreground px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] cursor-pointer">
            {loading ? 'Analyzing...' : 'Click here'}
        </button>
    </>
}

export default MessageBox