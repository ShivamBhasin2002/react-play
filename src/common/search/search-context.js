
import React from 'react';

export const SearchContext = React.createContext({
  searchTerm: '',
  filterQuery: {
    level_id: '',
    tags: [],
    owner_user_id: '',
    language: ''
  }, 
  setSearchTerm: () => {},
  setFilterQuery: () => {}
});