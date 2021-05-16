import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FightDataService } from 'src/app/fight-data.service';
import { WeatherService } from '../../weather.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  origin = new FormControl('');
  flightInfo: any;
  departureDate: any;
  returnDate: any;
  originCity: any;
  destinationCity: any;
  message: any;

  constructor(private router: Router, private weatherService: WeatherService, private flightDataService: FightDataService) {}

  ngOnInit() {
    this.flightDataService.currentMessage.subscribe(message => this.message = message)
  }

  call1() {
    this.router.navigate(['/login']);
    this.flightInfo = [
      this.originCity,
      this.destinationCity,
      this.departureDate,
      this.returnDate
    ];
    console.log(this.flightInfo);
    this.flightDataService.changeMessage(this.flightInfo);
  }


  options = true;
  minDate: Date = new Date();

  cities = [
    {
      id: 0,
      name: 'Katowice',
      url: 'https://www.ing.pl/_fileserver/item/1126390.fedcba'
    },
    {
      id: 1,
      name: 'Poznań',
      url: 'https://pliki.propertynews.pl/i/06/21/17/062117_r0_940.jpg'
    },
    {
      id: 2,
      name: 'Warszawa',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/%C5%9Ar%C3%B3dmie%C5%9Bcie_Warszawy_widziane_z_mostu_Siekierkowskiego_2020.jpg/480px-%C5%9Ar%C3%B3dmie%C5%9Bcie_Warszawy_widziane_z_mostu_Siekierkowskiego_2020.jpg'
    },
    {
      id: 3,
      name: 'Sztokholm',
      url: 'https://navtur.pl/files/plc_pano/1325.jpg'
    },
    {
      id: 4,
      name: 'Paryż',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/550px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
    },
    {
      id: 5,
      name: 'Nowy Jork',
      url:
        'https://gfx.radiozet.pl/var/radiozet/storage/images/podroze-radia-zet/nowy-jork-co-warto-zobaczyc-10-najwiekszych-atrakcji-nowego-jorku/1766637-1-pol-PL/Nowy-Jork-co-warto-zobaczyc-10-najwiekszych-atrakcji-Nowego-Jorku_article.webp'
    },
    {
      id: 6,
      name: 'Miami',
      url:
        'https://media.istockphoto.com/photos/mornings-over-miami-beach-picture-id1023093528?k=6&m=1023093528&s=612x612&w=0&h=Y5vNGbeQIEHE_bwm507V6N8gqAdT5pktUhG5qMUKpuw='
    },
    {
      id: 7,
      name: 'Kair',
      url:
        'https://media.istockphoto.com/photos/mornings-over-miami-beach-picture-id1023093528?k=6&m=1023093528&s=612x612&w=0&h=Y5vNGbeQIEHE_bwm507V6N8gqAdT5pktUhG5qMUKpuw='
    }
  ];

  destinationsArray: any = this.cities;

  showDetails(param) {
    // console.log(param)
    this.router.navigate(['/cityDetails'], {
      queryParams: { id: param.id, name: param.name }
    });
  }

  selectedCity: any;
  temperature: number;
  emoticon: any;

  showTemp() {
    this.weatherService.city = this.selectedCity;
    this.weatherService.getWeather().subscribe(result => {
      console.log(result);
      this.temperature = Object(result).main.temp;
      this.emoticon = Object(result).weather[0].main;
      if (this.emoticon == 'Clouds') {
        this.emoticon = "☁️"
      } if (this.emoticon == 'Clear') {
        this.emoticon = "☀️"
      }
      })
    }


  }
