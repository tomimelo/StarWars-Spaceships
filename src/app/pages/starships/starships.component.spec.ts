import { of } from "rxjs";
import { StarshipsService } from "src/app/services/starships.service";
import { StarshipsComponent } from "./starships.component";

describe("StarshipsComponent", () => {

  let component: StarshipsComponent;
  const service = new StarshipsService(null);

  beforeEach( () => {
    component = new StarshipsComponent(service);        
  });

  it('ngOnInit: Should load starships', () => {

    const resp = { results: ['sampleStarship1', 'sampleStarship1', 'sampleStarship1'] };
    
    spyOn(service, "getStarships").and.callFake(() => {
        return of(resp);
    });

    component.ngOnInit();
    expect(component.starships.length).toBeGreaterThan(0);

  });

  it('loadMore: Should add new results to array', () => {

    const resp: any = { results: ['sampleStarship1', 'sampleStarship1', 'sampleStarship1'] };

    spyOn(service, "getStarships").and.returnValue(of(resp));

    component.nextPage = "https://example.com/api/schema";
    component.loadMore();

    expect(component.starships.length).toBeGreaterThan(0);
    expect(component.starships.indexOf(resp.results[0])).toBeGreaterThanOrEqual(0);
    
  });

});
