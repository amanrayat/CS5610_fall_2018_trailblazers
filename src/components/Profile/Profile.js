import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import UserService from '../../services/UserService';
import Avatar from '@material-ui/core/Avatar';
import {FormControl} from 'react-bootstrap'
import '../../style.css'
import './profile.css'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser : '',
            expanded: null,
            isEditing : false,
            username : "Aman",
            password : "Aman",
            firstName : "Aman",
            lastName : "Rayat",
            email : "rayat.a@husky.neu.edu",
            phoneNo : 8574246016,
            image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg',
            followers : [{
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            },
                {
                    _id : 1,
                    username : "Aman",
                    password : "Aman",
                    firstName : "Aman",
                    lastName : "Rayat",
                    email : "rayat.a@husky.neu.edu",
                    phoneNo : 8574246016,
                    image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
                },
                {
                    _id : 1,
                    username : "Aman",
                    password : "Aman",
                    firstName : "Aman",
                    lastName : "Rayat",
                    email : "rayat.a@husky.neu.edu",
                    phoneNo : 8574246016,
                    image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
                },{
                    _id : 1,
                    username : "Aman",
                    password : "Aman",
                    firstName : "Aman",
                    lastName : "Rayat",
                    email : "rayat.a@husky.neu.edu",
                    phoneNo : 8574246016,
                    image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
                },{
                    _id : 1,
                    username : "Aman",
                    password : "Aman",
                    firstName : "Aman",
                    lastName : "Rayat",
                    email : "rayat.a@husky.neu.edu",
                    phoneNo : 8574246016,
                    image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
                },{
                    _id : 1,
                    username : "Aman",
                    password : "Aman",
                    firstName : "Aman",
                    lastName : "Rayat",
                    email : "rayat.a@husky.neu.edu",
                    phoneNo : 8574246016,
                    image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
                }],
            following : [{
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            },{
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            },{
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            },{
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            }]
        }
    }

    componentDidMount (){
        // UserService.profile().then(currUser=>{
        //     if(this.props.match.params.userId) {
        //         UserService.findUserById(this.props.match.params.userId).then(user=>{
        //             this.setState({
        //                 user : user,
        //                 currentUser : currUser.data})
        //         })
        //     }
        // });
    }

    saveResult = () =>{
        //Save to the database
        this.setState({isEditing : !this.state.isEditing});
    };

    editing = () => this.setState({isEditing : !this.state.isEditing});

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render(){
        console.log("the user id is  " , this.state)
        return(
            <div className={'row'}>
                <div className={'col-3 text-center left-panel'} style={{height : "100%"}}>
                    <div className={'card mt-5 left-panel'}>
                        {!this.state.isEditing ?
                            <div className={'mx-2'} style={{"width": "90%"}}>
                                <Avatar className={"rounded-circle card-img-top circle"}>
                                    {this.state.firstName.split("")[0]}
                                    {this.state.lastName.split("")[0]}
                                </Avatar>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {this.state.firstName} {this.state.lastName}
                                    </h5>
                                    <p className="card-text">User Name :
                                        {this.state.username}
                                    </p>
                                    <p className="card-text">Email Id :
                                        {this.state.email}
                                    </p>
                                    <p className="card-text">Phone Number :
                                        {this.state.phoneNo}
                                    </p>
                                    <button
                                        onClick={this.editing}
                                        className={'btn btn-primary'}>Edit</button>
                                </div>
                            </div> :
                            <div className={'mx-2'} style={{"width": "90%"}}>
                                <Avatar className={"rounded-circle card-img-top circle"}>
                                    {this.state.firstName.split("")[0]}
                                    {this.state.lastName.split("")[0]}
                                </Avatar>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">First Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.firstName}
                                            placeholder="First Name"
                                            onChange={(e)=>this.setState({firstName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Last Name</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.lastName}
                                            placeholder="Last Name"
                                            onChange={(e)=>this.setState({lastName : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Username</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.username}
                                            placeholder="Username"
                                            onChange={(e)=>this.setState({username : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Password</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.password}
                                            placeholder="Password"
                                            onChange={(e)=>this.setState({password : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Email Id</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.email}
                                            placeholder="Email Id"
                                            onChange={(e)=>this.setState({email : e.target.value})}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Phone No</span>
                                        </div>
                                        <FormControl
                                            type="text"
                                            value={this.state.phoneNo}
                                            placeholder="Phone Number"
                                            onChange={(e)=>this.setState({phoneNo : e.target.value})}
                                        />
                                    </div>
                                    <button
                                        onClick={this.saveResult}
                                        className={'btn btn-success'}>Save</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={'col-9 mt-5'}>
                    <div className={'row mx-2'}>
                        <div className={'col-6'}>
                            <h5 className={'mb-3 mx-3'}>Followers</h5>
                            <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                                <ExpansionPanelSummary expandIcon={">"}>
                                    {
                                        this.state.followers.slice(0, 3).map(follower=>{
                                            return(<div className={'mx-5 pic-size'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {
                                        this.state.followers.slice(3, this.state.followers.length).map(follower=>{
                                            return(<div className={'mx-5 pic-size-extended'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className={'col-6'}>
                            <h5 className={'mb-3 mx-3'}>Following</h5>
                            <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                                <ExpansionPanelSummary expandIcon={">"}>
                                    {
                                        this.state.following.slice(0, 3).map(follower=>{
                                            return(<div className={'mx-5 pic-size'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {
                                        this.state.following.slice(3, this.state.followers.length).map(follower=>{
                                            return(<div className={'mx-5 pic-size-extended'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>

                    <div className={'row mx-2 mt-5'}>
                        <div className={'col-6'}>
                            <h5 className={'mb-3 mx-3'}>Fav Beer</h5>
                            <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                <ExpansionPanelSummary expandIcon={">"}>
                                    {
                                        this.state.followers.slice(0, 3).map(follower=>{
                                            return(<div className={'mx-5 pic-size'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {
                                        this.state.followers.slice(3, this.state.followers.length).map(follower=>{
                                            return(<div className={'mx-5 pic-size-extended'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                        <div className={'col-6'}>
                            <h5 className={'mb-3 mx-3'}>Fav Brewery</h5>
                            <ExpansionPanel expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                                <ExpansionPanelSummary expandIcon={">"}>
                                    {
                                        this.state.following.slice(0, 3).map(follower=>{
                                            return(<div className={'mx-5 pic-size'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    {
                                        this.state.following.slice(3, this.state.followers.length).map(follower=>{
                                            return(<div className={'mx-5 pic-size-extended'}>
                                                <img className="rounded-circle card-img-top" src={follower.image} alt="Card image cap"/>
                                                <p className={'text-center'}>{follower.firstName}</p>
                                            </div>)
                                        })
                                    }
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

};