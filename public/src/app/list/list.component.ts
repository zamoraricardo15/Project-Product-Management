import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})

export class ListComponent implements OnInit {




  products: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }




  ngOnInit() {


    this.show();
  }
  
  show(){


    console.log('show called')
    this._httpService.show().subscribe(data=>{
      console.log(data)
      this.products = data;


    })
  }

  deleteProduct(id){


    this._httpService.deleteProduct(id).subscribe(data => {


      console.log("deleted task")


    });

    
    this.show();
  }

}
