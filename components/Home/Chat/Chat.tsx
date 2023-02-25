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
          <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H8.01" className='stroke-black dark:stroke-gray-300' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 10H12.01" className='stroke-black dark:stroke-gray-300' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 10H16.01" className='stroke-black dark:stroke-gray-300' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 13V7C21 5.11438 21 4.17157 20.4142 3.58579C19.8284 3 18.8856 3 17 3H7C5.11438 3 4.17157 3 3.58579 3.58579C3 4.17157 3 5.11438 3 7V13C3 14.8856 3 15.8284 3.58579 16.4142C4.17157 17 5.11438 17 7 17H7.5C7.77614 17 8 17.2239 8 17.5V20V20.1499C8 20.5037 8.40137 20.7081 8.6875 20.5L13.0956 17.2941C13.3584 17.103 13.675 17 14 17H17C18.8856 17 19.8284 17 20.4142 16.4142C21 15.8284 21 14.8856 21 13Z" className='stroke-black dark:stroke-gray-300' stroke-width="2" stroke-linejoin="round" />
          </svg>
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