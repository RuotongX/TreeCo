const defaultState = {

    SunFilter : 'Any',
    SoilFilter : 'Any',
    MaintenanceFilter : 'Any',
    MaxHeightFilter : 'Any',
    GrowthFilter : 'Any',
    treeFilter : 'Any',
    showDrawer : false,
    searchContent : '',
    priceFilter : [0,100],
    treeList : [{id:1, productName : 'Lemon Tree', drain : 'Fast', sun : 'Sunny', maintain : 'Low', height : 2, rate : 'Fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree', filterRemove:false},
        {id:2, productName : 'Apple Tree', drain : 'Fast', sun : 'Any', maintain : 'Medium', height : 5, rate : 'Fast', price: 23.99, img: 'apple_tree.jpg', type: 'Fruit Tree', filterRemove:false},
        {id:3, productName : 'Pear Tree', drain : 'Medium', sun : 'Sunny', maintain : 'High', height : 5, rate : 'Slow', price: 42.99, img: 'pear_tree.jpg', type: 'Fruit Tree', filterRemove:false},
        {id:4, productName : 'Hedge', drain : 'Slow', sun : 'Any', maintain : 'Low', height : 3, rate : 'Slow', price: 17.87, img: 'henge_tree.jpg', type: 'Hedge', filterRemove:false},
        {id:5, productName : 'Evergreen', drain : 'Any', sun : 'Medium', maintain : 'Low', height : 18, rate : 'Fast', price: 42.99, img: 'evergreen.jpg', type: 'Evergreen', filterRemove:false},
        {id:6, productName : 'Puriri', drain : 'Slow', sun : 'Any', maintain : 'Low', height : 20, rate : 'Fast', price: 69.99, img: 'nz_native_trees.jpg', type: 'NZ Native', filterRemove:false},
        {id:7, productName : 'Gum Tree', drain : 'Slow', sun : 'Shade', maintain : 'Low', height : 15, rate : 'Fast', price: 32.99, img: 'gum_tree.jpg', type: 'Gum Tree', filterRemove:false},
        {id:8, productName : 'Palm Tree', drain : 'Medium', sun : 'Shade', maintain : 'Medium', height : 30, rate : 'Slow', price: 22.99, img: 'palm_tree.jpg', type: 'Palm Tree', filterRemove:false},
        {id:9, productName : 'Hardwood', drain : 'Any', sun : 'Shade', maintain : 'High', height : 7, rate : 'Medium', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood', filterRemove:false}]
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
    } else if (action.type === "SearchCancelAction" || action.type === "resetAction"){

        const newState = JSON.parse(JSON.stringify(defaultState))

        return newState

    } else if (action.type === "DrawerChange"){
        const newState = JSON.parse(JSON.stringify(state))

        newState.showDrawer = !newState.showDrawer

        return newState

    } else if (action.type === "SoilChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.SoilFilter = action.value

        return newState
    } else if (action.type === "SunChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.SunFilter = action.value

        return newState
    } else if (action.type === "MainChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.MaintenanceFilter = action.value

        return newState
    } else if (action.type === "MaxChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.MaxHeightFilter = action.value

        return newState
    } else if (action.type === "GrowthChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.GrowthFilter = action.value

        return newState
    } else if (action.type === "treeChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.treeFilter = action.value

        return newState
    } else if (action.type === "PriceFilterChange"){

        const newState = JSON.parse(JSON.stringify(state))
        newState.priceFilter = action.value

        return newState
    } else if (action.type === "ApplyButtonClick"){

        const newState = JSON.parse(JSON.stringify(state))

        const filterTreeList = JSON.parse(JSON.stringify(defaultState.treeList))

        filterTreeList.map((tree) => {

            // SOIL CONDITION FILTER

            if(newState.SoilFilter !== 'Any'){
                if(tree.drain !== 'Any' && tree.drain !== newState.SoilFilter){
                    tree.filterRemove = true
                }
            }


            // SUN CONDITION FILTER

            if(newState.SunFilter !== 'Any'){
                if(tree.sun !== 'Any' && tree.sun !== newState.SunFilter){
                    tree.filterRemove = true
                }
            }

            // MAINTAIN CONDITION FILTER

            if(newState.MaintenanceFilter !== 'Any'){
                if(tree.maintain !== 'Any' && tree.maintain !== newState.MaintenanceFilter){
                    tree.filterRemove = true
                }
            }


            // Max Height CONDITION FILTER

            if(newState.MaxHeightFilter !== 'Any'){
                console.log("yes")
                if((newState.MaxHeightFilter === '<1m' && !tree.height <= 1)){
                    tree.filterRemove = true
                } else if ((newState.MaxHeightFilter === '1-2m' && !(tree.height > 1 && tree.height <= 2))){
                    tree.filterRemove = true
                } else if ((newState.MaxHeightFilter === '2-3m' && !(tree.height > 2 && tree.height <= 3))){
                    tree.filterRemove = true
                } else if ((newState.MaxHeightFilter === '>3m' && !tree.height > 3)){
                    console.log("3")
                    tree.filterRemove = true
                }
            }

            // GROWTH CONDITION FILTER

            if(newState.GrowthFilter !== 'Any'){
                if(tree.rate !== 'Any' && tree.rate !== newState.GrowthFilter){
                    tree.filterRemove = true
                }
            }


            // TYPE  FILTER

            if(newState.treeFilter !== 'Any'){
                if(tree.type !== 'Any' && tree.type !== newState.treeFilter){
                    tree.filterRemove = true
                }
            }

            // Price Range
            if(tree.price < newState.priceFilter[0] || tree.price > newState.priceFilter[1]){
                tree.filterRemove = true
            }

        })

        const filterAfterList = []

        filterTreeList.map((tree) => {
            if(tree.filterRemove == false){
                filterAfterList.push(tree)
            }
        })




        newState.treeList = filterAfterList

        return newState
    }



    return state;
}