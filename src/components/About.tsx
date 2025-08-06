import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: Calendar },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ];

  const journey = [
    {
      year: '2023',
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      description: 'Leading full-stack development projects and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      company: 'Startup Inc.',
      description: 'Built scalable web applications and improved system performance by 40%.',
      technologies: ['MERN Stack', 'Docker', 'MongoDB']
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created responsive and interactive user interfaces for various clients.',
      technologies: ['React', 'Vue.js', 'Tailwind CSS']
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University Name',
      year: '2021-2023',
      gpa: '3.8/4.0',
      relevant: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems']
    },
    {
      degree: 'Bachelor of Computer Engineering',
      school: 'College Name',
      year: '2017-2021',
      gpa: '3.7/4.0',
      relevant: ['Programming Fundamentals', 'Web Development', 'Operating Systems', 'Networks']
    }
  ];

  const experience = [
    {
      position: 'Senior Software Engineer',
      company: 'Tech Corporation',
      period: '2023 - Present',
      location: 'San Francisco, CA',
      highlights: [
        'Led development of microservices architecture serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored team of 5 junior developers'
      ]
    },
    {
      position: 'Full-Stack Developer',
      company: 'Innovation Labs',
      period: '2022 - 2023',
      location: 'Remote',
      highlights: [
        'Built real-time collaboration platform using WebSocket',
        'Optimized database queries improving performance by 45%',
        'Developed RESTful APIs serving mobile and web clients'
      ]
    }
  ];

  const achievements = [
    {
      title: 'CodeChef 5-Star Programmer',
      description: 'Achieved highest rating tier in competitive programming',
      year: '2023'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in National Tech Innovation Challenge',
      year: '2022'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular React and Node.js libraries',
      year: '2021-Present'
    },
    {
      title: 'Tech Conference Speaker',
      description: 'Presented on "Modern React Patterns" at DevCon 2023',
      year: '2023'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'journey':
        return (
          <div className="space-y-6">
            {journey.map((item, index) => (
              <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                    <p className="text-primary font-medium">{item.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {item.year}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="space-y-6">
            {education.map((item, index) => (
              <Card key={index} className="card-enhanced p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{item.degree}</h4>
                    <p className="text-primary font-medium">{item.school}</p>
                    <p className="text-muted-foreground">{item.year}</p>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success">
                    GPA: {item.gpa}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.relevant.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            {experience.map((item, index) => (
              <Card key={index} className="card-enhanced p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{item.position}</h4>
                    <p className="text-primary font-medium">{item.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <Code2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <Badge variant="outline">{item.year}</Badge>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with a love for creating innovative solutions 
            and pushing the boundaries of what's possible with code.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies Mastered', value: '15+' },
            { label: 'CP Problems Solved', value: '1000+' },
          ].map((stat, index) => (
            <Card key={index} className="card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default About;