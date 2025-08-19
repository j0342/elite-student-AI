import React from 'react';
import { FolderOpen, Upload, Search, FileText, Image, File } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Files = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Files & Resources</h1>
          <p className="text-muted-foreground mt-1">Organize and access all your study materials</p>
        </div>
        <Button className="btn-gradient">
          <Upload className="w-4 h-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search files..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Calculus I', 'Physics II', 'Computer Science', 'Chemistry I'].map((course) => (
          <Card key={course} className="card-elite">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FolderOpen className="w-5 h-5 text-accent" />
                {course}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4" />
                  <span>12 documents</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Image className="w-4 h-4" />
                  <span>5 images</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Files;