
import React, { useState, useEffect } from 'react';
import { RssIcon, ExternalLinkIcon, RefreshIcon } from './icons';

interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
}

interface FeedData {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: FeedItem[];
}

const News: React.FC = () => {
  // Default to The Hacker News, fitting for a security portfolio
  const [feedUrl, setFeedUrl] = useState('https://feeds.feedburner.com/TheHackersNews');
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async () => {
    if (!feedUrl) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Using rss2json service to convert RSS XML to JSON and bypass CORS issues
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
      const response = await fetch(apiUrl);
      const data: FeedData = await response.json();

      if (data.status === 'ok') {
        setItems(data.items);
      } else {
        setError('Não foi possível carregar este feed. Verifique a URL.');
        setItems([]);
      }
    } catch (err) {
      setError('Erro de conexão ao carregar notícias.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []); // Initial load

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchFeed();
  };

  // Function to strip HTML tags for cleaner description display
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
  };

  return (
    <section id="news" className="py-24 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex justify-center items-center gap-3">
            <RssIcon className="w-8 h-8 text-blue-500" />
            Feed de Segurança e Tech
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mantenha-se atualizado com as últimas notícias. Você pode alterar a fonte do feed abaixo.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleUrlSubmit} className="relative flex items-center">
            <input
              type="url"
              value={feedUrl}
              onChange={(e) => setFeedUrl(e.target.value)}
              placeholder="Cole a URL do RSS Feed aqui..."
              className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-full py-3 px-6 pr-14 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <RefreshIcon className="w-5 h-5" />
              )}
            </button>
          </form>
          {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
        </div>

        {/* News Grid - Limited to 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {loading && items.length === 0 ? (
             // Skeleton loading state
             [...Array(2)].map((_, i) => (
               <div key={i} className="bg-gray-900 rounded-lg h-64 animate-pulse"></div>
             ))
          ) : (
            items.slice(0, 2).map((item, index) => (
              <article key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full border border-gray-800 hover:border-gray-600">
                {item.thumbnail && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3 text-xs text-gray-500 uppercase tracking-wider">
                    <span>{formatDate(item.pubDate)}</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-blue-400">{item.author || 'News'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {stripHtml(item.description)}
                  </p>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors mt-auto"
                  >
                    Ler matéria completa <ExternalLinkIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
