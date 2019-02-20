import React from 'react'
import {withDataHandler} from '../DataHandler'
import ResortCard from './ResortCard'

function ResortsPage(props) {

    console.log(props)
    const resortCollection = props.resorts.map((resort, i) => { return <ResortCard key={i} {...resort} bookService={props.bookService}/>})

    return (

        <div className="page-img-resort"> 
            <div className="text-box-resort"> {/* add resort info */}
                <h1 className="heading-primary-resort">
                    <span className="heading-primary-main-resort">Learn more about </span> <br />
                    <span className="heading-primary-sub-resort">utah ski resorts.</span>
                </h1>
            </div>
            {/* cards start here */}
            <div className="row"> 
                <div className="cards-wrapper">
                    {resortCollection}
                </div>
            </div>

        </div>

    )
}

export default withDataHandler(ResortsPage)

//gran't old code for resorts.  saved for description data/refrence
// function ResortsPage(props) {

//     console.log(props)


//     return (

//         <div className="page-img-resort">
//             <div className="text-box-resort"> {/* add resort info */}
//                 <h1 className="heading-primary-resort">
//                     <span className="heading-primary-main-resort">Learn more about </span> <br />
//                     <span className="heading-primary-sub-resort">utah ski resorts.</span>
//                 </h1>
//             </div>
//             {/* cards start here */}
//             <div className="row">
//                 <div className="cards-wrapper">
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--4"></div>
//                                 <h4 className="card__headingResorts">
//                                     <span className="card__headingResorts--span          card__headingResorts--span--1" >SnowBird</span>
//                                 </h4>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Intermediate to Beyond Expert</li>
//                                         <li>2,500 skiable acres</li>
//                                         <li>$$</li>

//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info">

//                                             Snowbird ski resort is nestled in Little Cottonwood Canyon in the heart of the Wasatch-Cache National Forrest, approximately 29 miles from Salt Lake City International Airport.
    
    
//                                         </p>

//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--5"></div>
//                                 <h4 className="card__headingResorts">
//                                     <span className="card__headingResorts--span card__headingResorts--span--1" >Park City</span>
//                                 </h4>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Beginner to Expert</li>
//                                         <li> 7,300 skiable acres</li>
//                                         <li>$$$</li>

//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info">Park City Mountain Resort is conveniently located within a 35-minute drive of Salt Lake City International Airport. With base and summit elevations at 6,800 feet and 10,000 feet, this massive mountain boasts 348 trails. </p>

//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--6"></div>
//                                 <div className="card__headingResorts">
//                                     <span className="card__headingResorts--span card__headingResorts--span--1" >Powder Mountain</span>
//                                 </div>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Beginner to Expert</li>
//                                         <li>8,464 Skiable acres</li>
//                                         <li>$</li>

//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info"> Powder Mountain resort boasts the most skiable acreage of any resort in the United States. Powder Mountain offers a variety of terrain just east of Eden, Utah, just 55 miles from the Salt Lake City International Airport.</p>
//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="cards-wrapper">
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--7"></div>
//                                 <h4 className="card__headingResorts">
//                                     <span className="card__headingResorts--span card__headingResorts--span--1" >SnowBasin</span>
//                                 </h4>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Beginner to Expert</li>
//                                         <li>3,000 skiable acres</li>
//                                         <li>$$</li>

//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info">
//                                         Often overlooked because of the famous resorts in Park City and the Cottonwood Canyons, Snowbasin is a gem of a resort, located 45 minutes from the Salt Lake International Airport and eight miles from Ogden Valley. 
//                                         </p>
//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--8"></div>
//                                 <h4 className="card__headingResorts">
//                                     <span className="card__headingResorts--span card__headingResorts--span--1" >Brighton</span>
//                                 </h4>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Beginner to Expert</li>
//                                         <li> 1,050 skiable acres</li>
//                                         <li>$</li>

//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info">Brighton Resort is a great choice when looking for consistent snowfall combined with immaculate groomed trails and a wide variety of terrain. Brightons' terrain allows for beginners and intermediates to ski off of the same lift. </p>

//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="col-1-of-3">
//                         <div className="card">
//                             <div className="card__side card__side--front">
//                                 <div className="card__picture card__picture--9"></div>
//                                 <div className="card__headingResorts">
//                                     <span className="card__headingResorts--span card__headingResorts--span--1" >DeerValley</span>
//                                 </div>
//                                 <div className="card__details">
//                                     <ul>
//                                         <li>Beginner to Expert</li>
//                                         <li>2,000 Skiable acres</li>
//                                         <li>$$$$</li>

//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="card__side card__side--back card__side--back--1">
//                                 <div className="card-cta">
//                                     <div className="card__resort-info">
//                                         <p className="card__resort-info"> Deer Valley Resort is located just outside of Park City, Utah and is only 37 miles from Salt Lake International Airport. The ski resort is situated along the Wasatch Range and is home to great powder, groomers, steeps and moguls.</p>
//                                     </div>
//                                     <a href="#" className="btn btn-white">Book now!</a>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>


//         </div>

//     )
// }