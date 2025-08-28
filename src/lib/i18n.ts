import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      profile: 'Profile',
      logout: 'Logout',
      
      // Auth
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      forgotPassword: 'Forgot Password?',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
      
      // Dashboard
      welcomeBack: 'Welcome Back',
      totalResidents: 'Total Residents',
      activeAlerts: 'Active Alerts',
      staffOnDuty: 'Staff on Duty',
      upcomingAppointments: 'Upcoming Appointments',
      recentActivity: 'Recent Activity',
      todaysSchedule: 'Today\'s Schedule',
      
      // Profile
      personalInformation: 'Personal Information',
      contactInformation: 'Contact Information',
      emergencyContact: 'Emergency Contact',
      medicalInformation: 'Medical Information',
      preferences: 'Preferences',
      language: 'Language',
      
      // Common
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      search: 'Search',
      filter: 'Filter',
      name: 'Name',
      phone: 'Phone',
      address: 'Address',
      dateOfBirth: 'Date of Birth',
      room: 'Room',
      status: 'Status',
      
      // Elderly House System
      elderlyHouseSystem: 'Elderly House System',
      careManagement: 'Care Management',
    }
  },
  de: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      profile: 'Profil',
      logout: 'Abmelden',
      
      // Auth
      login: 'Anmelden',
      register: 'Registrieren',
      email: 'E-Mail',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      signIn: 'Anmelden',
      signUp: 'Registrieren',
      forgotPassword: 'Passwort vergessen?',
      alreadyHaveAccount: 'Haben Sie bereits ein Konto?',
      dontHaveAccount: 'Haben Sie noch kein Konto?',
      
      // Dashboard
      welcomeBack: 'Willkommen zurück',
      totalResidents: 'Bewohner gesamt',
      activeAlerts: 'Aktive Alarme',
      staffOnDuty: 'Personal im Dienst',
      upcomingAppointments: 'Kommende Termine',
      recentActivity: 'Letzte Aktivitäten',
      todaysSchedule: 'Heutiger Zeitplan',
      
      // Profile
      personalInformation: 'Persönliche Informationen',
      contactInformation: 'Kontaktinformationen',
      emergencyContact: 'Notfallkontakt',
      medicalInformation: 'Medizinische Informationen',
      preferences: 'Einstellungen',
      language: 'Sprache',
      
      // Common
      save: 'Speichern',
      cancel: 'Abbrechen',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      search: 'Suchen',
      filter: 'Filter',
      name: 'Name',
      phone: 'Telefon',
      address: 'Adresse',
      dateOfBirth: 'Geburtsdatum',
      room: 'Zimmer',
      status: 'Status',
      
      // Elderly House System
      elderlyHouseSystem: 'Seniorenheim-System',
      careManagement: 'Pflegeverwaltung',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;