import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      profile: 'Profile',
      files: 'Files',
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
      
      // File Management
      fileManagement: 'File Management',
      uploadFiles: 'Upload Files',
      dragDropFiles: 'Drag and drop files here, or click to browse',
      supportedFormats: 'Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)',
      fileName: 'File Name',
      fileSize: 'File Size',
      fileType: 'File Type',
      uploadDate: 'Upload Date',
      actions: 'Actions',
      download: 'Download',
      view: 'View',
      uploadedFiles: 'Uploaded Files',
      noFilesUploaded: 'No files uploaded yet',
      selectFiles: 'Select Files',
      uploading: 'Uploading...',
      uploadSuccess: 'Files uploaded successfully',
      uploadError: 'Error uploading files',
      removeFile: 'Remove File',
      
      // File Categories
      medicalRecords: 'Medical Records',
      identificationDocuments: 'ID Documents',
      insuranceDocuments: 'Insurance Documents',
      legalDocuments: 'Legal Documents',
      emergencyContacts: 'Emergency Contacts',
      other: 'Other',
    }
  },
  de: {
    translation: {
      // Navigation
      dashboard: 'Dashboard',
      profile: 'Profil',
      files: 'Dateien',
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
      
      // File Management
      fileManagement: 'Dateiverwaltung',
      uploadFiles: 'Dateien hochladen',
      dragDropFiles: 'Dateien hier hineinziehen oder klicken zum Durchsuchen',
      supportedFormats: 'Unterstützte Formate: PDF, DOC, DOCX, JPG, PNG (Max 10MB)',
      fileName: 'Dateiname',
      fileSize: 'Dateigröße',
      fileType: 'Dateityp',
      uploadDate: 'Upload-Datum',
      actions: 'Aktionen',
      download: 'Herunterladen',
      view: 'Anzeigen',
      uploadedFiles: 'Hochgeladene Dateien',
      noFilesUploaded: 'Noch keine Dateien hochgeladen',
      selectFiles: 'Dateien auswählen',
      uploading: 'Wird hochgeladen...',
      uploadSuccess: 'Dateien erfolgreich hochgeladen',
      uploadError: 'Fehler beim Hochladen der Dateien',
      removeFile: 'Datei entfernen',
      
      // File Categories
      medicalRecords: 'Medizinische Unterlagen',
      identificationDocuments: 'Ausweisdokumente',
      insuranceDocuments: 'Versicherungsunterlagen',
      legalDocuments: 'Rechtsdokumente',
      emergencyContacts: 'Notfallkontakte',
      other: 'Sonstige',
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