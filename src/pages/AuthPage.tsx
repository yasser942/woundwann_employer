import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface AuthPageProps {
  onLogin: (email: string, password: string) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const { t, i18n } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleRegister = (email: string, password: string, name: string) => {
    // For now, just switch to login after registration
    // In a real app, you'd handle actual registration
    console.log('Register:', { email, password, name });
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 relative">
      {/* Language switcher */}
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="w-4 h-4" />
              {i18n.language === 'de' ? 'Deutsch' : 'English'}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => changeLanguage('en')}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('de')}>
              Deutsch
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Auth forms */}
      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm
            onLogin={onLogin}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onRegister={handleRegister}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <p className="text-xs text-muted-foreground text-center">
          {t('elderlyHouseSystem')} - {t('careManagement')}
        </p>
      </div>
    </div>
  );
}