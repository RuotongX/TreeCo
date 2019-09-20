const defaultState = {

    showDrawer : false,
    searchContent : '',
    treeList : [{id:1, productName : 'Lemon Tree', drain : 'fast', sun : 'sunny', maintain : 'low', height : 6, rate : 'fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree'},
        {id:2, productName : 'Apple Tree', drain : 'fast', sun : 'anything', maintain : 'med', height : 5, rate : 'fast', price: 23.99, img: 'apple_tree.jpg', type: 'Fruit Tree'},
        {id:3, productName : 'Pear Tree', drain : 'med', sun : 'sunny', maintain : 'high', height : 5, rate : 'slow', price: 42.99, img: 'pear_tree.jpg', type: 'Fruit Tree'},
        {id:4, productName : 'Hedge', drain : 'slow', sun : 'anything', maintain : 'low', height : 3, rate : 'slow', price: 17.87, img: 'henge_tree.jpg', type: 'Hedge'},
        {id:5, productName : 'Evergreen', drain : 'anything', sun : 'med', maintain : 'low', height : 18, rate : 'fast', price: 42.99, img: 'evergreen.jpg', type: 'Evergreen'},
        {id:6, productName : 'Puriri', drain : 'slow', sun : 'anything', maintain : 'low', height : 20, rate : 'fast', price: 69.99, img: 'nz_native_trees.jpg', type: 'NZ Native'},
        {id:7, productName : 'Gum Tree', drain : 'slow', sun : 'shade', maintain : 'low', height : 15, rate : 'fast', price: 32.99, img: 'gum_tree.jpg', type: 'Gum Tree'},
        {id:8, productName : 'Palm Tree', drain : 'med', sun : 'shade', maintain : 'med', height : 30, rate : 'slow', price: 22.99, img: 'palm_tree.jpg', type: 'Palm Tree'},
        {id:9, productName : 'Hardwood', drain : 'anything', sun : 'shade', maintain : 'high', height : 7, rate : 'med', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood'}]
}

export default (state = defaultState, action) => {

    if(action.type === "SearchBarValuechange") {
        const newState = JSON.parse(JSON.stringify(state))
        newState.searchContent = action.value;

        return newState

    } else if (action.type === "Search") {

        const newState = JSON.parse(JSON.stringify(state))

        if(action.value !== ''){

            const searchTreeList = [];

            for(var num = 0; num < defaultState.treeList.length; num++) {

                if(defaultState.treeList[num].productName.toLowerCase().includes(action.value.toLowerCase())){
                    searchTreeList.push(defaultState.treeList[num])

                }

            }

            newState.treeList = searchTreeList
            return newState

        } else {
                // this is means there is no keyword included inside.
                newState.treeList = defaultState.treeList
                return newState
            }
    } else if (action.type === "SearchCancelAction"){

        const newState = defaultState

        return newState

    } else if (action.type === "DrawerChange"){
        console.log("click")
        const newState = JSON.parse(JSON.stringify(state))

        newState.showDrawer = !newState.showDrawer

        return newState
    }


    return state;
}