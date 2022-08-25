const e=React.createElement;

class Button extends React.Component {

conscructor(props) {
//super(props);
this.state={liked:false};

}

render(){
if(this.state.liked)
{
return "you likes this.";
}

return e(
    'button',
{onClick: ()=> this.setState({liked: true})},
'Like'
);
}
}
const domContainer= document.querySelector("button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Button));