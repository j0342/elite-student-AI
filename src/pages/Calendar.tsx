import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Mock events data
  const events = [
    {
      id: 1,
      title: 'Calculus I Lecture',
      type: 'class',
      time: '09:00 - 10:30',
      date: '2024-01-15',
      location: 'Room 203',
      professor: 'Dr. Smith',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Physics II Lab',
      type: 'class',
      time: '11:00 - 13:00',
      date: '2024-01-15',
      location: 'Lab 105',
      professor: 'Dr. Johnson',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Math Assignment Due',
      type: 'assignment',
      time: '23:59',
      date: '2024-01-16',
      course: 'Calculus I',
      color: 'bg-red-500'
    },
    {
      id: 4,
      title: 'Computer Science Project',
      type: 'assignment',
      time: '23:59',
      date: '2024-01-18',
      course: 'COSC 1437',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'Physics Midterm',
      type: 'exam',
      time: '14:00 - 16:00',
      date: '2024-01-20',
      location: 'Room 301',
      color: 'bg-orange-500'
    }
  ];

  // Get today's events
  const today = new Date().toISOString().split('T')[0];
  const todaysEvents = events.filter(event => event.date === today);
  
  // Get upcoming events (next 7 days)
  const upcoming = events.filter(event => {
    const eventDate = new Date(event.date);
    const now = new Date();
    const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    return eventDate > now && eventDate <= oneWeekFromNow;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const EventCard = ({ event }: { event: any }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className={`w-3 h-12 ${event.color} rounded-full`} />
      <div className="flex-1">
        <h4 className="font-medium text-foreground">{event.title}</h4>
        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {event.time}
          </div>
          {event.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {event.location}
            </div>
          )}
        </div>
        {event.professor && (
          <p className="text-xs text-muted-foreground mt-1">{event.professor}</p>
        )}
        {event.course && (
          <p className="text-xs text-muted-foreground mt-1">{event.course}</p>
        )}
      </div>
      <Badge variant={event.type === 'exam' ? 'destructive' : event.type === 'assignment' ? 'default' : 'secondary'}>
        {event.type}
      </Badge>
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground mt-1">Manage your classes, assignments, and deadlines</p>
        </div>
        <Button className="btn-gradient">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card className="card-elite">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-accent" />
                  {formatDate(currentDate)}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentDate(new Date())}
                  >
                    Today
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Mini Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {/* Calendar days would be generated here */}
                {Array.from({ length: 35 }, (_, i) => (
                  <div 
                    key={i} 
                    className="p-2 text-center text-sm hover:bg-muted/50 rounded cursor-pointer transition-colors relative"
                  >
                    {i + 1 <= 31 ? i + 1 : ''}
                    {/* Event indicators */}
                    {(i + 1 === 15 || i + 1 === 16 || i + 1 === 20) && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {i + 1 === 15 && <div className="w-1 h-1 bg-green-500 rounded-full" />}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Event List for Selected Day */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Today's Events</h3>
                {todaysEvents.length > 0 ? (
                  <div className="space-y-2">
                    {todaysEvents.map(event => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No events scheduled for today
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Add Class
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Add Assignment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                Add Exam
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Sync Outlook
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">Upcoming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcoming.map(event => (
                  <div key={event.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                    <div className={`w-2 h-2 ${event.color} rounded-full`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calendar Legend */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm">Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm">Assignments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="text-sm">Exams</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span className="text-sm">Projects</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;