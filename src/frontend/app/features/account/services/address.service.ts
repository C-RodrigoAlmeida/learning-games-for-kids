import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Address } from '../models/address.interface';
import { PaginatedResponse } from '../../../core/models/paginated-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private path = '/account/addresses/';

  constructor(private apiService: ApiService) {}

  getAddresses(): Observable<PaginatedResponse<Address>> {
    return this.apiService.get<Address>(this.path);
  }

  getAddress(id: number): Observable<Address> {
    return this.apiService.getOne<Address>(`${this.path}${id}/`);
  }

  createAddress(address: Partial<Address>): Observable<Address> {
    return this.apiService.post<Address>(this.path, address);
  }

  updateAddress(id: number, address: Partial<Address>): Observable<Address> {
    return this.apiService.put<Address>(`${this.path}${id}/`, address);
  }

  deleteAddress(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.path}${id}/`);
  }

  getUserAddresses(userId: number): Observable<PaginatedResponse<Address>> {
    return this.apiService.get<Address>(`${this.path}user/${userId}/`);
  }
} 