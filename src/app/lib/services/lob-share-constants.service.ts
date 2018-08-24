import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from 'lbk-lqp';

@Injectable()
export class LobShareConstantsService {

  private constantsFile: any;
  private constantsError: any;

  constructor(
    private _http: HttpClient,
    private loggerService: LoggerService,
  ) {
    this.loggerService.info('Load configuration of file');

    this.getConfigFile('./assets/configuracion/constantes.json').subscribe(
      (result: any) => {
        this.constantsFile = result;
      });

    this.getConfigFile('./assets/configuracion/constantes_error.json').subscribe(
      (result: any) => {
        this.constantsError = result;
      });
  }

  /**
   * [getConfigFile carga fichero de confguracion]
   * @return {any} [description]
   */
  private getConfigFile(fich: string): Observable<any> {
    return this._http.get(fich);
  }

  /**
   * Retorna array de ventanas
   */
  public getScreenArray(): any[]{
    return this.constantsFile.PANTALLAS_ARRAY;
  }

  /**
   * Retorna array con navegación por defecto
   */
  public getSurfDefault(): any{
    return this.constantsFile.NAVEGACION_DEFAULT;
  }

  /**
   * Retorna versión de servicios
   */
  public getVersion(): string{
    return this.constantsFile.VERSION;
  }

  /**
   * Retorna entidad
   */
  public getEntidad(): string{
    return this.constantsFile.ENTIDAD;
  }

  /**
   * Retorna aplicación origen
   */
  public  getAplicOrigin(): string{
    return this.constantsFile.APLIC_ORIGEN;
  }

  /**
   * Retorna versión de documento
   */
  public getVersionDocument(): string{
    return this.constantsFile.VERSION_DOCUMENT;
  }

  /**
   * Retorna versión front
   */
  public getVersionFront(): string{
    return this.constantsFile.VERSION_FRONT;
  }

  /**
   * Retorna idioma
   */
  public getIdioma(): string{
    return this.constantsFile.IDIOMA;
  }

  /**
   * Retorna usuario
   */
  public getUsuario(): string{
    return this.constantsFile.USUARIO;
  }

  /**
   * Retorna canal
   */
  public getCanal(): string{
    return this.constantsFile.CANAL;
  }

  /**
   * Obtiene la descripción de error
   * @param error
   */
  public getError(error: string): string{
    let _error: string = this.constantsError[error];

    if (_error === undefined || _error === ''){
      _error = 'Lo sentimos, pero en estos momentos estamos teniendo problemas técnicos. Por favor vuelve a intentarlo más tarde.';
    }
    return _error;
  }

}
