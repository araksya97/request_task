import React from 'react';
import styles from './request.module.css';
// import {requests} from './requests';
export default class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.requests = this.requests.bind(this)
    }

    componentDidMount() {
        this.requests('http://192.168.0.108:3001/api/v1/social-media/juniors/campaigns')
    }

    // requests(url) {
    //     return fetch(url)
    //         .then((response) => response.json())
    //         .then(data => this.setState({
    //             data: data
    //     }));
    // }
    async requests(url) {
        let res = await fetch(url)
        res.json()
        .then(data => this.setState({
            data: data
        }));

    }
    removeData = (dataId) => {
        const datas = this.state.data.filter(data => data.id !== dataId);
        this.setState({
            data: datas,
        });
    };
    render() {
        const groupData = this.state.data.map((data) => {
            return (
                <div key={data.id} className={styles.dataStyle}>
                    <span className={styles.spanStyle}>{data.id} </span>
                    <span className={styles.spanStyle}>{data.name}</span>
                    <span className={styles.spanStyle}>{data.userId} </span>
                    <span className={styles.spanStyle}>{data.status}</span>
                    <button 
                        className={styles.buttonStyle}
                        onClick={()=> this.removeData(data.id)}
                    >Delete</button>
                </div>

            )
        });
        return (
            <>
                <div className={styles.campStyle}> {this.state.data.length} Campaigns</div>
                {this.state.data.length > 0 ? groupData : <div>NO DATA</div>}
            </>
        );
    }
}