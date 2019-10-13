beforeEach(() => {
    this.state = {
        accountinfo: {
            accountID: '123456',
            password : 'admin',
            type : 'Wholesale',
            name : 'Basco',
            orderList : [
            {
                handOverMethod : 'Shipping',
                pickupLocation : 'NONE',
                shoopingCartElement : [{tree:{id:1, productName : 'Lemon Tree', drain : 'Fast', sun : 'Sunny', maintain : 'Low', height : 2, rate : 'Fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree', filterRemove:false},quantity:18, size:'Large',price: 999.99},
                    {tree:{id:9, productName : 'Hardwood', drain : 'Any', sun : 'Shade', maintain : 'High', height : 7, rate : 'Medium', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood', filterRemove:false},quantity:3, size:'Medium',price: 633.99}],
                pickuper: 'Dalton',
                pickupPhone: 111111111,
                pickupEmail: 'dalton123',
                totalPrice: 999.99
            }],
            email : '123@autuni.ac.nz',
            shoppingCart : [{tree:{id:1, productName : 'Lemon Tree', drain : 'Fast', sun : 'Sunny', maintain : 'Low', height : 2, rate : 'Fast', price: 18.99, img: 'lemon_tree.jpg', type: 'Fruit Tree', filterRemove:false},quantity:8, size:'Large',price: 999.99},
            {tree:{id:9, productName : 'Hardwood', drain : 'Any', sun : 'Shade', maintain : 'High', height : 7, rate : 'Medium', price: 84.59, img: 'hardwood.jpg', type: 'Hardwood', filterRemove:false},quantity:3, size:'Medium',price: 633.99}]},

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
});

afterEach(() => {
    this.state = null;
})

describe("Addition", () => {
    it("checkCurrentCartTrees", () => {
        let treeQuantity = 0;

        this.state.accountinfo.shoppingCart.map((tree) => {
            treeQuantity += tree.quantity
        })

        expect(treeQuantity).toBe(11);
    });

    it("testVaildVIP", () =>{
        let treeQuantity = 0;

        this.state.accountinfo.orderList.map((orders) => {
            orders.shoopingCartElement.map((tree) => {
                treeQuantity += tree.quantity
            })
        })

        expect(treeQuantity).toBe(21);
    })

    it("searchFeatureTest", () => {

        const searchKey = 'lemon'

        const searchTreeList = [];

        if(searchKey !== ''){

            for(var num = 0; num < this.state.treeList.length; num++) {

                if(this.state.treeList[num].productName.toLowerCase().includes(searchKey)){
                    searchTreeList.push(this.state.treeList[num])
                }

            }
        }

        expect(searchTreeList[0].productName).toBe('Lemon Tree');
    })

    it("noSearchResult", () => {

        const searchKey = '111'

        const searchTreeList = [];

        if(searchKey !== ''){

            for(var num = 0; num < this.state.treeList.length; num++) {

                if(this.state.treeList[num].productName.toLowerCase().includes(searchKey)){
                    searchTreeList.push(this.state.treeList[num])
                }

            }
        }

        expect(searchTreeList.length).toBe(0);
    })


});




