import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Star, 
  GitFork,
  Calendar,
  Users,
  Zap,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'freelance', label: 'Freelance', icon: Users },
    { id: 'opensource', label: 'Open Source', icon: Github },
  ];

  const projects = [
    {
      id: 1,
      title: 'React Mini Dashboard',
      description: 'Interactive dashboard demonstrating state management, API integration, and modern UI design with React and Tailwind CSS.',
      longDescription: 'A comprehensive dashboard showcasing React state management patterns, API integration techniques, responsive design principles, and modern UI components with clean architecture.',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      features: ['State Management', 'API Integration', 'Responsive Design', 'Modern UI'],
      github: 'https://github.com/muhammadali-se/react-dashboard',
      live: 'https://react-dashboard-demo.netlify.app',
      status: 'Completed',
      stars: 25,
      forks: 8,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Quiz App',
      description: 'Dynamic quiz application with scoring system, clean UI, and responsive design built with React and Tailwind CSS.',
      longDescription: 'Interactive quiz application featuring dynamic question loading, real-time scoring, progress tracking, result analytics, and mobile-first responsive design.',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'State Management'],
      features: ['Dynamic Questions', 'Scoring System', 'Progress Tracking', 'Mobile Responsive'],
      github: 'https://github.com/muhammadali-se/quiz-app',
      live: 'https://quiz-app-demo.netlify.app',
      status: 'Completed',
      stars: 18,
      forks: 5,
      date: '2024-02-10'
    },
    {
      id: 3,
      title: 'Array Method Visualizer',
      description: 'Open source contribution improving UI, accessibility, SEO, and Lighthouse score for array method visualization tool.',
      longDescription: 'Contributed to popular open source project by enhancing user interface, implementing accessibility features, optimizing SEO, and significantly improving Lighthouse performance scores.',
      category: 'opensource',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'SEO'],
      features: ['UI Enhancement', 'Accessibility', 'SEO Optimization', 'Performance'],
      github: 'https://github.com/org-name/array-visualizer',
      live: 'https://array-visualizer.netlify.app',
      status: 'Contributed',
      stars: 120,
      forks: 45,
      date: '2024-03-05'
    },
    {
      id: 4,
      title: 'University Alumni Website',
      description: 'Responsive alumni website with clean design, user-friendly interface, and modern frontend solutions.',
      longDescription: 'Professional alumni website featuring member directory, event management, news updates, and networking features with focus on user experience and responsive design.',
      category: 'freelance',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
      features: ['Member Directory', 'Responsive Design', 'Clean UI', 'Modern Solutions'],
      github: '#',
      live: '#',
      status: 'Completed',
      stars: 0,
      forks: 0,
      date: '2023-11-20'
    },
    {
      id: 5,
      title: 'Dubai Company Frontend',
      description: 'Professional frontend solution for Dubai-based company focusing on responsive layouts and clean code architecture.',
      longDescription: 'Enterprise-level frontend development for international client featuring responsive layouts, performance optimization, clean code architecture, and modern development practices.',
      category: 'freelance',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Performance'],
      features: ['Responsive Layout', 'Clean Architecture', 'Performance', 'TypeScript'],
      github: '#',
      live: '#',
      status: 'Completed',
      stars: 0,
      forks: 0,
      date: '2024-01-08'
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website showcasing projects, skills, and competitive programming journey.',
      longDescription: 'Comprehensive portfolio website featuring project showcase, skills visualization, competitive programming achievements, and contact integration with modern design and animations.',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      features: ['Project Showcase', 'Skills Display', 'Modern Design', 'Animations'],
      github: 'https://github.com/muhammadali-se/portfolio',
      live: 'https://muhammadali-se.netlify.app',
      status: 'Live',
      stars: 12,
      forks: 3,
      date: '2024-03-20'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/20 text-success border-success/30';
      case 'Live': return 'bg-primary/20 text-primary border-primary/30';
      case 'Contributed': return 'bg-info/20 text-info border-info/30';
      case 'In Development': return 'bg-warning/20 text-warning border-warning/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Project <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, from full-stack web applications to AI-powered solutions.
            Each project demonstrates different aspects of my development expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                {IconComponent && <IconComponent className="w-5 h-5" />}
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-enhanced overflow-hidden hover:shadow-glow transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Meta */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(project.date).getFullYear()}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.live && (
                    <Button
                      variant="gradient"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline_primary"
            size="lg"
            asChild
          >
            <a 
              href="https://github.com/muhammadali-se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="card-enhanced p-8 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Whether you have an idea or need help bringing your vision to life, let's connect!
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start a Project
              <ExternalLink className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;