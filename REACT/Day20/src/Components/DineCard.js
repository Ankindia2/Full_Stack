
export default function DineCard({RestData}){

    return(
        <div className="max-w-sm flex-none">
            <a target="_blank" href={RestData?.cta?.link}>

            <div className="relative">
                <img className="w-80 h-50 object-cover"src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
             </div>
                  <p className="absolute bottom-3 left-3 text-xl font-bold text-white z-20 leading-tight"> {RestData?.info?.name} </p>
                  <p className="absolute bottom-3 right-3 z-20 flex items-center gap-1 px-2 py-1 bg-green-600 rounded-lg text-white text-sm font-semibold">
                     ⭐ {RestData?.info?.rating?.value}</p>
         </div>
        

         </a>

        </div>
    )

}


// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu
// =true&lat=22.5643&lng=88.3693&restaurantId=816377&catalog_qa=undefined&submitAction=ENTER

//  Subway: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu
// =true&lat=22.5643&lng=88.3693&restaurantId=8912&catalog_qa=undefined&submitAction=ENTER

// pizza hut:- 
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu
// =true&lat=22.5643&lng=88.3693&restaurantId=816377&catalog_qa=undefined&submitAction=ENTER