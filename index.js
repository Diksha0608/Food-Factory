// import Search from './models/Search';
// import * as searchview from './views/searchview'
// import {elements} from './views/base';
 
// const state = {};
 
// const controlSearch = async() => {
//     // 1) Get query from view
//     const query = searchview.getInput();
    
 
//     if (query) {
//         // 2) New search object and add to state
//         state.search = new Search(query);
 
//         // 3) Prepare UI for results
 
//         // 4) Search for recipe
//         await state.search.getResult();
 
//         // 5) render result on ui
        
//         searchview.renderResults(state.search.result);
//         console.log(state.search.result);
//     }
// } 
 
// elements.searchForm.addEventListener('submit',e => {
//     e.preventDefault();
//     controlSearch();
// })
