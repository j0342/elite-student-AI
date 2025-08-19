import React from 'react';
import { BookOpen, Plus, Calendar, Users, TrendingUp, FileText, Brain, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: 'Calculus I',
      code: 'MATH 2413',
      professor: 'Dr. Smith',
      color: 'bg-blue-500',
      progress: 75,
      nextClass: 'Tomorrow 9:00 AM',
      assignments: 3,
      notes: 12,
      grade: 'A-'
    },
    {
      id: 2,
      name: 'Physics II',
      code: 'PHYS 2326',
      professor: 'Dr. Johnson',
      color: 'bg-green-500',
      progress: 60,
      nextClass: 'Today 11:00 AM',
      assignments: 2,
      notes: 8,
      grade: 'B+'
    },
    {
      id: 3,
      name: 'Computer Science',
      code: 'COSC 1437',
      professor: 'Prof. Williams',
      color: 'bg-purple-500',
      progress: 85,
      nextClass: 'Today 2:00 PM',
      assignments: 1,
      notes: 15,
      grade: 'A'
    },
    {
      id: 4,
      name: 'English Literature',
      code: 'ENGL 2327',
      professor: 'Prof. Davis',
      color: 'bg-orange-500',
      progress: 45,
      nextClass: 'Wednesday 10:00 AM',
      assignments: 4,
      notes: 6,
      grade: 'B'
    },
    {
      id: 5,
      name: 'Chemistry I',
      code: 'CHEM 1411',
      professor: 'Dr. Brown',
      color: 'bg-red-500',
      progress: 70,
      nextClass: 'Friday 1:00 PM',
      assignments: 2,
      notes: 10,
      grade: 'A-'
    },
    {
      id: 6,
      name: 'Statistics',
      code: 'STAT 2300',
      professor: 'Prof. Wilson',
      color: 'bg-teal-500',
      progress: 55,
      nextClass: 'Thursday 3:00 PM',
      assignments: 3,
      notes: 7,
      grade: 'B+'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Courses</h1>
          <p className="text-muted-foreground mt-1">Manage all your academic courses in one place</p>
        </div>
        <Button className="btn-gradient">
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="card-elite">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Courses</p>
                <p className="text-2xl font-bold text-foreground">{courses.length}</p>
              </div>
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Progress</p>
                <p className="text-2xl font-bold text-foreground">
                  {Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length)}%
                </p>
              </div>
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Assignments</p>
                <p className="text-2xl font-bold text-foreground">
                  {courses.reduce((acc, course) => acc + course.assignments, 0)}
                </p>
              </div>
              <FileText className="w-6 h-6 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="card-elite group cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center mb-3`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {course.grade}
                </Badge>
              </div>
              <CardTitle className="text-lg">{course.name}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {course.code} • {course.professor}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              {/* Next Class */}
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Next:</span>
                <span className="font-medium">{course.nextClass}</span>
              </div>

              {/* Quick Stats */}
              <div className="flex justify-between text-sm pt-2 border-t border-border">
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>{course.assignments} tasks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{course.notes} notes</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="sm" variant="outline" className="flex-1">
                  <Mic className="w-3 h-3 mr-1" />
                  Record
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Brain className="w-3 h-3 mr-1" />
                  AI Tutor
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="card-elite">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">New assignment added to Calculus I</p>
                <p className="text-xs text-muted-foreground">Problem Set 5 • Due tomorrow</p>
              </div>
              <span className="text-xs text-muted-foreground">2h ago</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-success-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">AI enhanced notes for Physics II</p>
                <p className="text-xs text-muted-foreground">Chapter 8: Electromagnetic Waves</p>
              </div>
              <span className="text-xs text-muted-foreground">5h ago</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                <Mic className="w-4 h-4 text-warning-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Lecture transcription completed</p>
                <p className="text-xs text-muted-foreground">Computer Science • Data Structures</p>
              </div>
              <span className="text-xs text-muted-foreground">1d ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;