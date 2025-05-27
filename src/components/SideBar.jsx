const SideBar = ({handleCategoryValues,selectedCategory}) => {
  return (
    <aside>
        <ul>
            <li className={selectedCategory === 'All' ? "text-[#EA5959]" : "text-[#525252]"} onClick={() => handleCategoryValues('All')}>All</li>
            <li className={selectedCategory === 'Groceries' ? "text-[#EA5959]" : "text-[#525252]"} onClick={() => handleCategoryValues('Groceries')}>Groceries</li>
            <li className={selectedCategory === 'College' ? "text-[#EA5959]" : "text-[#525252]"} onClick={() => handleCategoryValues('College')}>College</li>
            <li className={selectedCategory === 'Payments' ? "text-[#EA5959]" : "text-[#525252]"} onClick={() => handleCategoryValues('Payments')}>Payments</li>
        </ul>
    </aside>
  )
}

export default SideBar
