import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs/Observable';

import { ConversorService } from '../services';



describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversorService],
      imports: [ Http, HttpModule ]
    });
  });

  it('should be created', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
