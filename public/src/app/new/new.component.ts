import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({


  selector: 'app-new',
  templateUrl: './new.component.html',


  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {



  product: any;
  errors: string;

  constructor(
    private _httpService: HttpService,



    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {



    this.product = {title:'', price:'', image:''}



  }

  newProduct(){



    console.log("Create")
    this._httpService.create(this.product).subscribe(data=>{



      console.log('data', data)
      if (data['errors']) {
        this.errors = data['errors'];



      } else {
        console.log("Success !")

        
        this.product = {title:'', price:'', image:''};
        this._router.navigate(["/products"]);
      }
     });
  }

  cancel(){
    this._router.navigate(["/products"]);
  };

}
