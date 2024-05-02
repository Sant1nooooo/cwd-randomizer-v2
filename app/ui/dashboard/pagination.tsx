import  "@/app/styles/pagination.css"
import Image from "next/image";
export default function Pagination()
{
    return(
        <>
            <div className="pagination-header-container">
                <div className="header-container-title">
                    <p>Recent Winners</p>
                    <Image src='/assets/dashboard-gift-box.png' width={61} height={50} alt='Gift Image'priority/>
                </div>
                <div className="search-container">
                    <Image className='search-icon' src='/assets/dashboard-magnifying-glass.png' width={16} height={16} alt="Magnifying Glass" priority/>
                    <input type="text"  placeholder="Search..."/>
                    <Image className='filter-icon' src='/assets/dashboard-filter.png' width={16} height={16} alt="Magnifying Glass" priority/>
                </div>
            </div>
        </>
    );
}