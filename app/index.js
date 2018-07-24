const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

require('./index.css');


class Badge extends React.Component{
    render(){
        return(
            <div>
                <img
                    src={this.props.img}
                    alt='Always alt text'
                    style={{width:100, height:100}}
                    />
                <h1>Name: {this.props.name}</h1>
                <h3>username: {this.props.username}</h3>
                Hello react training!
            </div>
        )
    }
}

Badge.propTypes ={
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}
ReactDOM.render(

    <Badge
        name='Kristian Munter Simonsen'
        username='Mokkatroffen'
        img={'https://i.ytimg.com/vi/IVYHrMoBCtQ/maxresdefault.jpg'}
    />,
    document.getElementById('app')
);