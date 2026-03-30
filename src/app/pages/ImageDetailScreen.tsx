import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { getImageById } from '../data/mockImages';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

export default function ImageDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const image = id ? getImageById(id) : null;

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  if (!image) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Image not found</p>
      </div>
    );
  }

  const handleSendMessage = (messageText = inputValue) => {
    const trimmedMessage = messageText.trim();
    if (!trimmedMessage) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmedMessage };
    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      let aiResponse = '';
      const query = trimmedMessage.toLowerCase();

      if (query.includes('when') || query.includes('date')) {
        aiResponse = image.detectedDate ? `This is scheduled for ${image.detectedDate}.` : `I found this was captured on ${image.date}.`;
      } else if (query.includes('where') || query.includes('location')) {
        aiResponse = `Based on the image context, this appears to be about ${image.aiContext}. I don't see a specific location mentioned.`;
      } else if (query.includes('what') || query.includes('about')) {
        aiResponse = image.aiContext;
      } else if (query.includes('price') || query.includes('cost')) {
        const prices = image.extractedText.match(/\$\d+(?:\.\d+)?/g);
        aiResponse = prices ? `I found these prices: ${prices.join(', ')}` : `I don't see any prices in this image.`;
      } else {
        aiResponse = `Based on the image, ${image.aiContext}. Is there something specific you'd like to know?`;
      }

      const aiMessage: ChatMessage = { role: 'ai', content: aiResponse };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 500);

    setInputValue('');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8fafc]">
      <Header
        title={image.title}
        rightAction={
          <button
            type="button"
            onClick={() => navigate(`/annotate/${image.id}`)}
            className="text-[14px] font-medium text-[#126d62]"
          >
            Annotate
          </button>
        }
      />

      <div className="flex-1 overflow-y-auto pb-[120px]">
        <div className="mx-auto w-full max-w-[430px] p-[16px]">
          <div className="overflow-hidden rounded-[16px] bg-white shadow-sm">
            <img src={image.url} alt={image.title} className="aspect-square w-full object-cover" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[430px] px-[16px] pb-[16px]">
          <div className="rounded-[16px] bg-white p-[16px] shadow-sm">
            <h2 className="mb-[12px] font-['Inter:Bold',sans-serif] text-[14px] font-bold text-[#0f172a]">
              Detected Information
            </h2>

            <div className="mb-[12px] flex flex-wrap gap-[8px]">
              {image.tags.map((tag) => (
                <div key={tag} className="rounded-[16px] bg-[#e2e8f0] px-[12px] py-[6px]">
                  <span className="font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#334155]">{tag}</span>
                </div>
              ))}
            </div>

            {image.detectedDate && (
              <div className="mb-[12px] rounded-[12px] bg-[#f1f5f9] px-[12px] py-[8px]">
                <p className="font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#64748b]">
                  Event Date: <span className="text-[#126d62]">{image.detectedDate}</span>
                </p>
              </div>
            )}

            <div className="border-t border-[#e2e8f0] pt-[12px]">
              <h3 className="mb-[8px] font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold text-[#64748b]">
                Extracted Text:
              </h3>
              <p className="whitespace-pre-line break-words font-['Inter:Regular',sans-serif] text-[14px] text-[#334155]">
                {image.extractedText}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[430px] px-[16px] pb-[16px]">
          <div className="rounded-[16px] bg-white p-[16px] shadow-sm">
            <h2 className="mb-[12px] font-['Inter:Bold',sans-serif] text-[14px] font-bold text-[#0f172a]">
              Ask AI about this image
            </h2>

            {chatMessages.length === 0 ? (
              <div className="mb-[12px] rounded-[12px] bg-[#f8fafc] p-[16px]">
                <p className="text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
                  Ask me anything about this image.
                </p>
                <div className="mt-[12px] flex flex-wrap justify-center gap-[8px]">
                  {['When is this event?', 'What are the prices?', 'Tell me more'].map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSendMessage(suggestion)}
                      className="rounded-[16px] border border-[#e2e8f0] bg-white px-[12px] py-[6px] transition-colors hover:border-[#126d62]"
                    >
                      <span className="font-['Inter:Medium',sans-serif] text-[12px] text-[#64748b]">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-[12px] max-h-[300px] space-y-[12px] overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] break-words rounded-[16px] px-[16px] py-[12px] ${
                        msg.role === 'user' ? 'bg-[#126d62] text-white' : 'bg-[#f1f5f9] text-[#334155]'
                      }`}
                    >
                      <p className="font-['Inter:Regular',sans-serif] text-[14px]">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex gap-[8px]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="rounded-[12px] bg-[#126d62] px-[20px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
