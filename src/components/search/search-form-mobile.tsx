import React from 'react';


import Search from './search-form';


// importing searchForm images
import search from '../../static/images/search.svg';

function openSearch() {
	var search = (document.getElementById("searchmobile") as HTMLInputElement);
	search.style.right = (search.style.right === '-400px') ? '20px' : '-400px';
}

function searchFormMobile() {
	return(
		<div className="span margin-right-10">
			<img
				alt=""
				src={search}
				className="icon"
				onClick={openSearch}
			/>
			<div className="search-form-slide" id="searchmobile">
				<Search />
			</div>
		</div>
    );
}


export default searchFormMobile;
