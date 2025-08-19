import React from 'react';
import { Calendar, Clock, BookOpen, TrendingUp, AlertCircle, Mail, Plus, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const todaysClasses = [
    { time: '09:00', course: 'Calculus I', room: 'Room 203', professor: 'Dr. Smith' },
    { time: '11:00', course: 'Physics II', room: 'Lab 105', professor: 'Dr. Johnson' },
    { time: '14:00', course: 'Computer Science', room: 'Room 301', professor: 'Prof. Williams' },
  ];

  const upcomingAssignments = [
    { title: 'Calculus Problem Set 5', course: 'Calculus I', dueDate: 'Tomorrow', priority: 'high' },
    { title: 'Physics Lab Report', course: 'Physics II', dueDate: 'Friday', priority: 'medium' },
    { title: 'CS Project Milestone', course: 'Computer Science', dueDate: 'Next Week', priority: 'low' },
  ];

  const recentEmails = [
    { from: 'Dr. Smith', subject: 'Midterm Exam Schedule', time: '2h ago', unread: true },
    { from: 'Prof. Williams', subject: 'Project Guidelines Updated', time: '5h ago', unread: false },
    { from: 'Academic Office', subject: 'Registration Reminder', time: '1d ago', unread: false },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Good morning, John!</h1>
          <p className="text-muted-foreground mt-1">Ready to tackle today's challenges?</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold text-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-elite">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold text-foreground">6</p>
              </div>
              <BookOpen className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current GPA</p>
                <p className="text-2xl font-bold text-foreground">3.85</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Study Hours</p>
                <p className="text-2xl font-bold text-foreground">28h</p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Classes */}
        <Card className="card-elite">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysClasses.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-accent bg-accent-soft px-2 py-1 rounded">
                      {class_.time}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{class_.course}</p>
                      <p className="text-sm text-muted-foreground">{class_.room} • {class_.professor}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Join</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card className="card-elite">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-warning" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{assignment.title}</p>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={assignment.priority === 'high' ? 'destructive' : assignment.priority === 'medium' ? 'default' : 'secondary'}>
                      {assignment.dueDate}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professor Emails */}
      <Card className="card-elite">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Recent Professor Emails
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentEmails.map((email, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${email.unread ? 'bg-accent' : 'bg-transparent'}`} />
                  <div>
                    <p className={`font-medium ${email.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {email.from}
                    </p>
                    <p className="text-sm text-muted-foreground">{email.subject}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{email.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-4 justify-center pt-4">
        <Button className="btn-gradient">
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          View Calendar
        </Button>
        <Button variant="outline">
          <Bot className="w-4 h-4 mr-2" />
          Ask AI Tutor
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;