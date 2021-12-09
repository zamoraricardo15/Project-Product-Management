import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({




  selector: 'app-edit',



  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})



export class EditComponent implements OnInit {





  id: any;
  product: any;
  errors: any;

  constructor(



    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {




    this.product = {title:'', price:'', image:''}
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
      this.show_id(this.id);
    });
  }




  show_id(id){



    console.log('show called with id', id)
    this._httpService.show_id(this.id).subscribe(data=>{
      this.product = data;
      })





  }

  updateProduct(){



    this._httpService.update(this.id, this.product).subscribe(data=>{


      console.log('data', data)



      if(data['errors']){
        this.errors = data['errors'];
      } else {
        this.product = data;
        this._router.navigate(['/products']);
      }
    })
  }

  deleteProduct(id){



    this._httpService.deleteProduct(id).subscribe(data => {


      
      console.log("deleted task")
    });
    this._router.navigate(['/products']);
  }

}
