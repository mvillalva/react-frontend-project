import React from 'react';
import {TweenMax, Power1, TimelineMax} from 'gsap'
import ReactDOM from 'react-dom/client';
import './Slider.scss';

const { Component, useEffect } = React

const items = [
  {
    id: 0,
    title: "Banana",
    imageUrl: "https://images.agoramedia.com/everydayhealth/gcms/All-About-Bananas-Nutrition-Facts-Health-Benefits-Recipes-and-More-RM-722x406.jpg",
    calories: 72,
    duration: 100,
    tags: ['Yellow','Potassium','Tropical'],
    ageRestriction: 12,
  }, 
  {
    id: 1, 
    title: "Mango",
    imageUrl: "https://i0.wp.com/bioplasticsnews.com/wp-content/uploads/2019/09/bioplastics-mango-kernel.png?resize=1024%2C576&ssl=1",
    calories: 60,
    duration: 147,
    tags: ['Tasty','Colorful','Popular'],
    ageRestriction: 14,
  }, 
  {
    id: 2, 
    title: "Apple",
    imageUrl: "https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/7v/2w/p07v2wjn.jpg",
    calories: 52,
    duration: 89,
    tags: ['Red','Popular','Also a brand'],
    ageRestriction: 16,
  }, 
  {
    id: 3, 
    title: "Kiwi",
    imageUrl: "https://ativosaude.akamaized.net/wp-content/uploads/2018/06/23103605/kiwi-fruta.jpg",
    calories: 61,
    duration: 124,
    tags: ['Green','Different','Exotic'],
    ageRestriction: 10,
  },
  {
    id: 4, 
    title: "Pineapple",
    imageUrl: "https://s.yimg.com/ny/api/res/1.2/JFq5c46xXXBOoW9zqEnhiw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-10/5b495350-e613-11e9-bfdf-1e399de02304",
    calories: 50,
    duration: 111,
    tags: ['Spiky','Leaf','Tropical'],
    ageRestriction: 18,
  },
  {
    id: 5, 
    title: "Pear",
    imageUrl: "https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2013/12/pear-pera-em-ingles.jpg",
    calories: 57,
    duration: 122,
    tags: ['Yellowish','Greenish','Sweet'],
    ageRestriction: 12,
  },
  {
    id: 6, 
    title: "Raspberry",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Raspberries05.jpg/1200px-Raspberries05.jpg",
    calories: 53,
    duration: 95,
    tags: ['Red','Edible','Berry'],
    ageRestriction: 14,
  },
  {
    id: 7, 
    title: "Strawberry",
    imageUrl: "https://static8.depositphotos.com/1466240/984/i/600/depositphotos_9847088-stock-photo-fresh-strawberries.jpg",
    calories: 33,
    duration: 104,
    tags: ['Tasty','Berry','Red'],
    ageRestriction: 18,
  },
  {
    id: 8, 
    title: "Coconut",
    imageUrl: "https://images.agoramedia.com/everydayhealth/gcms/all-about-coconut-722x406.jpg",
    calories: 283,
    duration: 94,
    tags: ['Palm trees','Tropical','Water'],
    ageRestriction: 12,
  },
  {
    id: 9, 
    title: "Melon",
    imageUrl: "https://media.gettyimages.com/photos/fresh-melon-picture-id480915274?b=1&k=6&m=480915274&s=612x612&w=0&h=-5OT2p1CIbdJYNdZrF-UMu7z7vrvvSEuTeZ_PTJzZx8=",
    calories: 34,
    duration: 73,
    tags: ['Cantaloupe','Vitamin A','Sweet'],
    ageRestriction: 10,
  },
  {
    id: 10, 
    title: "Watermelon",
    imageUrl: "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=6EdNOdUo",
    calories: 30,
    duration: 126,
    tags: ['Hydration','Green','Red'],
    ageRestriction: 18,
  },
  {
    id: 11, 
    title: "Orange",
    imageUrl: "https://xzdl43v0mdf2m45tz2aj7kkv35-wpengine.netdna-ssl.com/wp-content/uploads/2010/10/orange-780x400.jpg",
    calories: 47,
    duration: 107,
    tags: ['Vitamin C','Orange','Juice'],
    ageRestriction: 14,
  },
]

