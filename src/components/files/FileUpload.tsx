import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Upload, 
  File, 
  X, 
  Download, 
  Eye, 
  Trash2, 
  FileText, 
  Image, 
  FileCheck 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  category: string;
  uploadDate: string;
  url?: string;
}

const fileCategories = [
  'medicalRecords',
  'identificationDocuments', 
  'insuranceDocuments',
  'legalDocuments',
  'emergencyContacts',
  'other'
];

const getFileIcon = (type: string) => {
  if (type.startsWith('image/')) return <Image className="w-4 h-4" />;
  if (type.includes('pdf')) return <FileText className="w-4 h-4" />;
  return <File className="w-4 h-4" />;
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export function FileUpload() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('medicalRecords');
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    // Sample data - in real app this would come from backend
    {
      id: '1',
      name: 'medical_history_john_doe.pdf',
      size: 2048576,
      type: 'application/pdf',
      category: 'medicalRecords',
      uploadDate: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      name: 'insurance_card_front.jpg',
      size: 1024000,
      type: 'image/jpeg',
      category: 'insuranceDocuments',
      uploadDate: '2024-01-14T15:45:00Z'
    },
    {
      id: '3',
      name: 'emergency_contact_form.pdf',
      size: 512000,
      type: 'application/pdf',
      category: 'emergencyContacts',
      uploadDate: '2024-01-13T09:15:00Z'
    }
  ]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    setUploading(true);
    
    // Simulate file upload process
    try {
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        category: selectedCategory,
        uploadDate: new Date().toISOString()
      }));

      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadedFiles(prev => [...prev, ...newFiles]);
      
      toast({
        title: t('uploadSuccess'),
        description: `${files.length} file(s) uploaded successfully`,
      });
    } catch (error) {
      toast({
        title: t('uploadError'),
        description: 'Please try again',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    toast({
      title: 'File Removed',
      description: 'File has been removed successfully',
    });
  };

  const getCategoryBadgeColor = (category: string) => {
    const colors: { [key: string]: string } = {
      medicalRecords: 'bg-care-info text-white',
      identificationDocuments: 'bg-care-warning text-white', 
      insuranceDocuments: 'bg-care-success text-white',
      legalDocuments: 'bg-destructive text-white',
      emergencyContacts: 'bg-primary text-white',
      other: 'bg-muted text-muted-foreground'
    };
    return colors[category] || colors.other;
  };

  return (
    <div className="flex-1 space-y-6 p-6 bg-gradient-subtle min-h-screen">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t('fileManagement')}
        </h1>
        <p className="text-muted-foreground text-lg">
          Upload and manage required documents and files
        </p>
      </div>

      {/* Upload Section */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">
              {t('uploadFiles')}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Category Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              File Category
            </label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fileCategories.map(category => (
                  <SelectItem key={category} value={category}>
                    {t(category)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-muted-foreground/25 hover:border-muted-foreground/50'
            } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleChange}
              disabled={uploading}
            />
            
            <div className="space-y-4">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                {uploading ? (
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Upload className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="space-y-2">
                <p className="text-foreground font-medium">
                  {uploading ? t('uploading') : t('dragDropFiles')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('supportedFormats')}
                </p>
              </div>

              <Button
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={uploading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t('selectFiles')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Files Table */}
      <Card className="bg-gradient-card shadow-soft border-0">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">
              {t('uploadedFiles')}
            </CardTitle>
            <Badge variant="outline" className="ml-auto">
              {uploadedFiles.length} files
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <File className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>{t('noFilesUploaded')}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t('fileName')}</TableHead>
                    <TableHead>{t('fileType')}</TableHead>
                    <TableHead>{t('fileSize')}</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>{t('uploadDate')}</TableHead>
                    <TableHead className="text-right">{t('actions')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploadedFiles.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getFileIcon(file.type)}
                          <span className="font-medium text-sm">{file.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {file.type.split('/')[1]?.toUpperCase() || 'FILE'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatFileSize(file.size)}
                      </TableCell>
                      <TableCell>
                        <Badge className={`text-xs ${getCategoryBadgeColor(file.category)}`}>
                          {t(file.category)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(file.uploadDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Remove File</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to remove "{file.name}"? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleRemoveFile(file.id)}
                                  className="bg-destructive hover:bg-destructive/90"
                                >
                                  Remove
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}