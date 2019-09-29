import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import {NavBar} from "antd-mobile";
import {Form, Input, Tooltip, Icon, Select, Button, AutoComplete,Modal,Result} from 'antd';
import './PurchaseProcessing.css';


const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

// function countryOnchange(value){
//     console.log('selected ${value}');
// }

// eslint-disable-next-line no-unused-vars
class PurchaseProcessing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            visible:false,
            submit:false,
        };
    }

    showModal = () =>{
        if(this.props.form.getFieldValue('Name') !== undefined && this.props.form.getFieldValue('email') !== undefined &&
            this.props.form.getFieldValue('phone') !== undefined &&this.props.form.getFieldValue('country') !== undefined &&
            this.props.form.getFieldValue('Address') !== undefined) {
            this.setState({
                visible: true,
            });
        }
    };

    handleEmailSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleEmailChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['@gmail.com', '@hotmail.com', '@mail.yahoo.com', '@outlook.com'].map(domain => `${value}${domain}`);
        }
        this.setState({autoCompleteResult});
    };
    handleOk= e =>{

            this.setState({
                visible:false,
            });

    };
    getFormItem = () =>{
        return 5;
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;


        const formItemLayout = {
            labelCol: {
                xs: {span: 22},
                sm: {span: 7},
            },
            wrapperCol: {
                xs: {span: 22},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 12,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '21',
        })(
            <Select style={{width: 70}}>
                <Option value="21">+21</Option>
                <Option value="27">+27</Option>
            </Select>,
        );


        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Fragment>
                <div>
                    {/*product list navigation bar*/}
                    <NavBar mode="dark"
                            className={'NavBar'}
                            leftContent={<Link to="/"><Icon type="left" className={'returnButton'}/></Link>}
                            rightContent={[]}
                    >
                        Purchasing Details
                    </NavBar>
                </div>

                <Form {...formItemLayout} onSubmit={this.handleEmailSubmit}
                      style={{textAlign: 'center', margin: '5% 5% 0 5%'}}>
                    <Form.Item
                        label={
                            <span>
                                Name
                            </span>
                        }
                    >
                        {getFieldDecorator('Name', {
                            rules: [{required: true, message: 'Please input your name!', whitespace: true}],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<AutoComplete
                            dataSource={websiteOptions}
                            onChange={this.handleEmailChange}
                            placeholder="Email address"
                        >
                            <Input/>
                        </AutoComplete>,)}
                    </Form.Item>

                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                    </Form.Item>


                    <Form.Item label="Country">
                        {getFieldDecorator('country', {
                            rules: [{required: true, message: 'Please input your receiving country!'}],
                        })(<Select
                                showSearch
                                placeholder="Select your receiving country"
                                optionFilterProp="children"
                                // onChange={onChange}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // countryOnchange = {countryOnchange}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="afghanistan">Afghanistan</Option>
                                <Option value="albania">Albania</Option>
                                <Option value="algeria">Algeria</Option>
                                <Option value="andorra">Andorra</Option>
                                <Option value="angola">Angola</Option>
                                <Option value="antiguaandbarbuda">Antigua and Barbuda</Option>
                                <Option value="argentina">Argentina</Option>
                                <Option value="armenia">Armenia</Option>
                                <Option value="australia">Australia</Option>
                                <Option value="austria">Austria</Option>
                                <Option value="austrianempire">Austrian Empire</Option>
                                <Option value="azerbaijan">Azerbaijan</Option>
                                <Option value="baden*">Baden*</Option>
                                <Option value="bahrain">Bahrain</Option>
                                <Option value="bangladesh">Bangladesh</Option>
                                <Option value="barbados">Barbados</Option>
                                <Option value="bavaria*">Bavaria*</Option>
                                <Option value="belarus">Belarus</Option>
                                <Option value="belgium">Belgium</Option>
                                <Option value="belize">Belize</Option>
                                <Option value="benin(dahomey)">Benin (Dahomey)</Option>
                                <Option value="bolivia">Bolivia</Option>
                                <Option value="bosniaandherzegovina">Bosnia and Herzegovina</Option>
                                <Option value="botswana">Botswana</Option>
                                <Option value="brazil">Brazil</Option>
                                <Option value="brunei">Brunei</Option>
                                <Option value="brunswickandlüneburg">Brunswick and Lüneburg</Option>
                                <Option value="bulgaria">Bulgaria</Option>
                                <Option value="burkinafaso(uppervolta)">Burkina Faso (Upper Volta)</Option>
                                <Option value="burma">Burma</Option>
                                <Option value="burundi">Burundi</Option>
                                <Option value="caboverde">Cabo Verde</Option>
                                <Option value="cambodia">Cambodia</Option>
                                <Option value="cameroon">Cameroon</Option>
                                <Option value="canada">Canada</Option>
                                <Option value="centralafricanrepublic">Central African Republic</Option>
                                <Option value="centralamericanfederation*">Central American Federation*</Option>
                                <Option value="chad">Chad</Option>
                                <Option value="chile">Chile</Option>
                                <Option value="china">China</Option>
                                <Option value="colombia">Colombia</Option>
                                <Option value="comoros">Comoros</Option>
                                <Option value="costarica">Costa Rica</Option>
                                <Option value="coted’ivoire(ivorycoast)">Cote d’Ivoire (Ivory Coast)</Option>
                                <Option value="croatia">Croatia</Option>
                                <Option value="cuba">Cuba</Option>
                                <Option value="cyprus">Cyprus</Option>
                                <Option value="czechia">Czechia</Option>
                                <Option value="czechoslovakia">Czechoslovakia</Option>
                                <Option value="democraticrepublicofthecongo">Democratic Republic of the Congo</Option>
                                <Option value="denmark">Denmark</Option>
                                <Option value="djibouti">Djibouti</Option>
                                <Option value="dominica">Dominica</Option>
                                <Option value="dominicanrepublic">Dominican Republic</Option>
                                <Option value="eastgermany(germandemocraticrepublic)">East Germany (German Democratic
                                    Republic)</Option>
                                <Option value="ecuador">Ecuador</Option>
                                <Option value="egypt">Egypt</Option>
                                <Option value="elsalvador">El Salvador</Option>
                                <Option value="equatorialguinea">Equatorial Guinea</Option>
                                <Option value="eritrea">Eritrea</Option>
                                <Option value="estonia">Estonia</Option>
                                <Option value="eswatini">Eswatini</Option>
                                <Option value="ethiopia">Ethiopia</Option>
                                <Option value="federalgovernmentofgermany(1848-49)*">Federal Government of Germany
                                    (1848-49)*</Option>
                                <Option value="fiji">Fiji</Option>
                                <Option value="finland">Finland</Option>
                                <Option value="france">France</Option>
                                <Option value="gabon">Gabon</Option>
                                <Option value="georgia">Georgia</Option>
                                <Option value="germany">Germany</Option>
                                <Option value="ghana">Ghana</Option>
                                <Option value="greece">Greece</Option>
                                <Option value="grenada">Grenada</Option>
                                <Option value="guatemala">Guatemala</Option>
                                <Option value="guinea">Guinea</Option>
                                <Option value="guinea-bissau">Guinea-Bissau</Option>
                                <Option value="guyana">Guyana</Option>
                                <Option value="haiti">Haiti</Option>
                                <Option value="hanover*">Hanover*</Option>
                                <Option value="hanseaticrepublics*">Hanseatic Republics*</Option>
                                <Option value="hawaii*">Hawaii*</Option>
                                <Option value="hesse*">Hesse*</Option>
                                <Option value="holysee">Holy See</Option>
                                <Option value="honduras">Honduras</Option>
                                <Option value="hungary">Hungary</Option>
                                <Option value="iceland">Iceland</Option>
                                <Option value="india">India</Option>
                                <Option value="indonesia">Indonesia</Option>
                                <Option value="iran">Iran</Option>
                                <Option value="iraq">Iraq</Option>
                                <Option value="ireland">Ireland</Option>
                                <Option value="israel">Israel</Option>
                                <Option value="italy">Italy</Option>
                                <Option value="jamaica">Jamaica</Option>
                                <Option value="japan">Japan</Option>
                                <Option value="jordan">Jordan</Option>
                                <Option value="kazakhstan">Kazakhstan</Option>
                                <Option value="kenya">Kenya</Option>
                                <Option value="kingdomofserbia/yugoslavia*">Kingdom of Serbia/Yugoslavia*</Option>
                                <Option value="kiribati">Kiribati</Option>
                                <Option value="korea">Korea</Option>
                                <Option value="kosovo">Kosovo</Option>
                                <Option value="kuwait">Kuwait</Option>
                                <Option value="kyrgyzstan">Kyrgyzstan</Option>
                                <Option value="laos">Laos</Option>
                                <Option value="latvia">Latvia</Option>
                                <Option value="lebanon">Lebanon</Option>
                                <Option value="lesotho">Lesotho</Option>
                                <Option value="lewchew(loochoo)*">Lew Chew (Loochoo)*</Option>
                                <Option value="liberia">Liberia</Option>
                                <Option value="libya">Libya</Option>
                                <Option value="liechtenstein">Liechtenstein</Option>
                                <Option value="lithuania">Lithuania</Option>
                                <Option value="luxembourg">Luxembourg</Option>
                                <Option value="madagascar">Madagascar</Option>
                                <Option value="malawi">Malawi</Option>
                                <Option value="malaysia">Malaysia</Option>
                                <Option value="maldives">Maldives</Option>
                                <Option value="mali">Mali</Option>
                                <Option value="malta">Malta</Option>
                                <Option value="marshallislands">Marshall Islands</Option>
                                <Option value="mauritania">Mauritania</Option>
                                <Option value="mauritius">Mauritius</Option>
                                <Option value="mecklenburg-schwerin*">Mecklenburg-Schwerin*</Option>
                                <Option value="mecklenburg-strelitz*">Mecklenburg-Strelitz*</Option>
                                <Option value="mexico">Mexico</Option>
                                <Option value="micronesia">Micronesia</Option>
                                <Option value="moldova">Moldova</Option>
                                <Option value="monaco">Monaco</Option>
                                <Option value="mongolia">Mongolia</Option>
                                <Option value="montenegro">Montenegro</Option>
                                <Option value="morocco">Morocco</Option>
                                <Option value="mozambique">Mozambique</Option>
                                <Option value="namibia">Namibia</Option>
                                <Option value="nassau*">Nassau*</Option>
                                <Option value="nauru">Nauru</Option>
                                <Option value="nepal">Nepal</Option>
                                <Option value="newzealand">New Zealand</Option>
                                <Option value="nicaragua">Nicaragua</Option>
                                <Option value="niger">Niger</Option>
                                <Option value="nigeria">Nigeria</Option>
                                <Option value="northgermanconfederation*">North German Confederation*</Option>
                                <Option value="northgermanunion*">North German Union*</Option>
                                <Option value="northmacedonia">North Macedonia</Option>
                                <Option value="norway">Norway</Option>
                                <Option value="oldenburg*">Oldenburg*</Option>
                                <Option value="oman">Oman</Option>
                                <Option value="orangefreestate*">Orange Free State*</Option>
                                <Option value="pakistan">Pakistan</Option>
                                <Option value="palau">Palau</Option>
                                <Option value="panama">Panama</Option>
                                <Option value="papalstates*">Papal States*</Option>
                                <Option value="papuanewguinea">Papua New Guinea</Option>
                                <Option value="paraguay">Paraguay</Option>
                                <Option value="peru">Peru</Option>
                                <Option value="philippines">Philippines</Option>
                                <Option value="piedmont-sardinia*">Piedmont-Sardinia*</Option>
                                <Option value="poland">Poland</Option>
                                <Option value="portugal">Portugal</Option>
                                <Option value="qatar">Qatar</Option>
                                <Option value="republicofgenoa*">Republic of Genoa*</Option>
                                <Option value="republicofkorea(southkorea)">Republic of Korea (South Korea)</Option>
                                <Option value="republicofthecongo">Republic of the Congo</Option>
                                <Option value="romania">Romania</Option>
                                <Option value="russia">Russia</Option>
                                <Option value="rwanda">Rwanda</Option>
                                <Option value="saintkittsandnevis">Saint Kitts and Nevis</Option>
                                <Option value="saintlucia">Saint Lucia</Option>
                                <Option value="saintvincentandthegrenadines">Saint Vincent and the Grenadines</Option>
                                <Option value="samoa">Samoa</Option>
                                <Option value="sanmarino">San Marino</Option>
                                <Option value="saotomeandprincipe">Sao Tome and Principe</Option>
                                <Option value="saudiarabia">Saudi Arabia</Option>
                                <Option value="schaumburg-lippe*">Schaumburg-Lippe*</Option>
                                <Option value="senegal">Senegal</Option>
                                <Option value="serbia">Serbia</Option>
                                <Option value="seychelles">Seychelles</Option>
                                <Option value="sierraleone">Sierra Leone</Option>
                                <Option value="singapore">Singapore</Option>
                                <Option value="slovakia">Slovakia</Option>
                                <Option value="slovenia">Slovenia</Option>
                                <Option value="somalia">Somalia</Option>
                                <Option value="southafrica">South Africa</Option>
                                <Option value="southsudan">South Sudan</Option>
                                <Option value="spain">Spain</Option>
                                <Option value="srilanka">Sri Lanka</Option>
                                <Option value="sudan">Sudan</Option>
                                <Option value="suriname">Suriname</Option>
                                <Option value="sweden">Sweden</Option>
                                <Option value="switzerland">Switzerland</Option>
                                <Option value="syria">Syria</Option>
                                <Option value="tajikistan">Tajikistan</Option>
                                <Option value="tanzania">Tanzania</Option>
                                <Option value="texas*">Texas*</Option>
                                <Option value="thailand">Thailand</Option>
                                <Option value="thebahamas">The Bahamas</Option>
                                <Option value="thecaymanislands">The Cayman Islands</Option>
                                <Option value="thecongofreestate">The Congo Free State</Option>
                                <Option value="theduchyofparma*">The Duchy of Parma*</Option>
                                <Option value="thegambia">The Gambia</Option>
                                <Option value="thegrandduchyoftuscany*">The Grand Duchy of Tuscany*</Option>
                                <Option value="thenetherlands">The Netherlands</Option>
                                <Option value="thesolomonislands">The Solomon Islands</Option>
                                <Option value="theunitedarabemirates">The United Arab Emirates</Option>
                                <Option value="theunitedkingdom">The United Kingdom</Option>
                                <Option value="timor-leste">Timor-Leste</Option>
                                <Option value="togo">Togo</Option>
                                <Option value="tonga">Tonga</Option>
                                <Option value="trinidadandtobago">Trinidad and Tobago</Option>
                                <Option value="tunisia">Tunisia</Option>
                                <Option value="turkey">Turkey</Option>
                                <Option value="turkmenistan">Turkmenistan</Option>
                                <Option value="tuvalu">Tuvalu</Option>
                                <Option value="twosicilies*">Two Sicilies*</Option>
                                <Option value="uganda">Uganda</Option>
                                <Option value="ukraine">Ukraine</Option>
                                <Option value="unionofsovietsocialistrepublics*">Union of Soviet Socialist
                                    Republics*</Option>
                                <Option value="uruguay">Uruguay</Option>
                                <Option value="uzbekistan">Uzbekistan</Option>
                                <Option value="vanuatu">Vanuatu</Option>
                                <Option value="venezuela">Venezuela</Option>
                                <Option value="vietnam">Vietnam</Option>
                                <Option value="württemberg*">Württemberg*</Option>
                                <Option value="yemen">Yemen</Option>
                                <Option value="zambia">Zambia</Option>
                                <Option value="zimbabwe">Zimbabwe</Option>
                            </Select>
                        )}
                    </Form.Item>


                    <Form.Item
                        label={
                            <span>
                                Address
                            </span>
                        }
                    >
                        {getFieldDecorator('Address', {
                            rules: [{required: true, message: 'Please input your address!', whitespace: true}],
                        })(<Input/>)}
                    </Form.Item>

                    {/*<Form.Item {...tailFormItemLayout} style={{textAlign: 'center', marginRight: '3%'}}>*/}
                    {/*    {getFieldDecorator('Saving', {*/}
                    {/*        valuePropName: 'checked',*/}
                    {/*    })(*/}
                    {/*        <Checkbox>*/}
                    {/*            Save this details*/}
                    {/*        </Checkbox>,*/}
                    {/*    )}*/}
                    {/*</Form.Item>*/}
                    <Form.Item {...tailFormItemLayout} style={{textAlign: 'center', marginRight: '3%'}}>
                        <Button type="primary" htmlType="submit" onClick={this.showModal} style = {{backgroundColor:'#1C1C1C',fontSize:30,blockSize:60,marginTop:30}}>
                            Submit
                        </Button>
                        <Modal title="Successed"
                        visible = {this.state.visible}
                        onOk={this.handleOk}
                               footer={[

                                   <Button key="submit" type="primary" onClick={this.handleOk}>
                                       <Link to="/">Ok</Link>

                                   </Button>,
                               ]}>
                            <Result
                                status="success"
                                title="Successfully Purchased Your tree!"
                                subTitle="You can check your personal purchase on your profile, you will jump to home page now."

                            />

                        </Modal>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default Form.create()(PurchaseProcessing);