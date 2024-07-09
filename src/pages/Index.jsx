import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Globe, Utensils, Calendar, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="relative h-[400px] rounded-lg overflow-hidden mb-12">
        <img src="/placeholder.svg" alt="Great Wall of China" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover China</h1>
          <p className="text-xl">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Welcome to China</h2>
        <p className="text-lg">
          China, with its rich history spanning over 5,000 years, is a land of diverse landscapes, ancient traditions, and modern marvels. From the iconic Great Wall to the bustling streets of Shanghai, China offers a unique blend of the old and the new, inviting visitors to explore its vast cultural heritage and rapid modernization.
        </p>
      </section>

      {/* Key Highlights Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={highlight.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                <p>{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Insights Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Cultural Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {culturalInsights.map((insight, index) => (
            <div key={index} className="flex items-start">
              <img src="/placeholder.svg" alt={insight.title} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Travel Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelTips.map((tip, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {tip.icon}
                  <span className="ml-2">{tip.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Explore China?</h2>
        <Button size="lg">
          Plan Your Trip <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t pt-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Discover China. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const highlights = [
  { title: "The Great Wall of China", description: "One of the world's most iconic landmarks, stretching over 13,000 miles." },
  { title: "The Forbidden City", description: "The imperial palace from the Ming Dynasty to the end of the Qing Dynasty." },
  { title: "Terracotta Army", description: "Thousands of life-size warriors and horses guarding Emperor Qin Shi Huang's tomb." },
  { title: "Modern Cities", description: "Experience the blend of tradition and modernity in Shanghai and Beijing." },
  { title: "Chinese Cuisine", description: "Explore the diverse flavors of Chinese cuisine, from dim sum to Peking duck." },
  { title: "Traditional Festivals", description: "Celebrate colorful festivals like Chinese New Year and the Mid-Autumn Festival." },
];

const culturalInsights = [
  { title: "Chinese Calligraphy", description: "The ancient art of writing Chinese characters, considered a form of artistic expression." },
  { title: "Traditional Chinese Medicine", description: "A holistic approach to health that has been practiced for thousands of years." },
  { title: "Kung Fu", description: "Traditional Chinese martial arts, encompassing various fighting styles and philosophies." },
  { title: "Chinese Opera", description: "A form of dramatic musical theatre combining music, vocal performance, mime, dance, and acrobatics." },
];

const travelTips = [
  { icon: <Calendar className="h-6 w-6" />, title: "Best Time to Visit", description: "Spring (April-May) and Autumn (September-October) offer pleasant weather for traveling." },
  { icon: <Globe className="h-6 w-6" />, title: "Essential Phrases", description: "Learn basic Mandarin phrases like 'Nǐ hǎo' (Hello) and 'Xièxiè' (Thank you)." },
  { icon: <Utensils className="h-6 w-6" />, title: "Dining Etiquette", description: "It's polite to use chopsticks and to try a bit of everything when sharing dishes." },
  { icon: <Info className="h-6 w-6" />, title: "Visa Information", description: "Most visitors need a visa. Check with the Chinese embassy in your country for details." },
];

export default Index;