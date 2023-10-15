function DisplayLogo(){
    return(
        <span className="text-green-600 font-black px-2 text-3xl">
            tokopedia
        </span>
    )
}
function SearchBar(){
    return(
        <div className="flex place-items-center gap-2">
            <span className="px-2 py-3 rounded-lg hover:bg-slate-200">
                Kategori
            </span>
            <span className="">
                <input className="mx-[8px] my-[8px] border-gray-600" type="search" name="" id="" />
            </span>
        </div>
    )
}
function Cart(){
    return(
        <div>Cart</div>
    )
}
function AuthBar(){
    return(
        <div>AuthBar</div>
    )
}

function Recomendation(){
    return(
        <div>Recomendation</div>
    )
}

export default function Header(){
    return(
        <header className="p-2 flex flex-col text-center">
            <div className="flex place-items-center w-[100%] bg-red-400 justify-between">
                <DisplayLogo/>
                <SearchBar/>
                <Cart/>
                <AuthBar/>
            </div>
            <Recomendation/>
        </header>
    )
}
