import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  show(){
    return this._http.get('/products');
  }
  show_id(id){
    return this._http.get('products/'+id);
  }
  create(data){
    return this._http.post('/products/new', data);
  }
  update(id, data){
    return this._http.put('/products/edit/'+id, data);
  }
  deleteProduct(id){
    return this._http.delete('/products/'+id);
  }
}