class Slider extends Component{  
  constructor(props){
    super(props)
    
    this.items = this.props.payload.slice()
    
    this.itemsAmountPerSlide = this.props.itemsPerSlide
    this.slides = []
    this.slide = []
    this.slidesAmount = Math.ceil(this.items.length / this.itemsAmountPerSlide)
    this.wrapper = React.createRef()
    this.isFirst = true
    
    for(let i = 0; i < this.slidesAmount; i++){
      this.slide = []
      for(let j = 0; j < this.itemsAmountPerSlide; j++){
        if((j !== 0 && j % this.itemsAmountPerSlide === 0) || this.items.length === 0){
          break
        }
        this.slide.push(this.items.shift(j))
      }
      this.slides.push(this.slide)
    }
    this.slides.unshift(this.slides[this.slides.length-1])
    this.slides.push(this.slides[1])
    
    this._clickPrevious = this._clickPrevious.bind(this)
    this._clickNext = this._clickNext.bind(this)
    this._getActiveSlide = this._getActiveSlide.bind(this)
  }
  
  componentDidMount(){
    document.querySelectorAll('.slider__slide')[1].classList.add('active')
    this.slideWidth = document.querySelectorAll('.slider__slide')[1].clientWidth
    this.initPos = this.slideWidth - 49
    TweenMax.set(this.wrapper, {x: `${this.initPos * -1}`})
    
    if(this.isFirst){
     TweenMax.set(
       [
         document.querySelector(".slider__slide[index='0']"), 
         document.querySelector(".slider__button--previous")
       ], 
       {visibility: 'hidden'}
     )
    }
    
  }
  
  _getActiveSlide(){
    const active = document.querySelector('.slider__slide.active')
    const activeIndex = Number(active.getAttribute('index'))
    const prev = document.querySelector(`.slider__slide[index='${activeIndex - 1}']`)
    const next = document.querySelector(`.slider__slide[index='${activeIndex + 1}']`)

    return {prev, active, next}
  }
  
  _clickPrevious(){
    const {prev, active} = this._getActiveSlide()
    TweenMax.to(this.wrapper, .5, {x: `+=${this.slideWidth}`, ease: Power1.easeOut, onComplete: () => {
        active.classList.remove('active')
        if(active.getAttribute('index') == 1){
          TweenMax.set(this.wrapper, {x: `${((this.slideWidth * this.slidesAmount)-49)* -1}`})
          document.querySelector(`.slider__slide[index='${this.slidesAmount}']`).classList.add('active')
        }
        else{
          prev.classList.add('active')
        }
      }
    })
  }
  
  _clickNext(){
    const {active, next} = this._getActiveSlide()
    
    TweenMax.to(this.wrapper, .5, {x: `-=${this.slideWidth}`, ease: Power1.easeOut, onComplete: () => {
        active.classList.remove('active')
        if(active.getAttribute('index') == this.slidesAmount){
          TweenMax.set(this.wrapper, {x: `${this.initPos * -1}`})
          document.querySelector(`.slider__slide[index='1']`).classList.add('active')
        }
        else{
          next.classList.add('active')
        }
        if(this.isFirst){
          this.isFirst = false
          TweenMax.set(
           [
             document.querySelector(".slider__slide[index='0']"), 
             document.querySelector(".slider__button--previous")
           ], 
           {visibility: 'visible'}
         )
        }
      
      }
    })
  }
  
  render(){
    return (
      <div className="slider">
        <div className="slider__wrapper" ref={el => this.wrapper = el}>
          {this.slides.map((slide, index) => {
            return (
              <div key={index} className="slider__slide" index={index}>
                {slide.map((item, index) => <Item key={item.id} item={item} index={index} itemAmountPerSlide={this.itemsAmountPerSlide}/>)}
              </div>
            )
          })}
        </div>
        <div className="slider__button slider__button--previous" onClick={this._clickPrevious}></div>
        <div className="slider__button slider__button--next" onClick={this._clickNext}></div>
      </div>
    )
  }
}

