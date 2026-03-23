import { UrlContent, TextContent, QrCodeResponse, QrCodeRequest } from './../../core/models/index';
import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QrCodeType } from '../../core/models';
import { QrCode } from '../../core/services/qr-code';

@Component({
  selector: 'app-generator',
  imports: [FormsModule, CommonModule],
  templateUrl: './generator.html',
  styleUrl: './generator.scss',
})
export class Generator implements OnInit {

  qrTypes : QrCodeType[] =[];
  selectedType ='URL';

  foregroundColor = '#000000';
  backgroundColor = '#ffffff';
  size =300;
  urlContent = {url : ''};
  textContent = {text : ''};
  emailContent = {to : '', subject:'', body:''};
  wifiContent = {ssid:'', password:'', security:'WPA'};
  vcardContent= {firstName:'', lastName:'', phone:'', email:'',address:'',company:''}
  generatedQr : QrCodeResponse | null =null;
  isLoading = false;
  errorMessage ='';


  constructor(private qrCodeservice :QrCode){}

  ngOnInit(): void{

    this.qrCodeservice.getTypes().subscribe({
      next: (types)=> this.qrTypes =types,
      error : () => this.qrTypes= []
    })
  }

  // ——— Ajoute ces propriétés ———
downloadFormat = 'PNG';

defaultTypes = [
  { code: 'URL',   label: 'URL',   icon: '🔗' },
  { code: 'TEXT',  label: 'Texte', icon: '📝' },
  { code: 'EMAIL', label: 'Email', icon: '✉️' },
  { code: 'WIFI',  label: 'WiFi',  icon: '📶' },
  { code: 'VCARD', label: 'vCard', icon: '👤' },
];

colorPresets = [
  { label: 'Classic',   fg: '#000000', bg: '#FFFFFF' },
  { label: 'CI Orange', fg: '#FF8C00', bg: '#FFFFFF' },
  { label: 'CI Vert',   fg: '#009E49', bg: '#FFFFFF' },
  { label: 'CI Dark',   fg: '#FF8C00', bg: '#0A0A0E' },
  { label: 'CI Inverse',fg: '#FFFFFF', bg: '#FF8C00' },
];

getTypeIcon(code: string): string {
  const icons: Record<string, string> = {
    URL: '🔗', TEXT: '📝', EMAIL: '✉️', WIFI: '📶', VCARD: '👤'
  };
  return icons[code] ?? '🔲';
}

  getContentData(): any {
    switch (this.selectedType) {
      case 'URL':   return this.urlContent;
      case 'TEXT':  return this.textContent;
      case 'EMAIL': return this.emailContent;
      case 'WIFI':  return this.wifiContent;
      case 'VCARD': return this.vcardContent;
      default:      return {};
    }
  }


  onTypeChange(): void {
    this.generatedQr = null;
    this.errorMessage = '';
  }

  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.generatedQr = null;

    const request: QrCodeRequest = {
      contentType: this.selectedType,
      contentData: this.getContentData(),
      foregroundColor: this.foregroundColor,
      backgroundColor: this.backgroundColor,
      size: this.size
    };

    this.qrCodeservice.generate(request).subscribe({
      next: (response) => {

        this.generatedQr = response;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors de la génération, réessayez';
        this.isLoading = false;
      }
    });
  }

  downloadPng(): void {
    if (this.generatedQr) {
      this.qrCodeservice.downloadPng(this.generatedQr);
    }
  }

  downloadSvg(): void {
    if (this.generatedQr) {
      this.qrCodeservice.downloadSvg(this.generatedQr);
    }
  }

}
