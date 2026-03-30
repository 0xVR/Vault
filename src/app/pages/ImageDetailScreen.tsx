import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getImageById } from '../data/mockImages';
import BottomNav from '../components/BottomNav';
import svgPaths from '../../imports/svg-xcxhhmzk87';

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
      <div className="flex items-center justify-center h-screen">
        <p>Image not found</p>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: inputValue };
    setChatMessages(prev => [...prev, userMessage]);

    // Simulate AI response based on query
    setTimeout(() => {
      let aiResponse = '';
      const query = inputValue.toLowerCase();

      if (query.includes('when') || query.includes('date')) {
        if (image.detectedDate) {
          aiResponse = `This is scheduled for ${image.detectedDate}.`;
        } else {
          aiResponse = `I found this was captured on ${image.date}.`;
        }
      } else if (query.includes('where') || query.includes('location')) {
        aiResponse = `Based on the image context, this appears to be about ${image.aiContext}. I don't see a specific location mentioned.`;
      } else if (query.includes('what') || query.includes('about')) {
        aiResponse = image.aiContext;
      } else if (query.includes('price') || query.includes('cost')) {
        const prices = image.extractedText.match(/\$\d+/g);
        if (prices) {
          aiResponse = `I found these prices: ${prices.join(', ')}`;
        } else {
          aiResponse = `I don't see any prices in this image.`;
        }
      } else {
        aiResponse = `Based on the image, ${image.aiContext}. Is there something specific you'd like to know?`;
      }

      const aiMessage: ChatMessage = { role: 'ai', content: aiResponse };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 500);

    setInputValue('');
  };

  return (
    <div className="bg-[#f8fafc] flex flex-col min-h-screen w-full">
      <BottomNav />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-[9px] pt-[16px] px-[16px] shrink-0 w-full border-b border-[rgba(18,109,98,0.1)]">
        <button
          onClick={() => navigate(-1)}
          className="relative rounded-[9999px] shrink-0 size-[40px]"
        >
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p300a1100} fill="#126D62" />
                </g>
              </svg>
            </div>
          </div>
        </button>
        
        <div className="flex-[1_0_0] min-h-px min-w-px">
          <div className="content-stretch flex flex-col items-center relative w-full px-[8px]">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] text-center tracking-[-0.45px] truncate max-w-full">
              {image.title}
            </h1>
          </div>
        </div>
        
        <div className="relative shrink-0 size-[40px]" />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-[120px]">
        {/* Image */}
        <div className="p-[16px] max-w-[430px] mx-auto w-full">
          <div className="bg-white rounded-[16px] overflow-hidden shadow-sm">
            <img
              src={image.url}
              alt={image.title}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        {/* Metadata */}
        <div className="px-[16px] pb-[16px] max-w-[430px] mx-auto w-full">
          <div className="bg-white rounded-[16px] p-[16px] shadow-sm">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f172a] mb-[12px]">
              Detected Information
            </h2>
            
            <div className="flex flex-wrap gap-[8px] mb-[12px]">
              {image.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-[#e2e8f0] px-[12px] py-[6px] rounded-[16px]"
                >
                  <span className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#334155]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
            
            {image.detectedDate && (
              <div className="bg-[#f1f5f9] px-[12px] py-[8px] rounded-[12px] mb-[12px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[12px] text-[#64748b]">
                  Event Date: <span className="text-[#126d62]">{image.detectedDate}</span>
                </p>
              </div>
            )}
            
            <div className="border-t border-[#e2e8f0] pt-[12px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] text-[#64748b] mb-[8px]">
                Extracted Text:
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#334155] whitespace-pre-line break-words">
                {image.extractedText}
              </p>
            </div>
          </div>
        </div>

        {/* AI Chat Section */}
        <div className="px-[16px] pb-[16px] max-w-[430px] mx-auto w-full">
          <div className="bg-white rounded-[16px] p-[16px] shadow-sm">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f172a] mb-[12px]">
              Ask AI about this image
            </h2>
            
            {chatMessages.length === 0 ? (
              <div className="bg-[#f8fafc] rounded-[12px] p-[16px] mb-[12px]">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b] text-center">
                  Ask me anything about this image!
                </p>
                <div className="flex flex-wrap gap-[8px] mt-[12px] justify-center">
                  {['When is this event?', 'What are the prices?', 'Tell me more'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setInputValue(suggestion);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="bg-white border border-[#e2e8f0] px-[12px] py-[6px] rounded-[16px] hover:border-[#126d62] transition-colors"
                    >
                      <span className="font-['Inter:Medium',sans-serif] text-[12px] text-[#64748b]">
                        {suggestion}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-[12px] mb-[12px] max-h-[300px] overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-[16px] px-[16px] py-[12px] break-words ${
                        msg.role === 'user'
                          ? 'bg-[#126d62] text-white'
                          : 'bg-[#f1f5f9] text-[#334155]'
                      }`}
                    >
                      <p className="font-['Inter:Regular',sans-serif] text-[14px]">
                        {msg.content}
                      </p>
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
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] px-[16px] py-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#0f172a] outline-none focus:border-[#126d62]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#126d62] text-white rounded-[12px] px-[20px] py-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}