import React from 'react';
import MovieVignet from './MovieVignet'
import classNames from 'classnames/bind';
import styles from '../css/components/movieList';

const cx = classNames.bind(styles);

function HasResult(props){
    if (!props || !props.list || !props.list.movies)
    {
        return (<p> No movies </p>)
    }
    return (
        <div> {Object.keys(props.list.movies).map(function(key){
            return <MovieVignet movie={props.list.movies[key]}/>
        })}
        </div>
    )
}

class ResultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {result:this.props.result}
    }
    render(){
        const result = this.props.result
        return(<div className={cx('movieList')}>
            <HasResult list={result}/>
            </div>
    )
    }
}
export default ResultList;
