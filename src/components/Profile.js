import { Component } from "react";

class Profile extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name : 'What',
      location : 'where'
    }
  }
  async componentDidMount(){
    const url = await fetch('https://api.github.com/users/Codex-as')
    const data = await url.json();
    console.log(data);
    this.setState({
      name : data.name,
      location: data.location
    })
  }
  render(){
    console.log('render')
    return (
      <>
      <h2>hello</h2>
           {/* <UserContext.Consumer>
                    {
                        ({user})=>(
                            <h1>{user.name} : {user.email}</h1>
                        )
                    }
                </UserContext.Consumer> */}
                <h1>{this.state.name}</h1>
                <h1>{this.state.location}</h1>
      </>
    )
  }
}
export default Profile;