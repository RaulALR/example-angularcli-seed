import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import 'hammerjs';

import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { Angulartics2 } from 'angulartics2';
@Component({
  selector: 'app-lod',
  templateUrl: './component.html',
})
export class Component{

  public dataScreen: any;

    constructor(
      private angulartics2:Angulartics2,
    ) {
      this.initData();
    }

    /**
     * Inicializa datos de pantalla
     */
    private initData(): void{
      this.dataScreen = {
        online: 'liveagent_button_online_' + environment.live_agent.chatID,
        offline: 'liveagent_button_offline_' + environment.live_agent.chatID,
      };
    }
}
