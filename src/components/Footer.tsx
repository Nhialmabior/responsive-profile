import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Alex Johnson</p>
            <p className="text-primary-foreground/80">Frontend Developer</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;