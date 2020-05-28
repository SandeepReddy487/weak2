import { Component, OnInit, Input } from '@angular/core';
import { Dish} from '../shared/dish';
import { from } from 'rxjs';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-dishdetail',
	templateUrl: './dishdetail.component.html',
	styleUrls: ['./dishdetail.component.scss'],
	// encapsulation: ViewEncapsulation.None
})
export class DishdetailComponent implements OnInit {

	@Input()
	dish = Dish;

	constructor() { }
	
	// dish = DISH;

	ngOnInit() {
	}

}
