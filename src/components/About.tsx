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
      year: '2024-Present',
      title: 'Competitive Programmer',
      company: 'Various Platforms',
      description: 'Solved 800+ coding problems across Codeforces, CodeChef, HackerRank and others. Participated in 100+ contests.',
      technologies: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      year: '2023-2025',
      title: 'Frontend Developer',
      company: 'Freelance Projects',
      description: 'Delivered responsive websites for local and international clients. Translated Figma designs into pixel-perfect components.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      year: '2024-2025',
      title: 'CSE Fundamentals',
      company: 'Phitron',
      description: 'Completed foundational DSA & Competitive Programming certification. Built strong problem-solving foundation.',
      technologies: ['C++', 'DSA', 'Competitive Programming']
    }
  ];

  const education = [
    {
      degree: 'AI/ML Expert Course',
      school: 'Phitron',
      year: '2024 - Ongoing',
      gpa: 'In Progress',
      relevant: ['Machine Learning', 'Artificial Intelligence', 'Python', 'Data Science']
    },
    {
      degree: 'CSE Fundamentals Certification',
      school: 'Phitron',
      year: '2024-2025',
      gpa: 'Completed ✅',
      relevant: ['Data Structures', 'Algorithms', 'Competitive Programming', 'C++']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'High School',
      year: 'Expected April 2026',
      gpa: 'In Progress',
      relevant: ['Mathematics', 'Science', 'Computer Studies', 'English']
    }
  ];

  const experience = [
    {
      position: 'Frontend Developer',
      company: 'Freelance Projects',
      period: '2023 - 2025',
      location: 'Remote',
      highlights: [
        'Delivered responsive websites for local and international clients',
        'Translated Figma designs into pixel-perfect HTML/CSS, TailwindCSS, and React components',
        'Focused on UI/UX improvements, accessibility, and performance optimization'
      ]
    },
    {
      position: 'Competitive Programmer',
      company: 'Various Platforms',
      period: '2024 - Present',
      location: 'Remote',
      highlights: [
        'Solved 800+ coding problems across Codeforces, CodeChef, HackerRank, and others',
        'Participated in 100+ contests, strengthening problem-solving and algorithmic skills',
        'Achieved Pupil (1300+) rank on Codeforces and 2★ (1400+) rating on CodeChef'
      ]
    }
  ];

  const achievements = [
    {
      title: 'CodeChef 2★ Programmer',
      description: 'Achieved 2★ (1400+) rating on CodeChef competitive programming platform',
      year: '2024'
    },
    {
      title: 'Codeforces Pupil Rank',
      description: 'Attained Pupil rank (1300+) on Codeforces through consistent problem solving',
      year: '2024'
    },
    {
      title: '800+ Problems Solved',
      description: 'Solved 800+ coding problems across multiple competitive programming platforms',
      year: '2024'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to Array Method Visualizer by improving UI, accessibility, SEO, and Lighthouse score',
      year: '2024'
    },
    {
      title: 'JavaScript Certification',
      description: 'Earned JavaScript (Basic) Certification from HackerRank',
      year: '2024'
    },
    {
      title: '20+ Projects Completed',
      description: 'Successfully delivered 20+ personal and freelance projects with modern technologies',
      year: '2023-2025'
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
            Self-taught programmer from Sylhet, Bangladesh with a passion for creating innovative solutions 
            and pushing the boundaries of what&apos;s possible with code and competitive programming.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Projects Completed', value: '20+' },
            { label: 'Problems Solved', value: '800+' },
            { label: 'Contests Participated', value: '100+' },
            { label: 'Technologies Mastered', value: '15+' },
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