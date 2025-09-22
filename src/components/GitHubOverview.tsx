import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Github,
  Star,
  GitBranch,
  GitCommit,
  ExternalLink,
  Code2,
  Calendar,
  Users,
  Zap,
  TrendingUp,
  Activity,
  BookOpen
} from 'lucide-react';

const GitHubOverview = () => {
  const githubStats = {
    totalRepos: 25,
    publicRepos: 20,
    followers: 45,
    following: 32,
    totalStars: 89,
    totalCommits: 450,
    contributionStreak: 28,
    yearlyContributions: 285
  };

  const topRepositories = [
    {
      name: 'react-mini-dashboard',
      description: 'Interactive dashboard with React & Tailwind CSS featuring state management and API integration',
      language: 'JavaScript',
      stars: 25,
      forks: 8,
      isPrivate: false,
      lastUpdated: '2 days ago',
      topics: ['react', 'tailwind', 'dashboard', 'api']
    },
    {
      name: 'quiz-app-react',
      description: 'Dynamic quiz application with scoring system, clean UI, and responsive design',
      language: 'TypeScript',
      stars: 18,
      forks: 5,
      isPrivate: false,
      lastUpdated: '1 week ago',
      topics: ['react', 'typescript', 'quiz', 'responsive']
    },
    {
      name: 'array-method-visualizer',
      description: 'Open source contribution: Enhanced UI, accessibility, SEO, and Lighthouse performance',
      language: 'HTML',
      stars: 32,
      forks: 12,
      isPrivate: false,
      lastUpdated: '3 weeks ago',
      topics: ['open-source', 'visualization', 'javascript', 'accessibility']
    },
    {
      name: 'freelance-projects',
      description: 'Collection of freelance projects including university alumni website and Dubai company frontend',
      language: 'JavaScript',
      stars: 15,
      forks: 3,
      isPrivate: false,
      lastUpdated: '1 month ago',
      topics: ['freelance', 'responsive', 'frontend']
    }
  ];

  const languageStats = [
    { name: 'JavaScript', percentage: 45, color: 'bg-yellow-500' },
    { name: 'TypeScript', percentage: 25, color: 'bg-blue-500' },
    { name: 'HTML', percentage: 15, color: 'bg-orange-500' },
    { name: 'CSS', percentage: 10, color: 'bg-purple-500' },
    { name: 'C++', percentage: 5, color: 'bg-green-500' }
  ];

  const contributionActivity = [
    { month: 'Jan', contributions: 45 },
    { month: 'Feb', contributions: 38 },
    { month: 'Mar', contributions: 52 },
    { month: 'Apr', contributions: 41 },
    { month: 'May', contributions: 48 },
    { month: 'Jun', contributions: 35 },
    { month: 'Jul', contributions: 26 }
  ];

  const achievements = [
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open source projects',
      icon: BookOpen,
      color: 'text-green-500'
    },
    {
      title: 'Frequent Committer',
      description: '450+ commits in the past year',
      icon: GitCommit,
      color: 'text-blue-500'
    },
    {
      title: 'Repository Creator',
      description: '25+ repositories created',
      icon: GitBranch,
      color: 'text-purple-500'
    },
    {
      title: 'Code Quality Focus',
      description: 'Consistent code quality and documentation',
      icon: Star,
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="github" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GitHub <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey, open source contributions, and code quality 
            across 25+ repositories with focus on frontend development and problem-solving.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Repositories', value: githubStats.publicRepos, icon: GitBranch },
            { label: 'Total Commits', value: `${githubStats.totalCommits}+`, icon: GitCommit },
            { label: 'Stars Earned', value: githubStats.totalStars, icon: Star },
            { label: 'Contributions', value: githubStats.yearlyContributions, icon: Activity },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="card-enhanced p-6 text-center hover:shadow-glow transition-all duration-300">
                <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Language Statistics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Language Distribution</h3>
          <Card className="card-enhanced p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {languageStats.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${lang.color} transition-all duration-500`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <Github className="w-20 h-20 text-primary mx-auto mb-4 opacity-20" />
                  <p className="text-muted-foreground">
                    Primarily focused on <span className="text-primary font-medium">JavaScript</span> and <span className="text-primary font-medium">React</span> ecosystem
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Top Repositories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topRepositories.map((repo, index) => (
              <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {repo.language}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {repo.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs px-2 py-1">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" />
                      {repo.forks}
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a href={`https://github.com/muhammadali-se/${repo.name}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground mt-2 border-t border-border pt-2">
                  Updated {repo.lastUpdated}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">GitHub Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-enhanced p-6 text-center hover:shadow-glow transition-all duration-300">
                  <IconComponent className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-enhanced p-8 max-w-4xl mx-auto">
            <Github className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Explore My Code
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dive into my repositories to see clean, well-documented code and innovative solutions. 
              From React applications to algorithmic challenges, each project reflects my commitment 
              to quality and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://github.com/muhammadali-se" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Profile
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="https://muhammadali-se.netlify.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Portfolio
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GitHubOverview;