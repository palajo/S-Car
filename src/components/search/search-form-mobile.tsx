import React from 'react';


import Search from './search-form';

import '../../styles/search/search-form-mobile.scss';


function searchFormMobile() {
	return(
		<div className="search-form-slide d-lg-none" id="searchmobile">
			<Search />
		</div>
    );
}


export default searchFormMobile;
