import { useTranslation } from 'react-i18next';
import { Users, AlertTriangle, UserCheck, Calendar, Activity, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ title, value, icon, trend, trendUp }: StatCardProps) {
  return (
    <Card className="bg-gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && (
          <p className={`text-xs ${trendUp ? 'text-care-success' : 'text-care-warning'} mt-1`}>
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

interface ActivityItemProps {
  title: string;
  time: string;
  type: 'info' | 'warning' | 'success';
}

function ActivityItem({ title, time, type }: ActivityItemProps) {
  const getTypeColor = () => {
    switch (type) {
      case 'success': return 'bg-care-success';
      case 'warning': return 'bg-care-warning';
      default: return 'bg-care-info';
    }
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className={`w-2 h-2 rounded-full mt-2 ${getTypeColor()}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

export function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('totalResidents'),
      value: '124',
      icon: <Users className="w-4 h-4" />,
      trend: '+2 this week',
      trendUp: true
    },
    {
      title: t('activeAlerts'),
      value: '3',
      icon: <AlertTriangle className="w-4 h-4" />,
      trend: '-1 from yesterday',
      trendUp: true
    },
    {
      title: t('staffOnDuty'),
      value: '28',
      icon: <UserCheck className="w-4 h-4" />,
      trend: '2 shifts active',
      trendUp: true
    },
    {
      title: t('upcomingAppointments'),
      value: '16',
      icon: <Calendar className="w-4 h-4" />,
      trend: 'Next in 30 min',
      trendUp: false
    }
  ];

  const recentActivities = [
    {
      title: 'Medication reminder sent to Room 205',
      time: '2 minutes ago',
      type: 'info' as const
    },
    {
      title: 'Mrs. Johnson completed physical therapy',
      time: '15 minutes ago',
      type: 'success' as const
    },
    {
      title: 'Fall detection alert - Room 312 (Resolved)',
      time: '1 hour ago',
      type: 'warning' as const
    },
    {
      title: 'New resident admission: Mr. Smith',
      time: '2 hours ago',
      type: 'info' as const
    },
    {
      title: 'Lunch service completed - Wing A',
      time: '3 hours ago',
      type: 'success' as const
    }
  ];

  const todaysSchedule = [
    { time: '09:00', event: 'Morning medication round' },
    { time: '10:30', event: 'Group activity - Music therapy' },
    { time: '12:00', event: 'Lunch service begins' },
    { time: '14:00', event: 'Doctor visits - Wing B' },
    { time: '16:00', event: 'Afternoon tea and social hour' },
    { time: '18:30', event: 'Dinner service begins' }
  ];

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-subtle min-h-screen">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t('welcomeBack')}
        </h1>
        <p className="text-muted-foreground text-lg">
          Overview of your care facility operations
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            trendUp={stat.trendUp}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card shadow-soft border-0">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-muted-foreground" />
                <CardTitle className="text-lg font-semibold">
                  {t('recentActivity')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {recentActivities.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    title={activity.title}
                    time={activity.time}
                    type={activity.type}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-lg font-semibold">
                {t('todaysSchedule')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaysSchedule.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Badge variant="outline" className="text-xs font-mono min-w-fit">
                  {item.time}
                </Badge>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}