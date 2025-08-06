import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Award, 
  ExternalLink,
  Calendar,
  Star,
  Zap,
  Brain,
  Code2,
  BookOpen
} from 'lucide-react';

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: 'CodeChef',
      rating: 2156,
      maxRating: 2156,
      rank: '5-Star',
      color: 'bg-orange-500',
      problems: 450,
      contests: 28,
      url: 'https://codechef.com/users/yourusername'
    },
    {
      name: 'Codeforces',
      rating: 1678,
      maxRating: 1678,
      rank: 'Expert',
      color: 'bg-blue-500',
      problems: 380,
      contests: 45,
      url: 'https://codeforces.com/profile/yourusername'
    },
    {
      name: 'LeetCode',
      rating: 1890,
      maxRating: 1890,
      rank: 'Guardian',
      color: 'bg-yellow-500',
      problems: 520,
      contests: 32,
      url: 'https://leetcode.com/yourusername'
    },
    {
      name: 'AtCoder',
      rating: 1245,
      maxRating: 1245,
      rank: 'Brown',
      color: 'bg-amber-600',
      problems: 180,
      contests: 18,
      url: 'https://atcoder.jp/users/yourusername'
    }
  ];

  const achievements = [
    {
      title: 'ICPC Regionalist',
      description: 'Qualified for ICPC Asia-Pacific Regional Finals',
      year: '2023',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'CodeChef Cook-Off Winner',
      description: 'First place in monthly coding contest',
      year: '2023',
      icon: Award,
      color: 'text-orange-500'
    },
    {
      title: 'Google Kickstart Top 100',
      description: 'Ranked in top 100 globally in Round A',
      year: '2022',
      icon: Star,
      color: 'text-blue-500'
    },
    {
      title: 'Meta Hacker Cup Qualifier',
      description: 'Qualified for Round 2 of Meta Hacker Cup',
      year: '2022',
      icon: Target,
      color: 'text-green-500'
    }
  ];

  const topicStrengths = [
    { topic: 'Dynamic Programming', strength: 95, problems: 120 },
    { topic: 'Graph Algorithms', strength: 92, problems: 85 },
    { topic: 'Data Structures', strength: 90, problems: 150 },
    { topic: 'Greedy Algorithms', strength: 88, problems: 95 },
    { topic: 'String Algorithms', strength: 85, problems: 70 },
    { topic: 'Number Theory', strength: 82, problems: 60 },
    { topic: 'Geometry', strength: 78, problems: 45 },
    { topic: 'Game Theory', strength: 75, problems: 35 }
  ];

  const recentContests = [
    {
      contest: 'Codeforces Round #915',
      rank: 245,
      participants: 15420,
      ratingChange: +42,
      problems: 4,
      date: '2023-12-15'
    },
    {
      contest: 'CodeChef December Long',
      rank: 89,
      participants: 8230,
      ratingChange: +28,
      problems: 5,
      date: '2023-12-10'
    },
    {
      contest: 'AtCoder Beginner Contest 332',
      rank: 156,
      participants: 12450,
      ratingChange: +15,
      problems: 6,
      date: '2023-12-02'
    }
  ];

  const getStrengthColor = (strength: number) => {
    if (strength >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (strength >= 80) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (strength >= 70) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-red-500 to-pink-500';
  };

  return (
    <section id="competitive" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Competitive Programming <span className="text-gradient">Arena</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where algorithms come to life and complex problems meet elegant solutions. 
            My journey through the world of competitive programming.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Problems Solved', value: '1000+', icon: Code2 },
            { label: 'Contests Participated', value: '120+', icon: Trophy },
            { label: 'Max Rating', value: '2156', icon: TrendingUp },
            { label: 'Years Active', value: '3+', icon: Calendar },
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

        {/* Platform Profiles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Platform Profiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">{platform.name}</h4>
                  <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-muted-foreground">Current Rating</span>
                      <Badge variant="outline" className="text-xs">
                        {platform.rank}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-primary">{platform.rating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Problems</div>
                      <div className="font-medium">{platform.problems}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Contests</div>
                      <div className="font-medium">{platform.contests}</div>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full mt-4 group-hover:border-primary transition-colors"
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View Profile
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Major Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-enhanced p-6 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Topic Strengths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Algorithm Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topicStrengths.map((topic, index) => (
              <Card key={index} className="card-enhanced p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{topic.topic}</h4>
                    <p className="text-sm text-muted-foreground">{topic.problems} problems solved</p>
                  </div>
                  <span className="text-sm font-medium text-primary">{topic.strength}%</span>
                </div>
                
                <div className="space-y-2">
                  <Progress 
                    value={topic.strength} 
                    className="h-2"
                  />
                  <div className={`h-1 rounded-full ${getStrengthColor(topic.strength)} opacity-50`} 
                       style={{ width: `${topic.strength}%` }}></div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Contest Performance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Recent Contest Performance</h3>
          <Card className="card-enhanced overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Contest</th>
                    <th className="text-left p-4 font-semibold text-foreground">Rank</th>
                    <th className="text-left p-4 font-semibold text-foreground">Participants</th>
                    <th className="text-left p-4 font-semibold text-foreground">Rating Change</th>
                    <th className="text-left p-4 font-semibold text-foreground">Problems</th>
                    <th className="text-left p-4 font-semibold text-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContests.map((contest, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{contest.contest}</td>
                      <td className="p-4 text-muted-foreground">{contest.rank}</td>
                      <td className="p-4 text-muted-foreground">{contest.participants.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`font-medium ${
                          contest.ratingChange > 0 ? 'text-success' : 'text-destructive'
                        }`}>
                          {contest.ratingChange > 0 ? '+' : ''}{contest.ratingChange}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{contest.problems}</td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(contest.date).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Programming Philosophy */}
        <div className="text-center">
          <Card className="card-enhanced p-8 max-w-4xl mx-auto">
            <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Problem-Solving Philosophy
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Competitive programming has taught me that every complex problem can be broken down into 
              smaller, manageable pieces. It's not just about finding a solution—it's about finding the 
              most efficient, elegant solution. This mindset translates directly into my professional 
              development work, where I approach challenges with algorithmic thinking and optimization in mind.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Analytical Thinking', 'Optimization', 'Pattern Recognition', 'Time Management'].map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;