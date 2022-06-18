import axios from 'axios'
import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            post: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then( response =>{
            if(response.status === 200){
                this.setState(() =>{
                    return{
                        post: response.data
                    }
                })
            } else{
                // something here
            }
        }).catch((e) =>{
            this.setState(() =>{
                return{
                    error: e.message
                }
            })
            console.log(e)
        })
    }

  render() {
    return (
      <Layout>
        <section className='bg-sky-600 py-80 w-full'>
            <div className='text-center'>
                <h1 className='text-4xl text-white capitalize'>our blog post</h1>
            </div>
        </section>

        <section className='py-16'>
            <div className='sm:container mx-auto'>

                {this.state.error ? this.state.error : null}

                {this.state.post.map(post =>{
                    return(
                        <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className='w-full block px-4 py-4 bg-gray-100 rounded my-4 text-center'
                        > {post.title} </Link>
                    )
                })}
            </div>
        </section>
      </Layout>
    )
  }
}
