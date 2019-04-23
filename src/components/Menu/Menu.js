import React, { Component } from 'react'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set(tempItems); //single instance of categories
    let categories = Array.from(tempCategories);
    categories = ['all', ...categories  ]; //add 'all' category
    return categories;
}

export default class Menu extends Component {
  
        state = {
            items: this.props.items.edges, //query
            coffeeItems: this.props.items.edges, //render
            categories: getCategories(this.props.items.edges)
        }

    handleItems = category => {
        let tempItems = [...this.state.items];
        if(category === "all"){
            // console.log(category);
            this.setState({
                coffeeItems:tempItems
            })
        }   
        else {
            // console.log(category);
            let items = tempItems.filter(({node}) => node.category === category);
            this.setState( {
                 coffeeItems:items
            })
        }
    }
    render() {
        // console.log(this.state.categories);
        if (this.state.items.length > 0) {
            return (
                <section className="products">
                    <div className="container">
                    <div className="products__menu u-margin-bottom-big">
                                

                        {/* categories */}
                        <div className="row u-margin-bottom-small u-margin-top-big">
                            <div className="col-10 u-center-text">
                                {this.state.categories.map((category, index)=>{
                                    return (
                                        <button 
                                            type="button" 
                                            key={index} 
                                            className="btn btn--yellow btn--animated" 
                                            onClick={() => {this.handleItems(category)}}>
                                                {category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* items */}
                        <div className="row">
                            {this.state.coffeeItems.map(({ node }) => {
                                return (
                                    <div key={node.id} className="col-10 col-sm-4">
                                        <div class="card">
                                            <Img fluid={node.image.fluid} class="img__products"/>
                                            <div class="products__text">
                                                <p class="title--menu">{node.title}</p>
                                                <p class="paragraph paragraph--white"> {node.description.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                    
                </section>
            )
        }
        else {
            return (
                 <section className="products">
                    <div className="container">
                        <div className="products__menu">
                            <div className="row u-margin-bottom-big">
                                <div className="col-10 u-center-text">
                                    <h5>No items to display</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
