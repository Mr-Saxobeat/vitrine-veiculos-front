import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVeiculoComponent } from './criar-veiculo.component';

describe('CriarVeiculoComponent', () => {
  let component: CriarVeiculoComponent;
  let fixture: ComponentFixture<CriarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
