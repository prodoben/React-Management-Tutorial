import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
    {
        'id': 1,
        'image': 'http://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday': '910208',
        'gender': 'male',
        'job': 'student'
    }, {
        'id': 2,
        'image': 'http://placeimg.com/64/64/2',
        'name': '화이자',
        'birthday': '910408',
        'gender': 'male',
        'job': '호떡장사꾼'
    }, {
        'id': 3,
        'image': 'http://placeimg.com/64/64/3',
        'name': '모더나',
        'birthday': '910708',
        'gender': 'female',
        'job': '코로나팔이'
    }
]

class App extends Component {
    render() {
        return (
            <div>
                {
                    customers.map(c => {
                        return <Customer
                        key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}/>
                    })
                }
            </div>
        );
    }
}

export default App;
