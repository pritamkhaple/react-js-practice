const Items = (foodItems) => {

    const handleButtn = (item) => {
        console.log(`${item} buttn clicked`)
      }

    return (
        <li key={item} className="list-group-item">{item}
          <button className={style.buttn} onClick={ () => handleButtn(item)}>
            Buy
          </button>
        </li>
    )
}

export default  Items;