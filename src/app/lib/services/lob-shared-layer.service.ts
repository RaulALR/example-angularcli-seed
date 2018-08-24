import { Injectable } from '@angular/core';
declare let dataLayer:any;

@Injectable()
export class LobSharedLayerService {
  private pageNavigation: string = 'na';
  private pageSection: string = 'na';
  private pageType: string = 'na';
  private loginState: string = 'na';
  private utm: any = {};
  private SalesforceID: string = 'na';
  private consent: any = {};
  private codigoAlta: string = 'na';
  constructor() {
    this.utm.campaign = 'na';
    this.utm.medium = 'na';
    this.consent.Publicidad = 'na';
    this.consent.CesionDatos = 'na';
    this.consent.UsoDatosPromos = 'na';
    this.consent.AccesoFuentesInformacion = 'na';

    //this.lanzarLayer();
   }

  /**
   * Lanza un dataLayer con los campos
   */
  public lanzarLayer(): void{
    dataLayer.push({
      'template': 'hazte_cliente',
      'pageNavigation': this.pageNavigation,
      'pageZone': 'onboarding',
      'pageSection': this.pageSection,
      'pageType': this.pageType,
      'pageActive':'web',
      'pageError': 'na',
      'device':'na',
      'channel':'online',
      'browserType':'na',
      'loginState': this.loginState,
      'language':'ES',
      'externalNameCampaign': this.utm.campaign,
      'sourceMedium': this.utm.medium,
      'SalesforceID': this.SalesforceID,
      'consentPublicidad': this.consent.Publicidad,
      'consentCesionDatos': this.consent.CesionDatos,
      'consentUsoDatosPromos': this.consent.UsoDatosPromos,
      'consentAccesoFuentesInformacion': this.consent.AccesoFuentesInformacion,
      'codigoAlta': this.codigoAlta,
    });
  }

  /**
   * Inserta pageNavigation y pageType
   * @param data
   */
  public setPageNavi(data: string): void{
    if (this.pageNavigation !== 'na'){
      this.pageNavigation = `${this.pageNavigation}|${data}`;
    }else{
      this.pageNavigation = data;
    }

    this.pageType = data;
  }

  /**
   * Inserta pageSection
   * @param data
   */
  public setPageSect(data: string): void{
    this.pageSection = data;
  }

  /**
   * Inserta LoginState
   * @param data
   */
  public setloginState(data: string): void{
    this.loginState = data;
  }

  /**
   * Inserta utm
   * @param camp
   * @param medium
   */
  public setUtm(camp: string, medium: string): void{
    this.utm.campaign = camp;
    this.utm.medium = medium;
  }

  /**
   * Inserta id de SF
   * @param data
   */
  public setIdSF(data: string): void{
    this.SalesforceID = data;
  }

  /**
   * Inserta consentimientos
   * @param publicidad
   * @param cesionDatos
   * @param usoDatosPromos
   * @param accesoFuentesInformacion
   */
  public setConsent(publicidad: string, cesionDatos: string, usoDatosPromos: string, accesoFuentesInformacion: string): void{
    this.consent.Publicidad = publicidad;
    this.consent.CesionDatos = cesionDatos;
    this.consent.UsoDatosPromos = usoDatosPromos;
    this.consent.AccesoFuentesInformacion = accesoFuentesInformacion;
  }

  /**
   * Inserta código de alta
   * @param codAlta
   */
  public setCodAlta(codAlta: string): void{
    this.codigoAlta = codAlta && codAlta !== '' ? codAlta : 'na';
  }

}