const Item = ({ item, index, itemAmountPerSlide }) => {
  let titleRef = React.createRef()
  let thisSlider = React.createRef()
  let allSiblings, prevSiblings, nextSiblings
  
  let transfOrigin = 'center'
  let transfXPrev = '-100px'
  let transfXNext = '100px'
  
  let ageRest
  
  item.ageRestriction === 10
    ? ageRest = 'blue'
    : item.ageRestriction === 12
      ? ageRest = 'yellow'
      : item.ageRestriction === 14
        ? ageRest = 'orange'
        : item.ageRestriction === 16
        ? ageRest = 'red'
        : ageRest = 'black'
  
  if(index === 0){
    transfOrigin = 'center left'
    transfXPrev = '0'
    transfXNext = '210px'
  }
  else if(index === itemAmountPerSlide - 1){
    transfOrigin = 'center right'
    transfXPrev = '-210px'
    transfXNext = '0'
  }
  
  useEffect( () => {
    allSiblings = Array.from(document.querySelectorAll('.slider__item'))
    
    const currentSliderIndex = allSiblings.findIndex(item => item === thisSlider)
    
    prevSiblings = allSiblings.filter((item,index) => index < currentSliderIndex)
    nextSiblings = allSiblings.filter((item,index) => index > currentSliderIndex)
  }, [])
  
  const _mouseEnter = ({ target }) => {
    let tl = new TimelineMax()
    
    const styles = {
      scale: '1.7',
      transformOrigin: transfOrigin,
      boxShadow: 'inset 0px -41px 100px 25px rgba(0,0,0,0.8)',
      border: '1px solid black',
      ease: Power1.easeInOut,
      onStart: () => TweenMax.set(target, {zIndex: 4}),
    }
    
    tl
      .to(target, .3, styles, 'a')
      .to(prevSiblings, .3, {x: transfXPrev, ease: Power1.easeInOut}, 'a')
      .to(nextSiblings, .3, {x: transfXNext, ease: Power1.easeInOut}, 'a')
      .to(titleRef, .3, {autoAlpha: 1}, '-=.15')
  }
  
  const _mouseLeave = ({ target }) => {
    let tl = new TimelineMax()
    
    const styles = {
      scale: '1', 
      transformOrigin: transfOrigin,
      zIndex: 1,
      boxShadow: 'inset 0px 0px 0px 0px rgba(0,0,0,0)', 
      border: '0',
      ease: Power1.easeInOut,
      onComplete: () => TweenMax.set(titleRef, {autoAlpha: 0}),
    }
    
    tl
      .to(target, .3, styles, 'a')
      .to(prevSiblings, .3, {x: '0', ease: Power1.easeInOut}, 'a')
      .to(nextSiblings, .3, {x: '0', ease: Power1.easeInOut}, 'a')
      .to(titleRef, .3, {autoAlpha: 0}, 'a')
  }
  
  return (
    <div className="slider__item" style={{"backgroundImage": `url(${item.imageUrl})`}} onMouseEnter={e => _mouseEnter(e)} onMouseLeave={e => _mouseLeave(e)} ref={el => thisSlider = el}>
      <div className="slider__item-wrapper" ref={el => titleRef = el}>
        <div className="slider__item-title">{item.title}</div>
        <div className="slider__item-text">
          <span className="slider__item-text--green">{item.calories} kcal </span>
          <span className={`slider__item-badge slider__item-badge--${ageRest}`}>{item.ageRestriction}</span> 
          <span className="slider__item-duration">{`${parseInt(item.duration / 60)}h ${item.duration % 60}min`}</span> 
        </div>
        <div className="slider__item-text">
          <ul className="slider__item-list">
            <li>{item.tags[0]}</li>
            <li>{item.tags[1]}</li>
            <li>{item.tags[2]}</li>
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default SlidereactDOM.render(
  <>
    <h2 className="title">Popular on Fruitflix</h2>
    <Slider itemsPerSlide="6" payload={items}/>
  </>,
)