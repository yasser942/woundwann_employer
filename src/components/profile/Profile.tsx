import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Phone, MapPin, Calendar, Heart, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  room: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo: {
    allergies: string;
    medications: string;
    conditions: string;
  };
  preferences: {
    language: string;
    notifications: boolean;
  };
}

export function Profile() {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@elderlycare.com',
    phone: '+1 (555) 123-4567',
    address: '123 Care Lane, Healthcare City, HC 12345',
    dateOfBirth: '1965-03-15',
    room: 'Staff Office 205',
    emergencyContact: {
      name: 'John Johnson',
      phone: '+1 (555) 987-6543',
      relationship: 'Spouse'
    },
    medicalInfo: {
      allergies: 'None reported',
      medications: 'None',
      conditions: 'None'
    },
    preferences: {
      language: 'English',
      notifications: true
    }
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
    console.log('Saving profile:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Here you would typically revert changes
  };

  const updateField = (field: keyof ProfileData, value: any) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedField = (parent: keyof ProfileData, field: string, value: any) => {
    setProfileData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent] as any),
        [field]: value
      }
    }));
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-subtle min-h-screen">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {t('profile')}
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your personal information and preferences
          </p>
        </div>
        
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={handleCancel}
                className="shadow-soft"
              >
                {t('cancel')}
              </Button>
              <Button
                onClick={handleSave}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
              >
                {t('save')}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
            >
              {t('edit')}
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Personal Information */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-lg font-semibold">
                {t('personalInformation')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t('name')}</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">{t('dateOfBirth')}</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={profileData.dateOfBirth}
                  onChange={(e) => updateField('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="room">{t('room')}</Label>
                <Input
                  id="room"
                  value={profileData.room}
                  onChange={(e) => updateField('room', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-lg font-semibold">
                {t('contactInformation')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('phone')}</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                disabled={!isEditing}
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">{t('address')}</Label>
              <Textarea
                id="address"
                value={profileData.address}
                onChange={(e) => updateField('address', e.target.value)}
                disabled={!isEditing}
                className="bg-background resize-none"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-lg font-semibold">
                {t('emergencyContact')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyName">{t('name')}</Label>
              <Input
                id="emergencyName"
                value={profileData.emergencyContact.name}
                onChange={(e) => updateNestedField('emergencyContact', 'name', e.target.value)}
                disabled={!isEditing}
                className="bg-background"
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">{t('phone')}</Label>
                <Input
                  id="emergencyPhone"
                  value={profileData.emergencyContact.phone}
                  onChange={(e) => updateNestedField('emergencyContact', 'phone', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="relationship">Relationship</Label>
                <Input
                  id="relationship"
                  value={profileData.emergencyContact.relationship}
                  onChange={(e) => updateNestedField('emergencyContact', 'relationship', e.target.value)}
                  disabled={!isEditing}
                  className="bg-background"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-muted-foreground" />
              <CardTitle className="text-lg font-semibold">
                {t('medicalInformation')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Textarea
                id="allergies"
                value={profileData.medicalInfo.allergies}
                onChange={(e) => updateNestedField('medicalInfo', 'allergies', e.target.value)}
                disabled={!isEditing}
                className="bg-background resize-none"
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="medications">Current Medications</Label>
              <Textarea
                id="medications"
                value={profileData.medicalInfo.medications}
                onChange={(e) => updateNestedField('medicalInfo', 'medications', e.target.value)}
                disabled={!isEditing}
                className="bg-background resize-none"
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="conditions">Medical Conditions</Label>
              <Textarea
                id="conditions"
                value={profileData.medicalInfo.conditions}
                onChange={(e) => updateNestedField('medicalInfo', 'conditions', e.target.value)}
                disabled={!isEditing}
                className="bg-background resize-none"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preferences */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">
              {t('preferences')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>{t('language')}</Label>
            <div className="flex gap-2">
              <Badge variant={profileData.preferences.language === 'English' ? 'default' : 'outline'}>
                English
              </Badge>
              <Badge variant={profileData.preferences.language === 'Deutsch' ? 'default' : 'outline'}>
                Deutsch
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>{t('status')}</Label>
            <Badge className="bg-care-success text-white">
              Active Staff Member
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}