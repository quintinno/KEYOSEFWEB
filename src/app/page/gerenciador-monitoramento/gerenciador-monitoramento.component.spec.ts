import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorMonitoramentoComponent } from './gerenciador-monitoramento.component';

describe('GerenciadorMonitoramentoComponent', () => {
  let component: GerenciadorMonitoramentoComponent;
  let fixture: ComponentFixture<GerenciadorMonitoramentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorMonitoramentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorMonitoramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
