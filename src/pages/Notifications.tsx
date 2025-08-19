import React from 'react';
import { Bell, Mail, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'assignment',
      title: 'Assignment Due Tomorrow',
      message: 'Calculus I Problem Set 5 is due tomorrow at 11:59 PM',
      time: '2 hours ago',
      read: false,
      icon: AlertTriangle,
      color: 'text-warning'
    },
    {
      id: 2,
      type: 'email',
      title: 'New Email from Dr. Smith',
      message: 'Midterm exam schedule has been updated',
      time: '4 hours ago',
      read: false,
      icon: Mail,
      color: 'text-accent'
    },
    {
      id: 3,
      type: 'class',
      title: 'Class Reminder',
      message: 'Physics II lecture starts in 30 minutes',
      time: '6 hours ago',
      read: true,
      icon: Calendar,
      color: 'text-success'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-1">Stay updated with your academic schedule</p>
        </div>
        <Button variant="outline">Mark All Read</Button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card key={notification.id} className={`card-elite ${!notification.read ? 'border-accent/50' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center`}>
                  <notification.icon className={`w-5 h-5 ${notification.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{notification.title}</h3>
                    {!notification.read && <div className="w-2 h-2 bg-accent rounded-full" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
                <Badge variant="secondary">{notification.type}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;