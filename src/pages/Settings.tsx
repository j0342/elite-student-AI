import React from 'react';
import { Settings as SettingsIcon, User, Bell, Calendar, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Customize your StudyElite experience</p>
      </div>

      <div className="grid gap-6">
        <Card className="card-elite">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-accent" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Push Notifications</span>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="card-elite">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Calendar Integration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Connect Outlook Calendar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;