import React, {useState} from 'react';


import Search from './search-form';

import '../../styles/search/search-form-mobile.scss';


const SearchFormMobile = (props: any) => {

		const [state, setState] = useState({
			isPressedShowSearch: false,
		});

		const toggleSearch = () => {
			setState({
				isPressedShowSearch: !state.isPressedShowSearch,
			});
		};

		return(

			<>
				<div className="newicon search" onClick={toggleSearch}></div>
				{
					state.isPressedShowSearch ? (
						<div className="SearchMobile">
							<Search />
						</div>
					) : null
				}
			</>
		);
}


export default SearchFormMobile;
