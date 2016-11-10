import React from 'react'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import './Board.css'
import Note from './Note'
import Header from './Header'
import Footer from './Footer'

 var Board = React.createClass({
            propTypes: {
                count: function(props, propName) {
                    if(typeof props[propName] !== "number") {
                        return new Error("the count must be a number")
                    } 

                    if(props[propName] > 100) {
                        return new Error('Creating ' + props[propName] + ' notes is ridiculous')
                    }
                }
            },
            getInitialState() {
                return {
                    notes: []
                }
            },

             

            componentWillMount() {
                if (this.props.count) {
                    //console.log('the count is ' + this.props.count);
                    var url = `http://primary-care.net/json/muffy.php`
                    fetch(url)
                        .then(results => results.json())
                        .then(arr => arr.map(
                            el => this.add(el)
                            ))        
                }
            },
            nextId() {
                this.uniqueId = this.uniqueId || 0
                return this.uniqueId++
            },
            add(obj) {
                var notes = [
                    ...this.state.notes,
                    {
                        id: this.nextId(),
                        note: obj.vendorNotes
                    }
                ]
                this.setState({notes})
            },
            update(newText, id) {
                var notes = this.state.notes.map(
                    note => (note.id !== id) ?
                       note : 
                        {
                            ...note, 
                            note: newText
                        }
                    )
                this.setState({notes})
            },
            remove(id) {
                var notes = this.state.notes.filter(note => note.id !== id)
                this.setState({notes})
            },
            eachNote(note) {
                return (<Note key={note.id}
                              id={note.id}
                              onChange={this.update}
                              onRemove={this.remove}>
                          {note.note}
                        </Note>)
            },
            render() {
                return (<div className='board'>
                            <Header></Header>
                                <div className="note-holder clearfix">
                                    {this.state.notes.map(this.eachNote)}
                                    <button onClick={() => this.add('New Note')}>+</button>
                                </div>
                           <Footer></Footer>
                        </div>
                        )
                
            }
        })
        


export default Board
