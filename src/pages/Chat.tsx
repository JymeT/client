import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import { Bot, Send, User } from 'lucide-react'
import axios from 'axios'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
  messageType: 'html' | 'text' | null;
}

/**
 * Interface for the parsed message result
 */
interface ParsedMessage {
  isHtml: boolean;
  type: string | null;
  amount: number | null;
  phone_number: string | null;
  content: string | null;
}

/**
 * Parse a message to extract metadata and content
 * @param {string} input - The input message to parse
 * @returns {ParsedMessage} An object containing metadata and message content
 */
function parseMessage(input: string): ParsedMessage {
  // Initialize result object
  const result: ParsedMessage = {
    isHtml: false,
    type: null,
    amount: null,
    phone_number: null,
    content: null
  };
  
  // Split by line breaks
  const lines: string[] = input.split('\n');
  
  // First, extract metadata (anything before the actual message content)
  const metadataLines: number[] = [];
  let contentStartIndex: number = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line: string = lines[i].trim();
    
    // Check if line contains metadata (key: value format)
    if (line.includes(':')) {
      const [key, value] = line.split(':', 2).map(part => part.trim());
      
      // Store in metadata
      metadataLines.push(i);
      
      // Check for specific metadata
      if (key.toLowerCase() === 'type') {
        result.type = value;
        result.isHtml = value.toLowerCase() === 'html';
      } else if (key.toLowerCase() === 'amount') {
        result.amount = parseFloat(value);
      } else if (key.toLowerCase() === 'phone_number') {
        result.phone_number = value;
      }
    } else if (line !== '' && contentStartIndex === -1) {
      // First non-empty line that's not metadata is the start of content
      contentStartIndex = i;
    }
  }
  
  // Extract content (all lines after metadata)
  if (contentStartIndex !== -1) {
    result.content = lines.slice(contentStartIndex).join('\n');
  } else {
    // If no content was found, use everything that's not metadata
    const remainingLines = lines.filter((_, index) => !metadataLines.includes(index));
    result.content = remainingLines.join('\n');
  }
  
  return result;
}

// // Example usage:
// const testMessage: string = `type: html
// amount: 60.0
// phone_number: 01208847123
// أنا على وشك دفع 60.0 جنيه لـشحن رصيد فودافون للرقم 01208847123
// هل تريد الاستمرار في الدفع؟
// نعم / لا`;

// const parsed: ParsedMessage = parseMessage(testMessage);
// console.log("Is HTML:", parsed.isHtml);
// console.log("Type:", parsed.type);
// console.log("Amount:", parsed.amount);
// console.log("Phone Number:", parsed.phone_number);
// console.log("Content:", parsed.content);


export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your financial assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      messageType: 'text',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
      messageType: 'text',
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    const res = await axios.post<{ output: string }>('http://192.168.43.83:5000/m', {
      message: input,
      user_id: '1',
    })

    console.log({
      res: res.data.output,
    });
    

    const parsedResponse = parseMessage(res.data.output)
    console.log({
      parsedResponse,
    });
    

    const botMessage: Message = {
      id: Date.now().toString(),
      content: parsedResponse.content || 'content not found',
      sender: 'bot',
      timestamp: new Date(),
      messageType: parsedResponse.isHtml ? 'html' : 'text',
    }

    // const botMessage: Message = {
    //   id: Date.now().toString(),
    //   content: 'content not found',
    //   sender: 'bot',
    //   timestamp: new Date(),
    //   messageType: 'html',
    // }

    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
  }

  // Handle pressing Enter to send message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  // Function to handle Yes/No button clicks
  const handleButtonClick = async (response: 'yes' | 'no') => {
    // Add user message showing their choice
    const userMessage: Message = {
      id: Date.now().toString(),
      content: response === 'yes' ? 'Yes' : 'No',
      sender: 'user',
      timestamp: new Date(),
      messageType: 'text',
    }
    console.log({
      response,
    });

    // return
    

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    const res = await axios.post<{ output: string }>('http://192.168.43.83:5000/m', {
      message: response,
      user_id: '1',
    })
console.log({
  res: res.data.output,
});

    // const parsedResponse = parseMessage(res.data.output)
    
    const botMessage: Message = {
      id: Date.now().toString(),
      content: res.data.output,
      sender: 'bot',
      timestamp: new Date(),
      messageType: 'text',
    }

    setMessages((prev) => [...prev, botMessage])
    setIsTyping(false)
  }

  // Check if the last message is HTML type
  const lastMessage = messages[messages.length - 1]
  const showHtmlButtons = lastMessage?.sender === 'bot' && lastMessage?.messageType === 'html'

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">AI Assistant</h1>

      <Card className="flex h-[calc(100vh-12rem)] flex-col">
        <CardHeader>
          <CardTitle>Financial Chatbot</CardTitle>
          <CardDescription>
            Ask questions about your finances, expenses, or get personalized recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`flex max-w-[80%] items-start gap-3 rounded-lg p-3 ${
                    message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.content}</p>
                    <p className="mt-1 text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] items-start gap-3 rounded-lg bg-muted p-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: '0.4s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showHtmlButtons && (
              <div className="flex justify-center gap-4 mt-2">
                <Button 
                  onClick={() => handleButtonClick('yes')}
                  variant="default"
                  className="px-8"
                >
                  Yes
                </Button>
                <Button 
                  onClick={() => handleButtonClick('no')}
                  variant="outline"
                  className="px-8"
                >
                  No
                </Button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          {!showHtmlButtons ? (
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
              />
              <Button size="icon" onClick={handleSendMessage} disabled={isTyping || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  )
}
