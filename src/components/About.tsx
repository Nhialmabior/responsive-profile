import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Vue.js',
      color: 'text-blue-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe Creative Suite, Responsive Design',
      color: 'text-purple-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization, Accessibility, SEO',
      color: 'text-yellow-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Git, Agile, Team Leadership, Mentoring',
      color: 'text-green-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm a passionate frontend developer with over 5 years of experience creating 
              digital solutions that make a difference. I love turning complex problems into 
              simple, beautiful, and intuitive designs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started my career as a self-taught developer, driven by curiosity and a love for technology. 
                  Over the years, I've worked with startups and established companies, helping them build 
                  user-centric web applications.
                </p>
                <p>
                  I believe in the power of continuous learning and staying updated with the latest 
                  technologies and best practices. When I'm not coding, you'll find me exploring new 
                  design trends, contributing to open source projects, or mentoring aspiring developers.
                </p>
                <p>
                  <strong className="text-foreground">Education:</strong> B.S. Computer Science, State University (2019)
                </p>
                <p>
                  <strong className="text-foreground">Currently:</strong> Senior Frontend Developer at TechCorp
                </p>
              </div>
            </div>
            
            <div className="space-y-6 animate-scale-in">
              {skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-secondary ${skill.color}`}>
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;