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
    { id: 'backend', label: 'Backend', icon: Database, color: 'text-green-500' },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, color: 'text-purple-500' },
    { id: 'devops', label: 'DevOps', icon: Cloud, color: 'text-orange-500' },
    { id: 'tools', label: 'Tools', icon: Code2, color: 'text-red-500' },
    { id: 'competitive', label: 'Competitive Programming', icon: Zap, color: 'text-yellow-500' },
  ];

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, category: 'Framework' },
      { name: 'TypeScript', level: 90, category: 'Language' },
      { name: 'Next.js', level: 85, category: 'Framework' },
      { name: 'Tailwind CSS', level: 92, category: 'Styling' },
      { name: 'Vue.js', level: 75, category: 'Framework' },
      { name: 'HTML5/CSS3', level: 95, category: 'Core' },
      { name: 'JavaScript ES6+', level: 93, category: 'Language' },
      { name: 'Sass/SCSS', level: 88, category: 'Styling' },
    ],
    backend: [
      { name: 'Node.js', level: 92, category: 'Runtime' },
      { name: 'Express.js', level: 90, category: 'Framework' },
      { name: 'MongoDB', level: 88, category: 'Database' },
      { name: 'PostgreSQL', level: 85, category: 'Database' },
      { name: 'GraphQL', level: 80, category: 'API' },
      { name: 'RESTful APIs', level: 95, category: 'API' },
      { name: 'Python', level: 83, category: 'Language' },
      { name: 'Redis', level: 78, category: 'Cache' },
    ],
    mobile: [
      { name: 'React Native', level: 85, category: 'Framework' },
      { name: 'Expo', level: 82, category: 'Platform' },
      { name: 'Flutter', level: 70, category: 'Framework' },
      { name: 'PWA Development', level: 88, category: 'Web' },
      { name: 'Mobile UI/UX', level: 85, category: 'Design' },
    ],
    devops: [
      { name: 'Docker', level: 85, category: 'Containerization' },
      { name: 'AWS', level: 80, category: 'Cloud' },
      { name: 'CI/CD', level: 83, category: 'Automation' },
      { name: 'Nginx', level: 75, category: 'Server' },
      { name: 'Linux', level: 88, category: 'OS' },
      { name: 'Kubernetes', level: 70, category: 'Orchestration' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 95, category: 'Version Control' },
      { name: 'VS Code', level: 98, category: 'Editor' },
      { name: 'Figma', level: 85, category: 'Design' },
      { name: 'Postman', level: 90, category: 'API Testing' },
      { name: 'Jest/Testing', level: 88, category: 'Testing' },
      { name: 'Webpack', level: 82, category: 'Build Tool' },
    ],
    competitive: [
      { name: 'Data Structures', level: 95, category: 'Core' },
      { name: 'Algorithms', level: 93, category: 'Core' },
      { name: 'Dynamic Programming', level: 90, category: 'Advanced' },
      { name: 'Graph Theory', level: 88, category: 'Advanced' },
      { name: 'Mathematical Algorithms', level: 85, category: 'Math' },
      { name: 'String Algorithms', level: 87, category: 'Advanced' },
    ],
  };

  const achievements = [
    { icon: Shield, title: 'CodeChef 5-Star', description: 'Max Rating: 2156' },
    { icon: Zap, title: 'Codeforces Expert', description: 'Max Rating: 1678' },
    { icon: Cpu, title: 'ICPC Regionalist', description: '2022, 2023' },
    { icon: GitBranch, title: 'Open Source', description: '100+ Contributions' },
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
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of software development. 
              My journey in competitive programming has sharpened my problem-solving abilities, 
              while my full-stack experience ensures I can bring ideas to life end-to-end.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Problem Solver', 'Quick Learner', 'Team Player', 'Innovation Focused'].map((trait) => (
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