import React, {useState} from 'react'
import Navbar from "../Navbar";
import Footer from "../../Footer";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import Control from "./Control";
import Product from "./Product";

const categories=['Apperitizers','Ravioli','Soups','Salads','Rice','Pasta','Boats','Mixed sushi',
                'Nigiri','Special Nigiri','Vegetarian nigiri','Onigiri','Uramaki','Special uramaki','Hosomaki',
                    'Temaki','Gunkan','Futomaki','Chirashi','Tartare','Tataki']

const foods=[{
    name:'Shrimp Roll',
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
    cat:['Apperitizers'],
    price:25,
    image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

},
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Shrimp Roll',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers'],
        price:25,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Shrimp Roll',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers'],
        price:25,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Shrimp Roll',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers'],
        price:25,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Shrimp Roll',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers'],
        price:25,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Shrimp Roll',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers'],
        price:25,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Sake dom poke',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Salads'],
        price:4,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Ebi shu mai',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Rice','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
    {
        name:'Nigiri 1',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing',
        cat:['Apperitizers','Nigiri','Soups'],
        price:30,
        image:'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'

    },
]

function Delivery() {
    const [category,setCategory]=useState('Apperitizers')

    return(
        <div>
            <Navbar selected={'Delivery'}/>
            <section className='py-12 px-48 w-full'>
                <h1 className='text-center font-old text-3xl mb-4'>Our regular deals</h1>
                <p className='text-center text-sm text-gray-500 px-24 mb-8  '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget.
                </p>

                <div className='w-full h-72 mb-8 '>
                    <Carousel
                        additionalTransfrom={0}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="carousel-container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="carousel-item-padding-30-px"
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 3,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        <Card name={'Shrimp rolls'} image={'https://images.unsplash.com/photo-1569172131007-4954763443d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNocmltcCUyMHJvbGxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>

                        <Card name={'Sake dom poke'} image={'https://images.unsplash.com/photo-1542354255-839e272e3408?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>
                        <Card name={'Ebi shu mai'} image={'https://images.unsplash.com/photo-1561194673-7093aadc597d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmF2aW9saXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>
                        <Card name={'Shrimp rolls'} image={'https://images.unsplash.com/photo-1569172131007-4954763443d2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNocmltcCUyMHJvbGxzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>

                        <Card name={'Sake dom poke'} image={'https://images.unsplash.com/photo-1542354255-839e272e3408?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9rZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>
                        <Card name={'Ebi shu mai'} image={'https://images.unsplash.com/photo-1561194673-7093aadc597d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmF2aW9saXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60'}/>

                    </Carousel>
                </div>

                <div className=' w-full px-12'>

                    <div className='w-full  flex '>
                        <div className='w-3/4 mr-2 ml-2 mb-8'>
                            <input className='w-full p-2 font-weight-light text-gray-300 border border-gray-300 shadow-sm ' placeholder='Search'/>
                            <h1 className='font-weight-bolder text-black w-full p-2 text-2xl text-left font-old'>Free Delivery</h1>
                            <div className='bg-white text-left p-2 border border-gray-300 shadow-sm'>
                                <h1 className='text-left text-lg text-yellow-500 font-weight-bold font-old'>Attentin before ordering</h1>
                                <p className='text-gray-500 text-left font-weight-bold text-sm '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                                    Donec scelerisque sollicitudin enim eu venenatis.
                                </p>
                            </div>
                            <div className='flex p-2 flex-wrap bg-black my-2'>
                                {categories.map(item=>{
                                    return(
                                        <button className={`${category==item?'bg-yellow-400 text-white':'bg-white text-black'} rounded-pill py-2 px-2 m-2`} onClick={()=>setCategory(item)}>{item}</button>
                                    )
                                })}
                            </div>
                            <div className='flex flex-wrap w-full justify-content-center'>
                                {foods.map(item=>{
                                    if(item.cat.includes(category))
                                    {return(
                                        <Product image={item.image} price={item.price} name={item.name} desc={item.desc}/>
                                    )}
                                })}
                            </div>

                        </div>

                        <div className='w-1/4'>
                            <Control/>
                        </div>

                    </div>
                </div>


            </section>

            <Footer/>
        </div>

    )

}

export default Delivery
