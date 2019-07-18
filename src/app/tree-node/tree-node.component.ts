import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'tree-node',
	templateUrl: './tree-node.component.html',
	styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

	faPlus = faPlus;
	faMinus = faMinus;

	private adding: boolean = false;
	@Input('open') open: boolean = false;
	@Input('node') node: any;
	inputdata: string

	constructor() { }

	ngOnInit() {
	}

	toggleOpen(node) {
		node.open = !node.open;
	}

	addNode(n) {
		this.adding = true;
	}

	removeNode(n) {
		n.removed = true;
	}

	confirmAdding(n) {
		this.adding = false;
		if (!n.children) {
			n.children = [];
		}
		n.open = true;
		n.children.push({
			name: this.inputdata,
			removed :false
		})
	}

	cancelAdding() {
		this.adding = false;
		this.inputdata = '';
	}

	hasChildren(node){
		return node.children && node.children.filter(n => !n.removed).length > 0
	}

}
