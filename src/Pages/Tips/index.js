import React, {Component, Fragment} from "react";
import store from "../Store/index.js";
import {Link} from "react-router-dom";
import {Icon, List, Avatar} from "antd";
import {NavBar, WingBlank, Card} from "antd-mobile";
import './Tips.css'


class Tips extends Component{
    constructor(props){
        super(props)

        this.handleStoreChange = this.handleStoreChange.bind(this)

        this.state = {
            treeList : store.getState().accountInformation.orderList
        }

        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <Fragment>
                <NavBar
                    mode = "dark"
                    className={"NaviBar"}
                    leftContent= {<Link to = "/Account"><Icon className = "returnButton" type="left" /></Link>}
                >
                    Tips
                </NavBar>

                <WingBlank size={"lg"}>
                    <Card className={"tips"}>

                        <List className={"tipList"}>
                            {
                                this.getUniqueArray().map((trees) =>(
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={require('../ProductImage/' + trees.tree.img)} size='large'/>}
                                            title={trees.tree.productName}
                                            description= {this.getDescription(trees.tree.productName)}
                                        />
                                    </List.Item>
                                ))
                            }
                        </List>

                    </Card>
                </WingBlank>
            </Fragment>
        );
    }

    getUniqueArray(){
        let list = []

        this.state.treeList.map((order) => (
            order.shoopingCartElement.map((trees) => (
                list.push(trees)
            ))
        ))


        var res = [];
        for (var i = 0, arrayLen = list.length; i < arrayLen; i++) {
            for (var j = 0, resLen = res.length; j < resLen; j++ ) {
                if (list[i].tree.productName === res[j].tree.productName) {
                    break;
                }
            }

            if (j === resLen) {
                res.push(list[i])
            }
        }
        return res;

    }


    getDescription(treeName){

        if(treeName === 'Lemon Tree'){
            return 'Water regularly, especially during flowering and fruiting seasons.\n' +
                'When spring and summer are drier, cover the roots with a plastic film to help keep soil moisture from evaporating.\n' +
                'Provide a regular supply of fertilizer and remember not to get too close to the sources, sprinkle one circle around the roots.\n' +
                'If the tree leaves are yellow, iron and magnesium are lacking in the soil. Go to the garden store and buy citrus fertilizer.\n' +
                'Control pest on our trees, such as putty or aphids, and go to the garden supply store for a particular pesticide.\n'
        } else if (treeName === 'Apple Tree'){
            return 'Keep the planting soil water and fertilizer reasonable, increase the fertilizer intensity during the fruiting period,\n' +
                'and increase the fertilizer intensity after the apple trees bear fruit,\n' +
                'to compensate for a large amount of nutrient loss caused by the result. \n' +
                'Next, apple tree wants to maintain long result time, want to nurse meticulously, \n' +
                'winter undertakes pruning job to the apple tree in time, maintain proper apple tree form appearance.\n' +
                'Meanwhile, we also need to do an excellent job in the apple tree pest control.\n'
        } else if (treeName === 'Pear Tree'){
            return 'The planting of a pear tree requires the oxygen concentration in soil air above 5%,\n' +
                'and the pear tree has strong adaptability to the PH value of soil. \n' +
                'The best time to plant pear trees is October to November each year. \n' +
                'After planting, pay attention to pruning in winter. During this period, \n' +
                'we should pay attention to the regular watering of pear trees. Fertilizing is generally the best in the autumn from the fruit harvest to the fallen leaves, \n' +
                'and we also need to control pests at any times\n'
        } else if (treeName === 'Hedge'){
            return 'It should be recommended to select locations of the hedge at least two meters away from the building, at least 0.5 meters away from the hedges. The distance from the site boundary to hedges of approximately 1.5 meters height should be at least 1 meters.\n' +
                '\n' +
                'For hedges, the soil type and lighting level of the selected site must meet the requirements. \n' +
                'The important thing is that soil moisture is moderate so that water doesn\'t get stuck in the roots. \n' +
                'Most plants used in hedges do not tolerate excessive moisture and develop mycosis rapidly in dense planting with high humidity\n'
        } else if (treeName === 'Evergreen'){
            return 'Evergreen trees need a sunny, well-ventilated, warm and humid environment, and evergreen trees are tolerant of drought.\n' +
                'We need to carry on watering according to the external circumstance of evergreen soil judgement, \n' +
                'watering frequency winter, spring wants less, summer, autumn wants more. \n' +
                'And the evergreen trees are not adapted to the environment of much fertilizer.\n'
        } else if (treeName === 'Puriri'){
            return 'Puriri could have a longer flowering and fruiting period, usually beginning in early winter and extending to mid-spring. Puriri trees grow up to 20m with a broad spreading crown. The thin bark is usually smooth and light brown, Puriri could be very flaky.\n' +
                'In terms of growth habit, Puriri trees are tolerant of cold and heat and have strong adaptability even to barren land, so they are easy to be planted.\n' +
                'Puriri also had a strong resistance to diseases and insects. Remarkably, Puriri was light-loving and flourished in the full sunshine\n' +
                'Therefore, when planting Puriri trees, we only need to pay attention to simple protective measures of watering and fertilizing.\n'
        } else if (treeName === 'Gum Tree'){
            return 'All eucalyptus trees need plenty of sunlight, \n' +
                'and they also adapt well to a variety of soils, from hot and dry to slightly moist,\n' +
                'as long as the area is well-drained. Depending on your location and climate, plant eucalyptus in the middle and late spring. \n' +
                'Be sure to water the trees before and after planting. \n' +
                'Dig holes slightly larger than the root ball and take care of the roots during planting because they don\'t like to be disturbed. \n' +
                'There is no need to spread roots when planting, \n' +
                'as this can damage sensitive roots. Backfill the area and gently tamp the soil to remove any air pockets.\n'
        } else if (treeName === 'Palm Tree'){
            return 'Palm care begins with the proper selection of species. \n' +
                'Choose a durable area in your area and place it in a well-lit and well-drained area. \n' +
                'There are a variety of palm trees to choose from, \n' +
                'but the maturity of the plant should also be considered. Some are towering plants, not suitable for many home landscape situations.\n' +
                '\n' +
                'After the palm tree has planted, it needs to be watered again until it is set up.\n' +
                'Don\'t let the soil completely dry out for the first few months, but don\'t let it get soaked, either, or you\'ll cause fungal problems\n' +
                'With little care of palm trees, these majestic plants will live in your landscape for a generation or longer, \n' +
                'providing shade, dimension and exotic beauty.\n'
        }

        return 'No Tips found'
    }


    handleStoreChange(){

        const newState = JSON.parse(JSON.stringify(this.state))

        if(store.getState().accountInformation){
            newState.historyOrder = store.getState().accountInformation.orderList
        }

        this.setState(newState)

    }
}

export default Tips;