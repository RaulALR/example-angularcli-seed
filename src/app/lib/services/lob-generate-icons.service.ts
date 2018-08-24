import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ICON_CUSTOM } from '../shared/constantes/icon-custom';

@Injectable()
export class LobGenerateIconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _http: HttpClient,
  ) {
    this.initIcon();
   }

  private initIcon(): void{

    for(let iconObject of ICON_CUSTOM){
      this.matIconRegistry.addSvgIcon(
        iconObject.NAME,
        this.domSanitizer.bypassSecurityTrustResourceUrl(iconObject.URL),
      );
    }
  }

}
