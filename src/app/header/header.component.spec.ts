import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';



describe('HeaderComponent', () => {


  beforeEach(async() => {
  TestBed.configureTestingModule({
    imports: [RouterTestingModule,
    MaterialModule],
    declarations: [HeaderComponent]
  }).compileComponents();
})

  it('crear componente', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

})






