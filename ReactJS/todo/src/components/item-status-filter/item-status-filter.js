import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
	
	render() {
		const {filter, onToogleFilter} = this.props;
		
		const filterButtons = filter.map((elem) => {
			const {label, id, active} = elem;
			let classNames = 'btn';
			let classActive = ' btn-info';
			let classSecondary = ' btn-outline-secondary';

			if(active) {
				classNames = classNames + classActive;
			} else classNames = classNames + classSecondary;

			return (
				<button className={classNames}
						key={id}
						onClick={() => onToogleFilter(id)}>
						{label}
				</button>
			)
		})

		return (
			<div className="btn-group">
				{filterButtons}
			</div>
		);
	}
	
}