import React from 'react'
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import '../../style.css'

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            user : {
                _id : 1,
                username : "Aman",
                password : "Aman",
                firstName : "Aman",
                lastName : "Rayat",
                email : "rayat.a@husky.neu.edu",
                phoneNo : 8574246016,
                image : 'https://s3.amazonaws.com/plagiarismteam208/pic1.jpg'
            },
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
        // this.setState( {
        //     userId: this.props.match.params.userId,
        // })
    }
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
                        <div className={'mx-2'} style={{"width" : "90%"}}>
                            <img className="rounded-circle card-img-top" src={this.state.user.image} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.user.firstName} {this.state.user.lastName}</h5>
                                <p className="card-text">User Name : {this.state.user.username}</p>
                                <p className="card-text">Email Id : {this.state.user.email}</p>
                                <p className="card-text">Phone Number : {this.state.user.phoneNo}</p>
                            </div>
                        </div>
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

}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};