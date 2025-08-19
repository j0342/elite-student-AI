import React, { useState } from 'react';
import { Bot, Send, BookOpen, Lightbulb, FileText, BarChart3, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const AITutor = () => {
  const [message, setMessage] = useState('');
  const [selectedMode, setSelectedMode] = useState<'general' | 'course-specific'>('general');
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    { id: 'calc1', name: 'Calculus I', color: 'bg-blue-500' },
    { id: 'phys2', name: 'Physics II', color: 'bg-green-500' },
    { id: 'cs1', name: 'Computer Science', color: 'bg-purple-500' },
    { id: 'chem1', name: 'Chemistry I', color: 'bg-red-500' },
  ];

  const chatHistory = [
    {
      type: 'user',
      message: "Can you explain the chain rule in calculus?",
      timestamp: '2 minutes ago'
    },
    {
      type: 'ai',
      message: "The chain rule is a fundamental technique in calculus for finding derivatives of composite functions. If you have a function f(g(x)), the derivative is f'(g(x)) × g'(x). Think of it as 'peeling an onion' - you differentiate the outer function first, then multiply by the derivative of the inner function.",
      timestamp: '2 minutes ago',
      suggestions: [
        "Show me an example",
        "Practice problems",
        "Related topics"
      ]
    },
    {
      type: 'user',
      message: "Show me an example",
      timestamp: '1 minute ago'
    },
    {
      type: 'ai',
      message: "Here's a classic example: Find the derivative of f(x) = (3x² + 1)⁵\n\n1. Identify: outer function is u⁵, inner function is u = 3x² + 1\n2. Apply chain rule: d/dx[(3x² + 1)⁵] = 5(3x² + 1)⁴ × d/dx[3x² + 1]\n3. Simplify: = 5(3x² + 1)⁴ × 6x = 30x(3x² + 1)⁴\n\nWould you like to try another example?",
      timestamp: '1 minute ago'
    }
  ];

  const quickPrompts = [
    { icon: Lightbulb, text: "Explain this concept simply", category: "Understanding" },
    { icon: FileText, text: "Generate practice problems", category: "Practice" },
    { icon: BarChart3, text: "Create a study plan", category: "Planning" },
    { icon: BookOpen, text: "Summarize my notes", category: "Review" },
  ];

  const aiCapabilities = [
    {
      title: "Course-Specific Help",
      description: "Get targeted assistance based on your course materials and progress",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      title: "Practice Generation",
      description: "Generate unlimited practice problems and quizzes tailored to your level",
      icon: FileText,
      color: "text-green-500"
    },
    {
      title: "Study Planning",
      description: "Create personalized study schedules and track your progress",
      icon: BarChart3,
      color: "text-purple-500"
    },
    {
      title: "Concept Explanation",
      description: "Break down complex topics into digestible, easy-to-understand explanations",
      icon: Lightbulb,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-accent-foreground" />
            </div>
            AI Tutor
          </h1>
          <p className="text-muted-foreground mt-1">Your personal study assistant powered by advanced AI</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Boss Mode Available
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="card-elite h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-accent" />
                  Chat with AI Tutor
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant={selectedMode === 'general' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedMode('general')}
                  >
                    General
                  </Button>
                  <Button
                    variant={selectedMode === 'course-specific' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedMode('course-specific')}
                  >
                    Course Specific
                  </Button>
                </div>
              </div>
              
              {selectedMode === 'course-specific' && (
                <div className="flex gap-2 flex-wrap mt-2">
                  {courses.map(course => (
                    <Button
                      key={course.id}
                      variant={selectedCourse === course.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCourse(course.id)}
                      className="text-xs"
                    >
                      {course.name}
                    </Button>
                  ))}
                </div>
              )}
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              {/* Chat History */}
              <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        chat.type === 'user'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{chat.message}</p>
                      <p className="text-xs opacity-70 mt-1">{chat.timestamp}</p>
                      
                      {chat.suggestions && (
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {chat.suggestions.map((suggestion, i) => (
                            <Button
                              key={i}
                              variant="outline"
                              size="sm"
                              className="text-xs h-7"
                              onClick={() => setMessage(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-border pt-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder={
                      selectedMode === 'course-specific' && selectedCourse
                        ? `Ask about ${courses.find(c => c.id === selectedCourse)?.name}...`
                        : "Ask me anything about your studies..."
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[60px] resize-none"
                  />
                  <Button 
                    className="btn-gradient px-4"
                    disabled={!message.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Prompts */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">Quick Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-3"
                  onClick={() => setMessage(prompt.text)}
                >
                  <div className="flex items-center gap-3">
                    <prompt.icon className="w-4 h-4 text-accent" />
                    <div className="text-left">
                      <p className="text-sm font-medium">{prompt.text}</p>
                      <p className="text-xs text-muted-foreground">{prompt.category}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-3">
                  <capability.icon className={`w-5 h-5 mt-0.5 ${capability.color}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{capability.title}</p>
                    <p className="text-xs text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Study Stats */}
          <Card className="card-elite">
            <CardHeader>
              <CardTitle className="text-lg">Study Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Questions Asked</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Topics Covered</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Study Time</span>
                <span className="font-semibold">45 min</span>
              </div>
              <Button variant="outline" className="w-full mt-3">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Progress
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AITutor;