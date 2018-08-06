import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './appBody.css';

class AppBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                photos: []
            }
        }
    }
    componentDidMount() {
       return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=u3qodkqNfMGJIn7CS1HdfOOaktFfIJJ5ZZLsHGhe')
        .then((res)=>{
            return res.json();
        })
        .then((data) => {
            this.setState({
                data: data
            });
        })
        .catch((err)=> {
            console.log('error:'+ err);
        })
    }
    render() {
        return (
            <div className="appBody">
            <Grid container spacing={24}>
             {this.state.data.photos.map((pic)=>{
                 return <Grid item xs={3} class="grid-item">
                         <img src={pic.img_src} key={pic.id} width="300" height="300"/>
                         <h3>{pic.camera.full_name}</h3>
                         <h3>{pic.rover.name}</h3>
                        </Grid>
                       
             })}
             </Grid>
            </div>
        );
    }
}

export default AppBody;