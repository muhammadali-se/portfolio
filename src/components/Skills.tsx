import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap,
  Shield,
  Cpu
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: Globe, color: 'text-blue-500' },
    { id: 'programming', label: 'Programming', icon: Code2, color: 'text-green-500' },
    { id: 'tools', label: 'Tools & Platforms', icon: Database, color: 'text-purple-500' },
    { id: 'competitive', label: 'Problem Solving', icon: Zap, color: 'text-yellow-500' },
  ];

  const skills = {
    frontend: [
      { name: 'React.js', level: 90, category: 'Framework' },
      { name: 'JavaScript (ES6+)', level: 88, category: 'Language' },
      { name: 'HTML5', level: 95, category: 'Core' },
      { name: 'CSS3', level: 90, category: 'Core' },
      { name: 'Tailwind CSS', level: 92, category: 'Styling' },
      { name: 'Bootstrap', level: 85, category: 'Styling' },
      { name: 'TypeScript', level: 80, category: 'Language' },
      { name: 'Responsive Design', level: 95, category: 'Design' },
    ],
    programming: [
      { name: 'C++', level: 95, category: 'Language' },
      { name: 'JavaScript (ES6+)', level: 88, category: 'Language' },
      { name: 'TypeScript', level: 80, category: 'Language' },
      { name: 'Data Structures', level: 95, category: 'Core' },
      { name: 'Algorithms', level: 93, category: 'Core' },
      { name: 'Problem Solving', level: 98, category: 'Core' },
    ],
    tools: [
      { name: 'VSCode', level: 98, category: 'Editor' },
      { name: 'Cursor', level: 95, category: 'Editor' },
      { name: 'Git/GitHub', level: 90, category: 'Version Control' },
      { name: 'Netlify', level: 85, category: 'Deployment' },
      { name: 'Vercel', level: 85, category: 'Deployment' },
      { name: 'Firebase', level: 75, category: 'Backend' },
      { name: 'Supabase', level: 75, category: 'Backend' },
    ],
    competitive: [
      { name: 'Dynamic Programming', level: 95, category: 'Advanced' },
      { name: 'Graph Algorithms', level: 92, category: 'Advanced' },
      { name: 'Data Structures', level: 90, category: 'Core' },
      { name: 'Greedy Algorithms', level: 88, category: 'Intermediate' },
      { name: 'String Algorithms', level: 85, category: 'Advanced' },
      { name: 'Number Theory', level: 82, category: 'Math' },
      { name: 'Geometry', level: 78, category: 'Math' },
      { name: 'Game Theory', level: 75, category: 'Advanced' },
    ],
  };

  const achievements = [
    { icon: Shield, title: 'CodeChef 2-Star', description: 'Max Rating: 1400+' },
    { icon: Zap, title: 'Codeforces Pupil', description: 'Max Rating: 1200+' },
    { icon: Cpu, title: 'HackerRank Certified', description: 'JavaScript (Basic)' },
    { icon: GitBranch, title: '20+ Projects', description: 'Personal + Freelance' },
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (level >= 80) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (level >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills <span className="text-gradient">Laboratory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive showcase of my technical expertise across different domains of software development.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="card-enhanced p-6 text-center hover:shadow-glow transition-all duration-300">
                <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${
                  activeCategory === category.id ? 'text-primary-foreground' : category.color
                }`} />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills]?.map((skill, index) => (
            <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {skill.category}
                  </Badge>
                </div>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={skill.level} 
                  className="h-2"
                />
                <div className={`h-1 rounded-full ${getProgressColor(skill.level)} opacity-50`} 
                     style={{ width: `${skill.level}%` }}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="card-enhanced p-8 max-w-4xl mx-auto">
            <Palette className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Continuous Learning Philosophy
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As a passionate self-taught programmer, I believe in continuous learning and practical application. 
              My journey from solving coding problems to building real-world applications has taught me that 
              every challenge is an opportunity to grow. With 800+ problems solved and 20+ projects completed, 
              I&apos;m always eager to take on new challenges and contribute to meaningful projects.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Quick Learner', 'Collaborative', 'Problem Solver', 'Self-Motivated'].map((trait) => (
                <Badge key={trait} variant="outline" className="px-4 py-2">
                  {trait}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;