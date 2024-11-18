const Shimmer=()=>{
    console.log('shimmer');
    return (<div className='shimmer-ui'>
    <div className='text-black-600 mt-[22.5vh] font-semibold text-3xl'>
    <h1>Loading...</h1>
        <div className='shimmer-searchInput'></div>
        <div className='shimmer-searchButton'></div>
    </div>
    <div className='shimmer-filter'></div>

    <div className='shimmer-body'>
        <div className='shimmer-card'></div>
        <div className='shimmer-card'></div>
        <div className='shimmer-card'></div>
        <div className='shimmer-card'></div>
    </div>

    </div>)
}

export default Shimmer;