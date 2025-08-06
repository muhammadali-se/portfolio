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
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'api', label: 'APIs', icon: Database },
    { id: 'ai', label: 'AI/ML', icon: Zap },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      longDescription: 'A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing via Stripe, order management, and an admin dashboard for inventory management.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS'],
      features: ['User Authentication', 'Payment Integration', 'Admin Dashboard', 'Responsive Design'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://your-ecommerce-demo.com',
      status: 'Completed',
      stars: 45,
      forks: 12,
      date: '2023-11-15'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'A sophisticated task management solution with Kanban boards, real-time collaboration, file attachments, time tracking, and advanced filtering capabilities.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Redis', 'Docker'],
      features: ['Real-time Updates', 'Drag & Drop', 'Team Collaboration', 'File Upload'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-taskmanager-demo.com',
      status: 'Completed',
      stars: 38,
      forks: 8,
      date: '2023-09-22'
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'React Native weather application with location-based forecasts, interactive maps, and weather alerts.',
      longDescription: 'Cross-platform mobile application providing detailed weather information, 7-day forecasts, interactive radar maps, and push notifications for weather alerts.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Expo', 'TypeScript', 'OpenWeather API', 'AsyncStorage'],
      features: ['Location Services', 'Push Notifications', 'Offline Mode', 'Interactive Maps'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://expo.dev/@yourusername/weather-app',
      status: 'Completed',
      stars: 28,
      forks: 6,
      date: '2023-08-10'
    },
    {
      id: 4,
      title: 'RESTful API Gateway',
      description: 'Scalable API gateway with authentication, rate limiting, caching, and microservices integration.',
      longDescription: 'Enterprise-grade API gateway solution featuring JWT authentication, rate limiting, request/response caching, load balancing, and comprehensive logging.',
      category: 'api',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'JWT', 'Docker', 'Nginx'],
      features: ['Authentication', 'Rate Limiting', 'Caching', 'Load Balancing'],
      github: 'https://github.com/yourusername/api-gateway',
      live: null,
      status: 'In Development',
      stars: 15,
      forks: 3,
      date: '2023-12-01'
    },
    {
      id: 5,
      title: 'ML-Powered Chatbot',
      description: 'Intelligent chatbot using natural language processing for customer support automation.',
      longDescription: 'AI-powered chatbot leveraging OpenAI GPT models for intelligent customer support, with sentiment analysis, conversation memory, and integration with popular messaging platforms.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenAI API', 'Flask', 'TensorFlow', 'NLP', 'WebSocket'],
      features: ['NLP Processing', 'Sentiment Analysis', 'Context Memory', 'Multi-platform'],
      github: 'https://github.com/yourusername/ai-chatbot',
      live: 'https://your-chatbot-demo.com',
      status: 'Completed',
      stars: 62,
      forks: 18,
      date: '2023-10-05'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and scheduling features.',
      longDescription: 'Comprehensive social media management platform with post scheduling, analytics dashboards, engagement tracking, and multi-platform integration.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'Celery'],
      features: ['Analytics Dashboard', 'Post Scheduling', 'Multi-platform', 'Data Visualization'],
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://your-social-demo.com',
      status: 'Completed',
      stars: 31,
      forks: 9,
      date: '2023-07-18'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/20 text-success border-success/30';
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
              href="https://github.com/yourusername" 
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