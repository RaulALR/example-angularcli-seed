import { LobVentanaErrorComponent } from '../shared/ventana-error/ventana-error.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LobVentanaInformacionComponent } from '../shared/ventana-informacion/ventana-informacion.component';
import { LobVentanaProgresoComponent } from '../shared/ventana-progreso/ventana-progreso.component';
import { LoggerService } from 'lbk-lqp';
import { LobShareConstantsService } from '../services/share-constants.service';

@Injectable()
export class LobModalService {

  public spinner:any;
  private promise: any;

  constructor(
    public dialog: MatDialog,
    private loggerService: LoggerService,
    private shareConstantsService: LobShareConstantsService,
  ) {
    this.spinner = {};
   }

  /**
   * Abre pop-up de información
   * @param msg
   * @param maxWidth
   */
  public openInfo(msg: string, maxWidth: string = '80%', title: string = ''): void {
    // this.modal.open();

    let _dialogRef = this.dialog.open(LobVentanaInformacionComponent, {
      maxWidth: maxWidth,
      width: 'auto',
      data: { msg: msg, title: title },
    });

    _dialogRef.afterClosed().subscribe((result: any) => {
      this.loggerService.info('Cierra popup');
    });

  }

  /**
   * Abre pop-up de error
   * @param msg
   * @param maxWidth
   */
  public openError(arrayLogic: any, maxWidth: string = '80%'): void {
    let _dialogRef = this.dialog.open(LobVentanaErrorComponent, {
      maxWidth: maxWidth,
      width: 'auto',
      data: { msg: this.shareConstantsService.getError(arrayLogic.msg ||''), caso: arrayLogic.caso },
    });

    _dialogRef.afterClosed().subscribe((result: any) => {
      if (typeof arrayLogic && arrayLogic.action !== undefined ){
        arrayLogic.action(); // Lanza servicio de navegación
      }

      this.loggerService.info('Cierra popup');
    });

  }

   /**
   * Abre pop-up de progreso
   */
  public openProgress(): void {
    // Espera de 5s para mostrar popup
      // open spinner
    //  this.promise = new Promise((resolve: any, reject: any) => {
      let _dialogRef: any = this.dialog.getDialogById('progress');
      if(!_dialogRef && !this.spinner){
        this.spinner = setTimeout(() => {
          let _dialogProgress: any = this.dialog.open(LobVentanaProgresoComponent, {
            width: this.detectDevice() ? '80%' : '45%',
            id: 'progress',
            height: 'auto',
            disableClose: true,
          });
          _dialogProgress.afterClosed().subscribe((result: any) => {
            this.loggerService.info('Cierra popup progreso');
            window.scrollTo(0, 0);
          });
        // let _dialogRef: any = this.dialog.getDialogById('progress');
        }, 5000);// });
      }
  }
  /**
   * Cierra pop-up de progreso
   */
  public closeProgress(): void{
    clearTimeout(this.spinner);
    this.spinner = undefined;

    let _dialogRef: any = this.dialog.getDialogById('progress');
    if(_dialogRef){
      _dialogRef.close();
    }
  }

  /**
   * Actualiza pop-up
   */
  public updateProgress(): void{
    this.closeProgress();
    this.openProgress();
  }

  /**
     * Detecta si es un dispositivo movil
     */
    public detectDevice(): boolean {
      let isDevice: boolean = false;
      let _isMobile = {
          Android: function (): any {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function (): any {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function (): any {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function (): any {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function (): any {
              return navigator.userAgent.match(/IEMobile/i);
          },
          any: function (): any {
              return (_isMobile.Android() || _isMobile.BlackBerry() || _isMobile.iOS() || _isMobile.Opera() || _isMobile.Windows());
          },
      };

      if (_isMobile.any()) {
          isDevice = true;
      }

      return isDevice;
  }
}
