import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  ArrowUp,
  Code2,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'CP Arena', id: 'competitive' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/muhammadali-se',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/muhammadali-se',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:muhammadalibd121@email.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-gradient mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6" />
                Muhammad Ali
              </div>
              <p className="text-muted-foreground text-lg mb-6 max-w-md">
                Self-taught Software Engineer | Frontend Developer | Problem-Solving Enthusiast. 
                Passionate about creating responsive websites and solving complex algorithmic challenges.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Coffee className="w-4 h-4" />
                <span className="text-sm">Powered by coffee and curiosity</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors link-underline"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect & Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
                
                <div className="pt-4">
                  <Button
                    variant="outline_primary"
                    size="sm"
                    onClick={() => window.open('../assests/Muhammadali_Ali_Resume.pdf', '_blank')}
                    className="w-full"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {new Date().getFullYear()} Muhammad Ali. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of</span>
            <Coffee className="w-4 h-4 text-amber-500" />
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with:</span>
            <span className="text-primary font-medium">React</span>
            <span>•</span>
            <span className="text-primary font-medium">TypeScript</span>
            <span>•</span>
            <span className="text-primary font-medium">Tailwind</span>
          </div>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group hover:bg-primary/10"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
