import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

// MATERIAL
import {
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatRadioModule,
  MatTooltipModule,
  MAT_DATE_LOCALE,
} from '@angular/material';

// MAIN
import { Component } from './component';

// CUSTOMS COMPONENT Aqui van los componentes propios

// CUSTOMS SERVICES Aqui van los servicios propios

// ARQUITECTURA Componentes de arquitectura

// COOKIES
import { CookieService } from 'ngx-cookie-service';

// ROUTER
import { RoutingModule } from './routing.module';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.1, threshold: 1 }, // override default settings 0.3 / 10
  };
}
@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
  ],

  declarations: [
    Component
  ],
  exports: [],
  entryComponents: [],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
    CookieService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [Component],
})
export class LobModule { }
