import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header'
import Content from '../components/Content'
import ContentHeader from '../components/ContentHeader'
import List from '../components/List'
import ListItem from '../components/ListItem'
import AddItem from '../components/AddItem'
import Loading from '../components/Loading'
import {requestAPI} from '../services/util'
import _ from 'lodash'

const options = [
  { value: {id:'USD',name:'United State Dollar'}, label: 'USD' },
  { value: {id:'CAD',name:'Canada Dollar'}, label: 'CAD' },
  { value: {id:'IDR',name:'Indonesia Rupiah'}, label: 'IDR' },
  { value: {id:'GBP',name:'Great Britain Pound'}, label: 'GBP' },
  { value: {id:'CHF',name:'Swiss Franc'}, label: 'CHF' },
  { value: {id:'SGD',name:'Singapore Dollar'}, label: 'SGD' },
  { value: {id:'INR',name:'India Rupee'}, label: 'INR' },
  { value: {id:'MYR',name:'Malaysia Ringgit'}, label: 'MYR' },
  { value: {id:'JPY',name:'Japan Yen'}, label: 'JPY' },
  { value: {id:'KRW',name:'South Korean Won'}, label: 'KRW' },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latestCurr : {},
      isLoaded: false,
      dollarValue: 1,
      currList: [],
      selectedValue: {},
      warningText: ''
    }
  }

  componentDidMount(){
    //get newest currency
    let that = this
    requestAPI.get('/api/latest')
    .then(function(response){
      that.setState({latestCurr: response.data, isLoaded: true})
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  //handle Select Item
  handleSelectAddItem = (e) => {
    this.setState({
      selectedValue: e.value
    })
  }

  //add new list item
  handleAddItemChange = () => {
    const {currList, selectedValue} = this.state
    if(typeof selectedValue.id !== 'undefined'){
      console.log(_.findIndex(currList,{id: selectedValue.id}))
      if(_.findIndex(currList,{id: selectedValue.id}) !== -1){
        this.setState({
          warningText: 'Cannot add duplicate currency !'
        })
      }else {
        this.setState(prevState => ({
          currList: [...prevState.currList, this.state.selectedValue],
          warningText: ''
        }))
      }
    }else {
      this.setState({
        warningText: 'Please select currency first !'
      })
    }
  }

  //set USD value
  handleChangeUSD = (e) => {
    this.setState({
      dollarValue: e.floatValue
    })
  }

  //delete list
  handleDeleteItem = (curr) => {
    const {currList} = this.state

    currList.splice(_.findIndex(currList,{id: curr}),1)
    this.setState({currList: currList})
  }

  //loop item list
  renderListItem = () => {
    const {latestCurr, currList, dollarValue} = this.state
    let ListItems = []

    currList.map( (item, index) => {
      let rate = latestCurr.rates[item.id] / latestCurr.rates["USD"]
      let currValue = 0
      if(dollarValue !== '')
        currValue = rate * dollarValue
      else
        currValue = 0

      ListItems.push(
        <ListItem key={index} code={item.id} value={currValue} name={item.name} rate={rate} onClick={() => this.handleDeleteItem(item.id)} />)
    })

    return ListItems
  }

  //warning validation
  renderWarningText = () => {
    const {warningText} = this.state

    if(warningText !== ''){
      return(
        <div>
          {warningText}
        </div>
      )
    }else {
      return(<div></div>)
    }
  }

  render() {
    if(this.state.isLoaded){
      return (
        <div className="App">
          <Header/>
          <Content>
            <ContentHeader 
              value={this.state.dollarValue} 
              onChange={this.handleChangeUSD}
            />
            <List>
              {this.renderListItem()}
            </List>
            {this.renderWarningText()}
            <AddItem
              options={options}
              onChange={this.handleSelectAddItem}
              onClick={this.handleAddItemChange}
            />
          </Content>
        </div>
      );
    }
    else{
      return (
        <Loading/>
      )
    }
  }
}

export default App;
