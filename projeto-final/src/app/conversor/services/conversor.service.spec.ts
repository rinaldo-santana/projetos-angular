import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';
import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs/Observable';

import { ConversorService } from '../services';
import { HttpModule } from '@angular/http';


describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversorService],
      imports: [ Http ]
    });
  });

  it('should be created', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
