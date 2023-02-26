import Message from '@/components/Icon/Message';
import React, { useEffect, useRef, useState } from 'react'

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: React.ReactNode;
}

type Props = {
  initialMessage: string
  apiKey: string;
  examples: {
    text: string;
    label: string;
  }[];
  answers: Record<string, React.ReactNode>;
};

const Chat = ({ apiKey, examples, answers, initialMessage }: Props) => {
  const [messages, setMessages] = useState<Message[]>(() => initialMessage ? [
    {
      id: "1",
      type: "bot",
      text: initialMessage,
    },
  ] : []);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessages((messages) => messages.concat({ id: String(Date.now()), type: "user", text: question }));
    setQuestion("");

    const { classifications } = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: examples
      })
    }).then((res) => res.json());

    setMessages((messages) => messages.concat({ id: String(Date.now()), type: "bot", text: answers[classifications[0].prediction as keyof typeof answers] || answers["unknown"] }));
    setLoading(false);
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages])

  return (
    <section className={`fixed bottom-2 right-2 md:bottom-6 md:right-6 ml-2 bg-portfolio-bg z-50 ${isCollapsed ? "shadow-none rounded-full" : "shadow-xl"}`}>
      {isCollapsed ? (
        <button className='flex justify-center items-center border-2 border-black dark:border-gray-300 text-white p-2 rounded-full h-16 w-16' onClick={() => setIsCollapsed(false)}>
           <Message />
        </button>
      ) : (
        <>
          <button className='absolute right-1 top-1 rounded-full border border-gray-300 dark:border-gray-600 bg-portfolio-bg w-8 h-8 text-xl' onClick={() => setIsCollapsed(true)}>
            ×
          </button>

          <div className='flex flex-col gap-4 m-left max-w-lg border border-gray-300 dark:border-gray-600 p-4 rounded-lg'>
            <div ref={container} className='flex flex-col gap-4 h-[300px] px-2 overflow-y-auto'>
              {messages.map(message => (
                <div key={message.id} className={`p-4 max-w-[80%] rounded-3xl text-white ${message.type === "bot" ? "bg-slate-600 text-left self-start rounded-bl-none" : "bg-primary-coral text-right self-end rounded-br-none"}`}>{message.text}</div>
              ))}
            </div>
            <form className='flex items-center justify-center px-2' onSubmit={handleSubmit}>
              <input type="text" placeholder='¿Como va todo?' className='flex-1 border border-gray-500 py-2 px-4 rounded rounded-r-none' value={question} onChange={(event) => setQuestion(event.target.value)} />
              <button type='submit' disabled={loading || question.length === 0} className={`px-4 py-2 bg-primary-black text-white rounded-lg rounded-l-none border border-gray-600 ${loading ? "bg-blue-300" : "bg-blue-500"}`}>↩</button>
            </form>
          </div>
        </>
      )}
    </section>
  )
}

export default Chat