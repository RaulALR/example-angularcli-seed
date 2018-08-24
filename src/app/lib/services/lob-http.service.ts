import { Status } from './../../../dob-sdk/constants';
import { LobShareConstantsService } from './share-constants.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from 'lbk-lqp';
import { LobModalService } from '../services/modal.service';

@Injectable()
export class LobHttpService {

  constructor(
    private _http: HttpClient,
    private shareConstants: LobShareConstantsService,
    private loggerService: LoggerService,
    private modalService: LobModalService,
  ) { }

  /**
   * Solicitud post a servicio externo LBBK
   * @param url
   * @param parameters
   */
  public postDataUrl(url: string, parameters: any): any {
    let _httpParam = new HttpParams();
    for (let param of parameters) {
      _httpParam = _httpParam.append(param.id, param.value);
    }
    return this._http.post(url, _httpParam);
  }

  /**
   * Método genérico que realiza servicios LBK con POST
   * @param data
   * @param configure
   */
  public sendTrxLBK(data: any, configure: any, isNotVersion: boolean = false): any {
    let _url: string = `${environment.api_ext.url}:${environment.api_ext.generic_port}/${environment.api_ext.ext}/${configure.URL}`;

    if (!isNotVersion){
      data.Version_Front = this.shareConstants.getVersionFront(); // Versión del aplicativo
      data.Version_Documentos = this.shareConstants.getVersionDocument(); // Versión de los documento
    }

    let httpHeaders: any = this.buildHeader(data);

    return this.post(_url, this.formatBody(configure.ESQUEMA, data), httpHeaders);
  }

  /**
   * Método genérico que realiza servicios LBK con PUT
   * @param data
   * @param configure
   */
  public sendTrxPutLBK(data: any, configure: any): any {
    let _url: string = `${environment.api_ext.url}:${environment.api_ext.generic_port}/${environment.api_ext.ext}/${configure.URL}`;

    let httpHeaders: any = this.buildHeader(data);

    return this.put(_url, this.formatBody(configure.ESQUEMA, data), httpHeaders);
  }

  /**
   * Método genérico que realiza servicios LBK con GET
   * @param data
   * @param configure
   */
  public sendTrxGetLBK(data: any, configure: any): any {
    let _url: string = `${environment.api_ext.url}:${environment.api_ext.generic_port}/${environment.api_ext.ext}/${configure.URL}/${data}`;

    let httpHeaders = this.buildHeader( data);

    return this.get(_url, httpHeaders);
  }

  /**
   * Método genérico que realiza servicios de seguridad
   * @param data
   * @param configure
   */
  public sendTrxSecurity(data: any, configure: any): any{
    let _url: string = `${environment.api_ext.url}:${environment.api_ext.generic_port}/${environment.api_ext.ext}/${configure.URL}`;

    let httpHeaders: any = { headers: new HttpHeaders({
      'Authorization': data.Authorization,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    }),'withCredentials': true};

    data = data.body;

    return this.post(_url, this.formatBody(configure.ESQUEMA, data), httpHeaders);
  }

  /**
   * Servicio POST
   * @param url
   * @param data
   * @param header
   */
  private post(url: string, data: any, header: any): any{
    return this._http.post<any>(url, data, header);
  }

  /**
   * Servicio PUT
   * @param url
   * @param data
   * @param header
   */
  private put(url: string, data: any, header: any): any{
    return this._http.put<any>(url, data, header);
  }

  /**
   * Servicio GET
   * @param url
   * @param header
   */
  private get(url: string, header: any): any{
    return this._http.get<any>(url, header);
  }

  /**
   * Crea un body en formato json para enviar a un servicio post
   * @param operacion
   * @param data
   */
  private formatBody(operacion: string, data: any): any {
    let _header: any;

    if (operacion === '' ){
      _header = data;
    } else{
      _header = {
        [operacion]: data,
      };
    }

    return _header;
  }

  /**
   * Genera la cabecera de las peticiones
   * @param isHeader
   */
  private buildHeader(data: any): any{
    let _object: any;
    let headers: any;

    headers = { headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json',
    }), 'withCredentials': true};

    return headers;
  }
}
