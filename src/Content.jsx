import React from 'react'
import AppActions from './Appaction';
import AppStore from './AppStore';
const data =[
    {
        id:1,
        name:'qw'
    },
    {
        id:2,
        name:'qws'
    },
    {
        id:3,
        name:'fv'
    }
]

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { select : '' };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id) {
        console.log(id)
        // if (document.getElementById('simpletext').value.length > 0 && this.state.articles.length < 10) {
        //     AppActions.submitArticle(document.getElementById('simpletext').value)
        //     document.getElementById('simpletext').value = ''
        // }
        AppActions.click(id)
        AppStore.addChangeListener('STORE_SUBMIT_ARTICLE', this.onSubmit);
        this.onSubmit()
    }
    componentDidMount() {
        AppStore.addChangeListener('STORE_SUBMIT_ARTICLE', this.onSubmit);
        console.log(this.state.select)
    }
    onSubmit() {
        this.listArticles()
   }
   listArticles()
    {
        this.setState({
           select : AppStore.getAll(),
        })
        console.log(AppStore.getAll())

    }

   componentWillUnmount() {
    AppStore.removeChangeListener('STORE_SUBMIT_ARTICLE', this.onChange)
}

    render() {
        var simpleContent =
            <div>
               {
                   data.map(item=>(
                      <>
                      <button style={this.state.select+''===item.id+''?{"color":"red"}:null} onClick={()=>this.handleClick(item.id)} >{item.name}</button>
                      <br/>
                      <br/>
                      </> 
                   ))
               }
            </div>

        return simpleContent;
    }

}

export default Content;