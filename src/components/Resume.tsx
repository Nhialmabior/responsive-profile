import { Download, Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Lead frontend development for multiple high-traffic web applications',
        'Mentored junior developers and established coding standards',
        'Improved application performance by 40% through optimization techniques',
        'Collaborated with UX/UI designers to implement responsive designs',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: [
        'Developed React-based SaaS platform from concept to production',
        'Implemented automated testing and CI/CD pipelines',
        'Worked closely with product managers to define user requirements',
        'Built reusable component library adopted across multiple projects',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Created responsive websites for various clients using modern frameworks',
        'Collaborated with design team to ensure pixel-perfect implementations',
        'Optimized websites for SEO and accessibility compliance',
        'Maintained and updated legacy codebases',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      location: 'Austin, TX',
      period: '2015 - 2019',
      details: 'Graduated Magna Cum Laude, GPA: 3.8/4.0',
    },
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-lg text-muted-foreground mb-8">
              My professional journey and educational background
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </div>
          
          <div className="space-y-12">
            {/* Experience Section */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Building className="mr-3 h-6 w-6 text-accent" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={index} className="hover:shadow-soft transition-smooth">
                    <CardHeader>
                      <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-accent">{job.title}</h4>
                          <p className="text-foreground font-medium">{job.company}</p>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {job.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            {job.location}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {job.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-accent" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:shadow-soft transition-smooth">
                    <CardHeader>
                      <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-accent">{edu.degree}</h4>
                          <p className="text-foreground font-medium">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground">{edu.details}</p>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-3 w-3" />
                            {edu.location}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;