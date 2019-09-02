import { Injectable } from '@angular/core';

@Injectable()

export class TrackService {
  tracks: Array<any> = new Array<any>();

  constructor() {
    this.tracks.push(
      {
        id: 1,
        title: '01. King of the Gods.mp3',
        number: 1,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 2,
        title: '02. Under the Gaze of Ares.mp3',
        number: 2,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 3,
        title: '03. The Oracle.mp3',
        number: 3,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 4,
        title: '04. In the Forests of Olympus.mp3',
        number: 4,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 5,
        title: '05. The Deer.mp3',
        number: 5,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 6,
        title: '06. Appollo\'s Palace.mp3',
        number: 6,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 7,
        title: '07. Hades Underworld.mp3',
        number: 7,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 8,
        title: '08. March form Hades.mp3',
        number: 8,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 9,
        title: '09. Trojan Shores.mp3',
        number: 9,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 10,
        title: '10. Achilles Heel.mp3',
        number: 10,
        album: 'Apotheon_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 11,
        title: 'bp_FTL_01_TitleScreen.mp3',
        number: 1,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 12,
        title: 'bp_FTL_02_MilkyWayEXPLORE.mp3',
        number: 2,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 13,
        title: 'bp_FTL_03_CivilEXPLORE.mp3',
        number: 3,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 14,
        title: 'bp_FTL_04_CosmosEXPLORE.mp3',
        number: 4,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 15,
        title: 'bp_FTL_05_DeepspaceEXPLORE.mp3',
        number: 5,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 16,
        title: 'bp_FTL_06_DebrisEXPLORE.mp3',
        number: 6,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
      {
        id: 17,
        title: 'bp_FTL_07_MantisEXPLORE.mp3',
        number: 7,
        album: 'FTL_OST',
        mime: 'audio/mpeg',
      },
    );
  }
}
