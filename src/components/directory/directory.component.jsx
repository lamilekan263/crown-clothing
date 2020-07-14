import React, {Component} from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sections : [{
                title : 'hats',
                imageUrl : 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500//i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title : 'jackets',
                imageUrl : 'https//https://images.pexels.com/photos/3971649/pexels-photo-3971649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title : 'sneakers',
                imageUrl : 'https//i.ibhttps://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500b.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title : 'womens',
                imageUrl : 'https//i.ibb.https://images.pexels.com/photos/3716754/pexels-photo-3716754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/GCCdy8t/womens.png',
                id: 4,
                size : 'large'
            },
            {
                title : 'mens',
                imageUrl : 'https://https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.pexels.com/photos/3882348/pexels-photo-3882348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id: 5,
                size : 'large'
            }
        ]
         }
    }
    render() { 
        return ( 
            <div className ="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size }) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size ={size} />
                ))}
            </div>
         );
    }
}
 
export default Directory;